# 全屏

> 参考：[MDN 全屏 API](https://developer.mozilla.org/zh-CN/docs/Web/API/Fullscreen_API)

核心 API

- `document.fullscreenEnabled`：检测浏览器是否支持全屏模式。
- `document.fullscreenElement`：获取全屏模式的 Element。
- `Element.requestFullscreen()`：指定 Element 进入全屏模式。
- `document.exitFullscreen()`：退出全屏模式（切回窗口模式）。

## 实现示例

```js
const toggleFullscreen = () => {
  if (document.fullscreenEnabled) {
    if (document.fullscreenElement) {
      document.exitFullscreen()
    } else {
      document.documentElement.requestFullscreen()
    }
  } else {
    alert('您的浏览器不支持全屏模式！')
  }
}
```
