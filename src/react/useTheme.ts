import { useState, useEffect, useCallback } from "react";
import { ThemeMode, ThemeColors, ThemeState } from "../types";
import { injectCSSVariables, getDefaultColors } from "../core/engine";
import { saveMode, loadMode, saveColors, loadColors } from "../core/storage";
import { getSystemMode, watchSystemMode } from "../core/system";

export function useTheme(initial?: ThemeMode): ThemeState {
  const [mode, setModeState] = useState<ThemeMode>(() => {
    return loadMode() || initial || "system";
  });

  const [colors, setColorsState] = useState<ThemeColors>(() => {
    return loadColors() || {};
  });

  const resolvedMode = mode === "system" ? getSystemMode() : mode;

  // CSS variables inject karo jab bhi mode ya colors badle
  useEffect(() => {
    injectCSSVariables(colors, resolvedMode);
  }, [resolvedMode, colors]);

  // System mode watch karo
  useEffect(() => {
    if (mode !== "system") return;
    const cleanup = watchSystemMode(() => {
      injectCSSVariables(colors, getSystemMode());
    });
    return cleanup;
  }, [mode, colors]);

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

  return {
    mode,
    resolvedMode,
    colors: { ...getDefaultColors(resolvedMode), ...colors },
    toggle,
    setMode,
    setColors,
  };
}