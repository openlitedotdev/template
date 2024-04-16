import { resolve } from 'node:path'
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [react()],
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
