import { defineConfig } from 'vite'
import {resolve} from 'path';
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers'
// https://vitejs.dev/config/
export default defineConfig({
  build:{
    rollupOptions:{
      input:{
        main:resolve(__dirname,'index.html'),
        nest:resolve(__dirname,'nested/index.html'),
        js:resolve(__dirname,'src/面试课程/JS/演示.html'),
      }
    }
  },
  server:{
    hmr:true
  },
  plugins: [
    vue(),
    vueJsx(),
    // AutoImport({
    //   resolvers:[ElementPlusResolver()],
    // }),
    // Components({
    //   resolvers:[ElementPlusResolver()],
    // })
  ]
})
