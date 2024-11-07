# Location

## Location

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

## URL

```js
new URL('https://example.com/wordpress/?s=url').searchParams.get('s');
```

## URLSearchParams

```js
new URLSearchParams('?s=url').get('s');
```
