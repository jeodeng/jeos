/**
 * webpack.dev.config.js
 * 存放 dev 配置
 */

const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const baseConfig = require('./webpack.base.config')
const { resolve } = require('./utils')

module.exports = merge(baseConfig, {
  mode: 'production',
  entry: {
    index: [resolve('src/index.js')] //入口
  },
  output: {
    libraryTarget: "umd",
    path: resolve('lib'),
    filename: '[name].js'
  },
})
