# websocket 服务端（Node.js）

::: info 参考于：

- [ws](https://github.com/websockets/ws)
- [ws API](https://github.com/websockets/ws/blob/master/doc/ws.md)
  :::

## 安装

```sh
npm install ws
```

## 启动一个 websocket 服务

### 只使用 ws

```js
const { WebSocketServer } = require('ws')

const wss = new WebSocketServer({ port: 3000 })

wss.on('connection', (ws, req) => {
  // ...
})
```

### 使用 HTTP/S 服务

```js
const http = require('http')
const { WebSocketServer } = require('ws')

const httpServer = http.createServer()
const wss = new WebSocketServer({ server: httpServer })

wss.on('connection', (ws, req) => {
  // ...
})

httpServer.listen(3000)
```

### 使用 Express

```js
const http = require('http')
const express = require('express')
const { WebSocketServer } = require('ws')

const app = express()
const httpServer = http.createServer(app)
const wss = new WebSocketServer({ server: httpServer })

wss.on('connection', (ws, req) => {
  // ...
})

httpServer.listen(3000)
```

## WebSocketServer 属性

### clients

存储所有连接的客户端的集合。

仅当 `clientTracking` 为 `true` 时才添加此属性。

## WebSocketServer 方法

### address()

返回一个具有端口、系列和地址属性的对象，指定操作系统在侦听 IP 套接字时报告的绑定地址、地址系列名称和服务器端口。如果服务器正在侦听管道或 UNIX 域套接字，则名称将以字符串形式返回。

### close([callback])

阻止服务器接受新连接并关闭 HTTP 服务器（如果是内部创建的）。如果通过 server 或 noServer 构造函数选项使用外部 HTTP 服务器，则必须手动关闭它。现有连接不会自动关闭。当所有连接关闭时，服务器会发出“关闭”事件，除非使用外部 HTTP 服务器并且禁用客户端跟踪。在这种情况下，“关闭”事件将在下一个周期中发出。当“close”事件发生时调用可选回调，如果服务器已关闭，则会收到错误。

### handleUpgrade(request, socket, head, callback)

处理 HTTP 升级请求。当内部创建HTTP服务器或通过服务器选项传递HTTP服务器时，会自动调用此方法。当运行在“noServer”模式下时，必须手动调用该方法。

- `request` {http.IncomingMessage}：客户端 HTTP GET 请求。
- `socket` {stream.Duplex}：服务器和客户端之间的网络套接字。
- `head` {Buffer}：升级后的流的第一个数据包。
- `callback` {Function}：回调{函数}。

处理 HTTP 升级请求。当内部创建HTTP服务器或通过服务器选项传递HTTP服务器时，会自动调用此方法。当运行在“noServer”模式下时，必须手动调用该方法。

如果升级成功，将使用两个参数调用回调：

- `websocket` {WebSocket} WebSocket 对象。
- `request` {http.IncomingMessage} 客户端 HTTP GET 请求。

### shouldHandle(request)

## WebSocketServer 事件

### close

服务器关闭时发出。`close` 仅当 HTTP 服务器内部创建时，此事件才依赖于 HTTP 服务器的事件。在所有其他情况下，此事件均独立发出。

```js
wss.on('close', () => {
  // ...
})
```

### connection

握手完成时发出。

- `req` 是客户端发送的 HTTP 请求。用于解析授权标头、cookie 标头和其他信息。

```js
ws.on('connection', (ws, req) => {
  // ...
})
```

### error

当底层服务器发生错误时发出。

```js
ws.on('error', err => {
  // ...
})
```

### headers

在握手过程中将响应标头写入 socket 之前发出。

这允许您在发送标头之前检查/修改标头。

```js
ws.on('headers', (headers, req) => {
  // ...
})
```

### listening

当底层服务器已绑定时发出。

```js
ws.on('listening', () => {
  // ...
})
```

### wsClientError

在建立 WebSocket 连接之前发生错误时发出。

- `socket` 是产生错误的 socket。
- `req` 是 HTTP 请求。

该事件的侦听器负责关闭 socket。

当发出 `wsClientError` 事件时，没有 `http.ServerResponse` 对象，因此任何 HTTP 响应（包括响应标头和正文）都必须直接写入 socket。

如果没有此事件的侦听器，则 socket 将关闭，并显示包含描述性错误消息的默认 4xx 响应。

```js
ws.on('listening', (err, socket, req) => {
  // ...
})
```

## WebSocket 状态常数

| 常数       | 值  | 描述                         |
| ---------- | --- | ---------------------------- |
| CONNECTING | 0   | 连接尚未打开。               |
| OPEN       | 1   | T 连接已打开并准备进行通信。 |
| CLOSING    | 2   | 连接正在关闭。               |
| CLOSED     | 3   | 连接已关闭。                 |

## WebSocket 常见事件

### open

连接建立时发出。

```js
ws.on('open', () => {
  // ...
})
```

### close

当连接关闭时发出。

- `code` 是一个数值，表示状态代码，解释连接关闭的原因。
- `reason` 是一个 Buffer 包含人类可读的字符串，解释连接关闭的原因。

```js
ws.on('close', (code, reason) => {
  // ...
})
```

### message

当收到消息时发出。

- `data` 是消息内容。
- `isBinary` 指定消息是否是二进制的。

```js
ws.on('message', (data, isBinary) => {
  // ...
})
```

### error

发生错误时发出。

错误可能具有属性，与 [错误代码 `.code`](https://github.com/websockets/ws/blob/master/doc/ws.md#error-codes) 相匹配。

```js
ws.on('error', (err) => {
  // ...
})
```

## WebSocket 常见方法

### send(data[, options][, callback])

通过连接发送数据。如果就绪状态为 `CONNECTING`，则此方法会引发错误。

- `data: Array|Number|Object|String|ArrayBuffer|Buffer|DataView|TypedArray`：要发送的数据。仅当对象值符合 `Buffer.from()` 的要求时才受支持。如果不满足这些约束，则会引发 `TypeError`。
- `options: Object`：
  - `binary: Boolean` 指定数据是否应以二进制形式发送。默认是自动检测的。
  - `compress: Boolean` 指定是否应压缩数据。启用 `permessage-deflate` 时默认为 `true`。
  - `fin: Boolean` 指定数据是否是消息的最后一个片段。默认为 `true`。
  - `mask: Boolean` 指定是否应屏蔽数据。当 `websocket` 不是服务器客户端时默认为 `true`。
- `callback: Function`：可选的回调函数。如果发生错误，则会调用回调并将错误作为其第一个参数。
