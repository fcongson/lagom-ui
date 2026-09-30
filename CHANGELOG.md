# @fcongson/lagom-ui

## 1.0.1

### Patch Changes

- fa775db: Extend the `--themed-*` CSS variable pattern to PageHeader, SectionHeader, Hero, and FeaturedSection, and fix two gaps found while consuming this in a real project:

  - `PageHeader`/`SectionHeader` now resolve `color` through `--themed-component-{page,section}-header-color-text` (falling back to the existing `--lagom-component-*-color-text` tokens) instead of reading `--lagom-semantic-color-fg-default` directly. This makes per-instance color overrides possible the same way Button's colors already were - scope the variable on a wrapping element instead of overriding the rendered class.
  - `PageHeader`'s `margin-bottom` (`calc(2 * var(--lagom-core-spacing-xxl))`, vs. `SectionHeader`'s 1x) is now themeable via `--themed-component-page-header-margin-bottom(-sm)`. Initially assumed this ratio was an unintentional inconsistency and changed the default - it isn't: it's a deliberate choice from November 2023 (PageHeader is the single most prominent heading per page, unlike SectionHeader which repeats within one), so the default is unchanged here, only the override capability is new.
  - `Hero`'s margin-bottom (8rem/4rem) is now themeable via `--themed-component-hero-margin-bottom(-sm)`, default value unchanged.
  - `Hero`/`FeaturedSection` never styled the actual `<img>` element passed as their `image` prop - only the wrapper div was sized, so the image itself rendered at whatever size the consumer happened to give it (often leaving a gap or overflow). Both now get `width: 100%; height: 100%; object-fit: var(--themed-component-{hero,featured-section}-image-fit, cover)`.
  - `FeaturedSection`'s image-background variant had no height mechanism at all (unlike Hero's `--hero-height`) - its height was purely emergent from content. Added `--featured-section-height` (default `auto`, so unset behavior is unchanged) mirroring Hero's pattern.

  No `lagom-tokens` changes needed - all fallback values reuse existing core/semantic tokens.

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
