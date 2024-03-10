const { resolve } = require('path')
const config = require('./config')
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  context: resolve(__dirname, '../'),
  entry: './src/main.js',
  output: {
    publicPath: config.publicPath,
    hashFunction: 'xxhash64',
    path: resolve(__dirname, '../dist'),
    filename: 'js/[name].[contenthash:8].js',
    chunkFilename: 'js/[name].chunk.[contenthash:8].js',
    assetModuleFilename: 'asset/[name].[hash:8][ext]',
    clean: true
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, '../src')
    }
  },
  module: {
    rules: [
      /* config.module.rule('svg') */
      {
        test: /\.(svg)(\?.*)?$/,
        type: 'asset/resource',
        generator: {
          filename: 'img/[name].[hash:8][ext]'
        }
      },
      /* config.module.rule('images') */
      {
        test: /\.(png|jpe?g|gif|webp|avif)(\?.*)?$/,
        type: 'asset',
        generator: {
          filename: 'img/[name].[hash:8][ext]'
        }
      },
      /* config.module.rule('media') */
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        type: 'asset',
        generator: {
          filename: 'media/[name].[hash:8][ext]'
        }
      },
      /* config.module.rule('fonts') */
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
        type: 'asset',
        generator: {
          filename: 'fonts/[name].[hash:8][ext]'
        }
      },
      /* config.module.rule('css') */
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: config.publicPath
            }
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: false,
              importLoaders: 2
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: false
            }
          }
        ]
      },
      /* config.module.rule('s[ac]ss') */
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: config.publicPath
            }
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              importLoaders: 2
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      /* config.module.rule('js') */
      {
        test: /\.m?js?$/,
        exclude: /node_modules/,
        use: [
          /* config.module.rule('js').use('thread-loader') */
          'thread-loader',
          /* config.module.rule('js').use('babel-loader') */
          {
            loader: 'babel-loader',
            options: {
              cacheCompression: false,
              cacheDirectory: 'node_modules/.cache/babel-loader'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    /* config.plugin('case-sensitive-paths') */
    new CaseSensitivePathsPlugin(),
    /* config.plugin('friendly-errors') */
    new FriendlyErrorsWebpackPlugin(),
    /* config.plugin('html') */
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      title: 'Webpack Demo',
      filename: 'index.html',
      publicPath: 'auto'
    }),
    /* config.plugin('mini-css-extract') */
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].chunk.[contenthash:8].css'
    }),
    /* config.plugin('copy') */
    new CopyWebpackPlugin({
      patterns: [
        {
          from: resolve(__dirname, '../public'),
          to: resolve(__dirname, '../dist'),
          globOptions: {
            ignore: ['**/public/index.html']
          },
          info: {
            minimized: false
          }
        }
      ]
    })
  ],
  optimization: {
    realContentHash: false,
    splitChunks: {
      chunks: 'all'
    },
    minimize: true,
    minimizer: [
      /* config.optimization.minimizer('css') */
      new CssMinimizerPlugin(),
      /* config.optimization.minimizer('terser') */
      new TerserPlugin()
    ]
  },
  externals: {
    jquery: 'jQuery'
  }
}
