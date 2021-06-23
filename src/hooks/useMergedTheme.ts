import { useTheme } from "styled-components";
import { theme } from "themes/theme";

export const useMergedTheme = () => {
  const providedTheme = useTheme();
  const mergedTheme = { ...theme, ...providedTheme };
  return mergedTheme;
};
