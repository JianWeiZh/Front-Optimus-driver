import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible'
import Navigation from 'vue-navigation'
import * as funDebug from 'fundebug-javascript'
import funDebugVue from 'fundebug-vue'
import MapFn from '@/utils/map'

funDebug.apikey = 'd886442d72a82d59aacc6322460e7c55871382cb2df46086359ad8c87bc2e2d0'
funDebug.silentDev = true // 配置开发环境不进行日志监控
// funDebug.silentConsole = true
funDebugVue(funDebug, Vue)
Vue.prototype.$VMap = MapFn
Vue.config.productionTip = false
Vue.use(Navigation, { router })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
