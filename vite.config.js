import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

//配置elementPluszi 不分導入
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    host:'0.0.0.0',
    port:5173
  },
  plugins: [
    vue(), 
    //...elementPluszi
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
        scss: {
            // 2.自動導入樣式進行覆蓋
            additionalData: `
                  @use "@/styles/element/index.scss" as *;
                  @use "@/styles/var.scss" as *;
    `,
        }
    }
}
})
