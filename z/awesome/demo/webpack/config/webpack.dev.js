const os = require('os')
const path = require('path')
const ESLintWebpackPlugin = require('eslint-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  module: {
    rules: [
      {
        // 匹配一个 loader 后，后续的 loader 就不会执行了
        oneOf: [
          {
            test: /\.css$/,
            use: [
              'style-loader', // 将js中css通过创建style标签添加html文件中生效
              'css-loader', // 将css资源编译成commonjs的模块到js中
              {
                loader: 'postcss-loader', // css 兼容性处理
                options: {
                  postcssOptions: {
                    plugins: ['postcss-preset-env']
                  }
                }
              }
            ]
          },
          {
            test: /\.scss$/,
            use: [
              'style-loader',
              'css-loader',
              {
                loader: 'postcss-loader',
                options: {
                  postcssOptions: {
                    plugins: ['postcss-preset-env']
                  }
                }
              },
              'sass-loader' // 将sass编译成css文件
            ]
          },
          {
            test: /\.(png|jpe?g|gif|webp|svg)$/,
            type: 'asset'
          },
          {
            test: /\.(ttf|woff2?|map3|map4|avi)$/,
            type: 'asset/resource'
          },
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: [
              {
                loader: 'thread-loader', // 开启多进程
                options: {
                  workers: os.cpus().length - 1 // 进程数量
                }
              },
              {
                loader: 'babel-loader', // js 兼容性处理
                options: {
                  cacheDirectory: true, // 开启 babel 缓存
                  cacheCompression: false, // 关闭缓存文件压缩
                  plugins: [
                    '@babel/plugin-transform-runtime' // 减少代码体积
                  ]
                }
              }
            ]
          }
        ]
      }
    ]
  },
  plugins: [
    // ESLint
    new ESLintWebpackPlugin({
      context: path.resolve(__dirname, '../src'),
      cache: true, // 开启缓存
      cacheLocation: path.resolve(__dirname, '../node_modules/.cache/.eslint'), // 缓存路径
      threads: os.cpus().length - 1 // 开启多线程
    }),
    // 定义模板文件，并且自动引入打包的资源
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html')
    })
  ],
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    host: 'localhost',
    port: '3000',
    open: true,
    hot: true // 开启HMR功能
  }
}
