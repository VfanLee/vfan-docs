# Node.js CommonJS

在 Node.js 中，使用的是 CommonJS 模块化语法，它是一种在服务器端和后端应用中广泛使用的模块化规范。

## module.exports 导出

```js
// 导出单个功能
module.exports = myFunction;
module.exports = myVariable;

// 导出多个功能
module.exports.myFunction = myFunction;
module.exports.myVariable = myVariable;
```

## require 导入

```js
// 导入整个模块
const myModule = require('./myModule');

// 导入多个功能
const { myFunction, myVariable } = require('./myModule');
```

## 内置库名字新规范：前缀模式

在 Node.js 18 以后，内置库的名字遵循 **前缀模式**，即在 `require()` 函数中添加前缀 `'node:'`。例如，要导入内置的 `http` 模块，应该使用 `require('node:http')`。
