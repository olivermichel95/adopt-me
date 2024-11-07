const { defineConfig } = require("vite");
const react = require("@vitejs/plugin-react");

module.exports = defineConfig({
  plugins: [react()],
  root: "src", // Keep source code in 'src' directory
  build: {
    outDir: "../dist", // Build output to 'dist' directory at the root level
    emptyOutDir: true, // Clean the 'dist' directory before building
    base: "/adopt-me/", // Set the base path for GitHub Pages
  },
});
