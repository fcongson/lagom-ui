import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { theme } from "../themes/theme";

export const useTheme = () => {
  // const providedTheme = _useTheme();
  const providedTheme = useContext(ThemeContext);
  const mergedTheme = { ...theme, ...providedTheme };
  return mergedTheme;
};
