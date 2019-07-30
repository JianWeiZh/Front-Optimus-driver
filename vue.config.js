const CompressionWebpackPlugin = require('compression-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const NODE_ENV = process.env.NODE_ENV

module.exports = {
  productionSourceMap: false,
  chainWebpack: config => {
    if (NODE_ENV === 'production') {
      config
        .plugin('compression')
        .use(CompressionWebpackPlugin, {
          algorithm: 'gzip',
          test: new RegExp('\\.(' + ['js', 'css'].join('|') + ')$'),
          threshold: 10240,
          minRatio: 0.8
        })
        .use(BundleAnalyzerPlugin, {
          analyzerPort: 8919
        })
        .tap(args => {
          return [/* 传递给 html-webpack-plugin's 构造函数的新参数 */]
        })
    }
    config.externals({
      'AMap': 'AMap',
      'AMapUI': 'AMapUI',
      'vue': 'Vue',
      'vuex': 'Vuex',
      'vue-router': 'VueRouter'
    })
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
  },
  devServer: {
    https: true
  }
}
