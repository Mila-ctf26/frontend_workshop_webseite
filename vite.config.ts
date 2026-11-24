import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/frontend_workshop_webseite/',
  plugins: [
    tailwindcss(),
  ],
})