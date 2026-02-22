export type ThemeMode = "light" | "dark" | "system";

export type ThemeName = "default" | "ocean" | "forest" | "sunset" | "rose" | (string & {});

export interface ThemeColors {
  primary?: string;
  background?: string;
  surface?: string;
  text?: string;
  border?: string;
  accent?: string;
}

export interface ThemeConfig {
  mode?: ThemeMode;
  colors?: ThemeColors;
  transitions?: boolean;
}

export interface ThemeState {
  mode: ThemeMode;
  resolvedMode: "light" | "dark";
  colors: ThemeColors;
  theme: ThemeName;
  toggle: () => void;
  setMode: (mode: ThemeMode) => void;
  setColors: (colors: ThemeColors) => void;
  setTheme: (theme: ThemeName) => void;
}