import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/eirele",
  build: {
    minify: false, // Disable minification
    sourcemap: true, // Generate source maps for debugging
  },
  server: {
    port: 5174,
  },
});
