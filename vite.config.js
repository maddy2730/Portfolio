import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    proxy: {
      // This will proxy requests starting with /api to your backend
      '/api': {
        target: 'http://localhost:6000', // Backend URL
        changeOrigin: true, // Changes the origin of the request to the target URL
        rewrite: (path) => path.replace(/^\/api/, ''), // Optionally rewrite paths (removes /api prefix)
      },
    },
  },
});
