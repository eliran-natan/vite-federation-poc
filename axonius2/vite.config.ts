import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm-bundler.js'
    }
  },
  plugins: [
    vue(),
    federation({
      name: 'axonius2',
      filename: 'remoteEntry.js',
      exposes: {
          './Dashboard': './src/components/Dashboard.vue',
          './Card': './src/components/Card.vue'
      }
    })
  ],
  build: {
    minify: true,
    target: 'esnext',
    cssCodeSplit: false
  }
})
