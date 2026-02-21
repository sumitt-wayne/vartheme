import { ThemeColors, ThemeMode } from "../types";

const DEFAULT_LIGHT: ThemeColors = {
  primary: "#7C3AED",
  background: "#FFFFFF",
  surface: "#F8FAFC",
  text: "#0F172A",
  border: "#E2E8F0",
  accent: "#06B6D4",
};

const DEFAULT_DARK: ThemeColors = {
  primary: "#A78BFA",
  background: "#0F172A",
  surface: "#1E293B",
  text: "#F8FAFC",
  border: "#334155",
  accent: "#22D3EE",
};

export function injectCSSVariables(
  colors: ThemeColors,
  mode: "light" | "dark"
): void {
  const root = document.documentElement;
  const defaults = mode === "dark" ? DEFAULT_DARK : DEFAULT_LIGHT;
  const merged = { ...defaults, ...colors };

  root.setAttribute("data-theme", mode);

  Object.entries(merged).forEach(([key, value]) => {
    root.style.setProperty(`--vt-${key}`, value as string);
  });
}

export function applyTransitions(): void {
  const style = document.createElement("style");
  style.id = "vartheme-transitions";
  style.textContent = `
    *, *::before, *::after {
      transition: 
        background-color 0.3s ease,
        color 0.3s ease,
        border-color 0.3s ease !important;
    }
  `;
  document.head.appendChild(style);
}

export function removeTransitions(): void {
  const style = document.getElementById("vartheme-transitions");
  if (style) style.remove();
}

export function getDefaultColors(mode: "light" | "dark"): ThemeColors {
  return mode === "dark" ? DEFAULT_DARK : DEFAULT_LIGHT;
}