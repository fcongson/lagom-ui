# Docs Q&A eval

Checks whether an AI agent can answer real questions about Lagom using **only** the Storybook MCP server. It's a test of the docs, not of the agent: when a question fails, fix the docs (or, if the rubric is wrong about Lagom, the question).

## How it works

1. **Questions** live in [`questions.mjs`](./questions.mjs). Each has:
   - `mustInclude`: facts a correct answer has to state
   - `mustNotInclude`: likely hallucinations or bad advice
2. **Answering:** for each question, a fresh Claude Code agent (`claude -p`) answers it with only the Lagom MCP server connected. It has no built-in tools and runs in an empty temp directory, so it can't read source code or `CLAUDE.md` files.
3. **Grading:** a second `claude -p` call checks the answer against the rubric, criterion by criterion.
4. **Report:** results go to `evals/results/<timestamp>/` (`report.md` and `results.json`). That folder is git-ignored. Each result lists the docs the agent opened, so a failure points at the page to fix.

## Running it

You need the Claude Code CLI installed and logged in. Runs use your account (about $0.10–0.40 per question).

```sh
pnpm storybook                                       # terminal 1
pnpm eval                                            # terminal 2: all questions
pnpm eval -- --only setup-401,token-caption          # specific questions
pnpm eval -- --url https://<build>.chromatic.com/mcp # hosted docs
pnpm eval -- --concurrency 2 --model sonnet
```

Options:
- `--url`: the MCP endpoint (default `http://localhost:6006/mcp`, or `LAGOM_MCP_URL`)
- `--only`: comma-separated question ids
- `--concurrency`: questions in parallel (default 3)
- `--model`: model for both answering and grading (default: your Claude Code default)
- `--budget`: max USD per agent call (default 1)

The script exits non-zero if any question fails.

**Hosted Storybooks:** if the Chromatic project is private, the MCP endpoint needs Chromatic sign-in, which `claude -p` can't do interactively. Run it against local Storybook, or make the project public.

## When to run it

- After changing docs, component JSDoc, or `AGENTS.md`
- Before a release
- When adding a component: add questions for it too

It isn't in CI. It needs a logged-in Claude Code and costs money per run.

## Adding a question

Add an entry to `questions.mjs` with a unique `id`, a `category`, the `question` as a consumer would ask it, and the rubric. Good questions:
- come from real confusion (Slack questions, issues, review comments)
- test something the docs should answer, including limitations ("can I…?" where the answer is no)
- have rubric criteria that are checkable facts, not style preferences

[`BASELINE.md`](./BASELINE.md) has the results of the first run, and what was fixed.
