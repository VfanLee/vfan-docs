# Navigator

[Navigator](https://developer.mozilla.org/zh-CN/docs/Web/API/Navigator) 接口表示用户代理的状态和标识。它允许脚本查询它和注册自己进行一些活动。

## 实例属性

### userAgent

当前浏览器的用户代理字符串。

### clipboard

剪贴板 Clipboard API 为 Navigator 接口添加了只读属性 clipboard，该属性返回一个可以读写剪切板内容的 Clipboard 对象。在 Web 应用中，Clipboard API 可用于实现剪切、复制、粘贴的功能。

#### 方法

- read()：从剪贴板读取数据（比如图片），返回一个 Promise 对象。在检索到数据后，promise 将兑现一个 ClipboardItem 对象的数组来提供剪切板数据。
- readText()：
- write()：
- writeText()：


## 实例方法

> 暂未接触