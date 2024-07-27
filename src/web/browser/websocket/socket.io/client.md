# socket.io 客户端（浏览器）

::: tip 参考于

- [socket.io 客户端](https://socket.io/zh-CN/docs/v4/client-installation/)
- [socket.io 客户端 API](https://socket.io/zh-CN/docs/v4/client-api/)
:::

## 安装

```sh
npm i socket.io-client
```

## 初始化

```js
import { io } from 'socket.io-client'

const socket = io('https://server-domain.com')
```

::: tip
如果客户端与服务器属于同一个域，那么可以省略服务器的 URL：

```js
const socket = io()
```

服务器 URL 将从 `window.location` 对象中推导出来。
:::

## 属性

### id

每个新连接都分配有一个随机的 20 个字符的标识符。

此标识符与服务器端的值同步。

```js
// server-side
io.on('connection', socket => {
  console.log(socket.id) // x8WIv7-mJelg7on_ALbx
})

// client-side
socket.on('connect', () => {
  console.log(socket.id) // x8WIv7-mJelg7on_ALbx
})

socket.on('disconnect', () => {
  console.log(socket.id) // undefined
})
```

### connected

该属性描述套接字当前是否连接到服务器。

```js
socket.on('connect', () => {
  console.log(socket.connected) // true
})

socket.on('disconnect', () => {
  console.log(socket.connected) // false
})
```

### io

对基础 [Manager](https://socket.io/zh-CN/docs/v4/client-api/#manager) 的引用。

```js
socket.on('connect', () => {
  const engine = socket.io.engine
  console.log(engine.transport.name) // in most cases, prints "polling"

  engine.once('upgrade', () => {
    // called when the transport is upgraded (i.e. from HTTP long-polling to WebSocket)
    console.log(engine.transport.name) // in most cases, prints "websocket"
  })

  engine.on('packet', ({ type, data }) => {
    // called for each packet received
  })

  engine.on('packetCreate', ({ type, data }) => {
    // called for each packet sent
  })

  engine.on('drain', () => {
    // called when the write buffer is drained
  })

  engine.on('close', reason => {
    // called when the underlying connection is closed
  })
})
```

## 方法

### connect()

手动连接

### disconnect()

手动断开连接

## 事件

### connect

此事件由 Socket 实例在连接和重新连接时触发。

```js
socket.on('connect', () => {
  // ...
})
```

请注意，您不应在 connect 处理程序本身中注册事件处理程序，因为每次 Socket 重新连接时都会注册一个新的处理程序：

```js{3,11}
// BAD
socket.on("connect", () => {
  socket.on("data", () => { /* ... */ });
});

// GOOD
socket.on("connect", () => {
  // ...
});

socket.on("data", () => { /* ... */ });
```

### connect_error

在以下情况下触发此事件：

- 低级连接无法建立；
- 服务器在中间件功能中拒绝连接。

这种情况下，Socket 会在 [给定的延迟](https://socket.io/zh-CN/docs/v4/client-options/#reconnectiondelay) 之后 **自动尝试重新连接**。

这种情况下，你需要 **手动重新连接**。你可能需要更新凭据：

```js
// 直接修改 `auth` 属性
socket.on('connect_error', () => {
  socket.auth.token = 'abcd'
  socket.connect()
})

// 或者，如果 `auth` 属性是一个函数
const socket = io({
  auth: cb => {
    cb(localStorage.getItem('token'))
  },
})

socket.on('connect_error', () => {
  setTimeout(() => {
    socket.connect()
  }, 1000)
})
```

### disconnect

此事件在断开连接时触发。

```js
socket.on('disconnect', reason => {
  // ...
})
```

以下是可能的原因列表：

| `reason`             | 描述                                                      |
| -------------------- | --------------------------------------------------------- |
| io server disconnect | 服务器已使用 `socket.disconnect()` 强制断开 socket        |
| io client disconnect | 使用 `socket.disconnect()` 手动断开 socket                |
| ping timeout         | 服务器未在该 pingInterval + pingTimeout 范围内发送 PING   |
| transport close      | 连接已关闭（例如：用户失去连接，或网络从 WiFi 更改为 4G） |
| transport error      | 连接遇到错误（例如：服务器在 HTTP 长轮询周期中被杀死）    |

前两种情况（显式断开），客户端不会尝试重新连接，需要手动调用 `socket.connect()`。

在其他情况下，客户端将等待一个小的 [随机延迟](https://socket.io/zh-CN/docs/v4/client-options/#reconnectiondelay)，然后尝试重新连接：

```js
socket.on('disconnect', reason => {
  if (reason === 'io server disconnect') {
    // the disconnection was initiated by the server, you need to reconnect manually
    socket.connect()
  }
  // else the socket will automatically try to reconnect
})
```

注意：这些事件以及 `disconnecting`, `newListener` 和 `removeListener` 是不应在您的应用程序中使用的特殊事件：

```js
// BAD, will throw an error
socket.emit('disconnect')
```
