import { GrowthBookProvider } from "@growthbook/growthbook-react";
import { useEffect } from "react";
import "../styles/GlobalStyle";
import "../styles/NoFocusOutline";
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
 * - shows focus rings for keyboard users only (via `:focus-visible`)
 * - provides the GrowthBook context that `Button` needs
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
  const mergedTheme = {
    ..._theme,
    ...theme,
  };

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
