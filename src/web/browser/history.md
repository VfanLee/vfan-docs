# History

`window.history` 是一个只读属性，用来获取 [History](https://developer.mozilla.org/zh-CN/docs/Web/API/History) 对象的引用，History 对象提供了操作浏览器会话历史（浏览器地址栏中访问的页面，以及当前页面中通过框架加载的页面）的接口。

- 返回历史列表中的网址数`window.history.length`
- 导航到浏览器历史记录中的上一个页面：`window.history.back()`
- 导航到浏览器历史记录中的下一个页面：`window.history.forward()`
- 加载 history 列表中的某个具体页面：`window.history.go()`
