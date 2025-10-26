import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    plugoms :[react(),tsconfigPaths()],
    server: {
      port :3000,
    }
  ],
  css: {
    preprocessorOptions: {
      scss: {
        // file này chứa biến SCSS toàn cục (nếu bạn có)
        additionalData: `@import "./src/styles/_variables.scss";`
      },
    },
  },
})
