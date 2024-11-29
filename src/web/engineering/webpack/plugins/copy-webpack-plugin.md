# copy-webpack-plugin

## 介绍

将单个文件或整个目录（已存在）复制到生成目录。

## 使用

```js
new CopyWebpackPlugin({
  patterns: [
    {
      from: resolve(__dirname, '../public'), // 复制源
      to: resolve(__dirname, '../dist'), // 复制目标地
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

## 参考资料

- [copy-webpack-plugin](https://github.com/webpack-contrib/copy-webpack-plugin)
