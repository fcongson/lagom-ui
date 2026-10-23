import { GrowthBookProvider } from "@growthbook/growthbook-react";
import { useEffect, useState } from "react";
import "../styles/GlobalStyle";
import { NO_FOCUS_OUTLINE_CLASS } from "../styles/NoFocusOutline";
import { growthbook } from "../utils/GrowthBook";
import { ThemeContext } from "./ThemeContext";
import { ThemeType } from "./createTheme";
import { theme as _theme } from "./theme";

/**
 * Required app wrapper: theme context, global styles, and focus handling.
 *
 * Required wrapper for Lagom apps. Render it once around your app. It:
 *
 * - provides the theme to `useTheme()`, merged over the defaults
 * - loads Lagom's reset and global styles
 * - hides focus outlines for mouse users until the Tab key is first pressed
 * - provides the GrowthBook context that `Button` (and `LinkButton`) need
 *
 * Token values come from a lagom-tokens theme stylesheet you import yourself.
 *
 * @summary Required app wrapper: theme context, global styles, and focus handling.
 */
export const ThemeProvider: React.FunctionComponent<{
  /** Your app. */
  children?: React.ReactNode;
  /** Theme overrides, usually from `createTheme()`. Merged over the defaults. */
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
    document.documentElement.classList.toggle(
      NO_FOCUS_OUTLINE_CLASS,
      noFocusOutline,
    );
  }, [noFocusOutline]);

  useEffect(() => {
    // Load features asynchronously when the app renders
    growthbook.loadFeatures();
  }, []);

  return (
    <GrowthBookProvider growthbook={growthbook}>
      <ThemeContext.Provider value={mergedTheme}>
        {children}
      </ThemeContext.Provider>
    </GrowthBookProvider>
  );
};
