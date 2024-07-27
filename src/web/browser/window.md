# window

## window 方法

- 弹出警告框：`window.alert(message)`
- 弹出确认框，用户可选择确认或取消：`window.confirm(message)`
- 弹出输入文本框：`window.prompt(text, value)`
- 打开一个新窗口或标签页：`window.open(url, name, features)`
- 关闭当前窗口：`window.close()`
- 滚动窗口至文档中的特定位置：[`window.scroll()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/scroll) 或 [`window.scrollTo()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/scrollTo)
- 在窗口中按指定的偏移量滚动文档：[`window.scrollBy()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/scrollBy)

## 定时器

- 在指定延迟后执行一次回调函数：`setTimeout(callback, delay)`
- 在指定延迟间隔内重复执行回调函数：`setInterval(callback, delay)`
- 取消由 `setTimeout()` 创建的定时器：`clearTimeout(timeoutId)`
- 取消由 `setInterval()` 创建的定时器：`clearInterval(intervalId)`
