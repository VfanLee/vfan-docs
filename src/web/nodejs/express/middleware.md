# 中间件

中间件的本质就是一个函数，可以执行以下任务：

- 执行任何代码。
- 对请求对象 (req) 和响应对象 (res) 进行更改。
- 结束请求/响应循环。
- 调用堆栈中的下一个中间件函数。

## 中间件分类

Express 应用程序可以使用以下类型的中间件：

- [应用层中间件](https://express.nodejs.cn/en/guide/using-middleware.html#middleware.application)
- [路由器层中间件](https://express.nodejs.cn/en/guide/using-middleware.html#middleware.router)
- [错误处理中间件](https://express.nodejs.cn/en/guide/using-middleware.html#middleware.error-handling)
- [内置中间件](https://express.nodejs.cn/en/guide/using-middleware.html#middleware.built-in)
- [第三方中间件](https://express.nodejs.cn/en/guide/using-middleware.html#middleware.third-party)

## 中间件使用时的注意事项

1. 中间件加载顺序很重要，处理错误级别的中间件必须注册在所有路由之后，其他中间件都需要放在路由之前处理。
2. 客户端发来的请求，可以连续调用多个中间件处理。
3. 连续调用中间件时，共享 req, res 对象。
4. 如果当前中间件函数没有结束请求/响应循环，那么它必须调用 next()，以将控制权传递给下一个中间件函数。否则，请求将保持挂起状态。

## 自定义中间件

```js
// 定义自定义中间件
function myLogger (req, res, next) {
  console.log('myLogger')
  next()
}

// 使用 myLogger 中间件
app.use(myLogger)
```

## 错误处理中间件

1. 错误处理中间件函数的定义方式与其他中间件函数基本相同，差别在于错误处理函数有四个变量而不是三个：`(err, req, res, next)`。
2. 在其他 app.use() 和路由调用之后，最后定义错误处理中间件。

```js
app.get('/', function(req, res) {
  throw new Error('something has error...')
})

// 定义错误处理中间件，参数不能省略！
function errorHandler (err, req, res, next) {
  // logic
}

// 使用错误处理中间件【需要放在最后】
app.use(errorHandler)
```
