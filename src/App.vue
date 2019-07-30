<template>
  <div id="app">
    <!--<div id="nav">-->
      <!--<router-link to="/">Home</router-link> |-->
      <!--<router-link to="/about">About</router-link>-->
    <!--</div>-->
    <navigation>
      <router-view/>
    </navigation>
  </div>
</template>

<script>
export default {
  data () {
    return {
      map: '',
      center: [116.403429, 39.973201],
      dragObj: ''
    }
  },
  created () {
    console.log(this.$VMap)
    this.getPosition()
  },
  mounted () {
    const options = {
      loadMapDom: 'app',
      mapOptions: {
        center: this.center
      }
    }
    this.map = this.$VMap.loadMap(options)
    this.dragFn()
  },
  methods: {
    dragFn () {
      const obj = {
        dragOptions: {
          map: this.map
        },
        dragSuc: function (res) {
          console.log(res)
        },
        dragErr: function (err) {
          console.log(err)
        }
      }
      this.$VMap.positionPicker(obj).then(
        (res) => {
          this.dragObj = res
          console.log(this.dragObj)
        }
      )
    },
    getPosition () {
      this.$VMap.getPosition(this.positionSuc, this.positionErr)
    },
    positionSuc (res) {
      const position = res.position
      this.center = [position.lng, position.lat]
      this.map.setCenter(this.$VMap.createPosition(position.lng, position.lat))
      this.map.setZoom(17)
    },
    positionErr (err) {
      console.log(err)
    }
  }
}
</script>
<style lang="scss">
@import "assets/scss/reset";
#app {
  width: 100%;
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
