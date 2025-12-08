import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ✅ Only use React plugin; remove '@tailwindcss/vite'
export default defineConfig({
  plugins: [react()],
})
