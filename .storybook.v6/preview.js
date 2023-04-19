import { withThemes } from "storybook-addon-themes/react";
import { GlobalStyle } from "../src/styles/GlobalStyle";
import { ThemeProvider } from "../src/themes/ThemeProvider";
import { theme as defaultTheme } from "../src/themes/theme";
import { theme } from "../src/themes/theme-sub";

const themeList = [
  { name: "default", color: defaultTheme.colors.black },
  { name: "provided", color: theme.colors.violet },
];

const ThemeDecorator = ({ children, themeName }) => {
  switch (themeName) {
    case "provided":
      return (
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          {children}
        </ThemeProvider>
      );
    case "default":
      return (
        <ThemeProvider>
          <GlobalStyle />
          {children}
        </ThemeProvider>
      );
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
  viewMode: "docs",
  options: {
    storySort: {
      order: ["Welcome", "Components", "Layouts", "*"],
    },
  },
};

export const decorators = [withThemes];
