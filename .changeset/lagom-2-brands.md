---
"@fcongson/lagom-ui": major
---

Support lagom-tokens 2.0: brands, dark mode, and increased contrast.

- **Requires `@fcongson/lagom-tokens` 2.** Import `@fcongson/lagom-tokens/css/lagom.css` instead of `css/theme/_light.css` and `_dark.css`. With no brand set, apps get Base, lagom-tokens' neutral default brand.
- **Removed the `--themed-*` hooks.** Components read lagom-tokens directly. Override the token instead: `--themed-component-*` becomes `--lagom-component-*`, `--themed-core-*` becomes `--lagom-core-*`, and `--themed-header-scale-N` becomes `--lagom-core-font-sizes-headerN`. Theming lists every change.
- **`createTheme()` only builds JS layout values.** It no longer takes `core` or `button`, and no longer returns `GlobalStyle`. The `ButtonTheme` and `CoreTheme` types are gone.
- **Components use the renamed roles:** `fg-secondary`, `fg-tertiary`, `bg-secondary`, and `border-secondary` (formerly `muted` and `subtle`), and `selection-bg` for selected text. Code blocks use `bg-secondary` instead of a fixed colour.
- **Focus ring:** keyboard focus shows the brand's `focus-ring` colour, `focus-ring-width` wide, 2px from the element, with two extra bands over images (`Hero`, image-background `FeaturedSection`) so it shows on any image.
- **Forced colours** (Windows High Contrast): the focus ring uses the system highlight colour, the primary button stays distinct from the secondary, image overlays are dropped, and the colour `FeaturedSection` marks its edges.
- **Increased contrast:** `data-lagom-contrast="more"` or `prefers-contrast: more` switches every component to lagom-tokens' AAA values, with thicker button borders and focus rings.
