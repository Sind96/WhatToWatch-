import { fileURLToPath, URL } from 'url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
      '@pages': fileURLToPath(new URL('./src/pages', import.meta.url)),
      '@loginPages': fileURLToPath(new URL('./src/loginPages',import.meta.url)),
      '@services': fileURLToPath(new URL('./src/services',import.meta.url)),
      '@data': fileURLToPath(new URL('./src/data',import.meta.url)),
      '@utils': fileURLToPath(new URL('./src/utils',import.meta.url)),
      '@styles': fileURLToPath(new URL('./src/assets/styles',import.meta.url)),
      '@images': fileURLToPath(new URL('./src/assets/images',import.meta.url)),
    },
  },
});
