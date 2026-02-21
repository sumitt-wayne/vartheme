type SystemMode = "light" | "dark";
type SystemModeListener = (mode: SystemMode) => void;

export function getSystemMode(): SystemMode {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function watchSystemMode(callback: SystemModeListener): () => void {
  if (typeof window === "undefined") return () => {};

  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

  const handler = (e: MediaQueryListEvent) => {
    callback(e.matches ? "dark" : "light");
  };

  mediaQuery.addEventListener("change", handler);

  // cleanup function return ho raha hai
  return () => {
    mediaQuery.removeEventListener("change", handler);
  };
}

export function isBrowser(): boolean {
  return typeof window !== "undefined";
}