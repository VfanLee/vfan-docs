# 复制粘贴

## `copy`、`paste` Event

> - [copy Event](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/copy_event)
> - [cut Event](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/cut_event)
> - [paste Event](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/paste_event)

## execCommand ⚠️ 已弃用

> [execCommand](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/execCommand)

## Clipboard API

> [Clipboard API](https://developer.mozilla.org/zh-CN/docs/Web/API/Clipboard_API)

该 API 被设计用来取代使用 `document.execCommand()` 的剪贴板访问方式。

方法：

- `read()`：从剪贴板读取数据（比如图片），返回一个 Promise 对象。在检索到数据后，promise 将兑现一个 [ClipboardItem](https://developer.mozilla.org/en-US/docs/Web/API/ClipboardItem) 对象的数组来提供剪切板数据。
- `readText()`：从操作系统读取文本；返回一个 Promise，在从剪切板中检索到文本后，promise 将兑现一个包含剪切板文本数据的 DOMString。
- `write()`：写入任意数据至操作系统剪贴板。这是一个异步操作，在操作完成后，返回的 promise 的将被兑现。
- `writeText()`：写入文本至操作系统剪贴板。返回一个 Promise，在文本被完全写入剪切板后，返回的 promise 将被兑现。

## clipboard.js

> [clipboard.js](https://clipboardjs.com/)
