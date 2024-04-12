import { resolve } from 'node:path'
import react from '@vitejs/plugin-react-swc'
import { TanStackRouterVite } from '@tanstack/router-vite-plugin'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [
    react(),
    TanStackRouterVite(),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      'types': resolve(__dirname, './types'),
    },
  },
  build: {
    chunkSizeWarningLimit: 10000,
  },

  test: {
    globals: true,
    environment: 'jsdom',
  },
})
