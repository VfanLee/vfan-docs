# JavaScript 运行时环境

JavaScript 运行时环境（JavaScript Runtime Environment）是指一个可以执行 JavaScript 代码的环境。

它包含了执行 JavaScript 所需的一切，包括内置函数、对象和一些 API，以便开发者能够编写并运行 JavaScript 代码。

## 常见运行时

### 浏览器 (Browser) 运行时

- V8 引擎：由 Google 开发，用于 Chrome 浏览器。
- SpiderMonkey：由 Mozilla 开发，用于 Firefox 浏览器。
- JavaScriptCore：由 Apple 开发，用于 Safari 浏览器。
- Chakra：由 Microsoft 开发，用于旧版的 Edge 浏览器（新版 Edge 已切换到 V8 引擎）。

### Node.js

- 基于 V8 引擎，适用于服务器端的 JavaScript 运行时环境。
- 提供了许多额外的模块，使得 JavaScript 可以用于后端开发。

### 嵌入式设备和其它环境

- `Tessel`：用于物联网设备的 JavaScript 运行时环境。
- `Nashorn`：Java 平台上的 JavaScript 引擎，由 Oracle 开发。
- `GraalVM`：支持多语言运行时环境，包括 JavaScript。

## 运行时环境的功能

无论是在浏览器或者 Node.js 还是其他环境中，JavaScript 运行时环境都提供了一些共同的功能：

1. **执行 JavaScript 代码**：运行时环境能够解释和执行 JavaScript 代码。
2. **提供内置对象和函数**：如 `Array`、`String`、`Math` 等内置对象，以及 `setTimeout`、`setInterval` 等全局函数。
3. **事件循环**：JavaScript 是单线程的语言，运行时环境通过事件循环机制来处理异步操作，如网络请求、定时器、用户交互等。
