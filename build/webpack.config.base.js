const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

const config = require('config');

module.exports = {
  output: {
    path: config.dirDes,
    filename: 'public/[name].js'
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
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.less/,
        use: ['style-loader', 'css-loader', 'less-loader', 'postcss-loader']
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
      template: path.resolve(config.dirSrc, 'index.html'),
      filename: 'index.html',
      hash: true
    })
  ],
  resolve: {
    alias: {
      'ROOT': path.resolve(__dirname, '..'),
      'APP': path.resolve(__dirname, '../app'),
      'vue': 'vue/dist/vue.js'
    }
  }
};
