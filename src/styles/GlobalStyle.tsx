import "@fcongson/lagom-tokens/css/theme/_dark.css";
import "@fcongson/lagom-tokens/css/theme/_light.css";
import "@fcongson/lagom-tokens/css/variables/_core.css";
import { createGlobalStyle } from "styled-components";
import { ThemeType } from "../themes/theme";

export const GlobalStyle = createGlobalStyle<{
  theme: ThemeType;
}>`
  * {
    -webkit-font-smoothing: antialiased;
  }
  ::selection {
    background: var(--lagom-core-colors-olive-lighter40); /* WebKit/Blink Browsers */
  }
  ::-moz-selection {
    background: var(--lagom-core-colors-olive-lighter40); /* Gecko Browsers */
  }

  :root {
    /* TODO: resolve these component overrides */
    --sizes-max-width-section: 1800px;
    --sizes-max-width-container: 1120px;
    --sizes-max-width-content: 800px;
    --header-scale-1: 121.5px;
    --header-scale-2: 81px;
    --header-scale-3: 54px;
    --header-scale-4: 36px;
    --header-scale-5: 24px;
    --header-scale-6: 16px;
    --hero-height: 100vh;
  }

  body {
    padding: 0;
    background-color: var(--lagom-semantic-color-bg-default);
    color: var(--lagom-semantic-color-fg-default);
    line-height: var(--lagom-core-line-heights-body);
    font-family: var(--lagom-core-font-families-body);
    font-size: var(--lagom-core-font-sizes-body);
  }

  /* typography */

  a {
    color: var(--lagom-semantic-color-fg-default);
    text-decoration: none;
    font-weight: var(--lagom-core-font-weights-body-semi-bold);
    padding-bottom: 4px;
    border-bottom: 2px solid var(--lagom-semantic-color-border-muted);
    transition: border-bottom 200ms ease-in-out;

    &:hover {
      border-bottom: 2px solid var(--lagom-semantic-color-border-default);
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: var(--lagom-core-font-families-heading);
    font-weight: var(--lagom-core-font-weights-heading-bold);
    margin-bottom: 1rem;
    a {
      font-weight: inherit;
    }
  }
  h1 {
    font-size: var(--lagom-core-font-sizes-h1);
    line-height: var(--lagom-core-line-heights-heading);
  }
  h2 {
    font-size: var(--lagom-core-font-sizes-h2);
    line-height: var(--lagom-core-line-heights-heading);
  }
  h3 {
    font-size: var(--lagom-core-font-sizes-h3);
    line-height: var(--lagom-core-line-heights-heading);
  }

  p,
  pre,
  ul,
  ol {
    margin-bottom: 2rem;
  }
  ul,
  ol {
    padding-left: 30px;
  }
  ul li,
  ol li {
    margin-left: 1em;
    margin-bottom: 1em;
  }

  code,
  pre {
    font-family: var(--lagom-core-font-families-monospace);
    font-weight: var(--lagom-core-font-weights-body-regular);
    background: hsla(111, 7%, 80%, 0.5); // var(--lagom-core-colors-olive-lighter40);
  }

  pre code {
    padding: 0;
    background: none;
  }

  code {
    padding: var(--lagom-core-dimension-sm);
    border-radius: var(--lagom-core-border-radius-xs);
  }

  pre {
    white-space: pre-wrap; /* css-3 */
    white-space: -moz-pre-wrap; /* Mozilla, since 1999 */
    white-space: -pre-wrap; /* Opera 4-6 */
    white-space: -o-pre-wrap; /* Opera 7 */
    word-wrap: break-word; /* Internet Explorer 5.5+ */
    padding: var(--lagom-core-spacing-lg);
    border-radius: var(--lagom-core-border-radius-xs);
  }

  strong {
    font-weight: var(--lagom-core-font-weights-bold);
  }
  em {
    font-style: italic;
  }

  ${(props) => props.theme.mediaQueries.medium} {
    h1 {
      font-size: var(--lagom-core-font-sizes-h2)
    }
    h2 {
      font-size: var(--lagom-core-font-sizes-h3)
    }
    h3 {
      font-size: (var(--lagom-core-font-sizes-h4))
    }
    p {
      font-size: var(--lagom-core-font-sizes-body);
    }
    pre {
      font-size: var(--lagom-core-font-sizes-body);
    }
  }

  img {
    filter: var(--lagom-semantic-image-filter);
  }
`;
