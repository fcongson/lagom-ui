import { createGlobalStyle } from "styled-components";

export const NoFocusOutline = createGlobalStyle<{
  noFocusOutline: boolean;
}>`
  ${(props) =>
    props.noFocusOutline &&
    `
    html {
      a:focus,
      button:focus,
      div[role='button']:focus {
        outline: none;
      }
    }
    `}
`;
