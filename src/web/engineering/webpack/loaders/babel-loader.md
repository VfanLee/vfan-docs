# babel-loader

[`babel-loader`](https://webpack.docschina.org/loaders/babel-loader/) 会对 js 进行兼容性处理。只能处理大部分的 js 语法，对于较新语法，浏览器可能也不支持，需要配合 [corejs](https://github.com/zloirock/core-js) 来使用。
然后定义具体的 [babel 配置](https://babeljs.io/docs/en/config-files)。
对于浏览器的兼容性处理范围，通过 [Browserslist](https://browsersl.ist/) 来对兼容性范围进行限制。

## Babel 相关优化

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
        corejs: 3, // 指定 corejs 版本
      },
    ],
  ],
}
```
