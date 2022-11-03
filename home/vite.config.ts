import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    federation({
      name: 'axoniusX',
      filename: 'remoteEntry.js',
      exposes: {
        './Button': './src/Button.jsx'
      }
    })
  ],
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  }
})
