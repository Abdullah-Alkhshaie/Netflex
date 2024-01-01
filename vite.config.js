import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path"; // Import the path module

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Netflex/",
  plugins: [react()],
  resolve: {
    alias: {
      "react-slick": path.resolve(__dirname, "path/to/react-slick"),
    },
  },
});
