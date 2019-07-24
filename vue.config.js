const CompressionWebpackPlugin = require('compression-webpack-plugin')
const NODE_ENV = process.env.NODE_ENV

module.exports = {
  productionSourceMap: false,
  configureWebpack: config => {
    config.plugins.push(new CompressionWebpackPlugin({
      algorithm: 'gzip',
      test: new RegExp('\\.(' + ['js', 'css'].join('|') + ')$'),
      threshold: 10240,
      minRatio: 0.8
    }))
  },
  css: {
    sourceMap: NODE_ENV !== 'product',
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': [
          './src/theme'
        ]
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  }
}
