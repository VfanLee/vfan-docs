# 对象属性

对象可以存储属性。

对日常的开发来说，属性对我们来说只是一个简单的“键值”对，但对象属性实际上是更灵活且更强大的东西。

## 属性标志

对象属性（properties），除 value 外，还有三个特殊的特性（attributes），也就是所谓的“标志”：

- `writable`：如果为 true，则值可以被修改，否则它是只可读的。
- `enumerable`：如果为 true，则会被在循环中列出，否则不会被列出。
- `configurable`：如果为 true，则此属性可以被删除，这些特性也可以被修改，否则不可以。

### 获取属性标志

[Object.getOwnPropertyDescriptor(obj, prop)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor) 方法允许查询有关属性的完整信息。

例如：

```js
let user = {
  name: 'John',
}

let descriptor = Object.getOwnPropertyDescriptor(user, 'name')

alert(JSON.stringify(descriptor, null, 2))
/* 属性描述符：
{
  "value": "John",
  "writable": true,
  "enumerable": true,
  "configurable": true
}
*/
```

::: tip
[Object.getOwnPropertyDescriptors(obj)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptors) 返回给定对象的所有自有属性描述符。
:::

### 修改标志

当通过 `user.name` 创建一个属性时，标志默认为 true：

```js {3,11-13}
let user = {}

user.name = 'John'

let descriptor = Object.getOwnPropertyDescriptor(user, 'name')

alert(JSON.stringify(descriptor, null, 2))
/*
{
  "value": "John",
  "writable": true,
  "enumerable": true,
  "configurable": true
}
 */
```

为了修改标志，我们可以使用 [Object.defineProperty(obj, prop, descriptor)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)。

如果该属性存在，`defineProperty` 会更新其标志。

否则，它会使用给定的值和标志创建属性，如果没有提供标志，则会假定它是 false：

```js {3,13-15}
let user = {}

Object.defineProperty(user, 'name', {
  value: 'John',
})

let descriptor = Object.getOwnPropertyDescriptor(user, 'name')

alert(JSON.stringify(descriptor, null, 2))
/*
{
  "value": "John",
  "writable": false,
  "enumerable": false,
  "configurable": false
}
 */
```

::: tip
[Object.defineProperties()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties) 静态方法直接在一个对象上定义新的属性或修改现有属性，并返回该对象。
:::

### 只读

通过更改 `writable` 标志来把 `user.name` 设置为只读（`user.name` 不能被重新赋值）：

```js
let user = {
  name: 'John',
}

Object.defineProperty(user, 'name', {
  writable: false,
})

user.name = 'Pete' // Error: Cannot assign to read only property 'name'
```

::: tip 只在严格模式下会出现 Errors
在非严格模式下，在对不可写的属性等进行写入操作时，不会出现错误。但是操作仍然不会成功。在非严格模式下，违反标志的行为（flag-violating action）只会被默默地忽略掉。
:::

### 不可枚举

通常，对象中内建的 `toString` 是不可枚举的，它不会显示在 `for..in` 中。但是如果我们 **添加我们自己的 `toString`**，那么默认情况下它将显示在 `for..in` 中：

```js {9}
let user = {
  name: 'John',
  toString() {
    return this.name
  },
}

// 默认情况下，我们的两个属性都会被列出：
for (let key in user) alert(key) // name, toString
```

可以将 **我们自己的 `toString`** 设置 `enumerable: false`。之后它就不会出现在 `for..in` 循环中了，就像内建的 `toString` 一样：

```js {9,13}
let user = {
  name: 'John',
  toString() {
    return this.name
  },
}

Object.defineProperty(user, 'toString', {
  enumerable: false,
})

// 现在我们的 toString 消失了：
for (let key in user) alert(key) // name
```

::: tip 不可枚举的属性也会被 [Object.keys](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/keys) 排除

```js {9,13}
let user = {
  name: 'John',
  toString() {
    return this.name
  },
}

Object.defineProperty(user, 'toString', {
  enumerable: false,
})

alert(Object.keys(user)) // name
```

:::

### 不可配置

不可配置的属性不能被删除，它的特性（attribute）不能被修改。

例如，[Math.PI](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/PI) 是只读的、不可枚举和不可配置的：

```js
let descriptor = Object.getOwnPropertyDescriptor(Math, 'PI')

alert(JSON.stringify(descriptor, null, 2))
/*
{
  "value": 3.141592653589793,
  "writable": false,
  "enumerable": false,
  "configurable": false
}
*/

Math.PI = 3 // 无法修改 Math.PI 的值或覆盖它
Object.defineProperty(Math, 'PI', { writable: true }) // 无法将 Math.PI 改为 writable
```

请注意：`configurable: false` 防止更改和删除属性标志，但是允许更改对象的值：

```js
let user = {
  name: 'John',
}

Object.defineProperty(user, 'name', {
  configurable: false,
})

user.name = 'Pete' // 正常工作
delete user.name // 无法删除 name 属性
```

## 属性的 getter 和 setter

有两种类型的对象属性：

- 第一种是 **数据属性**。
- 第二种是 **访问器属性（accessor property）**。它们本质上是用于获取和设置值的函数，但从外部代码来看就像常规属性。

### getter 和 setter

访问器属性由 “getter” 和 “setter” 方法表示。在对象字面量中，它们用 get 和 set 表示：

```js {2,6}
let obj = {
  get propName() {
    // 当读取 obj.propName 时，getter 起作用
  },

  set propName(value) {
    // 当执行 obj.propName = value 操作时，setter 起作用
  },
}
```

访问器属性看起来就像一个普通属性。这就是访问器属性的设计思想。我们不以函数的方式 **调用** `user.fullName`，我们正常 **读取** 它（getter 在幕后运行）。

例如：fullName 只有一个 getter。如果我们尝试赋值操作 `user.fullName`，将会出现错误：

```js {2,7}
let user = {
  get fullName() {
    return `...`
  },
}

user.fullName = 'Test' // Error（属性只有一个 getter）
```

我们可以通过设置 setter 来使 “虚拟属性” `fullName` 为 **可读可写**：

```js {5,9}
let user = {
  name: 'John',
  surname: 'Smith',

  get fullName() {
    return `${this.name} ${this.surname}`
  },

  set fullName(value) {
    ;[this.name, this.surname] = value.split(' ')
  },
}

// set fullName 将以给定值执行
user.fullName = 'Alice Cooper'

alert(user.name) // Alice
alert(user.surname) // Cooper
```

### 访问器描述符

访问器属性的描述符与数据属性的不同。

**对于访问器属性，没有 `value` 和 `writable`，但是有 `get` 和 `set` 函数。**

所以访问器描述符可能有：

- `get`：一个没有参数的函数，在读取属性时工作，
- `set`：带有一个参数的函数，当属性被设置时调用，
- `enumerable`：与数据属性的相同，
- `configurable`：与数据属性的相同。

例如，要使用 `defineProperty` 创建一个 `fullName` 访问器，我们可以使用 `get` 和 `set` 来传递描述符：

```js {6-14}
let user = {
  name: 'John',
  surname: 'Smith',
}

Object.defineProperty(user, 'fullName', {
  get() {
    return `${this.name} ${this.surname}`
  },

  set(value) {
    ;[this.name, this.surname] = value.split(' ')
  },
})

alert(user.fullName) // John Smith

for (let key in user) alert(key) // name, surname
```

### getter/setter 的设计思想

- `getter/setter` 可以用作“真实”属性值的包装器，以便对它们进行更多的控制。

  例如：如果我们想禁止太短的 user 的 name，我们可以创建一个 setter name，并将值存储在一个单独的属性 `_name` 中：

  ```js
  let user = {
    get name() {
      return this._name
    },

    set name(value) {
      if (value.length < 4) {
        alert('Name is too short, need at least 4 characters')
        return
      }
      this._name = value
    },
  }

  user.name = 'Pete'
  alert(user.name) // Pete

  user.name = '' // Name 太短了……
  ```

  所以，name 被存储在 `_name` 属性中，并通过 getter 和 setter 进行访问。

  从技术上讲，外部代码可以使用 `user._name` 直接访问 name。但是，这儿有一个众所周知的约定，即以下划线 `"_"` 开头的属性是内部属性，不应该从对象外部进行访问。

- 它们允许随时通过使用 getter 和 setter 替换“正常的”数据属性，来控制和调整这些属性的行为。

  ```js
  function User(name, birthday) {
    this.name = name
    this.birthday = birthday

    // 年龄是根据当前日期和生日计算得出的
    Object.defineProperty(this, 'age', {
      get() {
        let todayYear = new Date().getFullYear()
        return todayYear - this.birthday.getFullYear()
      },
    })
  }

  let john = new User('John', new Date(1992, 6, 1))

  alert(john.birthday) // birthday 是可访问的
  alert(john.age) // ……age 也是可访问的
  ```
