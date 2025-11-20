/**配置开发服务器 */
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
// @ts-ignore
import { chromeExtension } from "./build/chromeExtension.js"

/**按需加载 Ant Design Vue：使用 unplugin-vue-components 插件实现组件的按需导入
Chrome 扩展支持：支持构建为 Chrome 扩展程序 */

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // 按需加载 ant-design-vue
    Components({
      resolvers: [AntDesignVueResolver()],
    }),
    process.env.BUILD_CRX && chromeExtension({ manifest: 'public/manifest.json' }),
  ].filter(Boolean),
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})