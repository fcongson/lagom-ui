import { useContext } from "react";
import { ThemeContext } from "../themes/ThemeContext";

export const useTheme = () => {
  const theme = useContext(ThemeContext);
  return theme;
};
