# Proxy 和 Reflect

## Proxy

[Proxy](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy) 是对象的包装器，将代理上的操作转发到对象，并可以选择捕获其中一些操作。

它可以包装任何类型的对象，包括类和函数。

语法为：

```js
/**
 * target：是要包装的对象，可以是任何东西，包括函数。
 * handler：代理配置：带有“捕捉器”（“traps”，即拦截操作的方法）的对象。比如 `get` 捕捉器用于读取 `target` 的属性，`set` 捕捉器用于写入 `target` 的属性，等等。
 */
let proxy = new Proxy(target, handler)
```

**对 proxy 进行操作，如果在 handler 中存在相应的捕捉器，则它将运行，并且 Proxy 有机会对其进行处理。否则将直接对 target 进行处理。**

### 我们可以用它们拦截什么？

对于对象的大多数操作，JavaScript 规范中有一个所谓的“内部方法”，它描述了最底层的工作方式。例如 `[[Get]]`，用于读取属性的内部方法，`[[Set]]`，用于写入属性的内部方法，等等。这些方法仅在规范中使用，我们不能直接通过方法名调用它们。

| 内部方法                | Handler 方法               | 何时触发                                                                                              |
| ----------------------- | -------------------------- | ----------------------------------------------------------------------------------------------------- |
| `[[Get]]`               | `get`                      | 读取属性                                                                                              |
| `[[Set]]`               | `set`                      | 写入属性                                                                                              |
| `[[HasProperty]]`       | `has`                      | `in` 操作符                                                                                           |
| `[[Delete]]`            | `eleteProperty`            | `delete` 操作符                                                                                       |
| `[[Call]]`              | `apply`                    | 函数调用                                                                                              |
| `[[Construct]]`         | `onstruct`                 | `new` 操作符                                                                                          |
| `[[GetPrototypeOf]]`    | `getPrototypeOf`           | `Object.getPrototypeOf`                                                                               |
| `[[SetPrototypeOf]]`    | `setPrototypeOf`           | `Object.setPrototypeOf`                                                                               |
| `[[IsExtensible]]`      | `isExtensible`             | `Object.isExtensible`                                                                                 |
| `[[PreventExtensions]]` | `preventExtensions`        | `Object.preventExtensions`                                                                            |
| `[[DefineOwnProperty]]` | `defineProperty`           | `Object.defineProperty`，`Object.defineProperties`                                                    |
| `[[GetOwnProperty]]`    | `getOwnPropertyDescriptor` | `Object.getOwnPropertyDescriptor`, `for..in`, `Object.keys/values/entries`                            |
| `[[OwnPropertyKeys]]`   | `ownKeys`                  | `Object.getOwnPropertyNames`, `Object.getOwnPropertySymbols,` `for..in`, `Object.keys/values/entries` |

具体可参考：[Proxy Object Internal Methods and Internal Slots](https://tc39.es/ecma262/#sec-proxy-object-internal-methods-and-internal-slots)

::: tip 不变量（Invariant）
JavaScript 强制执行某些不变量 —— 内部方法和捕捉器必须满足的条件。

其中大多数用于返回值：

- `[[Set]]` 如果值已成功写入，则必须返回 true，否则返回 false。
- `[[Delete]]` 如果已成功删除该值，则必须返回 true，否则返回 false。
- ……

还有其他一些不变量，例如：

- 应用于代理（proxy）对象的 `[[GetPrototypeOf]]`，必须返回与应用于被代理对象的 `[[GetPrototypeOf]]` 相同的值。换句话说，读取代理对象的原型必须始终返回被代理对象的原型。
  捕捉器可以拦截这些操作，但是必须遵循上面这些规则。

不变量确保语言功能的正确和一致的行为。完整的不变量列表在 [规范](https://tc39.es/ecma262/#sec-proxy-object-internal-methods-and-internal-slots) 中。如果你不做奇怪的事情，你可能就不会违反它们。
:::

### 没有任何捕捉器

创建一个没有任何捕捉器的代理（Proxy）：

```js
let target = {}
let proxy = new Proxy(target, {}) // 空的 handler 对象

proxy.test = 5 // 写入 proxy 对象 (1)
console.log(target.test) // 5，test 属性出现在了 target 中！
console.log(proxy.test) // 5，我们也可以从 proxy 对象读取它 (2)

for (let key in proxy) {
  console.log(key) // test，迭代也正常工作 (3)
}
```

由于没有捕捉器，所有对 proxy 的操作都直接转发给了 target。

1. 写入操作 `proxy.test=` 会将值写入 `target`。
2. 读取操作 `proxy.test` 会从 `target` 返回对应的值。
3. 迭代 `proxy` 会从 `target` 返回对应的值。

可以看到，没有任何捕捉器，`proxy` 是一个 `target` 的透明包装器（wrapper）。

### `[[Get]]` 捕捉器

读取属性时触发 `get(target, property, receiver)` 方法，参数如下：

- `target`：目标对象，该对象被作为第一个参数传递给 `new Proxy`。
- `property`：目标属性名。
- `receiver`：如果目标属性是一个 `getter` 访问器属性，则 `receiver` 就是本次读取属性所在的 `this` 对象。通常，这就是 `proxy` 对象本身（或者，如果我们从 `proxy` 继承，则是从该 `proxy` 继承的对象）。

#### 为数组项创建默认值

通常，当人们尝试获取不存在的数组项时，他们会得到 `undefined`，但是我们在这将常规数组包装到代理（proxy）中，以捕获读取操作，并在没有要读取的属性的时返回 `0`：

```js {4,13,14}
let numbers = [0, 1, 2]

numbers = new Proxy(numbers, {
  get(target, prop) {
    if (prop in target) {
      return target[prop] // 对应索引的值
    } else {
      return 0 // 默认值
    }
  },
})

console.log(numbers[1]) // 1
console.log(numbers[123]) // 0（没有这个数组项）
```

#### 为对象属性创建默认值

如果没有我们要读取的短语，那么从 dictionary 读取它将返回 `undefined`。但实际上，返回一个未翻译的短语通常比 `undefined` 要好。因此，让我们在这种情况下返回一个未翻译的短语来替代 `undefined`：

```js {7,16,17}
let dictionary = {
  Hello: 'Hola',
  Bye: 'Adiós',
}

dictionary = new Proxy(dictionary, {
  get(target, phrase) {
    if (phrase in target) {
      return target[phrase] // 如果词典中有该短语，返回其翻译
    } else {
      return phrase // 返回未翻译的短语
    }
  },
})

console.log(dictionary['Hello']) // Hola
console.log(dictionary['Welcome to Proxy']) // Welcome to Proxy（没有被翻译）
```

::: warning
请注意代理如何覆盖变量：

```js
dictionary = new Proxy(dictionary, ...)
```

代理应该在所有地方都完全替代目标对象。目标对象被代理后，任何人都不应该再引用目标对象。否则很容易搞砸。
:::

### `[[Set]]` 捕捉器

写入属性时触发 `set(target, property, value, receiver)` 方法，参数如下：

- `target`：目标对象，该对象被作为第一个参数传递给 `new Proxy`。
- `property`：目标属性名称。
- `value`：目标属性的值。
- `receiver`：与 `get` 捕捉器类似，仅与 `setter` 访问器属性相关。

如果写入操作 `setting` 成功，set 捕捉器应该返回 true，否则返回 false（触发 TypeError）。

示例：

```js {4,16,18,19}
let numbers = []

numbers = new Proxy(numbers, {
  set(target, prop, val) {
    if (typeof val == 'number') {
      target[prop] = val
      return true
    } else {
      return false
    }
  },
})

numbers.push(1) // 添加成功
numbers.push(2) // 添加成功
console.log('数组长度为：' + numbers.length) // 2

numbers.push('test') // TypeError（proxy 的 'set' 返回 false）
console.log('从未到达此行（上一行有错误）')
```

::: warning 别忘了返回 true
对于 set 操作，它必须在成功写入时返回 true。

如果我们忘记这样做，或返回任何假（falsy）值，则该操作将触发 TypeError。
:::

### `[[OwnPropertyKeys]]` 和 `[[GetOwnProperty]]` 捕捉器

`Object.keys`，`for..in` 循环和大多数其他遍历对象属性的方法都使用内部方法 `[[OwnPropertyKeys]]`（由 `ownKeys` 捕捉器拦截）来获取属性列表。

这些方法在细节上有所不同：

- `Object.getOwnPropertyNames(obj)`：返回非 symbol 键。
- `Object.getOwnPropertySymbols(obj)`：返回 symbol 键。
- `Object.keys/values()`：返回带有 `enumerable` 标志的非 symbol 键/值。
- `for..in`：循环遍历所有带有 `enumerable` 标志的非 symbol 键，以及原型对象的键。

如下示例中，我们使用 `ownKeys` 捕捉器拦截 `for..in` 对 user 的遍历，并使用 `Object.keys` 和 `Object.values` 来跳过以下划线 `_` 开头的属性：

```js {8,20-21}
let user = {
  name: 'John',
  age: 30,
  _password: '***',
}

user = new Proxy(user, {
  ownKeys(target) {
    return Object.keys(target).filter(key => !key.startsWith('_'))
  },
})

// "ownKeys" 过滤掉了 _password
for (let key in user) {
  // name，然后是 age
  console.log(key)
}

// 对这些方法的效果相同：
console.log(Object.keys(user)) // name,age
console.log(Object.values(user)) // John,30
```

尽管如此，但如果我们返回对象中不存在的键，`Object.keys` 并不会列出这些键：

```js {4-6,9}
let user = {}

user = new Proxy(user, {
  ownKeys(target) {
    return ['a', 'b', 'c']
  },
})

console.log(Object.keys(user)) // <empty>
```

为什么？原因很简单：`Object.keys` 仅返回带有 `enumerable` 标志的属性。为了检查它，该方法会对每个属性调用内部方法 `[[GetOwnProperty]]` 来获取它的描述符（descriptor）。在这里，由于没有属性，其描述符为空，没有 `enumerable` 标志，因此它被略过。

为了让 `Object.keys` 返回一个属性，我们需要它要么存在于带有 `enumerable` 标志的对象，要么我们可以拦截对 `[[GetOwnProperty]]` 的调用（捕捉器 `getOwnPropertyDescriptor` 可以做到这一点），并返回带有 `enumerable: true` 的描述符。

```js {4,7,17}
let user = {}

user = new Proxy(user, {
  ownKeys(target) {
    return ['a', 'b', 'c']
  },
  getOwnPropertyDescriptor(target, prop) {
    // 被每个属性调用
    return {
      enumerable: true,
      configurable: true,
      /* ...其他标志，可能是 "value:..." */
    }
  },
})

console.log(Object.keys(user)) // a, b, c
```

### `[[Delete]]` 捕捉器

有一个普遍的约定，即以下划线 `_` 开头的属性和方法是内部的。不应从对象外部访问它们。

从技术上讲，我们也是能访问到这样的属性的：

```js {3,6}
let user = {
  name: 'John',
  _password: 'secret',
}

console.log(user._password) // secret
```

我们可以使用代理来防止对以 `_` 开头的属性的任何访问。需要以下捕捉器：

- `get`：读取此类属性时抛出错误。
- `set`：写入属性时抛出错误。
- `deleteProperty`：删除属性时抛出错误。
- `ownKeys 在使用`：`for..in` 和像 `Object.keys` 这样的方法时排除以 `_` 开头的属性。

```js {7,14,23,32,38,45,52,59}
let user = {
  name: 'John',
  _password: '***',
}

user = new Proxy(user, {
  get(target, prop) {
    if (prop.startsWith('_')) {
      throw new Error('Access denied')
    }
    let value = target[prop]
    return typeof value === 'function' ? value.bind(target) : value // (*)
  },
  set(target, prop, val) {
    // 拦截属性写入
    if (prop.startsWith('_')) {
      throw new Error('Access denied')
    } else {
      target[prop] = val
      return true
    }
  },
  deleteProperty(target, prop) {
    // 拦截属性删除
    if (prop.startsWith('_')) {
      throw new Error('Access denied')
    } else {
      delete target[prop]
      return true
    }
  },
  ownKeys(target) {
    // 拦截读取属性列表
    return Object.keys(target).filter(key => !key.startsWith('_'))
  },
})

// "get" 不允许读取 _password
try {
  console.log(user._password) // Error: Access denied
} catch (e) {
  console.log(e.message)
}

// "set" 不允许写入 _password
try {
  user._password = 'test' // Error: Access denied
} catch (e) {
  console.log(e.message)
}

// "deleteProperty" 不允许删除 _password
try {
  delete user._password // Error: Access denied
} catch (e) {
  console.log(e.message)
}

// "ownKeys" 将 _password 过滤出去
for (let key in user) console.log(key) // name
```

::: tip 请注意在 (\*) 行中 get 捕捉器的重要细节

```js {4}
get(target, prop) {
  // ...
  let value = target[prop];
  return (typeof value === 'function') ? value.bind(target) : value; // (*)
}
```

为什么我们需要一个函数去调用 `value.bind(target)`？

原因是对象方法（例如 `user.checkPassword()`）必须能够访问 `_password`：

```js
user = {
  // ...
  checkPassword(value) {
    //对象方法必须能读取 _password
    return value === this._password
  },
}
```

对 `user.checkPassword()` 的调用会将被代理的对象 user 作为 `this`（点符号之前的对象会成为 this），因此，当它尝试访问 `this._password` 时，`get` 捕捉器将激活（在任何属性读取时，它都会被触发）并抛出错误。

因此，我们在 (\*) 行中将对象方法的上下文绑定到原始对象 `target`。然后，它们将来的调用将使用 `target` 作为 `this`，不会触发任何捕捉器。

该解决方案通常可行，但并不理想，因为一个方法可能会将未被代理的对象传递到其他地方，然后我们就会陷入困境：原始对象在哪里，被代理的对象在哪里？

此外，一个对象可能会被代理多次（多个代理可能会对该对象添加不同的“调整”），并且如果我们将未包装的对象传递给方法，则可能会产生意想不到的后果。

因此，在任何地方都不应使用这种代理。

> 现代 JavaScript 引擎原生支持 `class` 中的私有属性，这些私有属性以 `#` 为前缀。无需代理（proxy）。
>
> 但是，此类属性有其自身的问题。特别是，它们是不可继承的。

:::

### `[[HasProperty]]` 捕捉器

`has(target, property)` 捕捉器会拦截 [in 调用](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/in)，参数如下：

- `target`：是目标对象，被作为第一个参数传递给 `new Proxy`。
- `property`：属性名称。

我们使用 `in` 操作符来检查一个数字是否在 range 范围内：

```js {7,12,13}
let range = {
  start: 1,
  end: 10,
}

range = new Proxy(range, {
  has(target, prop) {
    return prop >= target.start && prop <= target.end
  },
})

console.log(5 in range) // true
console.log(50 in range) // false
```

### `[[Call]]` 捕捉器

`apply(target, thisArg, args)` 捕捉器能使代理以函数的方式被调用，参数如下：

- `target`：目标对象（在 JavaScript 中，函数就是一个对象），
- `thisArg`：this 的值。
- `args`：参数列表。

示例：调用 `delay(f, ms)` 会返回一个函数，该函数会在 `ms` 毫秒后把所有调用转发给 `f`：

::: code-group

```js [非 Proxy] {2-4,10,13}
function delay(f, ms) {
  return function () {
    setTimeout(() => f.apply(this, arguments), ms)
  }
}

function sayHi(user) {
  console.log(`Hello, ${user}!`)
}
console.log(sayHi.length) // 1（函数的 length 是函数声明中的参数个数）

sayHi = delay(sayHi, 3000)
console.log(sayHi.length) // 0（在包装器声明中，参数个数为 0)
sayHi('Join')
```

```js [Proxy] {2-6,12,15}
function delay(f, ms) {
  return new Proxy(f, {
    apply(target, thisArg, args) {
      setTimeout(() => target.apply(thisArg, args), ms)
    },
  })
}

function sayHi(user) {
  console.log(`Hello, ${user}!`)
}
console.log(sayHi.length) // 1（函数的 length 是函数声明中的参数个数）

sayHi = delay(sayHi, 3000)
console.log(sayHi.length) // 1（proxy 将“获取 length”的操作转发给目标对象）
sayHi('Join')
```

:::

## Reflect

Reflect 是一个内建对象，可简化 Proxy 的创建。

[前面](#我们可以用它们拦截什么) 提到过的内部方法，例如 `[[Get]]` 和 `[[Set]]` 等，都只是规范性的，不能直接调用。

Reflect 对象使调用这些内部方法成为了可能。它的方法是内部方法的最小包装。

以下是执行相同操作和 Reflect 调用的示例：

| 操作                | Reflect 调用                        | 内部方法        |
| ------------------- | ----------------------------------- | --------------- |
| `obj[prop]`         | `Reflect.get(obj, prop)`            | `[[Get]]`       |
| `obj[prop] = value` | `Reflect.set(obj, prop, value)`     | `[[Set]]`       |
| `delete obj[prop]`  | `Reflect.deleteProperty(obj, prop)` | `[[Delete]]`    |
| `new F(value)`      | `Reflect.construct(F, value)`       | `[[Construct]]` |
| ...                 | ...                                 | ...             |

对于每个可被 `Proxy` 捕获的内部方法，在 `Reflect` 中都有一个对应的方法，其名称和参数与 `Proxy` 捕捉器相同。

### `[[Get]]` 捕捉器

为数组项创建默认值：

```js {4,13,14}
let numbers = [0, 1, 2]

numbers = new Proxy(numbers, {
  get(target, prop, receiver) {
    if (prop in target) {
      return Reflect.get(target, prop, receiver) // 对应索引的值
    } else {
      return 0 // 默认值
    }
  },
})

console.log(numbers[1]) // 1
console.log(numbers[123]) // 0（没有这个数组项）
```

为对象属性创建默认值：

```js {7,16,17}
let dictionary = {
  Hello: 'Hola',
  Bye: 'Adiós',
}

dictionary = new Proxy(dictionary, {
  get(target, phrase, receiver) {
    if (phrase in target) {
      return Reflect.get(target, phrase, receiver) // 如果词典中有该短语，返回其翻译
    } else {
      return phrase // 返回未翻译的短语
    }
  },
})

console.log(dictionary['Hello']) // Hola
console.log(dictionary['Welcome to Proxy']) // Welcome to Proxy（没有被翻译）
```

### `[[Set]]` 捕捉器

```js
let numbers = []

numbers = new Proxy(numbers, {
  set(target, prop, val, receiver) {
    if (typeof val == 'number') {
      return Reflect.set(target, prop, val, receiver)
    } else {
      return false
    }
  },
})

numbers.push(1) // 添加成功
numbers.push(2) // 添加成功
console.log('数组长度为：' + numbers.length) // 2

numbers.push('test') // TypeError（proxy 的 'set' 返回 false）
console.log('从未到达此行（上一行有错误）')
```

## Proxy 的局限性

代理提供了一种独特的方法，可以在最底层更改或调整现有对象的行为。但是，它并不完美。有局限性。

### 内建对象：内部插槽（Internal slot）

许多内建对象，例如 `Map`，`Set`，`Date`，`Promise` 等，都使用了所谓的“内部插槽”。

它们类似于属性，但仅限于内部使用，仅用于规范目的。例如，Map 将项目（item）存储在 `[[MapData]]` 中。内建方法可以直接访问它们，而不通过 `[[Get]]`/`[[Set]]` 内部方法。所以 Proxy 无法拦截它们。

在类似这样的内建对象被代理后，代理对象没有这些内部插槽，因此内建方法将会失败：

```js {4}
let map = new Map()
let proxy = new Proxy(map, {})

proxy.set('test', 1) // Error
```

在内部，一个 Map 将所有数据存储在其 `[[MapData]]` 内部插槽中。代理对象没有这样的插槽。内建方法 `Map.prototype.set` 方法试图访问内部属性 `this.[[MapData]]`，但由于 `this=proxy`，在 proxy 中无法找到它，只能失败。

幸运的是，这有一种解决方法：

```js {5,9,10}
let map = new Map()
let proxy = new Proxy(map, {
  get(target, prop, receiver) {
    let value = Reflect.get(...arguments)
    return typeof value === 'function' ? value.bind(target) : value
  },
})

proxy.set('test', 1)
console.log(proxy.get('test')) // 1（工作了！）
```

现在它正常工作了，因为 `get` 捕捉器将函数属性（例如 `map.set`）绑定到了目标对象（`map`）本身。

与前面的示例不同，`proxy.set(...)` 内部 `this` 的值并不是 `proxy`，而是原始的 `map`。因此，当 `set` 捕捉器的内部实现尝试访问 `this.[[MapData]]` 内部插槽时，它会成功。

::: tip `Array` 没有内部插槽
一个值得注意的例外：内建 `Array` 没有使用内部插槽。那是出于历史原因，因为它出现于很久以前。

所以，代理数组时没有这种问题。
:::

### 私有字段

类的私有字段也会发生类似的情况。

例如，`getName()` 方法访问私有的 `#name` 属性，并在代理后中断：

```js {12}
class User {
  #name = 'Guest'

  getName() {
    return this.#name
  }
}

let user = new User()
user = new Proxy(user, {})

console.log(user.getName()) // Error
```

原因是私有字段是通过内部插槽实现的。JavaScript 在访问它们时不使用 `[[Get]]`/`[[Set]]`。

在调用 `getName()` 时，`this` 的值是代理后的 `user`，它没有带有私有字段的插槽。

同样的，带有 `bind` 方法的解决方案使它恢复正常：

```js {13,17}
class User {
  #name = 'Guest'

  getName() {
    return this.#name
  }
}

let user = new User()
user = new Proxy(user, {
  get(target, prop, receiver) {
    let value = Reflect.get(...arguments)
    return typeof value === 'function' ? value.bind(target) : value
  },
})

console.log(user.getName()) // Guest
```

如前所述，该解决方案也有缺点：它将原始对象暴露给该方法，可能使其进一步传递并破坏其他代理功能。

### Proxy != target

代理和原始对象是不同的对象。这很自然，对吧？

所以，如果我们使用原始对象作为键，然后对其进行代理，之后却无法找到代理了：

```js {11,14}
let allUsers = new Set()

class User {
  constructor(name) {
    this.name = name
    allUsers.add(this)
  }
}

let user = new User('John')
console.log(allUsers.has(user)) // true

user = new Proxy(user, {})
console.log(allUsers.has(user)) // false（Proxy != target）
```

::: tip Proxy 无法拦截严格相等性检查 `===`

Proxy 可以拦截许多操作符，例如：

- `new`（使用 `construct`）
- `in`（使用 `has`）
- `delete`（使用 `deleteProperty`）
- ...

但是没有办法拦截对于对象的严格相等性检查。一个对象只严格等于其自身，没有其他值。

因此，比较对象是否相等的所有操作和内建类都会区分对象和代理。这里没有透明的替代品。

:::

## 可撤销 Proxy

一个 **可撤销** 的代理是可以被禁用的代理。

语法：

```js
let { proxy, revoke } = Proxy.revocable(target, handler)
```

示例：

```js {4,7,10,13}
let object = {
  data: 'Valuable data',
}
let { proxy, revoke } = Proxy.revocable(object, {})

// 将 proxy 传递到其他某处，而不是对象...
console.log(proxy.data) // Valuable data

// 撤销代理
revoke()

// proxy 不再工作（revoked）
console.log(proxy.data) // Error
```

对 `revoke()` 的调用会从代理中删除对目标对象的所有内部引用，因此它们之间再无连接。

最初，`revoke` 与 `proxy` 是分开的，因此我们可以传递 `proxy`，同时将 `revoke` 留在当前范围内。

我们也可以通过设置 `proxy.revoke` = `revoke` 来将 `revoke` 绑定到 `proxy`。

另一种选择是创建一个 [`WeakMap`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WeakMap)，其中 `proxy` 作为键，相应的 `revoke` 作为值，这样可以轻松找到 `proxy` 所对应的 `revoke`：

```js {1,9,12}
let revokes = new WeakMap()

let object = {
  data: 'Valuable data',
}

let { proxy, revoke } = Proxy.revocable(object, {})

revokes.set(proxy, revoke)

// ...我们代码中的其他位置...
revoke = revokes.get(proxy)
revoke()

console.log(proxy.data) // Error（revoked）
```

此处我们使用 `WeakMap` 而不是 `Map`，因为它不会阻止垃圾回收。如果一个代理对象变得“不可访问”（例如，没有变量再引用它），则 `WeakMap` 允许将其与它的 `revoke` 一起从内存中清除，因为我们不再需要它了。

## “Proxy” vs “Object.defineProperty()”

**Proxy**：

1. Proxy 将代理一个对象（被代理对象），得到一个新的对象（代理对象），同时拥有被代理对象中所有的属性。
2. 当想要修改对象的指定属性时，应该使用 **代理对象** 来进行修改。
3. **代理对象** 的任何一个属性都可以触发 handler 的 getter / setter。

**Object.defineProperty()**：

1. Object.defineProperty() 为 **指定对象的指定属性** 设置 **属性描述符**。
2. 当想要修改对象的指定属性时，可以使用 **原对象** 进行修改。
3. 通过属性描述符，只有 **被监听** 的指定属性，才可以触发 getter / setter。
