import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

/** @type {import('vite').UserConfig} */
export default defineConfig({
  build: {
    outDir: './dist',
    lib: {
      name: 'ilw-page',
      entry: './src/ilw-page.js',
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
  plugins: [dts()],
  server: {
    hmr: false
  }
})
