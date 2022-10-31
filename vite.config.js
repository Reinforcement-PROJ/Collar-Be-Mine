import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    manifest: true,
    rollupOptions: {
      input: './client/index.jsx',
    },
  },
  server: {
    proxy: {
      '/api': 'http://localhost:3000',
    },
  },
});
