import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build:{
    rollupOptions:{
      // menambahkan ipnput hellp world
      // ke dalam build
      // ini di gunakan untuk membuat beberapa file html
      // di dalam satu project
      // misal kita mau membuat beberapa file html
      // di dalam satu project
      // kita bisa menggunakan rollupOptions
      // input untuk menambahkan beberapa file html
      // di dalam satu project
      input:{
        index: "index.html",
        hello_world: "hello-world.html"
      }
    }
  }
})
