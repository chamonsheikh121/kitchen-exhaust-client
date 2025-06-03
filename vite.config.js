import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',  // Ensure this is correct
  build: {
    outDir: 'dist'  // Default for Vite, but ensures proper output
  },
  server: {
    port: 3000,
    open: true
  },
  preview: {
    port: 5000,
    open: true
  }
});
