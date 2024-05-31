import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',
    lib: {
      name: 'ilw-page',
      entry: 'ilw-page.js',
      fileName: 'ilw-page',
      formats: ['es', 'cjs', 'umd'],
    },
    rollupOptions: {
      output: {
        assetFileNames: (chunkInfo) => {
           if (chunkInfo.name === 'style.css') return 'ilw-page.css';
        }
      }
    },
  },
  server: {
    hmr: false
  }
})
