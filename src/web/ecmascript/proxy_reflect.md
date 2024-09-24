# Proxy 和 Reflect

## Proxy

一个 [Proxy 对象](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy) 包装另一个对象并拦截诸如读取/写入属性和其他操作，可以选择自行处理它们，或者透明地允许该对象处理它们。

语法：

```js
let proxy = new Proxy(target, handler)
```

- `target`：是要包装的对象，可以是任何东西，包括函数。
- `handler`：代理配置：带有“捕捉器”（“traps”，即拦截操作的方法）的对象。比如 `get` 捕捉器用于读取 `target` 的属性，`set` 捕捉器用于写入 `target` 的属性，等等。

对 proxy 进行操作：

1. 如果在 handler 中存在相应的捕捉器，则它将运行，并且 Proxy 有机会对其进行处理。
2. 否则将直接对 target 进行处理。

::: details 我们可以用它们拦截什么？
对于对象的大多数操作，JavaScript 规范中有一个所谓的“内部方法”，它描述了最底层的工作方式。例如 `[[Get]]`，用于读取属性的内部方法，`[[Set]]`，用于写入属性的内部方法，等等。这些方法仅在规范中使用，我们不能直接通过方法名调用它们。

| 内部方法              | Handler 方法             | 何时触发                                                                                      |
| --------------------- | ------------------------ | --------------------------------------------------------------------------------------------- |
| [[Get]]               | get                      | 读取属性                                                                                      |
| [[Set]]               | set                      | 写入属性                                                                                      |
| [[HasProperty]]       | has                      | in 操作符                                                                                     |
| [[Delete]]            | eleteProperty            | delete 操作符                                                                                 |
| [[Call]]              | apply                    | 函数调用                                                                                      |
| [[Construct]]         | onstruct new             | 操作符                                                                                        |
| [[GetPrototypeOf]]    | getPrototypeOf           | Object.getPrototypeOf                                                                         |
| [[SetPrototypeOf]]    | setPrototypeOf           | Object.setPrototypeOf                                                                         |
| [[IsExtensible]]      | isExtensible             | Object.isExtensible                                                                           |
| [[PreventExtensions]] | preventExtensions        | Object.preventExtensions                                                                      |
| [[DefineOwnProperty]] | defineProperty           | Object.defineProperty, Object.defineProperties                                                |
| [[GetOwnProperty]]    | getOwnPropertyDescriptor | Object.getOwnPropertyDescriptor, for..in, Object.keys/values/entries                          |
| [[OwnPropertyKeys]]   | ownKeys                  | Object.getOwnPropertyNames, Object.getOwnPropertySymbols, `for..in`, `Object.keys/values/entries` |

具体可参考：[Proxy Object Internal Methods and Internal Slots](https://tc39.es/ecma262/#sec-proxy-object-internal-methods-and-internal-slots)
:::

::: warning 不变量（Invariant）
JavaScript 强制执行某些不变量 —— 内部方法和捕捉器必须满足的条件。

其中大多数用于返回值：

- [[Set]] 如果值已成功写入，则必须返回 true，否则返回 false。
- [[Delete]] 如果已成功删除该值，则必须返回 true，否则返回 false。
- ……

还有其他一些不变量，例如：

- 应用于代理（proxy）对象的 [[GetPrototypeOf]]，必须返回与应用于被代理对象的 [[GetPrototypeOf]] 相同的值。换句话说，读取代理对象的原型必须始终返回被代理对象的原型。
捕捉器可以拦截这些操作，但是必须遵循上面这些规则。

不变量确保语言功能的正确和一致的行为。完整的不变量列表在 [规范](https://tc39.es/ecma262/#sec-proxy-object-internal-methods-and-internal-slots) 中。如果你不做奇怪的事情，你可能就不会违反它们。
:::

### 没有任何捕捉器

首先，让我们创建一个没有任何捕捉器的代理（Proxy）：

```js
let target = {}
let proxy = new Proxy(target, {}) // 空的 handler 对象

proxy.test = 5 // 写入 proxy 对象 (1)
alert(target.test) // 5，test 属性出现在了 target 中！

alert(proxy.test) // 5，我们也可以从 proxy 对象读取它 (2)

for (let key in proxy) alert(key) // test，迭代也正常工作 (3)
```

由于没有捕捉器，所有对 proxy 的操作都直接转发给了 target。

1. 写入操作 proxy.test= 会将值写入 target。
2. 读取操作 proxy.test 会从 target 返回对应的值。
3. 迭代 proxy 会从 target 返回对应的值。

可以看到，没有任何捕捉器，proxy 是一个 target 的透明包装器（wrapper）。

## Reflect

Proxy 好搭档 Reflect：用于拦截 js 对象操作。

Reflect 是一个内建对象，可简化 Proxy 的创建。

## Proxy vs Object.defineProperty()

**Proxy**：

1. Proxy 将代理一个对象（被代理对象），得到一个新的对象（代理对象），同时拥有被代理对象中所有的属性。
2. 当想要修改对象的指定属性时，应该使用 **代理对象** 来进行修改。
3. **代理对象** 的任何一个属性都可以触发 handler 的 getter / setter。

**Object.defineProperty()**：

1. Object.defineProperty() 为 **指定对象的指定属性** 设置 **属性描述符**。
2. 当想要修改对象的指定属性时，可以使用 **原对象** 进行修改。
3. 通过属性描述符，只有 **被监听** 的指定属性，才可以触发 getter / setter。
