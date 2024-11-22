# import 导入

导入的值不能被重新分配，尽管导入的对象和数组 可以被 mutated（并且导出模块和任何其他导入将受到 mutation 的影响）。也就是说，它们的行为类似于 const 声明。

## 具名导入

使用源模块中的原始名称进行导入。

```js
import { something } from './module.js'
```

从源模块导入特定项目，并在导入时分配自定义名称。

```js
import { something as somethingElse } from './module.js'
```

## 名称空间导入

将源模块中的所有内容作为一个对象导入，该对象将所有源模块的 named exports 公开为属性和方法。

```js
import * as module from './module.js'
```

从上面的示例中，`something` 将作为属性附加到导入的对象上，例如 `module.something`。如果存在默认导出，则可以通过 `module.default` 访问它。

## 默认导入

导入源模块的 `default export`。

```js
import something from './module.js'
```

默认导出的值可以用任何合法的标识符命名，不需要与模块内部的导出名称一致。

若想要 **重命名** 时直接赋予导入的“默认导出”一个新变量名称即可：

::: code-group

```js [import]
import newName from './module.js'

newName() // 输出: Hello, world!
```

```js [export]
export default function greet() {
  console.log('Hello, world!')
}
```

:::

::: tip 你可能会看到另一种写法

```js
import { default as newName } from './module.js'
```

- `default` 是默认导出的占位符：模块可以有一个默认导出，`default` 关键字表示导入的默认值。
- 重命名默认导出： `import { default as alias }` 是一种重命名默认导出的方式，其中 `alias` 是新名称。

**建议直接为“默认导出”进行重命名！**

:::

::: tip

如果需要同时导入“默认导出”和“具名导出”，可以使用以下方式：

::: code-group

```js [import]
import newName, { name as renamedName } from './module.js'

newName() // 输出: Hello, world!
console.log(renamedName) // 输出: Module
```

```js [export]
export default function greet() {
  console.log('Hello, world!')
}

export const name = 'Module'
```

:::

## 无命名导入

加载模块代码，但不要使任何新对象可用。

```js
import './module.js'
```

这对于 polyfill 很有用，或者当导入代码的主要目的是处理 prototypes 时。

## 动态导入

使用 [动态导入 API](https://github.com/tc39/proposal-dynamic-import#import) 导入模块。

```js
import('./modules.js')
  .then(({ default: DefaultExport, NamedExport }) => {
    // 用这个模块做点什么...
  })
  .catch(error => {
    // 处理导入错误
  });
```

这对于代码分解应用程序和动态使用模块非常有用。
