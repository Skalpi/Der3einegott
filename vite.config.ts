import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/christusistgott/',
  resolve: {
    alias: {
      // Ensure we point to src explicitly if needed, but relative paths are preferred in code
      '@': '/src',
    },
  },
});