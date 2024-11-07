import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  root: "src", // Keep source code in 'src' directory
  build: {
    outDir: "../dist", // Build output to 'dist' directory at the root level
    emptyOutDir: true, // Clean the 'dist' directory before building
  },
});
