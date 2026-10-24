# Baseline

The first runs of the docs Q&A eval, against a local Storybook built from `main` (after #19), on 24 October 2026.

## Final result: 21 of 21 passed

Cost: $0.96 at API prices, for 21 answers plus 21 gradings.

- ✅ **setup-install** (Setup): opened `getting-started--docs`
- ✅ **setup-401** (Setup): opened `getting-started--docs`
- ✅ **setup-growthbook** (Setup): opened `getting-started--docs`, `components-button`
- ✅ **choose-button-vs-link** (Components): opened `components-link-button`
- ✅ **linkbutton-next** (Components): opened `components-link-button`
- ✅ **full-width-image** (Components): opened `components-image-caption`, `patterns-page-structure--docs`
- ✅ **imagecaption-variants** (Components): opened `components-image-caption`
- ✅ **featuredsection-image** (Components): opened `components-featured-section`
- ✅ **cta-button-missing** (Components): opened `components-call-to-action`
- ✅ **cta-heading-level** (Components): opened `components-call-to-action`
- ✅ **missing-component** (Components): opened only docs-list
- ✅ **theme-button-section** (Theming): opened `theming--docs`, `components-button`
- ✅ **theme-serif** (Theming): opened `theming--docs`, `design-tokens-using-tokens--docs`
- ✅ **token-caption** (Theming): opened `design-tokens-using-tokens--docs`
- ✅ **dark-section** (Theming): opened `theming--docs`, `components-featured-section`
- ✅ **token-spacing** (Theming): opened `design-tokens-using-tokens--docs`
- ✅ **createtheme-width** (Theming): opened `theming--docs`, `layouts-container`
- ✅ **layout-about** (Layout): opened `patterns-content-page--docs`, `patterns-page-structure--docs`, `components-hero`, `components-call-to-action`
- ✅ **layout-article** (Layout): opened `patterns-article--docs`, `patterns-page-structure--docs`
- ✅ **a11y-hero-contrast** (Accessibility): opened `components-page-header`, `components-hero`, `patterns-content-page--docs`
- ✅ **a11y-disabled-button** (Accessibility): opened `components-button`

## What the runs found

Each run used the same 21 questions. The fixes are in the same PR as this harness.

1. **Run 1: 20 of 21.** `linkbutton-next` failed. The LinkButton docs only showed Gatsby. The agent passed Next's `Link` straight to `Component`, and only suggested a `to` → `href` adapter as a maybe. It did say the docs didn't cover Next.js.
   - **Fix:** a "Framework links" section in the LinkButton docs, covering Gatsby and React Router (pass directly) and Next.js (an adapter), plus the same in the `Component` prop's JSDoc.
2. **Run 2: 20 of 21.** `createtheme-width` was marked failed because the grader skipped a criterion. The answer itself was correct. It also showed two gaps: the agent said `createTheme` doesn't accept `MAX_WIDTH_CONTAINER` (it does, but it only affects JavaScript), and it found no documented way to change Container's width.
   - **Fixes:** the grader retries when it skips a criterion, and reports it as an error, not a docs failure. The Theming docs say `createTheme` accepts the `MAX_WIDTH_*` values but they don't change CSS. The Container docs say the width is fixed at 1120px, with no hook yet.
3. **Run 3: 20 of 21.** `dark-section` failed. It had passed in runs 1 and 2. The Theming docs explained what `_dark.css` does but never said to import it, so the agent hedged.
   - **Fix:** the Theming docs now say to import `_dark.css` if you use dark mode anywhere, with the import lines.
4. **Run 4: 21 of 21.** `dark-section` and `createtheme-width` also passed three times in a row on their own.

## Lessons

- **Answers vary between runs.** A question can pass once and fail the next time, when the docs leave room for doubt. Run the suite more than once after big docs changes, and treat any failure as worth a look.
- **The agent is honest about gaps.** In every failure, it said what the docs didn't cover instead of inventing an answer. That's the behaviour `AGENTS.md` asks for, and it's what makes failures easy to trace to a docs page.
- **"Docs opened" points at the fix.** Every failure traced to a page the agent had opened that didn't say enough.
