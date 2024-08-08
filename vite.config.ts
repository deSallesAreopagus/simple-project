import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      remotes: {
        'microfrontend1': 'http://172.18.0.2:3001/dist/assets/remoteEntry.js',
        'microfrontend2': 'http://172.18.0.3:3002/dist/assets/remoteEntry.js',
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
