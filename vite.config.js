import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      componentes: "/src/componentes",
      contexto: "/src/contexto",
      paginas: "/src/paginas",
      router: "/src/router",
    }
  }
})
