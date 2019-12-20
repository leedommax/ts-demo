const path = require('path')
function resolve (dir) {
  return path.join(__dirname, './', dir)
}
module.exports = {
  publicPath: process.env.publicPath,
  outputDir: 'ts-dist',
  assetsDir: 'static',
  indexPath: 'index.html',
  filenameHashing: true,
  lintOnSave: true,
  configureWebpack: webpackConfig => {
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
    } else {
      // 为开发环境修改配置...
    }
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('store', resolve('@/store'))
  }
}
