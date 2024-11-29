# svg-sprite-loader

## 介绍

用于创建 SVG sprites 的 Webpack Loader。

## 使用

::: code-group

```js [vue.config.js]
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  chainWebpack(config) {
    // ...
    config.module.rule('svg').exclude.add(resolve('src/icons')).end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]',
      })
      .end()
    // ...
  },
}
```

:::

## 参考资料

- [svg-sprite-loader](https://github.com/JetBrains/svg-sprite-loader)
