import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  server:{
    proxy:{
      '/api':{
        target: 'http://101.37.29.240:8080',
        changeOrigin: true,
      }
    }
  }
})
