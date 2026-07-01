// Side-effect only: applies base global CSS (element defaults, :root custom
// property fallbacks). Previously a styled-components createGlobalStyle
// component; the one dynamic piece it had (a theme.mediaQueries.medium
// breakpoint) is now a hardcoded 768px media query in GlobalStyle.css, since
// that's the ThemeProvider default and isn't exercised as a runtime-
// configurable value anywhere in this codebase.
import "@fcongson/lagom-tokens/css/theme/_light.css";
import "@fcongson/lagom-tokens/css/theme/_dark.css";
import "./GlobalStyle.css";
