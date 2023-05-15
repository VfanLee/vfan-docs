# Express

> Express 官网：[https://expressjs.com/](https://expressjs.com/)  
> API 参考：[https://expressjs.com/en/4x/api.html](https://expressjs.com/en/4x/api.html)  
> 当前版本：4.8.12

## 1. 路由

### 1.1. 路由方法

1. `app.get()`、`app.post()` ... 派生于 http 模块的方法，并附加到 express 类的实例。
2. `app.all()` 并非派生自 HTTP 方法。

### 1.2. 路由路径

路由路径可以是字符串、字符串模式或正则表达式。

### 1.3. req 请求对象

#### 获取 query 参数

```js
// http://www.example.com/user?name=lee
app.post('/user', (req, res) => {
  console.log(req.query)
})
```

#### 获取 params 参数

```js
// http://www.example.com/user/12
app.post('/user/:id', (req, res) => {
  console.log(req.params)
})
```

#### 获取 body 参数

使用内置 `express.json()`、`express.urlencoded()` ... 来进行处理。

> Express v4.16.0 支持，之前版本需要额外安装 [body-parser](http://expressjs.com/en/resources/middleware/body-parser.html)。

```js
app.use(express.json())

app.post('/user', (req, res) => {
  console.log(req.body)
})
```

### 1.4. res 响应对象

响应对象 (res) 的方法可以向客户机发送响应，并终止请求/响应循环。如果没有从路由处理程序调用其中任何方法，客户机请求将保持挂起状态。

### 1.5. app.router()

使用 [app.router()](https://expressjs.com/zh-cn/4x/api.html#app.route) 为路由路径创建可链接的路由处理程序。 因为在单一位置指定路径，所以可以减少冗余和输入错误。

```js
app.route('/events')
  .all(function (req, res, next) {
    // runs for all HTTP verbs first
    // think of it as route specific middleware!
  })
  .get(function (req, res, next) {
    res.json({})
  })
  .post(function (req, res, next) {
    // maybe add a new event...
  })
```

### 1.6. express.Router

使用 [express.Router](https://expressjs.com/zh-cn/4x/api.html#express.router) 类来创建可安装的模块化路由处理程序。Router 实例是完整的中间件和路由系统；因此，常常将其称为“微型应用程序”。

示例：

1. 在应用程序目录中创建名为 `birds.js` 的路由器文件，其中包含以下内容：

```js
var express = require('express');
var router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

// define the home page route
router.get('/', function(req, res) {
  res.send('Birds home page');
});

// define the about route
router.get('/about', function(req, res) {
  res.send('About birds');
});

module.exports = router;
```

2. 接着，在应用程序中装入路由器模块：

```js
var birds = require('./birds');

app.use('/birds', birds);
```

此应用程序现在可处理针对 /birds 和 /birds/about 的请求，调用特定于此路由的 timeLog 中间件函数。

## 2. 中间件

中间件的本质就是一个函数，可以执行以下任务：

- 执行任何代码。
- 对请求对象 (req) 和响应对象 (res) 进行更改。
- 结束请求/响应循环。
- 调用堆栈中的下一个中间件函数。

### 2.1. 中间件分类

Express 应用程序可以使用以下类型的中间件：

- [应用层中间件](https://expressjs.com/zh-cn/guide/using-middleware.html#middleware.application)
- [路由器层中间件](https://expressjs.com/zh-cn/guide/using-middleware.html#middleware.router)
- [错误处理中间件](https://expressjs.com/zh-cn/guide/using-middleware.html#middleware.error-handling)
- [内置中间件](https://expressjs.com/zh-cn/guide/using-middleware.html#middleware.built-in)
- [第三方中间件](https://expressjs.com/zh-cn/guide/using-middleware.html#middleware.third-party)

### 2.2. 中间件使用时的注意事项

1. 中间件加载顺序很重要，处理错误级别的中间件必须注册在所有路由之后，其他中间件都需要放在路由之前处理。
2. 客户端发来的请求，可以连续调用多个中间件处理。
3. 连续调用中间件时，共享 req, res 对象。
4. 如果当前中间件函数没有结束请求/响应循环，那么它必须调用 next()，以将控制权传递给下一个中间件函数。否则，请求将保持挂起状态。

### 2.3. 自定义中间件

```js
// 定义自定义中间件
function myLogger (req, res, next) {
  console.log('myLogger')
  next()
}

// 使用 myLogger 中间件
app.use(myLogger)
```

### 2.4. 错误处理中间件

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

## 3. 跨域处理

1. 安装依赖 `npm i cors`
2. 使用

```js
const app = require('express')
const cors = require('cors')

app.use(cors())
```
