# JavaScript 运行时环境

JavaScript 运行时环境（JavaScript Runtime Environment）是指一个可以执行 JavaScript 代码的环境。

它包含了执行 JavaScript 所需的一切，包括内置函数、对象和一些 API，以便开发者能够编写并运行 JavaScript 代码。

## 常见的运行时环境

### 浏览器环境

这是最广泛使用的 JavaScript 运行时环境。每个现代浏览器都有自己的 JavaScript 引擎：

- **Google Chrome** - V8 引擎。
- **Mozilla Firefox** - SpiderMonkey 引擎。
- **Safari** - JavaScriptCore（或 Nitro）引擎。
- **Microsoft Edge** - 早期版本使用 Chakra 引擎，最新版本基于 Chromium 也使用 V8 引擎。
- **Opera** - 基于 Chromium 也使用 V8 引擎。
- ...

这些浏览器环境提供了执行 JavaScript 代码所需的基本功能，包括 DOM 操作、BOM 操作和各种 Web API。

### 服务器环境

- **Node.js**：这是最流行的服务器端 JavaScript 运行时环境，基于 V8 引擎。Node.js 提供了许多内置模块和 API，用于构建服务器端应用程序。
- **Deno**：这是由 Node.js 的原作者创建的一个新的 JavaScript 和 TypeScript 运行时环境，基于 V8 引擎。Deno 提供了更加现代化的设计和安全特性。
- **Bun** 是一个新的 JavaScript 运行时环境，专注于速度和性能。它是用 Zig 编程语言编写的，旨在成为最快的 JavaScript 运行时环境。

### 其他运行时环境

- **Electron**：这是一个用于构建跨平台桌面应用的框架，基于 Chromium 和 Node.js。Electron 允许开发者使用 JavaScript、HTML 和 CSS 创建桌面应用程序。
- **React Native**：这是用于构建移动应用的框架，使用 JavaScript 和 React。React Native 提供了一套运行时环境，使得 JavaScript 代码能够运行在 iOS 和 Android 设备上。
- **Apache Cordova（PhoneGap）**：这是一个用于构建移动应用的框架，允许使用 HTML、CSS 和 JavaScript 构建跨平台的移动应用。Cordova 提供了一套运行时环境，使得 JavaScript 代码能够访问原生设备功能。
- **Tessel**：这是一个用于物联网设备的嵌入式平台，允许开发者使用 JavaScript 编写嵌入式设备代码。
- **Espruino**：这是另一个 JavaScript 运行时环境，专为低资源的微控制器设计。

## 运行时环境的功能

无论是在浏览器或者 Node.js 还是其他环境中，JavaScript 运行时环境都提供了一些共同的功能：

1. **执行 JavaScript 代码**：运行时环境能够解释和执行 JavaScript 代码。
2. **提供内置对象和函数**：如 `Array`、`String`、`Math` 等内置对象，以及 `setTimeout`、`setInterval` 等全局函数。
3. **事件循环**：JavaScript 是单线程的语言，运行时环境通过事件循环机制来处理异步操作，如网络请求、定时器、用户交互等。
