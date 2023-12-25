# Webpack Loader

> [Loader 参考](https://webpack.docschina.org/loaders/)

## 处理样式文件

### sass-loader

[`sass-loader`](https://webpack.docschina.org/loaders/sass-loader/) 将 .scss 转换成 .css 文件（其他预处理器类似）。

> less-loader、stylus-loader 也是同理。

### postcss-loader

[`postcss-loader`](https://webpack.docschina.org/loaders/postcss-loader/) 会对 css 进行兼容性处理。

对于浏览器的兼容性处理范围，通过 [Browserslist](https://browsersl.ist/) 来对兼容性范围进行限制。

### css-loader

[`css-loader`](https://webpack.docschina.org/loaders/css-loader/) 将 css 文件转换成 webpack 可识别模块。

### style-loader

[`style-loader`](https://webpack.docschina.org/loaders/style-loader/) 将 css 插入到 DOM 中。

## 处理资源文件

在 webpack 5 之前，通常使用：

- [`raw-loader`](https://v4.webpack.js.org/loaders/raw-loader/) 将文件导入为字符串
- [`url-loader`](https://v4.webpack.js.org/loaders/url-loader/) 将文件作为 data URI 内联到 bundle 中
- [`file-loader`](https://v4.webpack.js.org/loaders/file-loader/) 将文件发送到输出目录

从 webpack5 起，引入了资源模块（asset module）, 它是一种模块类型，它允许使用资源文件（字体，图标等）而无需配置额外 loader。

## 处理 js 文件

### babel-loader

[`babel-loader`](https://webpack.docschina.org/loaders/babel-loader/) 会对 js 进行兼容性处理。只能处理大部分的 js 语法，对于较新语法，浏览器可能也不支持，需要配合 [corejs](https://github.com/zloirock/core-js) 来使用。
然后定义具体的 [babel 配置](https://babeljs.io/docs/en/config-files)。
对于浏览器的兼容性处理范围，通过 [Browserslist](https://browsersl.ist/) 来对兼容性范围进行限制。

#### Babel 相关优化

- Babel 开启缓存。
- Babel 在编译时，对每个文件都插入了辅助代码，所以可以引入 Babel runtime 作为一个独立模块，来避免重复引入。

```js
{
  loader: 'babel-loader',
  options: {
	  cacheDirectory: true, // 开启 babel 缓存
    cacheCompression: false, // 关闭缓存文件压缩
    plugins: [
      '@babel/plugin-transform-runtime' // 减少代码体积
    ]
  }
}
```

- Babel 在配合 corejs 使用时，可以在 babel 配置中让 corejs 按需引入。

```js
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage', // 按需加载 core-js 的 polyfill
        corejs: 3 // 指定 corejs 版本
      }
    ]
  ]
}
```

## thread-loader

[`thread-loader`](https://github.com/webpack-contrib/thread-loader) 开启多线程打包。
