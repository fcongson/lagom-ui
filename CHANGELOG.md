# @fcongson/lagom-ui

## 1.0.0

This release predates Changesets adoption, so it's hand-written rather than generated - future
releases will get their entries from `pnpm changeset` + `pnpm version-packages`. It marks the
"modern specs" refactor described in `docs/refactor-plan.md`.

### Major Changes

- Bumped `@fcongson/lagom-tokens` to `1.0.0` (DTCG token format migration). No `--lagom-*` CSS
  custom property was renamed; two composite typography tokens regained their `var()` reference
  chains.
- Removed `styled-components` entirely. Every component/layout now ships a plain `.css` file
  imported as a side effect, preserving the existing global BEM-style class names. Theme
  overrides are applied via a small React Context + a `<style>` tag, not CSS-in-JS.
- Replaced the `tsc`-only CJS build with `tsdown`, producing dual ESM + CJS output
  (`build/lib/index.{cjs,mjs}` + `index.d.{cts,mts}`) plus a merged `style.css`. Added a real
  `exports` map, `sideEffects`, and `engines.node >= 20`.
- `react`/`react-dom` moved to `peerDependencies` (`^18.0.0 || ^19.0.0`) instead of `dependencies`.
- **Consumers must now explicitly `import "@fcongson/lagom-ui/style.css"`** once alongside their
  component imports. Previously (styled-components) styling was injected automatically at
  runtime with no separate import needed; tsdown's CSS auto-inject option turned out to emit
  invalid ESM `import` syntax inside the CJS build (`require()` would throw), so this uses the
  same explicit-CSS-import pattern most non-CSS-in-JS component libraries use instead. See
  README's "Usage" section.
- **lagom-ui no longer bundles a `@fcongson/lagom-tokens` theme for you.** It used to import
  `lagom-tokens`'s `_light.css`/`_dark.css` internally so consumers got sane token defaults for
  free, silently picking both light+dark with no way to opt out. Consumers now import whichever
  `lagom-tokens` theme(s) they want themselves - the one real consumer app already did this
  independently, so nothing changes for it in practice.
- Upgraded Storybook `8.5` -> `10.4`.
- Added ESLint (flat config) and GitHub Actions CI (lint, typecheck, test, build, build-storybook)
  plus a tag-triggered publish workflow.

### Fixes found along the way

- `GlobalStyle.css`'s base font/color/reset rules were being silently tree-shaken out of the
  build (the wrapper module importing them had no exports, so bundlers considered it dead code).
- `package.json`'s `main`/`types`/`exports` pointed at `index.js`/`index.d.ts`, which don't exist -
  `tsdown` (no `"type": "module"` in this package) names its output `index.cjs`/`index.mjs` and
  `index.d.cts`/`index.d.mts`. `require("@fcongson/lagom-ui")` would have 404'd if published as-is.
- The CJS build (`build/lib/index.cjs`) literally couldn't be `require()`'d: it externalizes
  `@fcongson/lagom-tokens` (correct, it's a real dependency) but that carried over to its CSS
  imports too, leaving a `require("@fcongson/lagom-tokens/css/theme/_light.css")` call in the
  output - Node can't `require()` a `.css` file. Removed the internal lagom-tokens CSS imports
  entirely (see the "no longer bundles a theme" note above), which also fixes this.
- `Button`/`LinkButton` tests were missing a `GrowthBookProvider`, crashing at render time.
- A stray `&` instead of `&&` in the `build` script let a failing `tsc` step pass silently.
- `JSX.Element` -> `React.JSX.Element` (React 19's `@types/react` dropped the ambient `JSX`
  namespace).

### Removed

- `styled-components` and its type dependencies.
- Unused `prop-types`/`react-is` devDependencies (no `PropTypes` usage anywhere in `src/`).
- Dead code: `src/themes/theme-sub.ts` (unused, `@ts-nocheck`'d, not imported anywhere).
