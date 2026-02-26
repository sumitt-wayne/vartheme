import { defineConfig } from "tsup";

export default defineConfig([
  {
    entry: ["src/index.ts"],
    format: ["cjs", "esm"],
    dts: true,
    splitting: false,
    sourcemap: true,
    clean: true,
    external: ["react", "react-dom", "tailwindcss"],
    treeshake: true,
    minify: true,
  },
  {
    entry: { "tailwind/plugin": "src/tailwind/plugin.ts" },
    format: ["cjs", "esm"],
    dts: true,
    splitting: false,
    sourcemap: true,
    external: ["tailwindcss"],
    minify: true,
  },
]);