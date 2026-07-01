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
    // `import "./Button.css"`. tsdown merges all such imports into one
    // build/lib/style.css.
    //
    // `inject: true` was tried first (keeps `import "./style.css"` in the
    // built JS so consumers get styling automatically), but tsdown's CSS
    // support is still experimental and this literally emits an ESM
    // `import` statement at the top of the CJS output too - `require()`
    // throws immediately ("Cannot use import statement outside a
    // module"). Confirmed against the actual build output, not a config
    // mistake on our end: https://github.com/rolldown/tsdown/issues/472.
    // Left at the default (false): style.css is still emitted, just not
    // auto-imported. Consumers need `import "@fcongson/lagom-ui/style.css"`
    // once, alongside their component imports (exposed via package.json's
    // exports map) - this is the same pattern most non-CSS-in-JS React
    // component libraries use.
    inject: false,
  },
});
