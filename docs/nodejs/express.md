# Express

> [Express 中文](https://express.nodejs.cn/)
>
> 当前记录版本：v14.18.2

## 1. 路由

### 1.1. 路由方法

1. `app.get()`、`app.post()` ... 派生于 http 模块的方法，并附加到 express 类的实例。
2. `app.all()` 并非派生自 HTTP 方法。

### 1.2. 路由路径

路由路径可以是字符串、字符串模式或正则表达式。

### 1.3. req 请求对象

#### 1.3.1. 获取 query 参数

```js
// http://www.example.com/user?name=lee
app.post('/user', (req, res) => {
  console.log(req.query)
})
```

#### 1.3.2. 获取 params 参数

```js
// http://www.example.com/user/12
app.post('/user/:id', (req, res) => {
  console.log(req.params)
})
```

#### 1.3.3. 获取 body 参数

使用内置 `express.json()`、`express.urlencoded()` ... 来进行处理。

> Express v4.16.0 支持，之前版本需要额外安装 [body-parser](http://expressjs.com/en/resources/middleware/body-parser.html)。

```js
app.use(express.json())

app.post('/user', (req, res) => {
  console.log(req.body)
})
```

#### 1.3.4. 获取请求头

```js
app.post('/user', (req, res) => {
  console.log(req.headers)
})
```

#### 1.3.5. 获取 Cookie

我们可以通过 `req.headers.cookie` 获取完整的 cookie 字符串，为了方便访问，我们也可以借助 `cookie-parser` 中间件来解析 Cookie。

```js
const cookieParser = require('cookie-parser')

app.use(cookieParser())

app.post('/user', (req, res) => {
  console.log(req.cookies)
})
```

### 1.4. res 响应对象

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

### 1.5. app.router()

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

### 1.6. express.Router

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

## 2. 中间件

中间件的本质就是一个函数，可以执行以下任务：

- 执行任何代码。
- 对请求对象 (req) 和响应对象 (res) 进行更改。
- 结束请求/响应循环。
- 调用堆栈中的下一个中间件函数。

### 2.1. 中间件分类

Express 应用程序可以使用以下类型的中间件：

- [应用层中间件](https://express.nodejs.cn/en/guide/using-middleware.html#middleware.application)
- [路由器层中间件](https://express.nodejs.cn/en/guide/using-middleware.html#middleware.router)
- [错误处理中间件](https://express.nodejs.cn/en/guide/using-middleware.html#middleware.error-handling)
- [内置中间件](https://express.nodejs.cn/en/guide/using-middleware.html#middleware.built-in)
- [第三方中间件](https://express.nodejs.cn/en/guide/using-middleware.html#middleware.third-party)

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

## 3. 静态目录

```js
const { resolve } = require('path')

app.use(express.static(resolve(__dirname, 'public')))
```

## 4. 跨域处理

1. 安装依赖 `npm i cors`
2. 使用

```js
const app = require('express')
const cors = require('cors')

app.use(cors())
```

## 5. 身份认证

### 5.1. session

> express-session [参考文档](https://github.com/expressjs/session#readme)

1. `npm i express-session`
2. 使用

```js
const app = require('express')
const session = require('express-session')

app.use(session({
  secret: 'vfanlee',
  resave: false,
  saveUninitialized: true
}))

app.get('/login', (req, res) => {
  // 设置 session
  req.session.key = 'value'
})

app.get('/info', (req, res) => {
  // 获取 session
  console.log(req.session.key)
})

app.get('/logout', (req, res) => {
  // 清空 session
  req.session.destroy()
})
```

### 5.2. jwt

> jsonwebtoken [参考文档](https://github.com/auth0/node-jsonwebtoken#readme)  
> express-jwt [参考文档](https://github.com/auth0/express-jwt#readme)

1. `npm i jsonwebtoken express-jwt`
2. 使用

**jsonwebtoken**：用于生成 jwt 字符串

```js
// 1.引入 jsonwebtoken
const jwt = require('jsonwebtoken')

// 2.定义密钥
const secretKey = 'vfanlee ^_^'

// 3.生成jwt字符串
/* 
  参数1：用户的信息对象
  参数2：加密的密钥
  参数3：配置对象，可配置当前 token 有效期
 */
jwt.sign({ username: 'username' }, secretKey, { expiresIn: '30s' })
```

**express-jwt**：用于将 jwt 字符串还原成对象

```js
// 1.引入 express-jwt
const expressJWT = require('express-jwt')

// 2.解析jwt字符串
/* 
  expressJWT 解析 token
  unless 指定不需要访问权限的接口
 */
app.use(expressJWT({ secret: secretKey }).unless({ path: [/^\/api\//] }))
// req.user 可获取用户信息
```

> jwt 密钥验证：https://jwt.io/

配置完成后，客户端向服务器发送请求时，请求头需要携带 `Authorization`，且格式为：`Bearer xxxx`
