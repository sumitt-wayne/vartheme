import { createContext, useContext, ReactNode } from "react";
import { ThemeState, ThemeMode, ThemeColors, ThemeName } from "../types";
import { useTheme } from "./useTheme";
import { applyTransitions } from "../core/engine";

const ThemeContext = createContext<ThemeState | null>(null);

interface ThemeProviderProps {
  children: ReactNode;
  mode?: ThemeMode;
  theme?: ThemeName;
  colors?: ThemeColors;
  transitions?: boolean;
}

export function ThemeProvider({
  children,
  mode,
  theme = "default",
  colors,
  transitions,
}: ThemeProviderProps) {
  const themeState = useTheme(mode, theme);

  if (transitions) {
    applyTransitions();
  }

  if (colors) {
    themeState.setColors(colors);
  }

  return (
    <ThemeContext.Provider value={themeState}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext(): ThemeState {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error(
      "useThemeContext must be used inside <ThemeProvider />"
    );
  }
  return context;
}