# 身份认证（鉴权）

## session

> [express-session](https://github.com/expressjs/session#readme)

```sh
npm i express-session
```

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

## JWT

> jsonwebtoken [参考文档](https://github.com/auth0/node-jsonwebtoken#readme)  
> express-jwt [参考文档](https://github.com/auth0/express-jwt#readme)

```sh
npm i jsonwebtoken express-jwt
```

- **jsonwebtoken**：用于生成 jwt 字符串

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

- **express-jwt**：用于将 jwt 字符串还原成对象

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

> jwt 密钥验证：<https://jwt.io/>

配置完成后，客户端向服务器发送请求时，请求头需要携带 `Authorization`，且格式为：`Bearer xxxx`
