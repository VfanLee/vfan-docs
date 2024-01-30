# JS 模块化

> JS 模块化 [Example Demo](https://github.com/VfanLee/vfan-docs/tree/main/example/modular)

## export 导出

```js
// 默认导出
export default myFunction;
export default myVariable;

// 命名导出
export function myFunction() { ... }
export const myVariable = 42;

// 导出所有功能
export * from './myModule';
```

## import 导入

```js
// 导入默认导出
import myFunction from './myModule';
import myVariable from './myModule';

// 导入命名导出
import { myFunction, myVariable } from './myModule';
import * as myModule from './myModule';

// 导入并重命名
import { myFunction as func, myVariable as var } from './myModule';

// 导入所有功能
import * as myModule from './myModule';

// 动态导入
import('./myModule')
  .then(module => {
    // 使用导入的模块
  })
  .catch(error => {
    // 处理导入错误
  });
```



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
