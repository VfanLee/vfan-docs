# clipboard 剪切板

[Clipboard API](https://developer.mozilla.org/zh-CN/docs/Web/API/Clipboard_API) 为 Navigator 接口添加了只读属性 clipboard，该属性返回一个可以读写剪切板内容的 Clipboard 对象。在 Web 应用中，Clipboard API 可用于实现剪切、复制、粘贴的功能。

`read()`: 从剪贴板读取数据（比如图片），返回一个 Promise 对象。在检索到数据后，promise 将兑现一个 ClipboardItem 对象的数组来提供剪切板数据。

`readText()`: 从操作系统读取文本；返回一个 Promise，在从剪切板中检索到文本后，promise 将兑现一个包含剪切板文本数据的 DOMString。

`write()`: 写入任意数据至操作系统剪贴板。这是一个异步操作，在操作完成后，返回的 promise 的将被兑现。

`writeText()`: 写入文本至操作系统剪贴板。返回一个 Promise，在文本被完全写入剪切板后，返回的 promise 将被兑现。
