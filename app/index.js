
// 挂载app混入
import appMixin from '@/app/js/mixin.js'

import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp()
  app.mixin(appMixin)
  return {
    app
  }
}

