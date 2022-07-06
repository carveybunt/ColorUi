import App from './App'
import store from '@/ui/store'
import mixins from '@/ui/js/mixin.js'

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  app.mixin(mixins)
  app.use(store)
  return {
    app
  }
}
// #endif