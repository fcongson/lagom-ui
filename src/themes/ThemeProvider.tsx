import React, { useEffect, useState } from "react";
import { ThemeProvider as _ThemeProvder } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { theme as _theme, ThemeType } from "./theme";
import "./resetr.css";

export const ThemeProvider: React.FunctionComponent<{ theme: ThemeType }> = ({
  children,
  theme,
}) => {
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
    <_ThemeProvder theme={mergedTheme}>
      <GlobalStyle noFocusOutline={noFocusOutline} />
      {children}
    </_ThemeProvder>
  );
};
