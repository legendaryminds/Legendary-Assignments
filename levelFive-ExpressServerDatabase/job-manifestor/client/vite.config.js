// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:5000", // Your backend server
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
        secure: false, // If your backend server uses HTTPS
        ws: true, // If your backend server uses WebSocket
        logLevel: "debug", // Log proxy requests for debugging
      },
    },
  },
});
