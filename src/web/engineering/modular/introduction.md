# 前端模块化发展史

## 背景简介

在早期的前端开发中，JavaScript 代码通常都是直接写在 HTML 文件中，没有模块化的概念。随着项目规模的扩大，代码的复杂度也随之增加，开发者逐渐意识到需要一种机制来组织和管理代码，以提高可维护性和复用性。这就是前端模块化发展的起点。

## 早期：全局作用域

在最初的前端开发中，所有的 JavaScript 代码都是共享同一个全局作用域。这意味着所有的变量和函数都在全局范围内可见，容易导致命名冲突和代码难以维护。随着项目变得越来越复杂，全局作用域的局限性逐渐显现出来。

**特点**：

- 所有变量和函数共享同一作用域。
- 随着代码量的增加，命名冲突频发。
- 代码组织混乱，难以维护。

**示例**：

```javascript
var globalVar = "I am global";

function doSomething() {
    console.log(globalVar);
}
```

## 立即执行函数表达式（IIFE）

为了解决全局作用域污染问题，开发者开始使用立即执行函数表达式（IIFE）。IIFE 通过将代码包裹在一个函数中并立即执行，从而创建一个局部作用域，避免了与全局作用域的冲突。

**特点**：

- 通过创建局部作用域来避免全局污染。
- 代码组织更加模块化和清晰。

**示例**：

```javascript
(function() {
    var privateVar = "I am private";
    function privateFunc() {
        console.log(privateVar);
    }
    window.publicFunc = function() {
        privateFunc();
    };
})();
```

## 模块化规范

随着前端项目的复杂度增加，IIFE 的局限性逐渐显现。开发者开始寻找更正式的模块化解决方案，促成了多个模块化规范的诞生。

### ⭐ CommonJS

CommonJS 是较早的模块化规范之一，主要用于服务器端 JavaScript 环境（如 Node.js）。CommonJS 规范采用同步加载模块的方式，这在服务器端非常适用。

**特点**：

- 同步加载模块，适合服务器端。
- 使用 `require()` 导入模块，`module.exports` 导出模块。

**示例**：

```javascript
// math.js
module.exports = {
    add: function(a, b) { return a + b; }
};

// main.js
const math = require('./math');
console.log(math.add(2, 3)); // 5
```

### AMD（Asynchronous Module Definition）

AMD 规范主要为了解决浏览器端异步加载模块的问题，由 RequireJS 团队提出。AMD 允许在浏览器端异步加载模块，提升页面加载性能。

**特点**：

- 异步加载模块，适合浏览器端。
- 使用 `define()` 定义模块，`require()` 加载模块。

**示例**：

```javascript
define(['math'], function(math) {
    console.log(math.add(2, 3)); // 5
});
```

### CMD（Common Module Definition）

CMD 规范由阿里巴巴的 Sea.js 团队提出，是对 AMD 的改进，特别强调按需加载和依赖就近。CMD 在中国的前端开发中非常流行。

**特点**：

- 强调按需加载，模块只有在被调用时才加载。
- 依赖就近，模块的依赖可以放在模块内部。

**示例**：

```javascript
define(function(require, exports, module) {
    var math = require('./math');
    console.log(math.add(1, 2)); // 3

    exports.name = "CMD Module";
});
```

### UMD（Universal Module Definition）

UMD 规范旨在统一 CommonJS 和 AMD 的模块化规范，提供一个能够在多种环境中通用的模块定义方式。UMD 使得模块可以在浏览器端和服务器端无缝运行。

**特点**：

- 通用性强，兼容 CommonJS 和 AMD。
- 支持无模块系统的环境，通过全局变量暴露接口。

**示例**：

```javascript
(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(factory);
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory();
    } else {
        root.myModule = factory();
    }
}(this, function() {
    return {
        name: 'UMD Module'
    };
}));
```

### ⭐ ES6 模块化

ES6（也称为 ECMAScript 2015）标准引入了原生的模块化支持，成为现代 JavaScript 开发的主流选择。ES6 模块化采用静态分析的方式，编译时就能确定模块的依赖关系。

**特点**：

- 原生支持模块化，无需额外工具。
- 使用 `import` 导入模块，`export` 导出模块。
- 支持静态分析，提升编译优化能力。

**示例**：

```javascript
// math.js
export function add(a, b) {
    return a + b;
}

// main.js
import { add } from './math.js';
console.log(add(2, 3)); // 5
```

## 时间顺序总览

- **CommonJS**：2009 年左右，主要用于服务器端（Node.js）。
- **AMD**：2010 年左右，主要用于浏览器端，解决异步加载问题。
- **CMD**：2011-2012 年，主要在中国的前端开发中流行，注重按需加载。
- **UMD**：2011-2012 年，为了在不同环境中兼容 AMD 和 CommonJS。
- **ES6 模块化**：2015 年正式引入，成为 ECMAScript 6（ES6）标准的一部分，广泛应用于现代浏览器和 JavaScript 生态系统。
