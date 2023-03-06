import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react({ jsxRuntime: "classic" }), dts({ insertTypesEntry: true })],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "Ui",
      fileName: "ui",
    },
    rollupOptions: {
      external: ["react"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: "react",
        },
      },
    },
  },
});
