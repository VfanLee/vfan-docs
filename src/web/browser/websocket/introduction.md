# WebSocket

## 介绍

WebSocket 是一种在客户端与服务器之间保持 TCP 长连接的协议，这样它们就可以随时进行信息交换。

虽然任何客户端或服务器上的应用都可以使用 WebSocket，但原则上还是指浏览器与服务器之间使用。通过 WebSocket，服务器无需客户端预先请求就可以直接向客户端发送数据，从而能动态地更新数据内容。

## `http/https` vs `ws/wss`

`http/https` 和 `ws/wss` 是两种不同的网络协议：

- `http/https` 用于在客户端和服务器之间传输数据，是 Web 的基础协议。
- `ws/wss` 是 **WebSocket** 协议的两种连接方式，用于在客户端和服务器之间建立双向通信通道。

`http/https` 与 `ws/wss` 的区别主要体现在以下几个方面：

- **传输方式：**
  - `http/https` 使用 **TCP** 协议进行传输，是 **单向** 通信，即客户端只能向服务器发送请求，服务器只能向客户端发送响应。
  - `ws/wss` 也使用 **TCP** 协议进行传输，但是是 **双向** 通信，即客户端和服务器都可以向对方发送数据。
- **数据格式：**
  - `http/https` 使用 **HTTP** 协议进行数据格式化，数据以明文形式传输。
  - `ws/wss` 使用 **WebSocket** 协议进行数据格式化，数据可以进行加密传输。
- **应用场景：**
  - `http/https` 主要用于传输静态资源，如 HTML、CSS、JavaScript 等，也可以用于传输动态数据，如 JSON、XML 等。
  - `ws/wss` 主要用于实时通信，如聊天、游戏、股票行情等。

`ws/wss` 与 `http/https` 的关系可以类比为：

- `ws/wss` 是 **WebSocket** 协议的两种连接方式，而 **WebSocket** 协议是建立在 **HTTP** 协议之上的。
- `wss` 是 **WebSocket** 协议的加密版本，而 **HTTPS** 是 **HTTP** 协议的加密版本。

## 参阅

- [WebSocket 介绍 - 维基百科](https://zh.wikipedia.org/wiki/WebSocket)
- [WebSocket 参考 - MDN](https://developer.mozilla.org/zh-CN/docs/Glossary/WebSockets)
- [WebSocket API - MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/WebSocket)
- [Socket.IO](https://socket.io/)
