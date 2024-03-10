import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'

import App from './App.vue'

import 'normalize.css'
// vant 自动按需引入需手动引入函数组件的样式
import 'vant/es/toast/style'
import 'vant/es/dialog/style'
import '@/styles/index.scss'
import '@/styles/theme/index.scss'

const app = createApp(App)

app
  .use(createPinia())
  .use(router)

if (import.meta.env.PROD) {
  console.log('prod mode')
  // Cordova Event：https://cordova.apache.org/docs/en/12.x/cordova/events/events.html
  document.addEventListener(
    'deviceready',
    function () {
      console.log('Running cordova-' + cordova.platformId + '@' + cordova.version)
      app.mount('#app')
    },
    false
  )
} else {
  console.log('dev mode')
  app.mount('#app')
}
