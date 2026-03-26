import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/', // IMPORTANT for Ngrok/demo
  server: {
    host: 'blamable-untriflingly-manuela.ngrok-free.dev'      // allow external access
    port: 5173,
    strictPort: true,
  }
})