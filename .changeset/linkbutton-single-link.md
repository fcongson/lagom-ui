---
"@fcongson/lagom-ui": minor
---

`LinkButton` now renders a single `<a>` (or your `Component`) with the button styles, instead of a `<button>` nested inside a link. Assistive tech now announces it as a link, and the markup is valid HTML. It looks the same.

Breaking for some consumers:

- CSS or tests that target `.lagom-link-button button` need to target `.lagom-link-button` instead.
- Its props are now `<a>` attributes, not `<button>` attributes.
- A custom `Component` now receives any extra props you pass (e.g. `aria-label`, `style`).

`LinkButton` no longer needs the GrowthBook provider.
