# 异步机制

JavaScript 作为一门单线程语言，异步能力由 JavaScript Runtime (Environment) 所决定。

Node.js 异步机制和浏览器（Chrome）的异步机制非常相似，在 Node.js 中， JavaScript Runtime 由以下几个部分组成：

1. **内存栈（Call Stack）**：与浏览器中一样，内存栈是由 JavaScript 引擎（V8 引擎）提供的，用于管理函数调用和执行上下文。

2. **内存堆（Heap）**：内存堆也由 JavaScript 引擎提供，用于存储动态分配的对象和数据，例如对象、数组和闭包等。

3. **Node APIs**：与浏览器的 Web APIs 类似，Node.js 提供了一组外部 API，用于访问文件系统、网络通信、操作系统功能等。这包括 fs 模块、http 模块、util 模块等。这些 Node APIs 不同于浏览器的 Web APIs，它们是 Node.js 运行时环境的一部分，用于与操作系统交互。

4. **任务队列（Task Queue）**：Node.js 也具有任务队列，用于存储宏任务（如 I/O 操作、定时器回调）和微任务（如 Promise 回调）等异步任务。

5. **事件循环（Event Loop）**：事件循环在 Node.js 中同样起着核心的作用，用于协调和处理异步任务。Node.js 的事件循环与浏览器的事件循环在概念上非常相似，在 Node.js 中，使用 [libuv](https://github.com/libuv/libuv) 来创建 Event Loop。
