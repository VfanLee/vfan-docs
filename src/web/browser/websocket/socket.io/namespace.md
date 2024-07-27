# 命名空间

## 主命名空间

**io 实例** 继承了 **称为 `/` 的主名称空间** 的所有方法：

```js
io.on('connection', socket => {})
io.use((socket, next) => {
  next()
})
io.emit('hello')

// 实际上相当于
io.of('/').on('connection', socket => {})
io.of('/').use((socket, next) => {
  next()
})
io.of('/').emit('hello')
```

::: tip 关于 `io.sockets`

有些教程可能还会提到 `io.sockets`，它只是 `io.of("/")`。

```js
io.sockets === io.of('/')
```

也就是说：

```js
io === io.sockets === io.of('/')
```

- `io`：是创建的 Server 实例，表示整个 Socket.io 服务器。默认情况下，它指向根命名空间。
- `io.sockets`：是 io 的别名，专门用于处理根命名空间内的事件。
- `io.of("/")`：显式地引用根命名空间。

:::

## 自定义命名空间

要设置自定义命名空间，您可以 `of` 在服务器端调用该函数：

```js
const nsp = io.of('/my-namespace')

nsp.on('connection', socket => {
  console.log('someone connected')
})

nsp.emit('hi', 'everyone!')
```

## 客户端初始化

同源版本：

```js
const socket = io() // or io("/"), 主命名空间
const orderSocket = io('/orders') // "orders" 命名空间
const userSocket = io('/users') // "users" 命名空间
```

跨域/Node.js 版本：

```js
const socket = io('https://example.com') // or io("https://example.com/"), 主命名空间
const orderSocket = io('https://example.com/orders') // the "orders" 命名空间
const userSocket = io('https://example.com/users') // the "users" 命名空间
```

在上面的示例中，只会建立一个 WebSocket 连接，并且数据包会自动路由到正确的命名空间。

请注意，在以下情况下将禁用多路复用：

- 同一命名空间的多次创建

  ```js
  const socket1 = io()
  const socket2 = io() // 无复用，两个不同的 WebSocket 连接
  ```

- 不同的域

  ```js
  const socket1 = io('https://first.example.com')
  const socket2 = io('https://second.example.com') // 无复用，两个不同的 WebSocket 连接
  ```

- [forceNew](https://socket.io/zh-CN/docs/v4/client-options/#forcenew) 配置的使用

  ```js
  const socket1 = io()
  const socket2 = io('/admin', { forceNew: true }) // 无复用，两个不同的 WebSocket 连接
  ```

## 动态命名空间

也可以使用正则表达式动态创建命名空间：

```js
io.of(/^\/dynamic-\d+$/)
```

或具有功能：

```js
io.of((name, auth, next) => {
  next(null, true) // or false, when the creation is denied
})
```

您可以在事件中访问新的命名空间 connection：

```js
io.of(/^\/dynamic-\d+$/).on('connection', socket => {
  const namespace = socket.nsp
})
```

方法的返回值 `of()` 就是我们所说的父命名空间，你可以从中：

- 注册中间件

  ```js
  const parentNamespace = io.of(/^\/dynamic-\d+$/)

  parentNamespace.use((socket, next) => {
    next()
  })
  ```

  中间件将自动在每个子命名空间上注册。

- 广播事件

  ```js
  const parentNamespace = io.of(/^\/dynamic-\d+$/)

  parentNamespace.emit('hello') // will be sent to users in /dynamic-1, /dynamic-2, ...
  ```

::: warning

现有命名空间优先于动态命名空间：

```js
// register "dynamic-101" namespace
io.of('/dynamic-101')

io.of(/^\/dynamic-\d+$/).on('connection', socket => {
  // will not be called for a connection on the "dynamic-101" namespace
})
```

:::
