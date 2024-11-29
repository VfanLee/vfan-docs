# 处理资源 loader

在 webpack 5 之前，通常使用：

- [`raw-loader`](https://v4.webpack.js.org/loaders/raw-loader/) 将文件导入为字符串
- [`url-loader`](https://v4.webpack.js.org/loaders/url-loader/) 将文件作为 data URI 内联到 bundle 中
- [`file-loader`](https://v4.webpack.js.org/loaders/file-loader/) 将文件发送到输出目录

从 webpack5 起，引入了资源模块（asset module）, 它是一种模块类型，它允许使用资源文件（字体，图标等）而无需配置额外 loader。
