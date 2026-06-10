import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    react(), 
    tailwindcss(),
    {
      name: 'remove-crossorigin',
      transformIndexHtml(html) {
        return html
          .replace(/<script type="module" crossorigin/g, '<script type="module"')
          .replace(/<link rel="stylesheet" crossorigin/g, '<link rel="stylesheet"')
          .replace(/ crossorigin/g, ''); 
      },
    }
  ],

  server: {
    historyApiFallback: true,
    proxy: {
      '/api': {
        target: 'https://vpp-backened-model.onrender.com',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('recharts')) return 'recharts-vendor';
            if (id.includes('react')) return 'react-vendor';
            if (id.includes('router')) return 'router-vendor';
            return 'vendor';
          }
        },
        assetFileNames: 'assets/[ext]/[name]-[hash][extname]',
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      },
    },
  },
})
