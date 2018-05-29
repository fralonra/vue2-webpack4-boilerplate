const webpack = require('webpack')

const config = require('config')

module.exports = (env, argv) => {
  return {
    devtool: 'inline-source-map',
    devServer: {
      contentBase: config.dirDes,
      compress: true,
      hot: true
    },
    plugins: [
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin()
    ]
  }
}
