import { useState, useEffect, useCallback } from "react";
import { ThemeMode, ThemeColors, ThemeState, ThemeName } from "../types";
import { injectCSSVariables, getDefaultColors } from "../core/engine";
import { saveMode, loadMode, saveColors, loadColors } from "../core/storage";
import { getSystemMode, watchSystemMode } from "../core/system";
import { getTheme } from "../core/themes";

export function useTheme(
  initial?: ThemeMode,
  initialTheme?: ThemeName
): ThemeState {
  const [mode, setModeState] = useState<ThemeMode>(() => {
    return loadMode() || initial || "system";
  });

  const [theme, setThemeState] = useState<ThemeName>(
    initialTheme || "default"
  );

  const [colors, setColorsState] = useState<ThemeColors>(() => {
    return loadColors() || {};
  });

  const resolvedMode = mode === "system" ? getSystemMode() : mode;

  useEffect(() => {
    const preset = getTheme(theme);
    const presetColors = resolvedMode === "dark" ? preset.dark : preset.light;
    injectCSSVariables({ ...presetColors, ...colors }, resolvedMode);
  }, [resolvedMode, colors, theme]);

  useEffect(() => {
    if (mode !== "system") return;
    const cleanup = watchSystemMode(() => {
      const preset = getTheme(theme);
      const presetColors =
        getSystemMode() === "dark" ? preset.dark : preset.light;
      injectCSSVariables({ ...presetColors, ...colors }, getSystemMode());
    });
    return cleanup;
  }, [mode, colors, theme]);

  const toggle = useCallback(() => {
    const next = resolvedMode === "light" ? "dark" : "light";
    setModeState(next);
    saveMode(next);
  }, [resolvedMode]);

  const setMode = useCallback((newMode: ThemeMode) => {
    setModeState(newMode);
    saveMode(newMode);
  }, []);

  const setColors = useCallback((newColors: ThemeColors) => {
    setColorsState((prev) => {
      const merged = { ...prev, ...newColors };
      saveColors(merged);
      return merged;
    });
  }, []);

  const setTheme = useCallback((newTheme: ThemeName) => {
    setThemeState(newTheme);
  }, []);

  return {
    mode,
    resolvedMode,
    theme,
    colors: { ...getDefaultColors(resolvedMode), ...colors },
    toggle,
    setMode,
    setColors,
    setTheme,
  };
}