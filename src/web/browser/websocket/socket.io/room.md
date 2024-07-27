# 房间

## 加入/离开

您可以调用 join 以将 socket 订阅到给定的频道：

```js
io.on('connection', socket => {
  socket.join('some room')
})
```

要离开频道，调用 leave 即可，方式与 join 相同。

```js
io.on('connection', socket => {
  socket.leave('some room')
})
```

## 默认房间

Socket.IO 中的每一个 socket 都由一个随机的、不可猜测的、唯一的标识符 Socket#id。为了您的方便，每个 socket 都会自动加入一个由其自己的 id 标识的房间。

这使得实现私人消息变得容易：

```js
io.on('connection', socket => {
  socket.on('private message', (anotherSocketId, msg) => {
    socket.to(anotherSocketId).emit('private message', socket.id, msg)
  })
})
```

## 适配器

“房间”功能由我们称为适配器的东西实现。该适配器是一个服务器端组件，负责：

- 存储 Socket 实例和房间之间的关系
- 向所有（或部分）客户端广播事件

可以在 [此处](https://github.com/socketio/socket.io-adapter) 找到默认内存适配器的代码。

基本上，它包含两个 ES6 Maps:

- `sids`: `Map<SocketId, Set<Room>>`
- `rooms`: `Map<Room, Set<SocketId>>`

调用 `socket.join("the-room")` 将导致：

- 在 `sids Map` 中，将 `“the-room”` 添加到由 `Socket ID` 标识的 Set。
- 在 `rooms Map` 中，将 `Socket ID` 添加到由字符串 `“the-room”` 标识的 Set 中。

然后在广播时使用这两个 Map：

- 对所有套接字的广播（`io.emit()`）循环通过 `sids` Map，并将数据包发送到所有 sockets。
- 对给定房间的广播（`io.to("room21").emit()`）循环通过 `rooms` Map 中的 Set，并将数据包发送到所有匹配的 sockets。

可以通过以下方式访问这些对象：

```js
// main namespace
const rooms = io.of('/').adapter.rooms
const sids = io.of('/').adapter.sids

// custom namespace
const rooms = io.of('/my-namespace').adapter.rooms
const sids = io.of('/my-namespace').adapter.sids
```
