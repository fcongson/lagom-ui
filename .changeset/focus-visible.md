---
"@fcongson/lagom-ui": patch
---

Focus rings are now handled with CSS `:focus-visible` instead of a JavaScript keydown listener. They still show for keyboard focus and hide for mouse clicks, and they now also follow the browser's own heuristics (e.g. focus moved by script after a keypress). The `lagom-no-focus-outline` class is no longer added to `<html>`.
