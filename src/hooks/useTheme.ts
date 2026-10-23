import { useContext } from "react";
import { ThemeContext } from "../themes/ThemeContext";

/**
 * Returns the current theme from the nearest `ThemeProvider` (sizes,
 * breakpoints, and media queries), or `undefined` outside one.
 */
export const useTheme = () => {
  const theme = useContext(ThemeContext);
  return theme;
};
