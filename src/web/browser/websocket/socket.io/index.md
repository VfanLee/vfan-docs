# Socket.IO 介绍

::: tip
当前记录版本 v4
:::

## 什么是 socket.io

socket.io 是一个库，可以在客户端和服务器之间实现 **低延迟**, **双向** 和 **基于事件的** 通信。

## socket.io 不是什么

::: warning
socket.io 不是 **WebSocket** 实现的。
:::

尽管 socket.io 确实在可能的情况下使用 WebSocket 进行传输，但它为每个数据包添加了额外的元数据。这就是为什么 WebSocket 客户端将无法成功连接到 socket.io 服务器，而 socket.io 客户端也将无法连接到普通 WebSocket 服务器。

```js
// 警告：客户端将无法连接！
const socket = io("ws://echo.websocket.org");
```

::: tip WebSocket 客户端

- [robust-websocket](https://github.com/nathanboktae/robust-websocket)

socket.io 并不打算在 **移动应用程序** 的后台服务中使用。

socket.io 库保持与服务器的开放 TCP 连接，**这可能会导致用户消耗大量电池**。请为此用例使用 [FCM](https://firebase.google.com/docs/cloud-messaging?hl=zh-cn) 等专用消息传递平台。
:::

## 为什么要使用 socket.io 而不是普通的 WebSocket ？

websocket 日益成熟，很多地方[都支持](https://caniuse.com/mdn-api_websocket)了 websocket。

如果在应用程序中使用普通的 WebSocket，而在使用的过程中，可能会需要时间一些功能，例如：

- HTTP 长轮询回退
- 自动重新连接
- 数据包缓冲
- 收到后的回调
- 广播
- 多路复用（socket.io 称为 Namespaces 命名空间）

而这些功能正是 socket.io 已经包含的，所以 socket.io 可以形象的理解为：

**socket.io = websocket + 轮询 + 自动重新连接 + 广播 + 多路复用 + ...**
