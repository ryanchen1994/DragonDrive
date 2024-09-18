import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import sitemap from 'vite-plugin-sitemap';

export default defineConfig({
  plugins: [
    vue(),
    sitemap({
      hostname: 'https://5168bus.com', // 替換成你的網站域名
      routes: [
        '/', '/about', '/contact', '/services' // 根據實際情況更新路由
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
