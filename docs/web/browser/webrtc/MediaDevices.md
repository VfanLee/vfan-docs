# MediaDevices

[MediaDevices](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices) 接口是 Web API 中的一部分，提供了一些方法用于访问用户的输入和输出设备（如相机、麦克风、屏幕等）。

## 实例方法

### `enumerateDevices()`

enumerateDevices() 返回一个包含输入和输出媒体设备信息的 Promise。

设备信息包括：设备 ID、设备名称（如果可用）、设备种类（如音频输入、音频输出、视频输入等）。

```js
navigator.mediaDevices
  .enumerateDevices()
  .then(devices => {
    devices.forEach(device => {
      console.log(`${device.kind}: ${device.label} id = ${device.deviceId}`)
    })
  })
  .catch(err => {
    console.error('Error enumerating devices:', err)
  })
```

### `getDisplayMedia(options)`

getDisplayMedia(options) 提示用户选择并捕获其显示内容（如整个屏幕、某个应用窗口或某个浏览器标签页），返回一个包含屏幕捕获内容的媒体流的 Promise。

```js
navigator.mediaDevices
  .getDisplayMedia({ audio: true, video: true })
  .then(stream => {
    // 将屏幕捕获流传递到 video 元素进行显示
    const videoElement = document.querySelector('video')
    videoElement.srcObject = stream
  })
  .catch(err => {
    console.error('Error capturing display:', err)
  })
```

用于屏幕共享或录制，常用于在线会议、演示和直播等场景。

### `getSupportedConstraints()`

getSupportedConstraints() 返回一个对象，列出浏览器支持的所有约束条件。

约束条件用于在 `getUserMedia()` 方法中指定对媒体流的要求（如分辨率、帧率等）。

```js
const supportedConstraints = navigator.mediaDevices.getSupportedConstraints()
console.log(supportedConstraints)
```

### `getUserMedia(constraints)`

getUserMedia(constraints) 提示用户许可访问媒体输入设备（如摄像头和麦克风），返回一个包含所请求媒体类型的媒体流的 Promise。

```js
navigator.mediaDevices
  .getUserMedia({ video: true, audio: true })
  .then(stream => {
    // 将媒体流传递到 video 元素进行显示
    const videoElement = document.querySelector('video')
    videoElement.srcObject = stream
  })
  .catch(err => {
    console.error('Error accessing media devices:', err)
  })
```

::: tip MediaTrackConstraints
有关于 `constraints` 的具体的有效值可参考：[MediaTrackConstraints](https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints)
:::

### `selectAudioOutput()` <Badge type="warning">实验性</Badge>

selectAudioOutput() 允许用户选择音频输出设备（如扬声器、耳机），返回一个 Promise。

```js
const audioElement = document.querySelector('audio')
navigator.mediaDevices
  .selectAudioOutput()
  .then(device => {
    audioElement
      .setSinkId(device.deviceId)
      .then(() => {
        console.log(`Audio output device set to: ${device.label}`)
      })
      .catch(err => {
        console.error('Error setting audio output device:', err)
      })
  })
  .catch(err => {
    console.error('Error selecting audio output device:', err)
  })
```

::: tip setSinkId
<https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/setSinkId>
:::

## 事件

### devicechange

当媒体输入或输出设备连接到用户计算机或从用户计算机中移除时触发。
