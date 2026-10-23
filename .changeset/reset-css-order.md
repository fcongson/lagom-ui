---
"@fcongson/lagom-ui": patch
---

Load the CSS reset before global styles. The reset was loading last and overriding Lagom's monospace font (`code`, `pre`) with the browser default.
