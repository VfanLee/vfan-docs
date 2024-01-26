# Ajax

> 参考：
>
> - [MDN Ajax](https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX)
> - [MDN XHR](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)
> - [MDN Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
> - [jQuery.ajax()](https://api.jquery.com/jQuery.ajax/)
> - [Axios](https://www.axios-http.cn/docs/intro)

## 常见 Ajax 方案

当涉及到 AJAX（Asynchronous JavaScript and XML）时，有多种方式可以用来发送异步请求从服务器获取数据或与服务器进行通信。以下是 XMLHttpRequest（XHR）、Fetch API、jQuery Ajax 和 axios 的主要区别和特点的总结：

1. **XMLHttpRequest (XHR)**:
   - **原生 JavaScript API**：XHR 是浏览器原生提供的 API，用于进行异步通信。
   - **回调风格**：XHR 使用回调函数的方式来处理异步操作，通常需要设置 `onreadystatechange` 事件回调。
   - **老式，不够现代**：相对较老，不支持 Promise 风格的编程，对于复杂的异步操作可能显得不够现代化。

2. **Fetch**:
   - **现代 API**：Fetch 是现代的 Web API，提供了更简单和强大的方式来进行网络请求。
   - **Promise 风格**：Fetch 基于 Promise，使异步代码更易管理，支持流式操作。
   - **内置 JSON 支持**：Fetch 内置支持 JSON 解析，响应对象是一个 Response 对象，可以使用内置方法进行处理。
   - **不支持老浏览器**：不支持 Internet Explorer 11 及更早版本的浏览器，需要使用 polyfill 进行兼容性处理。

3. **jQuery Ajax**: jQuery Ajax 是 jQuery 库的一部分，封装了底层的 XMLHttpRequest，提供了更高级的接口，隐藏了许多底层细节，以简化异步请求的处理。

4. **axios**: Axios 是一个基于 promise 网络请求库，作用于node.js 和浏览器中。 它是 isomorphic 的(即同一套代码可以运行在浏览器和node.js中)。在服务端它使用原生 node.js http 模块, 而在客户端 (浏览端) 则使用 XMLHttpRequests。

## Ajax 示例参考

[ajax 使用示例](https://github.com/VfanLee/lab/tree/main/basic/ajax)
