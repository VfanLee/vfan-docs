# RTCDataChannel

[`RTCDataChannel`](https://developer.mozilla.org/en-US/docs/Web/API/RTCDataChannel) 接口表示一个网络通道，可以用于任意数据的双向点对点传输。每个数据通道都与一个 `RTCPeerConnection` 关联，并且每个对等连接最多可以拥有理论上的 65,534 个数据通道（实际限制可能因浏览器而异）。

要创建数据通道并邀请远程对等体加入，可以调用 `RTCPeerConnection` 的 `createDataChannel()` 方法。被邀请交换数据的对等体会接收到一个 `datachannel` 事件（类型为 `RTCDataChannelEvent`），通知其数据通道已被添加到连接中。

## 实例属性

### binaryType

一个字符串，指定用于表示在 `RTCDataChannel` 上接收到的二进制数据的对象类型。值与 `WebSocket.binaryType` 属性允许的值相同：如果使用 `Blob` 对象，则为 `blob`；如果使用 `ArrayBuffer` 对象，则为 `arraybuffer`。默认值为 `blob`。

### bufferedAmount <Badge type="info">只读</Badge>

返回当前排队等待通过数据通道发送的数据字节数。

### bufferedAmountLowThreshold

指定被认为“低”的缓冲传出数据的字节数。默认值为 0。

### id <Badge type="info">只读</Badge>

返回唯一标识 `RTCDataChannel` 的 ID 号（范围在 0 到 65,534 之间）。

### label <Badge type="info">只读</Badge>

返回包含描述数据通道名称的字符串。这些标签不要求唯一。

### maxPacketLifeTime <Badge type="info">只读</Badge>

返回浏览器允许尝试传输消息的最大时间（以毫秒为单位），该值是在创建数据通道时设置的，或为 `null`。

### maxRetransmits <Badge type="info">只读</Badge>

返回浏览器在放弃之前应尝试重新传输消息的最大次数，该值是在创建数据通道时设置的，或为 `null`，表示没有最大值。

### negotiated <Badge type="info">只读</Badge>

指示 `RTCDataChannel` 的连接是否由 Web 应用程序（`true`）或 WebRTC 层（`false`）协商。默认值为 `false`。

### ordered <Badge type="info">只读</Badge>

指示数据通道是否保证按顺序传递消息；默认值为 `true`，表示数据通道确实是有序的。

### protocol <Badge type="info">只读</Badge>

返回包含正在使用的子协议名称的字符串。如果在创建数据通道时未指定协议，则此属性的值为空字符串（`""`）。

### readyState <Badge type="info">只读</Badge>

返回一个字符串，指示数据通道底层数据连接的状态。它可以有以下值之一：`connecting`、`open`、`closing` 或 `closed`。

### ~~reliable~~ <Badge type="info">只读</Badge> <Badge type="danger">过时</Badge> <Badge type="warning">非标准</Badge>

指示数据通道是否可靠。

## 实例方法

### close()

关闭 `RTCDataChannel`。任一对等体均可调用此方法以启动通道的关闭。

### send()

通过数据通道向远程对等体发送数据。

## 事件

### bufferedamountlow

当传出数据缓冲区中的数据字节数低于 `bufferedAmountLowThreshold` 指定的值时发送。

### close

当底层数据传输关闭时发送。

### closing

当底层数据传输即将开始关闭时发送。

### error

当数据通道发生错误时发送。

### message

当从远程对等体接收到消息时发送。消息内容可以在事件的 `data` 属性中找到。

### open

当数据通道首次打开时，或当现有数据通道的底层连接重新打开时发送。

## 示例

```js
const pc = new RTCPeerConnection()
const dc = pc.createDataChannel('my channel')

dc.onmessage = event => {
  console.log(`received: ${event.data}`)
}

dc.onopen = () => {
  console.log('datachannel open')
}

dc.onclose = () => {
  console.log('datachannel close')
}
```
