#!/usr/bin/env node
// Docs Q&A eval: can an agent answer real Lagom questions using only the
// Storybook MCP server?
//
// For each question in questions.mjs:
// 1. A fresh Claude Code agent answers it with only the Lagom MCP server
//    available: no built-in tools, no other MCP servers, and an empty working
//    directory, so it can't read source code or CLAUDE.md files.
// 2. A second Claude Code call grades the answer against the question's
//    rubric, criterion by criterion.
// Results go to evals/results/<timestamp>/ (report.md and results.json).
//
// Usage:
//   pnpm storybook                                   # in another terminal
//   pnpm eval                                        # all questions
//   pnpm eval -- --only setup-401,token-caption      # some questions
//   pnpm eval -- --url https://<build>.chromatic.com/mcp
//   pnpm eval -- --concurrency 2 --model sonnet
//
// Needs the Claude Code CLI (`claude`), logged in. Runs use your account.

import { spawn } from "node:child_process";
import { mkdtempSync, mkdirSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { questions } from "./questions.mjs";

const here = dirname(fileURLToPath(import.meta.url));

// ---------- options ----------
const args = process.argv.slice(2);
const opt = (name, fallback) => {
  const i = args.indexOf(`--${name}`);
  return i >= 0 ? args[i + 1] : fallback;
};
const url = opt("url", process.env.LAGOM_MCP_URL ?? "http://localhost:6006/mcp");
const only = opt("only", "")?.split(",").filter(Boolean) ?? [];
const concurrency = Number(opt("concurrency", "3"));
const model = opt("model", "");
const budget = opt("budget", "1"); // max USD per agent call

const selected = only.length
  ? questions.filter((q) => only.includes(q.id))
  : questions;
if (only.length && selected.length !== only.length) {
  const known = new Set(questions.map((q) => q.id));
  console.error(`Unknown question id(s): ${only.filter((id) => !known.has(id)).join(", ")}`);
  process.exit(1);
}

// What the answering agent is told. Kept close to what a docs bot would get.
const ANSWER_PROMPT = `You're answering a developer's question about Lagom UI, a React design system.
Use only the "lagom" MCP server (Lagom's Storybook docs) to find the answer: start with docs-list, then docs-show for the relevant components and guides.
Answer from the docs, not from general knowledge. If the docs don't cover something, say so plainly instead of guessing.
Keep the answer concise and practical, with a short code example when it helps.`;

const GRADE_PROMPT = (q, answer) => `You are grading an answer about the Lagom UI design system against a rubric. Judge only the answer below; don't use outside knowledge about what Lagom can do.

Question:
${q.question}

Answer:
<answer>
${answer}
</answer>

Rubric:
${[
  ...q.mustInclude.map((c, i) => `M${i + 1} (must include): ${c}`),
  ...q.mustNotInclude.map((c, i) => `N${i + 1} (must NOT include): ${c}`),
].join("\n")}

For each criterion, decide whether the answer satisfies it. A "must include" criterion passes if the answer clearly states that fact, in any wording. A "must NOT include" criterion passes if the answer does NOT do that thing.

Reply with only JSON, no prose or code fences:
{"criteria":[{"id":"M1","pass":true,"reason":"one short sentence"}]}`;

// ---------- helpers ----------
const childEnv = () => {
  const env = { ...process.env };
  // Don't let the agent pick up CLAUDE.md files from this repo.
  delete env.CLAUDE_CODE_ADDITIONAL_DIRECTORIES_CLAUDE_MD;
  return env;
};

const runClaude = (argv, cwd) =>
  new Promise((resolve) => {
    const child = spawn("claude", argv, {
      cwd,
      env: childEnv(),
      // Closed stdin: otherwise `claude -p` waits 3s for piped input.
      stdio: ["ignore", "pipe", "pipe"],
    });
    let stdout = "";
    let stderr = "";
    child.stdout.on("data", (d) => (stdout += d));
    child.stderr.on("data", (d) => (stderr += d));
    child.on("close", (code) => resolve({ code, stdout, stderr }));
    child.on("error", (err) => resolve({ code: -1, stdout, stderr: String(err) }));
  });

const checkMcp = async () => {
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json, text/event-stream",
      },
      body: JSON.stringify({
        jsonrpc: "2.0",
        id: 1,
        method: "initialize",
        params: {
          protocolVersion: "2025-06-18",
          capabilities: {},
          clientInfo: { name: "lagom-eval", version: "1" },
        },
      }),
    });
    return res.ok;
  } catch {
    return false;
  }
};

const answer = async (q) => {
  const cwd = mkdtempSync(join(tmpdir(), "lagom-eval-"));
  const mcpConfig = join(cwd, "mcp.json");
  writeFileSync(
    mcpConfig,
    JSON.stringify({ mcpServers: { lagom: { type: "http", url } } }),
  );
  const argv = [
    "-p",
    q.question,
    "--output-format",
    "stream-json",
    "--verbose",
    "--no-session-persistence",
    "--strict-mcp-config",
    "--mcp-config",
    mcpConfig,
    "--tools",
    "",
    "--allowedTools",
    "mcp__lagom",
    "--append-system-prompt",
    ANSWER_PROMPT,
    "--max-budget-usd",
    budget,
    ...(model ? ["--model", model] : []),
  ];
  const { code, stdout, stderr } = await runClaude(argv, cwd);
  rmSync(cwd, { recursive: true, force: true });

  const toolCalls = [];
  let result;
  for (const line of stdout.split("\n")) {
    if (!line.trim()) continue;
    let msg;
    try {
      msg = JSON.parse(line);
    } catch {
      continue;
    }
    if (msg.type === "assistant") {
      for (const part of msg.message?.content ?? []) {
        if (part.type === "tool_use") {
          toolCalls.push({ name: part.name, input: part.input });
        }
      }
    }
    if (msg.type === "result") result = msg;
  }
  if (!result || result.is_error) {
    return {
      error: result?.result ?? (stderr.trim() || `claude exited with ${code}`),
      toolCalls,
      cost: result?.total_cost_usd ?? 0,
    };
  }
  return { text: result.result, toolCalls, cost: result.total_cost_usd ?? 0 };
};

const grade = async (q, text) => {
  const cwd = mkdtempSync(join(tmpdir(), "lagom-grade-"));
  const { stdout, stderr, code } = await runClaude(
    [
      "-p",
      GRADE_PROMPT(q, text),
      "--output-format",
      "json",
      "--no-session-persistence",
      "--strict-mcp-config",
      "--tools",
      "",
      "--max-budget-usd",
      budget,
      ...(model ? ["--model", model] : []),
    ],
    cwd,
  );
  rmSync(cwd, { recursive: true, force: true });
  let cost = 0;
  try {
    const out = JSON.parse(stdout);
    cost = out.total_cost_usd ?? 0;
    const raw = String(out.result).replace(/^```(?:json)?\s*|\s*```$/g, "");
    const { criteria } = JSON.parse(raw);
    return { criteria, cost };
  } catch {
    return { error: stderr.trim() || stdout.slice(0, 500) || `grader exited with ${code}`, cost };
  }
};

const pool = async (items, n, fn) => {
  const results = new Array(items.length);
  let next = 0;
  await Promise.all(
    Array.from({ length: Math.min(n, items.length) }, async () => {
      while (next < items.length) {
        const i = next++;
        results[i] = await fn(items[i], i);
      }
    }),
  );
  return results;
};

// ---------- run ----------
if (!(await checkMcp())) {
  console.error(
    `Can't reach the Storybook MCP server at ${url}.\nStart Storybook with \`pnpm storybook\`, or pass --url.`,
  );
  process.exit(1);
}

console.log(`Evaluating ${selected.length} question(s) against ${url}\n`);
const started = new Date();

const results = await pool(selected, concurrency, async (q) => {
  const a = await answer(q);
  const g = a.error ? { error: "not graded" } : await grade(q, a.text);
  const labels = [
    ...q.mustInclude.map((c, i) => ({ id: `M${i + 1}`, type: "must include", criterion: c })),
    ...q.mustNotInclude.map((c, i) => ({ id: `N${i + 1}`, type: "must not include", criterion: c })),
  ];
  const criteria = labels.map((l) => {
    const verdict = g.criteria?.find((c) => c.id === l.id);
    return { ...l, pass: verdict?.pass === true, reason: verdict?.reason ?? g.error ?? "missing verdict" };
  });
  const pass = !a.error && !g.error && criteria.every((c) => c.pass);
  console.log(`${pass ? "PASS" : "FAIL"}  ${q.id}`);
  return {
    id: q.id,
    category: q.category,
    question: q.question,
    pass,
    error: a.error ?? g.error,
    answer: a.text ?? "",
    docsOpened: a.toolCalls
      .filter((t) => t.name.endsWith("docs-show") || t.name.endsWith("docs-show-story"))
      .map((t) => t.input?.id ?? JSON.stringify(t.input)),
    toolCalls: a.toolCalls.map((t) => t.name.replace(/^mcp__lagom__/, "")),
    criteria,
    cost: (a.cost ?? 0) + (g.cost ?? 0),
  };
});

// ---------- report ----------
const passed = results.filter((r) => r.pass).length;
const cost = results.reduce((sum, r) => sum + r.cost, 0);
const stamp = started.toISOString().replace(/[:.]/g, "-");
const outDir = join(here, "results", stamp);
mkdirSync(outDir, { recursive: true });

const lines = [
  `# Docs Q&A eval`,
  ``,
  `- **Date:** ${started.toISOString()}`,
  `- **MCP server:** ${url}`,
  `- **Result:** ${passed} of ${results.length} passed`,
  `- **Cost:** $${cost.toFixed(2)}`,
  ``,
  `## Summary`,
  ``,
  ...results.map((r) => `- ${r.pass ? "✅" : "❌"} **${r.id}** (${r.category})`),
  ``,
];
for (const r of results) {
  lines.push(`## ${r.pass ? "✅" : "❌"} ${r.id}`, ``, `**Q:** ${r.question}`, ``);
  if (r.error) lines.push(`**Error:** ${r.error}`, ``);
  lines.push(`**Docs opened:** ${r.docsOpened.length ? r.docsOpened.join(", ") : "none"}`, ``);
  for (const c of r.criteria) {
    lines.push(`- ${c.pass ? "✅" : "❌"} ${c.type}: ${c.criterion}  \n  _${c.reason}_`);
  }
  lines.push(``, `<details><summary>Answer</summary>`, ``, r.answer || "(none)", ``, `</details>`, ``);
}
writeFileSync(join(outDir, "report.md"), lines.join("\n"));
writeFileSync(join(outDir, "results.json"), JSON.stringify(results, null, 2));

console.log(`\n${passed} of ${results.length} passed ($${cost.toFixed(2)})`);
console.log(`Report: ${join(outDir, "report.md")}`);
process.exit(passed === results.length ? 0 : 1);
