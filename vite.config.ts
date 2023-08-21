import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import scss from "sass";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins:
    [svgr(), react()],
  css: {
    preprocessorOptions: {
      scss: {
        implementation: scss,
      },
    },
  },
});

