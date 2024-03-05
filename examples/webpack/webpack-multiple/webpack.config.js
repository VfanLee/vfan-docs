const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const chunks = ['pc', 'mobile']

module.exports = {
  mode: 'production',
  context: resolve(__dirname),
  entry: {
    pc: './src/pages/pc/main.js',
    mobile: './src/pages/mobile/main.js'
  },
  output: {
    path: resolve(__dirname, 'dist'),
    filename: '[name]-[chunkhash].js',
    clean: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `public/index.html`,
      filename: `index.html`,
      excludeChunks: chunks
    }),
    ...chunks.map(
      name =>
        new HtmlWebpackPlugin({
          template: `public/${name}.html`,
          filename: `${name}.html`,
          title: `${name}`,
          chunks: [name]
        })
    )
  ]
}
