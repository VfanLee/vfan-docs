# socket.io 服务端（Node.js）

::: tip 参考于

- [socket.io 服务器](https://socket.io/zh-CN/docs/v4/server-installation/)
- [socket.io 服务器端 API](https://socket.io/zh-CN/docs/v4/server-api/)
:::

## 安装

```sh
npm i socket.io
```

## 启动一个 socket.io 服务

### 只使用 ws

```js
const { Server } = require('socket.io')

const io = new Server({
  /* options */
})

io.on('connection', socket => {
  // ...
})

io.listen(3000)
```

或者，将端口作为第一个参数传递：

```js
const { Server } = require('socket.io')

const io = new Server(3000, {
  /* options */
})

io.on('connection', socket => {
  // ...
})
```

### 使用 HTTP/S 服务

```js
const http = require('http')
const { Server } = require('socket.io')

const httpServer = http.createServer()
const io = new Server(httpServer, { /* options */ })

io.on('connect', socket => {
  // ...
})

httpServer.listen(3000)
```

### 使用 Express

```js
const http = require('http')
const express = require('express')
const { Server } = require('socket.io')

const app = express()
const httpServer = http.createServer(app)
const io = new Server(httpServer, { /* options */ })

io.on('connect', socket => {
  // ...
})

httpServer.listen(3000)
```

更多方式请参考 [socket.io 服务器初始化](https://socket.io/zh-CN/docs/v4/server-initialization/)。

## Server 方法

### socketsJoin

此方法使匹配的 Socket 实例加入指定的房间：

```js
// 使所有 Socket 实例加入“room1”房间
io.socketsJoin('room1')

// 使“room1”房间中的所有 Socket 实例加入“room2”和“room3”房间
io.in('room1').socketsJoin(['room2', 'room3'])

// 使“admin”命名空间的“room1”房间中的所有 Socket 实例加入“room2”房间
io.of('/admin').in('room1').socketsJoin('room2')

// 这也适用于单个 Socket ID
io.in(theSocketId).socketsJoin('room1')
```

### socketsLeave

该方法使匹配的 Socket 实例离开指定房间：

```js
// 让所有 Socket 实例离开“room1”房间
io.socketsLeave('room1')

// 使“room1”房间中的所有 Socket 实例离开“room2”和“room3”房间
io.in('room1').socketsLeave(['room2', 'room3'])

// 使“admin”命名空间的“room1”房间中的所有 Socket 实例离开“room2”房间
io.of('/admin').in('room1').socketsLeave('room2')

// 这也适用于单个 Socket ID
io.in(theSocketId).socketsLeave('room1')
```

### disconnectSockets

此方法使匹配的 Socket 实例断开连接：

```js
// 使所有 Socket 实例断开连接
io.disconnectSockets()

// 使“room1”房间中的所有 Socket 实例断开连接（并丢弃低级连接）
io.in('room1').disconnectSockets(true)

// 使“room1”房间中的所有 Socket 实例断开admin" 命名空间断开
io.of('/admin').in('room1').disconnectSockets()

// 这也适用于单个 Socket ID
io.of('/admin').in(theSocketId).disconnectSockets()
```

### fetchSockets

此方法返回匹配的 Socket 实例：

```js
// 返回主命名空间的所有 Socket 实例
const sockets = await io.fetchSockets()

// 返回主命名空间的“room1”房间中的所有 Socket 实例
const sockets = await io.in('room1').fetchSockets()

// 返回“admin”命名空间的“room1”房间中的所有 Socket 实例
const sockets = await io.of('/admin').in('room1').fetchSockets()

// 这也适用于单个 Socket ID
const sockets = await io.in(theSocketId).fetchSockets()
```

上例中的 sockets 变量是一个对象数组，暴露了通常的 Socket 类的一个子集：

```js
for (const socket of sockets) {
  console.log(socket.id)
  console.log(socket.handshake)
  console.log(socket.rooms)
  console.log(socket.data)
  socket.emit(/* ... */)
  socket.join(/* ... */)
  socket.leave(/* ... */)
  socket.disconnect(/* ... */)
}
```

data 属性是一个任意对象，可用于在 Socket.IO 服务器之间共享信息：

```js
// server A
io.on('connection', socket => {
  socket.data.username = 'alice'
})

// server B
const sockets = await io.fetchSockets()
console.log(sockets[0].data.username) // "alice"
```

### serverSideEmit

此方法允许在多服务器设置中向集群的其他 Socket.IO 服务器发出事件。

发送方：

```js
io.serverSideEmit('hello', 'world')
```

接收方：

```js
io.on('hello', arg1 => {
  console.log(arg1) // prints "world"
})
```

也支持确认：

```js
// server A
io.serverSideEmit('ping', (err, responses) => {
  console.log(responses[0]) // prints "pong"
})

// server B
io.on('ping', cb => {
  cb('pong')
})
```

::: tip

- `connection`, `connect` 和 `new_namespace` 字符串是保留的，不能在您的应用程序中使用。
- 您可以发送任意数量的参数，但目前不支持二进制结构（参数数组将被 `JSON.stringify`-ed）

例如：

```js
io.serverSideEmit('hello', 'world', 1, '2', { 3: '4' })
```

如果其他 Socket.IO 服务器在给定延迟后没有响应，则调用确认回调可能会出错

```js
io.serverSideEmit('ping', (err, responses) => {
  if (err) {
    // 至少有一个 Socket.IO 服务器尚未响应
    // 'responses' 数组包含已收到的所有响应
  } else {
    // 成功！ “responses”数组包含集群中每个其他 Socket.IO 服务器一个对象
  }
})
```

:::

## Server 事件

### connection

此事件在新连接时触发。第一个参数是一个 Socket 实例.

```js
io.on('connection', socket => {
  // ...
})
```

::: tip
`connect` 它是 `connection` 的别名。
:::

## Socket 属性

### id

### handshake

### rooms

### data

### conn

### "Additional" 属性

只要您不覆盖任何现有属性，您就可以将任何属性附加到 Socket 实例并在以后使用它：

```js
// 在中间件中
io.use(async (socket, next) => {
  try {
    const user = await fetchUser(socket)
    socket.user = user
  } catch (e) {
    next(new Error('unknown user'))
  }
})

io.on('connection', socket => {
  console.log(socket.user)

  // 在事件监听器中
  socket.on('set username', username => {
    socket.username = username
  })
})
```

## Socket 方法

### join(room)

将套接字添加到给定房间或房间列表。

## Socket 事件

### disconnect

此事件由 Socket 实例在断开连接时触发。

```js
io.on('connection', socket => {
  socket.on('disconnect', reason => {
    // ...
  })
})
```

以下是可能的原因列表：

| `reason`                    | 描述                                                      |
| --------------------------- | --------------------------------------------------------- |
| server namespace disconnect | socket 被 `socket.disconnect` 强行断开                    |
| client namespace disconnect | 客户端使用 `socket.disconnect()` 手动断开 socket          |
| server shutting down        | 服务器正在关闭                                            |
| ping timeout pingTimeout    | 客户端在延迟中没有发送 PONG 数据包                        |
| transport close             | 连接已关闭（例如：用户失去连接，或网络从 WiFi 更改为 4G） |
| transport error             | 连接遇到错误                                              |

### disconnecting

当 `Socket#rooms` 集不为空时，此事件类似于 `disconnect` 但更早触发。

```js
io.on('connection', socket => {
  socket.on('disconnecting', reason => {
    for (const room of socket.rooms) {
      if (room !== socket.id) {
        socket.to(room).emit('user has left', socket.id)
      }
    }
  })
})
```

注意：这些事件以及 `connect`, `connect_error`, `newListener` 和 `removeListener` 是不应在您的应用程序中使用的特殊事件:

```js
// BAD, will throw an error
socket.emit('disconnect')
```
