import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { port: 4000 },
  resolve: {
    alias: {
      "@": "/src", // Alias for blog's src folder
      shared: "/frontend/shared", // Alias for shared folder
    },
  },
});
