import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  },
  build: {
    chunkSizeWarningLimit: 1200,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
            return 'vendor-react';
          }
          if (id.includes('node_modules/lucide-react')) {
            return 'vendor-lucide';
          }
          if (id.includes('src/data/stacksData.js')) {
            return 'data-stacks';
          }
          if (id.includes('src/data/componentsData.js')) {
            return 'data-components';
          }
          if (id.includes('src/data/techSetupData.js') || id.includes('src/data/setupData.js')) {
            return 'data-setup';
          }
        }
      }
    }
  }
});

