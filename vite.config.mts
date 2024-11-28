import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from "vite-tsconfig-paths";
import wyw from "@wyw-in-js/vite";

// https://vitejs.dev/config/
export default defineConfig({
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

  server: {
    warmup: {
      clientFiles: [
        "./src/components/layouts/PageLayout.tsx",
        "./src/components/navigation/Nav.tsx",
        "./src/components/page-sections/HomeHero.tsx",
      ],
    },
  },
});
