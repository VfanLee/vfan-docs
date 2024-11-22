
# export 导出

## 具名导出

导出先前声明的值：

```js
const something = true;
export { something };
```

导出时重命名：

```js
export { something as somethingElse };
```

声明后立即导出值：

```js
// `var`, `let`, `const`, `class`, 和 `function` 都是有效的
export const something = true;
```

## 默认导出

导出单个值作为源模块的默认导出：

```js
export default something;
```

仅当你的源模块只有一个导出时才推荐这种做法。

尽管规范允许，但在同一个模块中混合默认和命名导出是不好的做法。

# 绑定是如何工作的？

ES 模块导出 *live bindings*，而不是值，因此可以在初始导入后更改值。

::: code-group

```js [main.js]
import { count, increment } from './incrementer.js';

console.log(count); // 0
increment();
console.log(count); // 1

count += 1; // Error - 只有 incrementer.js 可以更改这个变量
```

```js [incrementer.js]
export let count = 0;

export function increment() {
 count += 1;
}
```

:::
