# html-webpack-plugin

## 介绍

简化 HTML 文件的创建。

## 使用

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

## 参考资料

- [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin)
