# MediaStream

[`MediaStream`](https://developer.mozilla.org/en-US/docs/Web/API/MediaStream) 是 Web API 中的一个接口，表示包含多个轨道（[`MediaStreamTrack`](https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrack) 对象，可能是音频或视频轨道）的媒体流。它是用于处理来自摄像头、麦克风或其他输入设备的实时媒体数据的核心组件。`MediaStream` 可以用于媒体捕获、处理和传输。

## 实例属性

### active <Badge type="info">只读</Badge>

一个布尔值，如果 MediaStream 处于活动状态，则返回 true，否则返回 false。

### id <Badge type="info">只读</Badge>

包含对象的 36 个字符的通用唯一标识符 (UUID) 的字符串。

## 实例方法

### `addTrack(track)`

向 `MediaStream` 添加新的轨道。

### `clone()`

创建 `MediaStream` 的副本，包含相同的轨道。

### `getAudioTracks()`

返回包含所有音频轨道的数组。

### `getTrackById(trackId)`

返回一个 MediaStreamTrack 对象，表示具有指定 ID 字符串的轨道。如果没有指定 ID，则此方法返回 null。

### `getTracks()`

返回包含媒体流中所有轨道的数组。

```js
const tracks = stream.getTracks();
tracks.forEach(track => {
  console.log(track.kind); // "audio" 或 "video"
});
```

### `getVideoTracks()`

返回包含所有视频轨道的数组。

```js
const videoTracks = stream.getVideoTracks();
```

### `removeTrack(track)`

从 `MediaStream` 中移除指定的轨道。

## 事件

### `addtrack`

当添加新的 MediaStreamTrack 对象时触发。

### `removetrack`

当 MediaStreamTrack 对象被移除时触发。

### `active` <Badge type="warning">非标准</Badge>

当媒体流被激活时触发（非标准事件）。

### `inactive` <Badge type="warning">非标准</Badge>

当媒体流被非激活时触发（非标准事件）。
