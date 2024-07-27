# websocket 客户端（浏览器）

::: info 参考于

- [Websocket API](https://developer.mozilla.org/zh-CN/docs/Web/API/WebSocket)
:::

## 创建 Websocket 实例

```js
const ws = new WebSocket('ws://localhost:3000')
```

## 事件

- `open`：当一个 WebSocket 连接成功时触发。
- `close`：当一个 WebSocket 连接被关闭时触发。
- `message`：当通过 WebSocket 收到数据时触发。
- `error`：当一个 WebSocket 连接因错误而关闭时触发，例如无法发送数据时。

## 常用方法

- `WebSocket.close([code[, reason]])`：关闭当前链接。
- `WebSocket.send(data)`：对要传输的数据进行排队。
