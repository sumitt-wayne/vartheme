import { createContext, useContext, ReactNode } from "react";
import { ThemeState, ThemeMode, ThemeConfig } from "../types";
import { useTheme } from "./useTheme";
import { applyTransitions } from "../core/engine";

const ThemeContext = createContext<ThemeState | null>(null);

interface ThemeProviderProps {
  children: ReactNode;
  config?: ThemeConfig;
}

export function ThemeProvider({ children, config }: ThemeProviderProps) {
  const theme = useTheme(config?.mode);

  // Transitions enable karo agar config mein hai
  if (config?.transitions) {
    applyTransitions();
  }

  // Custom colors apply karo agar config mein hain
  if (config?.colors) {
    theme.setColors(config.colors);
  }

  return (
    <ThemeContext.Provider value={theme}>
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