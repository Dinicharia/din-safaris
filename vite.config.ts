import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // ADD

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()], // CHANGE: add tailwindcss() to the list
})