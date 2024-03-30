import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig(({mode}) => {
  const isDev = mode === 'development'
  return {
    plugins: [react()],
    build: {
      outDir: './dist',
      minify: !isDev,
      reportCompressedSize: !isDev,
      emptyOutDir: !isDev,
      rollupOptions: {
        input: {
          index: resolve(__dirname, './index.html'),
          content: resolve(__dirname, './src/helpers/content/index.js')
        },
        output: {
          entryFileNames: "assets/[name].js",
          chunkFileNames: isDev ? "assets/[name].js"  : "assets/[name].[hash].js",
          assetFileNames: "assets/[name].[ext]"
        }
      }
    }
  }
}) 

