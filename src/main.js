import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible'
import Navigation from 'vue-navigation'
import MapFn from '@/utils/map'

Vue.prototype.$VMap = MapFn
Vue.config.productionTip = false
Vue.use(Navigation, { router })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
