import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import wyw from "@wyw-in-js/vite";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: "dist" // Ensure the output directory is correct
  },
  plugins: [
    react(),
    tsconfigPaths(),
    wyw({
      include: ["**/*.{ts,tsx}"],
      babelOptions: {
        presets: ["@babel/preset-typescript", "@babel/preset-react"],
      },
    }),
  ],

  // server: {
  //   warmup: {
  //     clientFiles: [
  //     ],
  //   },
  // },
});
