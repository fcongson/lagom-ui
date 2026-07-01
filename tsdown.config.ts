import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  target: "es2020",
  outDir: "build/lib",
  sourcemap: true,
  clean: true,
  dts: {
    // Oxc (tsdown's default type resolver) can trip up on complex
    // third-party type setups; tsc is slower but more compatible - worth
    // the safety margin given this repo already had one @types-related
    // headache this session (the JSX namespace issue).
    resolver: "tsc",
  },
  css: {
    // Requires the `@tsdown/css` package (see devDependencies).
    // Components import their stylesheet as a side effect, e.g.
    // `import "./Button.css"`. By default tsdown merges all such imports
    // into one CSS file and strips the import statements from the JS
    // output, so `inject: true` keeps a single `import "./style.css"` in
    // the built JS instead - `import { Button } from "@fcongson/lagom-ui"`
    // then automatically pulls in styling, matching today's behavior.
    // Merging is fine here since everything already funnels through one
    // bundled entry point (src/index.ts) - there's no per-component JS
    // splitting to preserve granularity for in the first place.
    inject: true,
  },
});
