import type { Preview } from "@storybook/react";
import React from "react";
import { GlobalStyle } from "../src/styles/GlobalStyle";
import { ThemeProvider } from "../src/themes/ThemeProvider";

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
        order: ["Welcome", "Components", "Layouts", "*"],
      },
    },
  },
  decorators: [
    (Story) => {
      return React.createElement(ThemeProvider, {
        theme: null,
        children: [
          React.createElement(GlobalStyle),
          React.createElement(Story),
        ],
      });
    },
  ],
};

export default preview;
