const os = require('os')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerwWbpackPlugin = require('css-minimizer-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: './src/main.js',
  output: {
    // 所有文件的输出路径
    path: path.resolve(__dirname, '../dist'),
    // 输出 bundle 的名称
    filename: 'js/[name].[contenthash:10].js',
    // 非初始 chunk 文件的名称
    chunkFilename: 'js/[name].chunk.[contenthash:10].js',
    // Asset Modules 处理资源的文件的命名
    assetModuleFilename: 'media/[hash:10][ext][query]',
    // 在生成文件之前清空 output 目录
    clean: true
  },
  module: {
    rules: [
      {
        // 匹配一个 loader 后，后续的 loader 就不会执行了
        oneOf: [
          {
            test: /\.css$/,
            use: [
              // 提取css成单独文件
              MiniCssExtractPlugin.loader,
              'css-loader',
              {
                loader: 'postcss-loader',
                options: {
                  postcssOptions: {
                    plugins: ['postcss-preset-env']
                  }
                }
              }
            ]
          },
          {
            test: /\.s[ac]ss$/,
            use: [
              MiniCssExtractPlugin.loader,
              'css-loader',
              {
                loader: 'postcss-loader',
                options: {
                  postcssOptions: {
                    plugins: ['postcss-preset-env']
                  }
                }
              },
              'sass-loader'
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
                loader: 'thread-loader',
                options: {
                  workers: os.cpus().length - 1
                }
              },
              {
                loader: 'babel-loader',
                options: {
                  cacheDirectory: true,
                  cacheCompression: true,
                  plugins: ['@babel/plugin-transform-runtime']
                }
              }
            ]
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html')
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:10].css',
      chunkFilename: 'css/[name].chunk.[contenthash:10].css'
    })
  ],
  optimization: {
    minimizer: [
      // css 压缩
      new CssMinimizerwWbpackPlugin(),
      // js 压缩
      new TerserWebpackPlugin({
        parallel: os.cpus.length - 1 // 开启多线程
      })
    ],
    // 代码分割配置
    splitChunks: {
      chunks: 'all' // 对所有模块都进行分割
    },
    // 缓存
    runtimeChunk: {
      name: entrypoint => `runtime~${entrypoint.name}.js`
    }
  }
}
