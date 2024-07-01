# 路由

## 路由方法

1. `app.get()`、`app.post()` ... 派生于 http 模块的方法，并附加到 express 类的实例。
2. `app.all()` 并非派生自 HTTP 方法。

## 路由路径

路由路径可以是字符串、字符串模式或正则表达式。

## req 请求对象

### 获取 query 参数

```js
// http://www.example.com/user?name=lee
app.post('/user', (req, res) => {
  console.log(req.query)
})
```

### 获取 params 参数

```js
// http://www.example.com/user/12
app.post('/user/:id', (req, res) => {
  console.log(req.params)
})
```

### 获取 body 参数

使用内置 `express.json()`、`express.urlencoded()` ... 来进行处理。

> Express v4.16.0 支持，之前版本需要额外安装 [body-parser](http://expressjs.com/en/resources/middleware/body-parser.html)。

```js
app.use(express.json())

app.post('/user', (req, res) => {
  console.log(req.body)
})
```

### 获取请求头

```js
app.post('/user', (req, res) => {
  console.log(req.headers)
})
```

### 获取 Cookie

我们可以通过 `req.headers.cookie` 获取完整的 cookie 字符串，为了方便访问，我们也可以借助 `cookie-parser` 中间件来解析 Cookie。

```js
const cookieParser = require('cookie-parser')

app.use(cookieParser())

app.post('/user', (req, res) => {
  console.log(req.cookies)
})
```

## res 响应对象

响应对象 (res) 的方法可以向客户机发送响应，并终止请求/响应循环。如果没有从路由处理程序调用其中任何方法，客户机请求将保持挂起状态。以下是一些常用的 res 方法：

- `res.send(data)`: 发送 HTTP 响应。data 可以是一个字符串、一个 Buffer 对象、一个 JSON 对象，或者是一个数组。
- `res.json(data)`: 发送一个 JSON 格式的 HTTP 响应。data 是一个 JSON 对象。
- `res.status(code)`: 设置 HTTP 状态码。code 是一个 HTTP 状态码，例如 200、404 等。
- `res.set(name, value)`: 设置一个 HTTP 头部。name 是头部的名称，value 是头部的值。
- `res.get(name)`: 获取一个 HTTP 头部的值。name 是头部的名称。
- `res.cookie(name, value, options)`: 设置一个 Cookie。name 是 Cookie 的名称，value 是 Cookie 的值，options 是一个对象，包含了一些可选的设置。
- `res.clearCookie(name, options)`: 清除一个 Cookie。name 是 Cookie 的名称，options 是一个对象，包含了一些可选的设置。
- `res.redirect([status], url)`: 重定向到一个新的 URL。status 是一个可选的 HTTP 状态码，默认为 302，url 是重定向的 URL。
- `res.render(view, locals, callback)`: 渲染一个视图模板。view 是模板的名称，locals 是一个对象，包含了模板中使用的变量，callback 是一个回调函数。

## app.router()

使用 [app.router()](https://express.nodejs.cn/en/4x/api.html#app.route) 为路由路径创建可链接的路由处理程序。 因为在单一位置指定路径，所以可以减少冗余和输入错误。

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

## express.Router

使用 [express.Router](https://express.nodejs.cn/en/4x/api.html#express.router) 类来创建可安装的模块化路由处理程序。Router 实例是完整的中间件和路由系统；因此，常常将其称为“微型应用程序”。

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
