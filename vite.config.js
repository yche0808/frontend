import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig(() => ({
  plugins: [vue()],
  // GitHub Pages serves from /frontend/, while local dev and Vercel serve from /
  base: process.env.GITHUB_ACTIONS === "true" ? "/frontend/" : "/",
}));
