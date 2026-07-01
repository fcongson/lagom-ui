// Side-effect only: applies base global CSS (element defaults, :root custom
// property fallbacks). Previously a styled-components createGlobalStyle
// component; the one dynamic piece it had (a theme.mediaQueries.medium
// breakpoint) is now a hardcoded 768px media query in GlobalStyle.css, since
// that's the ThemeProvider default and isn't exercised as a runtime-
// configurable value anywhere in this codebase.
//
// This used to also import @fcongson/lagom-tokens's theme CSS
// (css/theme/_light.css, _dark.css) directly, so consumers got sane token
// defaults for free. Two problems with that: it silently picked light+dark
// for everyone with no way to opt out, and tsdown externalizes real npm
// dependencies (correctly, to avoid bundling duplicate copies) - which for
// CSS meant this import ended up as a literal `require("@fcongson/
// lagom-tokens/css/theme/_light.css")` call in the CJS build output, and
// Node can't require() a CSS file (confirmed: crashes with "Unexpected
// token ':'" trying to parse the CSS as JS). The one real consumer
// (lagom-starter-gatsby-decap-cms) already imports lagom-tokens's theme CSS
// itself at its own app layout level, so this was redundant there anyway.
// Consumers now choose and import their own lagom-tokens theme CSS
// explicitly, same as they choose lagom-ui's own style.css.
import "./GlobalStyle.css";
