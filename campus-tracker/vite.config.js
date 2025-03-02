import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/", // 👈 This ensures Vite builds correctly for Vercel
  build: {
    outDir: "dist" // Optional, but it's the default Vercel build folder
  }
})
