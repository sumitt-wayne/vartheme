import { ThemeMode, ThemeColors } from "../types";

const STORAGE_KEY_MODE = "vartheme-mode";
const STORAGE_KEY_COLORS = "vartheme-colors";

export function saveMode(mode: ThemeMode): void {
  try {
    localStorage.setItem(STORAGE_KEY_MODE, mode);
  } catch {
    console.warn("vartheme: localStorage not available");
  }
}

export function loadMode(): ThemeMode | null {
  try {
    const saved = localStorage.getItem(STORAGE_KEY_MODE);
    if (saved === "light" || saved === "dark" || saved === "system") {
      return saved;
    }
    return null;
  } catch {
    return null;
  }
}

export function saveColors(colors: ThemeColors): void {
  try {
    localStorage.setItem(STORAGE_KEY_COLORS, JSON.stringify(colors));
  } catch {
    console.warn("vartheme: localStorage not available");
  }
}

export function loadColors(): ThemeColors | null {
  try {
    const saved = localStorage.getItem(STORAGE_KEY_COLORS);
    if (saved) return JSON.parse(saved) as ThemeColors;
    return null;
  } catch {
    return null;
  }
}

export function clearStorage(): void {
  try {
    localStorage.removeItem(STORAGE_KEY_MODE);
    localStorage.removeItem(STORAGE_KEY_COLORS);
  } catch {
    console.warn("vartheme: localStorage not available");
  }
}