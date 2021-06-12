import { DocsContainer, DocsPage } from "@storybook/addon-docs/blocks";
import { withKnobs } from "@storybook/addon-knobs";
import { ThemeProvider } from "styled-components";
import { theme } from "../themes/theme";

export const parameters = {
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  ),
  withKnobs,
];
