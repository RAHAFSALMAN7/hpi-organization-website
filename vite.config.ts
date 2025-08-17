import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
    force: true,
    esbuildOptions: {
      logLevel: 'silent',
    },
  },
  base: '/', // ✅ fix for Netlify/Vercel
  build: {
    rollupOptions: {
      onwarn(warning, warn) {
        if (
          warning.code === 'UNUSED_EXTERNAL_IMPORT' ||
          warning.code === 'UNRESOLVED_IMPORT' ||
          warning.code === 'MISSING_EXPORT' ||
          warning.code === 'CIRCULAR_DEPENDENCY'
        ) {
          return
        }
        warn(warning)
      },
    },
  },
})
