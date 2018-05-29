const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = require('config')

module.exports = (env, argv) => {
  const isDevMode = argv.mode !== 'production';
  return {
    output: {
      path: config.dirDes,
      filename: '[name].js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: [
            {
              loader: 'babel-loader',
              options: { cacheDirectory: true }
            }
          ],
          exclude: /node_modules/
        },
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: 'html-loader',
              options: { minimize: true }
            }
          ]
        },
        {
          test: /\.css$/,
          use: [ isDevMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader', 'postcss-loader']
        },
        {
          test: /\.less$/,
          use: [ isDevMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader', 'postcss-loader', 'less-loader']
        },
        {
          test: /\.(svg|woff|woff2|eot|ttf)$/,
          use: ['file-loader']
        }
      ]
    },
    plugins: [
      new HtmlWebPackPlugin({
        title: config.title,
        template: path.resolve(config.dirRoot, 'index.html'),
        filename: 'index.html',
        hash: true
      }),
      new MiniCssExtractPlugin({
        filename: isDevMode ? '[name].css' : '[name].[hash].css',
        chunkFilename: isDevMode ? '[id].css' : '[id].[hash].css'
      })
    ],
    resolve: {
      alias: {
        'ROOT': path.resolve(__dirname, '..'),
        'APP': path.resolve(__dirname, '../app'),
        'vue': 'vue/dist/vue.js'
      }
    }
  }
}
