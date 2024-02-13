import "@fcongson/lagom-tokens/css/theme/_dark.css";
import "@fcongson/lagom-tokens/css/theme/_light.css";
import { Preview } from "@storybook/react";
import React from "react";
import styled, { css } from "styled-components";
import { ThemeProvider } from "../src/themes/ThemeProvider";
import "./style.css";

// [Toolbars & globals](https://storybook.js.org/docs/react/essentials/toolbars-and-globals)
// [How to add a theme switcher to Storybook](https://storybook.js.org/blog/how-to-add-a-theme-switcher-to-storybook/)

const StoryContainer = styled.div<{ height: string; $flexDirection: string }>(
  ({ height, $flexDirection }) => css`
    display: flex;
    flex-direction: ${$flexDirection};
    min-height: ${height};
    margin: -1rem;
  `,
);
const StoryBlock = styled.div`
  flex-grow: 1;
  padding: 1rem;
  background: var(--lagom-semantic-color-bg-default);
`;

const decorators = [
  (Story, context) => {
    const {
      globals: { theme },
      viewMode,
    } = context;
    const height = viewMode === "story" ? "100vh" : "100%";
    const flexDirection = theme === "stacked" ? "column" : "row";

    switch (theme) {
      case "side-by-side":
      case "stacked": {
        return (
          <ThemeProvider theme={{}}>
            <StoryContainer $flexDirection={flexDirection} height={height}>
              <StoryBlock data-lagom-theme="light">
                <Story />
              </StoryBlock>
              <StoryBlock data-lagom-theme="dark">
                <Story />
              </StoryBlock>
            </StoryContainer>
          </ThemeProvider>
        );
      }
      default: {
        return (
          <ThemeProvider theme={{}}>
            <StoryContainer $flexDirection={flexDirection} height={height}>
              <StoryBlock data-lagom-theme={`${theme}`}>
                <Story />
              </StoryBlock>
            </StoryContainer>
          </ThemeProvider>
        );
      }
    }
  },
];

const globalTypes = {
  theme: {
    description: "Global theme for components",
    defaultValue: "light",
    toolbar: {
      // The label to show for this toolbar item
      title: "Theme",
      icon: "sun",
      // Array of plain string values or MenuItem shape (see below)
      items: [
        { value: "light", icon: "sun", title: "Light" },
        { value: "dark", icon: "moon", title: "Dark" },
        { value: "side-by-side", icon: "sidebyside", title: "Side-by-side" },
        { value: "stacked", icon: "stacked", title: "Stacked" },
      ],
      // Change title based on selected value
      dynamicTitle: true,
    },
  },
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      storySort: {
        order: [
          "About",
          "Style Guide",
          "Design Tokens",
          "Components",
          "Layouts",
        ],
      },
    },
  },
  decorators,
  globalTypes,
};

export default preview;
