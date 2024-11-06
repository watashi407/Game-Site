import path from "path"
import { defineConfig } from "vite"
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import viteReact from "@vitejs/plugin-react"

export default defineConfig({
  plugins: [TanStackRouterVite(),viteReact()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})


