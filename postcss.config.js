module.exports = {
  plugins: {
    'postcss-size-zoom': {
      'zoom': 2,
      'unitKey': 'px',
      'changeName': 'cube-ui'
    },
    autoprefixer: {},
    'postcss-px2rem': {
      remUnit: 75
    }
  }
}
