import { createContext } from "react";
import { ThemeType } from "./createTheme";

export const ThemeContext = createContext<ThemeType | undefined>(undefined);
