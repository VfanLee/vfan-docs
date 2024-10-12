# 版本迁移

## 从 v4 迁移至 v5

### devServer.before

在 Webpack 4 中，`devServer.before` 被用于在开发服务器启动前自定义中间件逻辑。

在 Webpack 5 中，`devServer.before` 已被弃用，官方推荐使用 `setupMiddlewares` 进行替代。

::: code-group

```js [v4] {4}
module.exports = {
  // 其他配置...
  devServer: {
    before(app) {
      app.get('/api/data', (req, res) => {
        res.json({ data: 'some data' })
      })
    },
  },
}
```

```js [v5] {4}
module.exports = {
  // 其他配置...
  devServer: {
    setupMiddlewares: (middlewares, devServer) => {
      if (!devServer) {
        throw new Error('webpack-dev-server is not defined')
      }

      devServer.app.get('/api/data', (req, res) => {
        res.json({ data: 'some data' })
      })

      return middlewares
    },
  },
}
```

:::

关键变化：

- `before` 被替换为 `setupMiddlewares`。
- `setupMiddlewares` 接受两个参数：
  1. `middlewares`：现有中间件数组。
  2. `devServer`：当前开发服务器实例。
- 需要返回 `middlewares` 数组，这样自定义的中间件可以在其他中间件之前或之后执行。
