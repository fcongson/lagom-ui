import { DocsContainer, DocsPage } from "@storybook/addon-docs/blocks";
import { withKnobs } from "@storybook/addon-knobs";
import { withThemesProvider } from "storybook-addon-styled-component-theme";
import { theme } from "../src/themes/theme-sub";

export const parameters = {
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
};

const themes = [{ name: "default" }, { name: "provided", ...theme }];

export const decorators = [withKnobs, withThemesProvider(themes)];
