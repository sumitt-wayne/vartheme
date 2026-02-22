import { ThemeColors } from "../types";

export interface ThemePreset {
  name: string;
  light: ThemeColors;
  dark: ThemeColors;
}

export const BUILT_IN_THEMES: Record<string, ThemePreset> = {
  default: {
    name: "default",
    light: {
      primary: "#7C3AED",
      background: "#FFFFFF",
      surface: "#F8FAFC",
      text: "#0F172A",
      border: "#E2E8F0",
      accent: "#06B6D4",
    },
    dark: {
      primary: "#A78BFA",
      background: "#0F172A",
      surface: "#1E293B",
      text: "#F8FAFC",
      border: "#334155",
      accent: "#22D3EE",
    },
  },

  ocean: {
    name: "ocean",
    light: {
      primary: "#0284C7",
      background: "#F0F9FF",
      surface: "#E0F2FE",
      text: "#0C4A6E",
      border: "#BAE6FD",
      accent: "#0D9488",
    },
    dark: {
      primary: "#38BDF8",
      background: "#0C1A2E",
      surface: "#0F2744",
      text: "#E0F2FE",
      border: "#1E3A5F",
      accent: "#2DD4BF",
    },
  },

  forest: {
    name: "forest",
    light: {
      primary: "#16A34A",
      background: "#F0FDF4",
      surface: "#DCFCE7",
      text: "#14532D",
      border: "#BBF7D0",
      accent: "#84CC16",
    },
    dark: {
      primary: "#4ADE80",
      background: "#0A1F0F",
      surface: "#0F2D17",
      text: "#DCFCE7",
      border: "#166534",
      accent: "#A3E635",
    },
  },

  sunset: {
    name: "sunset",
    light: {
      primary: "#EA580C",
      background: "#FFF7ED",
      surface: "#FFEDD5",
      text: "#431407",
      border: "#FED7AA",
      accent: "#DB2777",
    },
    dark: {
      primary: "#FB923C",
      background: "#1A0A00",
      surface: "#2D1200",
      text: "#FFEDD5",
      border: "#7C2D12",
      accent: "#F472B6",
    },
  },

  rose: {
    name: "rose",
    light: {
      primary: "#E11D48",
      background: "#FFF1F2",
      surface: "#FFE4E6",
      text: "#4C0519",
      border: "#FECDD3",
      accent: "#BE185D",
    },
    dark: {
      primary: "#FB7185",
      background: "#1A0008",
      surface: "#2D000F",
      text: "#FFE4E6",
      border: "#881337",
      accent: "#F472B6",
    },
  },
};

export function getTheme(name: string): ThemePreset {
  return BUILT_IN_THEMES[name] || BUILT_IN_THEMES.default;
}