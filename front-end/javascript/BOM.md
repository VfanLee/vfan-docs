# BOM 常见操作

## 1. 窗口操作

- 弹出警告框：`window.alert(message)`
- 弹出确认框，用户可选择确认或取消：`window.confirm(message)`
- 弹出输入文本框：`window.prompt(text, value)`
- 打开一个新窗口或标签页：`window.open(url, name, features)`
- 关闭当前窗口：`window.close()`
- 滚动窗口至文档中的特定位置：[`window.scroll()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/scroll) 或 [`window.scrollTo()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/scrollTo)
- 在窗口中按指定的偏移量滚动文档：[`window.scrollBy()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/scrollBy)

## 2. 定时器操作

- 在指定延迟后执行一次回调函数：`setTimeout(callback, delay)`
- 在指定延迟间隔内重复执行回调函数：`setInterval(callback, delay)`
- 取消由 `setTimeout()` 创建的定时器：`clearTimeout(timeoutId)`
- 取消由 `setInterval()` 创建的定时器：`clearInterval(intervalId)`

## 3. 屏幕操作

- 屏幕的宽度：`window.screen.width`
- 屏幕的高度：`window.screen.height`

## 4. navigator

只读属性 `window.navigator` 会返回一个 [Navigator](https://developer.mozilla.org/zh-CN/docs/Web/API/Navigator) 对象的引用，可以用于请求运行当前代码的应用程序的相关信息。

- 用户代理字符串的只读字符串，表示浏览器标识信息：`navigator.userAgent`
- 用户首选语言的字符串：`navigator.language`
- 用户首选语言的字符串数组：`navigator.languages`
- 浏览器是否启用了 `cookie`：`navigator.cookieEnabled`
- 浏览器是否处于在线状态：`navigator.onLine`

## 5. location

`window.location` 只读属性，返回一个 [Location](https://developer.mozilla.org/zh-CN/docs/Web/API/Location) 对象，其中包含有关文档当前位置的信息。

- 获取或设置当前页面的完整 URL：`location.href`
- 获取当前页面的主机名和端口号：`location.host`
- 获取当前页面的主机名：`location.hostname`
- 获取当前页面的端口号：`location.port`
- 获取当前页面的协议（如 "http:" 或 "https:"）：`location.protocol`
- 获取当前页面的路径部分：`location.pathname`
- 获取当前页面的查询字符串部分（以 "?" 开头的部分）：`location.search`
- 获取或设置当前页面的 URL 锚点部分（以 "#" 开头的部分）：`location.hash`
- 重新加载当前页面：`location.reload()`
- 将页面导航到指定的 URL，可以使用后退按钮返回：`location.assign(url)`
- 用指定的 URL 替换当前页面，无法使用后退按钮返回：`location.replace(url)`

## 6. history

`window.history` 是一个只读属性，用来获取 [History](https://developer.mozilla.org/zh-CN/docs/Web/API/History) 对象的引用，History 对象提供了操作浏览器会话历史（浏览器地址栏中访问的页面，以及当前页面中通过框架加载的页面）的接口。

- 返回历史列表中的网址数`window.history.length`
- 导航到浏览器历史记录中的上一个页面：`window.history.back()`
- 导航到浏览器历史记录中的下一个页面：`window.history.forward()`
- 加载 history 列表中的某个具体页面：`window.history.go()`

## 其他

- 使元素被用户可见：[`scrollIntoView()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/scrollIntoView)
