import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

export default defineConfig({
  base: '/goit-react-hw-25/', 
  
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],

  build: {
    outDir: 'docs',
    emptyOutDir: true,
  }
})