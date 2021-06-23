import React, { useEffect, useState } from "react";
import { ThemeProvider as _ThemeProvder } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { theme } from "./theme";

export const ThemeProvider: React.FunctionComponent = ({ children }) => {
  const [noFocusOutline, setNoFocusOutline] = useState(true);

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
    <_ThemeProvder theme={theme}>
      <GlobalStyle noFocusOutline={noFocusOutline} />
      {children}
    </_ThemeProvder>
  );
};
