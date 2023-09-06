# Node.js 模块系统

在 Node.js 中，使用的是 CommonJS 模块化语法，它是一种在服务器端和后端应用中广泛使用的模块化规范。

## 1. module.exports 导出

```js
// 导出单个功能
module.exports = myFunction;
module.exports = myVariable;

// 导出多个功能
module.exports.myFunction = myFunction;
module.exports.myVariable = myVariable;
```

## 2. require 导入

```js
// 导入整个模块
const myModule = require('./myModule');

// 导入多个功能
const { myFunction, myVariable } = require('./myModule');
```
