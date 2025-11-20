import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

// 虽然全局引入很方便，但会增加打包体积。在生产环境中，
// 我‍们可以考虑按需引入来优化性能。不过在开发阶段，全⁢局引入更方便我们快速开发。
import App from './App.vue'
import router from './router'

const app = createApp(App)

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app.use(pinia)
app.use(router)
app.use(Antd)

app.mount('#app')