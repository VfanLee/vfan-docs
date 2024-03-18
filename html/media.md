# 媒体播放

## 自动播放

> [媒体和 Web Audio API 的自动播放指南](https://developer.mozilla.org/zh-CN/docs/Web/Media/Autoplay_guide)

在使用 autoplay 属性时，可能会出现 `The AudioContext was not allowed to start. It must be resumed (or created) after a user gesture on the page. https://goo.gl/7K7WLu` 的说明，在某些浏览器，如果没有设置 `muted` 属性，`autoplay` 将不会生效。
