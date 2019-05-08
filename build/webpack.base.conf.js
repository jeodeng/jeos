const { VueLoaderPlugin } = require('vue-loader');

const { resolve } = require('./utils');

module.exports = {
  // 由于我在src里面写工具方法，需要有一个开发环境调试这些方法，那么dev和prod的入口不同，所以在各自的conf文件里面写
  output: {
    path: resolve('lib'), // 输出文件夹路径
    filename: 'vue-meow.js', // 输出文件名
    library: 'vueMeow', // 输出的工具库名，可暴露为全局变量
    libraryTarget: 'umd', // 为了让该库能够在其他环境，如node, 浏览器等均可被引用，用umd，全面兼容
  },
  module: {
    rules: [
      {
        test: /\.js$/, // 匹配以js结尾的文件
        use: [
          {
            loader: 'babel-loader' // 使用babel-loader进行编译
          }
        ],
        exclude: /node_modules/, // 不包括依赖文件
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
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
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.vue'], // import的时候路径自动添加上文件后缀
    alias: {
      'vue$': 'vue/dist/vue.esm.js', // 这个如果不写，在import vue的时候其实导入的是vue.common.js（在node_modules里面），但我不想导入这个，所以改写一下
      '@': resolve('src'), // 设置别名是为了项目中能直接import '@/utils/xxx.js'这样，方便。
    },
  },
  plugins: [
    new VueLoaderPlugin(), // vue-loader插件，编译需要
  ],
};
