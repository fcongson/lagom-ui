import { GrowthBookProvider } from "@growthbook/growthbook-react";
import { useEffect, useState } from "react";
import { ThemeProvider as _ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/GlobalStyle";
import { NoFocusOutline } from "../styles/NoFocusOutline";
import "../styles/resetr.css";
import { growthbook } from "../utils/GrowthBook";
import { ThemeType } from "./createTheme";
import { theme as _theme } from "./theme";

export const ThemeProvider: React.FunctionComponent<{
  children?: React.ReactNode;
  theme?: ThemeType;
}> = ({ children, theme }) => {
  const [noFocusOutline, setNoFocusOutline] = useState(true);
  const mergedTheme = {
    ..._theme,
    ...theme,
  };

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

  useEffect(() => {
    // Load features asynchronously when the app renders
    growthbook.loadFeatures();
  }, []);

  return (
    <GrowthBookProvider growthbook={growthbook}>
      <_ThemeProvider theme={mergedTheme}>
        <GlobalStyle theme={mergedTheme} />
        <NoFocusOutline noFocusOutline={noFocusOutline} />
        {children}
      </_ThemeProvider>
    </GrowthBookProvider>
  );
};
