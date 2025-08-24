import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@assets': resolve(__dirname, './src/assets')
    }
  },
  server: {
    port: 3000,
    host: '0.0.0.0'
  },
  build: {
    outDir: 'dist'
  }
})