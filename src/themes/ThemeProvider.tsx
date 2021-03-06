import { useEffect, useState } from "react";
import {
  ThemeProvider as _ThemeProvider,
  ThemeProviderProps,
} from "styled-components";
import { GlobalStyle } from "../styles/GlobalStyle";
import "../styles/resetr.css";
import { theme as _theme } from "./theme";

export const ThemeProvider: React.FunctionComponent<
  ThemeProviderProps<any, any>
> = ({ children, theme }) => {
  const [noFocusOutline, setNoFocusOutline] = useState(true);
  const mergedTheme = { ..._theme, ...theme };

  const a11yHandler = ({ keyCode }: { keyCode: number }) => {
    // Add focus outline when tab key is pressed
    if (keyCode === 9) {
      setNoFocusOutline(false);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", a11yHandler);
    window.addEventListener("keyup", a11yHandler);
    return () => {
      window.removeEventListener("keydown", a11yHandler);
      window.removeEventListener("keyup", a11yHandler);
    };
  }, []);

  return (
    <_ThemeProvider theme={mergedTheme}>
      <GlobalStyle noFocusOutline={noFocusOutline} />
      {children}
    </_ThemeProvider>
  );
};
