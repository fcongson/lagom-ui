---
"@fcongson/lagom-ui": minor
---

`createTheme()` font overrides now apply everywhere:

- `core.fontFamilies.serif` → `Quote`
- `core.fontFamilies.monospace` → `code` and `pre`
- `core.fontFamilies.sansSerif` → body text and headings (previously only `Button`)
- `core.fontSizes.body` → body text (previously only `Button`)

If you already set these, they'll now take effect.
