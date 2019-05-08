const merge = require('webpack-merge'); // 用来合并配置
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 用于加载html模板
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin'); // 打包提示信息

// 引入基础配置
const baseWebpackConfig = require('./webpack.base.conf');
const { resolve } = require('./utils');

const devServer = {
  host: 'localhost',
  port: 8787, // 开发端口号
  inline: true, // 开启自动刷新
  hot: true, // 热重载
  open: false, // 是否自动打开浏览器
  quiet: true, // webpack 隐藏打包信息
  overlay: { // 报错的时候是否全屏显示
    warnings: true,
    errors: true
  },
  compress: true, // gzip 压缩
};

module.exports = merge(baseWebpackConfig, {
  devServer,
  mode: 'development',
  entry: resolve('example/main.js'), // 入口
  devtool: 'inline-source-map', // 因为代码是编译后的，如果报错不可能看编译后的代码，所以需要一个source-map去匹配源代码
  plugins: [
    // 载入的index模板
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: resolve('index.html'),
      inject: true,
    }),
    // 编译提示
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: [`Your application is running here: http://${devServer.host}:${devServer.port}`],
      },
    }),
  ],
});
