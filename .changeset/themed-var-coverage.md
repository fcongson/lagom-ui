---
"@fcongson/lagom-ui": patch
---

Extend the `--themed-*` CSS variable pattern to PageHeader, SectionHeader, Hero, and FeaturedSection, and fix two gaps found while consuming this in a real project:

- `PageHeader`/`SectionHeader` now resolve `color` through `--themed-component-{page,section}-header-color-text` (falling back to the existing `--lagom-component-*-color-text` tokens) instead of reading `--lagom-semantic-color-fg-default` directly. This makes per-instance color overrides possible the same way Button's colors already were - scope the variable on a wrapping element instead of overriding the rendered class.
- `PageHeader`'s `margin-bottom` (`calc(2 * var(--lagom-core-spacing-xxl))`, vs. `SectionHeader`'s 1x) is now themeable via `--themed-component-page-header-margin-bottom(-sm)`. Initially assumed this ratio was an unintentional inconsistency and changed the default - it isn't: it's a deliberate choice from November 2023 (PageHeader is the single most prominent heading per page, unlike SectionHeader which repeats within one), so the default is unchanged here, only the override capability is new.
- `Hero`'s margin-bottom (8rem/4rem) is now themeable via `--themed-component-hero-margin-bottom(-sm)`, default value unchanged.
- `Hero`/`FeaturedSection` never styled the actual `<img>` element passed as their `image` prop - only the wrapper div was sized, so the image itself rendered at whatever size the consumer happened to give it (often leaving a gap or overflow). Both now get `width: 100%; height: 100%; object-fit: var(--themed-component-{hero,featured-section}-image-fit, cover)`.
- `FeaturedSection`'s image-background variant had no height mechanism at all (unlike Hero's `--hero-height`) - its height was purely emergent from content. Added `--featured-section-height` (default `auto`, so unset behavior is unchanged) mirroring Hero's pattern.

No `lagom-tokens` changes needed - all fallback values reuse existing core/semantic tokens.
