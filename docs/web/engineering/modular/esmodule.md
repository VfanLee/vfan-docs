# ES Module

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
