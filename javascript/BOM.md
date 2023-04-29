# BOM 常见操作

## 1. 浏览器的信息

- 用户代理字符串的只读字符串，表示浏览器标识信息：`navigator.userAgent`
- 浏览器版本号：`navigator.appVersion`
- 用户操作系统平台：`navigator.platform`
- 当前浏览器环境的语言偏好设置，表示用户首选的语言：`navigator.language`
- 浏览器是否启用了 `cookie`：`navigator.cookieEnabled`
- 浏览器是否处于在线状态：`navigator.onLine`

## 2. 窗口操作

- 弹出警告框：`window.alert(message)`
- 弹出确认框，用户可选择确认或取消：`window.confirm(message)`
- 打开一个新窗口或标签页：`window.open(url, name, features)`
- 关闭当前窗口：`window.close()`
- 调整窗口大小：`window.resizeTo(width, height)`
- 移动窗口到指定位置：`window.moveTo(x, y)`
- 将窗口滚动到指定位置：`window.scrollTo(x, y)`

## 3. 定时器操作

- 在指定延迟后执行一次回调函数：`setTimeout(callback, delay)`
- 在指定延迟间隔内重复执行回调函数：`setInterval(callback, delay)`
- 取消由 `setTimeout()` 创建的定时器：`clearTimeout(timeoutId)`
- 取消由 `setInterval()` 创建的定时器：`clearInterval(intervalId)`

## 4. location

`location` 对象用于获取和操作当前页面的 URL 信息，包括主机名、路径、查询字符串等。

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

## 5. history

`history` 对象用于访问浏览器的历史记录，即用户在浏览器中访问过的页面。

- 返回历史列表中的网址数`window.history.length`
- 导航到浏览器历史记录中的上一个页面：`window.history.back()`
- 导航到浏览器历史记录中的下一个页面：`window.history.forward()`
- 加载 history 列表中的某个具体页面：`window.history.go()`

## 6. 屏幕操作

- 屏幕的宽度：`window.screen.width`
- 屏幕的高度：`window.screen.height`
- 屏幕的可用宽度（排除任务栏等）：`window.screen.availWidth`
- 屏幕的可用高度（排除任务栏等）：`window.screen.availHeight`
