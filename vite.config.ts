import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
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
