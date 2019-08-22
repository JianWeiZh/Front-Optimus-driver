import vueMap from './map'

let map = {}
map.install = function (Vue, options) {
  Vue.prototype.$VMap = vueMap
}

export default map
