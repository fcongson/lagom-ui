// Side-effect only: see NoFocusOutline.css for the actual rule. The class
// that activates it is toggled on document.documentElement by ThemeProvider
// (previously a styled-components createGlobalStyle keyed off a boolean
// prop).
import "./NoFocusOutline.css";

export const NO_FOCUS_OUTLINE_CLASS = "lagom-no-focus-outline";
