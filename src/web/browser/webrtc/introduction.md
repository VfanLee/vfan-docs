# WebRTC

## 介绍

WebRTC (Web Real-Time Communication) 是一个 API，可用于视频聊天、语音通话和 P2P 文件共享 Web 应用程序。

WebRTC 主要由以下几个部分组成：

- `getUserMedia()`：获取设备的摄像头与（或）麦克风权限，并将这些信号接入 RTC 连接。
- `RTCPeerConnection`：用于配置音频或视频聊天的接口。
- `RTCDataChannel`：用于设置两个浏览器之间的端到端数据连接。

## 兼容性：适配不同浏览器

[`adapter.js`](https://github.com/webrtchacks/adapter)

::: code-group

```html [jsdelivr]
<script src="https://cdn.jsdelivr.net/npm/webrtc-adapter@9.0.1/out/adapter.min.js"></script>
```

```html [cdnjs]
<script src="https://cdnjs.cloudflare.com/ajax/libs/webrtc-adapter/9.0.1/adapter.min.js"></script>
```

:::

## WebRTC 源码

<https://webrtc.googlesource.com/src/>

## 参阅

- [WebRTC 介绍 - 维基百科](https://zh.wikipedia.org/wiki/WebRTC)
- [WebRTC 参考 - MDN](https://developer.mozilla.org/en-US/docs/Glossary/WebRTC)
- [WebRTC API - MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API)
