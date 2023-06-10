# Clipboard 剪切板

剪贴板 Clipboard API 为 Navigator 接口添加了只读属性 clipboard，该属性返回一个可以读写剪切板内容的 Clipboard 对象。在 Web 应用中，Clipboard API 可用于实现剪切、复制、粘贴的功能。

## 方法

- read()：从剪贴板读取数据（比如图片），返回一个 Promise 对象。在检索到数据后，promise 将兑现一个 ClipboardItem 对象的数组来提供剪切板数据。
- readText()：
- write()：
- writeText()：
