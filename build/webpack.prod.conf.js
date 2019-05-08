const merge = require('webpack-merge'); // 用来合并配置

// 引入基础配置
const baseWebpackConfig = require('./webpack.base.conf.js');
const { resolve } = require('./utils');

module.exports = merge(baseWebpackConfig, {
  mode: 'production',
  entry: resolve('src/index.js'),
});
