import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

console.log('dirName: ', __dirname)

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: './dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: resolve(__dirname, './index.html'),
        content: resolve(__dirname, './src/helpers/content/index.js')
      },
      output: {
        entryFileNames: "assets/[name].js",
        chunkFileNames: "assets/[name].js",
        assetFileNames: "assets/[name].[ext]"
      }
    }
  }
})

