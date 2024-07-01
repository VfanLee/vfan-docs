# Webpack 插件

> [Plugin 参考](https://webpack.docschina.org/plugins/)

## CaseSensitivePaths

> [case-sensitive-paths-webpack-plugin](https://github.com/Urthen/case-sensitive-paths-webpack-plugin)

在 Webpack 中强制执行区分大小写的路径要求。

## FriendlyErrors

> [friendly-errors-webpack-plugin](https://github.com/geowarin/friendly-errors-webpack-plugin)

识别某些类别的 webpack 错误并清理、聚合和优先处理它们，以提供更好的开发人员体验。

## Html

> [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin)

简化 HTML 文件的创建。

```js
new HtmlWebpackPlugin({
  template: 'public/index.html', // 模板文件
  title: 'Webpack Demo', // 生成的 html title
  filename: 'index.html', // 生成的文件名
  // 用于 <script> 和 <link> 的 publicPath
  // 默认 'auto' 为 webpackConfig.output.publicPath
  publicPath: 'auto'
})
```

## MiniCssExtract

> [mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin)

轻量级 CSS 提取插件。

## CssMinimizer

> [css-minimizer-webpack-plugin](https://github.com/webpack-contrib/css-minimizer-webpack-plugin)

使用 cssnano 优化和压缩 CSS。

## Terser

> [terser-webpack-plugin](https://github.com/webpack-contrib/terser-webpack-plugin)

使用 terser 来压缩 JavaScript。

## Copy

> [copy-webpack-plugin](https://github.com/webpack-contrib/copy-webpack-plugin)

将单个文件或整个目录（已存在）复制到生成目录。

```js
new CopyWebpackPlugin({
  patterns: [
    {
      from: resolve(__dirname, '../public'), // 从哪儿复制
      to: resolve(__dirname, '../dist'), // 复制到哪儿
      globOptions: {
        ignore: ['**/public/index.html'] // 忽略文件
      },
      info: {
        minimized: false // 复制时是否跳过使用 Terser 压缩
      }
    }
  ]
})
```
