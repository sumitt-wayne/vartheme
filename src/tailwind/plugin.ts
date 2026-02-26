import plugin from "tailwindcss/plugin";

const varthemePlugin: ReturnType<typeof plugin> = plugin(
  function ({ addBase }) {
    addBase({
      ":root": {
        "--vt-primary": "#7C3AED",
        "--vt-background": "#FFFFFF",
        "--vt-surface": "#F8FAFC",
        "--vt-text": "#0F172A",
        "--vt-border": "#E2E8F0",
        "--vt-accent": "#06B6D4",
      },
    });
  },
  {
    theme: {
      extend: {
        colors: {
          "vt-primary":    "var(--vt-primary)",
          "vt-background": "var(--vt-background)",
          "vt-surface":    "var(--vt-surface)",
          "vt-text":       "var(--vt-text)",
          "vt-border":     "var(--vt-border)",
          "vt-accent":     "var(--vt-accent)",
        },
        backgroundColor: {
          "vt-primary":    "var(--vt-primary)",
          "vt-background": "var(--vt-background)",
          "vt-surface":    "var(--vt-surface)",
        },
        textColor: {
          "vt-primary": "var(--vt-primary)",
          "vt-text":    "var(--vt-text)",
          "vt-muted":   "var(--vt-text-muted)",
          "vt-accent":  "var(--vt-accent)",
        },
        borderColor: {
          "vt-border":  "var(--vt-border)",
          "vt-primary": "var(--vt-primary)",
        },
        boxShadow: {
          "vt-glow": "0 0 20px var(--vt-primary)",
          "vt-card": "0 4px 24px var(--vt-primary)",
        },
      },
    },
  }
);

export default varthemePlugin;