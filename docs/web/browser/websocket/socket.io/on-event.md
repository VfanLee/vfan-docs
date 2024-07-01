# 监听事件

## EventEmitter 方法

- **在服务器端**，Socket 实例扩展了 Node.js [EventEmitter 类](https://nodejs.org/docs/latest/api/events.html#events_events)。
- **在客户端**，Socket 实例使用 [component-emitter](https://github.com/sindresorhus/component-emitter) 库提供的事件发射器，它公开了 EventEmitter 方法的子集。

### socket.on(eventName, listener)

将侦听器函数添加到名为 eventName 的事件的侦听器数组的末尾。

```js
socket.on('details', (...args) => {
  // ...
})
```

### socket.once(eventName, listener)

为名为 eventName 的事件添加 **一次性** 监听函数。

```js
socket.once('details', (...args) => {
  // ...
})
```

### socket.off(eventName, listener)

从名为 eventName 的事件的侦听器数组中移除指定的侦听器。

```js
const listener = (...args) => {
  console.log(args)
}

socket.on('details', listener)

// and then later...
socket.off('details', listener)
```

### socket.removeAllListeners([eventName])

删除所有侦听器，或指定 eventName 的侦听器。

```js
// 删除指定 eventName 的侦听器
socket.removeAllListeners('details')

// 删除所有侦听器
socket.removeAllListeners()
```

## Catch-all 侦听器

从 Socket.IO v3 开始，受 [EventEmitter2](https://github.com/EventEmitter2/EventEmitter2) 库启发的新 API 允许声明 Catch-all 侦听器。

### socket.onAny(listener)

添加一个监听器，当任何事件发出时将被触发。

```js
socket.onAny((eventName, ...args) => {
  // ...
})
```

### socket.prependAny(listener)

添加一个监听器，当任何事件发出时将被触发。侦听器被添加到侦听器数组的开头。

```js
socket.prependAny((eventName, ...args) => {
  // ...
})
```

### socket.offAny(listener)

删除所有 catch-all 侦听器或给定的侦听器。

```js
const listener = (eventName, ...args) => {
  console.log(eventName, args)
}

socket.onAny(listener)

// and then later...
socket.offAny(listener)

// or all listeners
socket.offAny()
```
