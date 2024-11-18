import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
  // root: path.resolve(path.dirname(import.meta.url), 'src'),
  plugins: [react()],

})
