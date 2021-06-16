import { withThemes } from "storybook-addon-themes/react";
import { ThemeProvider } from "styled-components";
import { theme as defaultTheme } from "../src/themes/theme";
import { theme } from "../src/themes/theme-sub";

const themeList = [
  { name: "default", color: defaultTheme.colors.black },
  { name: "provided", color: theme.colors.violet },
];

const ThemeDecorator = ({ children, themeName }) => {
  switch (themeName) {
    case "provided":
      return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
    default:
      return <>{children}</>;
  }
};

export const parameters = {
  themes: {
    default: "default",
    list: themeList,
    Decorator: ThemeDecorator,
  },
};

export const decorators = [withThemes];
