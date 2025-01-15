import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import path from "path"
import vueJsxPlugin from "@vitejs/plugin-vue-jsx"

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsxPlugin()],
  server: {
    port: 8080,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // 将 @ 映射到 src 文件夹
    },
  },
})
