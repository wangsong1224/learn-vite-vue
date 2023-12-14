import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index.js'
import store from './store'

/**
 * 尝试引入 element2 与 vue3 的结合
 */
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
createApp(App)
  // .use(ElementUI)
  .use(store)
  .use(router)
  .mount('#app')
