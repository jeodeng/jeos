/**
 * webpack.base.config.js
 * 存放 dev 和 prod 通用配置
 */

const { VueLoaderPlugin } = require('vue-loader')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')

const { resolve } = require('./utils')
module.exports = {
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.(vue|js)$/,
        loader: 'eslint-loader',
        enforce: 'pre', // 确保它是作为一个 pre-loader
        include: [resolve('src')],
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader'
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.styl$/,
        use: ['vue-style-loader', 'css-loader']
      },
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|gif|eot|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              limit: 5000,
              // 分离图片至imgs文件夹
              name: 'imgs/[name].[ext]'
            }
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      '@': resolve('src'),
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['.js', '.vue'],
  },
  plugins: [
    new VueLoaderPlugin(),
    // TODO 友好的错误提示
    new FriendlyErrorsWebpackPlugin()
  ] // 插件
}
