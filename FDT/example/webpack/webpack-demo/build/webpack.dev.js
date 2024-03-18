const config = require('./config')
const { resolve, join } = require('path')
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  context: resolve(__dirname, '../'),
  entry: './src/main.js',
  output: {
    publicPath: config.publicPath,
    hashFunction: 'xxhash64',
    path: resolve(__dirname, '../dist'),
    filename: 'js/[name].js',
    chunkFilename: 'js/[name].js',
    assetModuleFilename: 'asset/[name].[hash:8][ext]'
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
            loader: 'style-loader'
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
            loader: 'style-loader'
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
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: 'node_modules/.cache/babel-loader',
              cacheCompression: false
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
            minimized: true
          }
        }
      ]
    })
  ],
  devServer: {
    client: {
      logging: 'info',
      overlay: {
        errors: true,
        warnings: true
      },
      progress: true,
      reconnect: true
    },
    https: false,
    host: 'local-ip',
    port: 'auto',
    static: {
      publicPath: config.publicPath
    },
    open: [config.publicPath],
    hot: true, // 模块热替换
    liveReload: false, // 当监听到文件变化时 dev-server 将会重新加载或刷新页面
    onListening: function (devServer) {
      if (!devServer) {
        throw new Error('webpack-dev-server is not defined')
      }
      const { address, port } = devServer.server.address()
      const protocol = devServer.options.https ? 'https' : 'http'
      const publicPath = devServer.options.static[0].publicPath[0]
      console.log(`Listening on: ${protocol}://${address}:${port}${publicPath}`)
    }
  },
  stats: 'errors-only',
  externals: {
    jquery: 'jQuery'
  }
}
