# 发送事件

## 基本的 emit 事件

::: code-group

```js [服务器端]
io.on('connection', socket => {
  socket.emit('hello', 'world')
})
```

```js [客户端]
socket.on('hello', arg => {
  console.log(arg) // world
})
```

:::

这也适用于另一个方向：

::: code-group

```js [服务器端]
io.on('connection', socket => {
  socket.on('hello', arg => {
    console.log(arg) // world
  })
})
```

```js [客户端]
socket.emit('hello', 'world')
```

:::

::: tip
注意：`socket.emit('event_name', ...args)` 仅在本次连接中有效。

若想发送给其他连接，可以使用 **广播**。

若想给某个房间发消息，需要先进入 **房间**。
:::

### 传递参数/接收参数

您可以发送任意数量的参数，并且支持所有可序列化的数据结构，包括像 `Buffer` 或 `TypedArray` 这样的二进制对象：

::: code-group

```js [服务器端]
io.on('connection', socket => {
  socket.emit('hello', 1, '2', { 3: '4', 5: Buffer.from([6]) }, () => {})
})
```

```js [客户端]
socket.on('hello', (arg1, arg2, arg3, arg4) => {
  console.log(arg1) // 1
  console.log(arg2) // "2"
  console.log(arg3) // { 3: '4', 5: ArrayBuffer (1) [ 6 ] }
  console.log(arg4) // () => {}
})
```

:::

无需 `JSON.stringify()`，因为它会为您完成。

```js{5}
// BAD
socket.emit("hello", JSON.stringify({ name: "John" }));

// GOOD
socket.emit("hello", { name: "John" });
```

::: info

- `Date` 对象将被转换为（并作为）它们的字符串表示形式，例如 `1970-01-01T00:00:00.000Z`
- `Map` 和 `Set` 必须手动序列化：

  ```js
  const serializedMap = [...myMap.entries()]
  const serializedSet = [...mySet.keys()]
  ```

- 可以使用 `toJSON()` 方法自定义对象的序列化

  ```js
  class Hero {
    #hp

    constructor() {
      this.#hp = 42
    }

    toJSON() {
      return { hp: this.#hp }
    }
  }

  socket.emit("here's a hero", new Hero())
  ```

:::

### 超时

从 Socket.IO v4.4.0 开始，您现在可以为每个 emit 分配超时：

```js
socket.timeout(5000).emit('my-event', err => {
  if (err) {
    // 对方在给定的延迟时间内没有确认该事件
  }
})
```

您还可以同时使用超时和确认：

```js
socket.timeout(5000).emit('my-event', (err, response) => {
  if (err) {
    // the other side did not acknowledge the event in the given delay
  } else {
    console.log(response)
  }
})
```

### 易失性事件

易失性事件是在底层连接未准备好时不会发送的事件（有点像 UDP，在可靠性方面）。

例如，如果您需要发送在线游戏中角色的位置（因为只有最新的值才有用）。

```js
socket.volatile.emit('hello', '可能会收到，也可能不会收到')
```

另一个用例是在客户端未连接时丢弃事件（默认情况下，事件会被缓冲直到重新连接）。

::: code-group

```js [服务器端]
io.on('connection', socket => {
  console.log('connect')

  socket.on('ping', count => {
    console.log(count)
  })
})
```

```js [客户端]
let count = 0
setInterval(() => {
  socket.volatile.emit('ping', ++count)
}, 1000)
```

:::

如果重新启动服务器，您将在控制台中看到：

```sh
connect
1
2
3
4
# the server is restarted, the client automatically reconnects
connect
9
10
11
```

如果没有 volatile 标志，您将看到：

```sh
connect
1
2
3
4
# the server is restarted, the client automatically reconnects and sends its buffered events
connect
5
6
7
8
9
10
11
```

## 广播

::: tip
请注意，**广播** 是 **仅服务器** 功能。
:::

```js
// 向所有人发消息
io.emit('event_name', ...args)
```

```js
// 除本次连接外，给所有人发送消息
socket.broadcast.emit('event_name', ...args)
```

## 房间

::: tip
请注意，**房间** 是一个 **仅限服务器** 的概念（即客户端无权访问它已加入的房间列表）。
:::

`to` 或 `in`（它们是相同的）。

```js
// 给某个房间所有人发送消息
io.to(room).emit('event_name', ...args)

// 补充：可以同时给多个房间发送消息
io.to(room).to('room2').to('room3').emit('some event')
```

```js
// 除本次连接外，给某个房间所有人发送消息
socket.to(room).emit('event_name', ...args)
```

::: tip
在这儿，只是简单的记录了如何在房间内发送消息，关于房间的更多信息，请参阅 [Room 房间](./room)。
:::
