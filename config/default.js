const path = require('path');

module.exports = {
  port: 3000,
  env: 'development',
  title: 'Project',
  dirSrc: path.resolve(__dirname, '../app'),
  dirDes: path.resolve(__dirname, '../dist'),
  dirRoot: path.resolve(__dirname, '..')
};
