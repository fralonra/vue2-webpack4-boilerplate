const baseConfig = require('./webpack.config.base')
const webpackMerge = require('webpack-merge')

module.exports = (env, argv) => {
  if (!argv.mode) {
    throw new Error('You must pass an --mode flag into your build for webpack to work!')
  }
  const envConfig = require(`./webpack.config.${argv.mode}.js`)(env, argv)

  return webpackMerge(baseConfig(env, argv), envConfig)
}
