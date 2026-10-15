---
"@fcongson/lagom-ui": patch
---

`createTheme()` no longer writes omitted theme fields into its `:root` block as the literal value `undefined`. Previously, passing a partial theme (e.g. only `button.primary.backgroundColor`) emitted `--themed-*: undefined;` for every other field, which is a valid custom-property value, so components' `var(--themed-x, var(--lagom-x))` fallbacks never fired and those properties became invalid at computed-value time (breaking button font-size, font-family and border-radius, among others). Only declarations for values the caller actually provides are emitted now.
