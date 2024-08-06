import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      remotes: {
        'microfrontend1': 'http://product-list:3001/assets/remoteEntry.js',
        'microfrontend2': 'http://user-login:3002/assets/remoteEntry.js',
      }
    })
  ],
  build: {
    target: 'esnext'
  },
  server: {
    port: 3000
  }
})
