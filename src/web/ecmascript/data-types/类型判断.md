# 类型判断

## typeof

```js
console.log(typeof null)          // object
console.log(typeof undefined)     // undefined
console.log(typeof true)          // boolean
console.log(typeof 3.14159)       // number
console.log(typeof 'str')         // string
console.log(typeof Symbol())      // symbol
console.log(typeof 123n)          // bigint
console.log(typeof {})            // object
console.log(typeof function(){})  // function
console.log(typeof [])            // object
```

其中值得注意的是：

- `null` 会被判断为 `object`。
- `function` 会被判断为 `function`。
- `[]` 会被判断为 `object`。

typeof 运算符返回参数的类型。当我们想要分别处理不同类型值的时候，或者想快速进行数据类型检验时，非常有用。

对 typeof x 的调用会以字符串的形式返回数据类型：

```js
typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)

typeof null // "object"  (2)

typeof alert // "function"  (3)
```

最后三行可能需要额外的说明：

Math 是一个提供数学运算的内建 object。我们会在 数字类型 一节中学习它。此处仅作为一个 object 的示例。
typeof null 的结果为 "object"。这是官方承认的 typeof 的错误，这个问题来自于 JavaScript 语言的早期阶段，并为了兼容性而保留了下来。null 绝对不是一个 object。null 有自己的类型，它是一个特殊值。typeof 的行为在这里是错误的。
typeof alert 的结果是 "function"，因为 alert 在 JavaScript 语言中是一个函数。我们会在下一章学习函数，那时我们会了解到，在 JavaScript 语言中没有一个特别的 “function” 类型。函数隶属于 object 类型。但是 typeof 会对函数区分对待，并返回 "function"。这也是来自于 JavaScript 语言早期的问题。从技术上讲，这种行为是不正确的，但在实际编程中却非常方便。

::: tip
你可能还会遇到另一种语法：typeof(x)。它与 typeof x 相同。

简单点说：typeof 是一个操作符，不是一个函数。这里的括号不是 typeof 的一部分。它是数学运算分组的括号。

通常，这样的括号里包含的是一个数学表达式，例如 (2 + 2)，但这里它只包含一个参数 (x)。从语法上讲，它们允许在 typeof 运算符和其参数之间不打空格，有些人喜欢这样的风格。
:::

## instanceof

`instanceof` 只能判断引用数据类型。

`instanceof` 运算符可以用来测试一个对象在其原型链中是否存在一个构造函数的 `prototype` 属性。

```js
console.log(true instanceof Boolean)          // false
console.log(2 instanceof Number)              // false
console.log('str' instanceof String)          // false
console.log(Symbol() instanceof Symbol)       // false
console.log(123n instanceof BigInt)           // false
console.log({} instanceof Object)             // true
console.log(function(){} instanceof Function) // true
console.log(function(){} instanceof Object)   // true
console.log([] instanceof Array)              // true
console.log([] instanceof Object)             // true
```

## Object.prototype.toString

```js
console.log(Object.prototype.toString.call(null))         // [object Null]
console.log(Object.prototype.toString.call(undefined))    // [object Undefined]
console.log(Object.prototype.toString.call(true))         // [object Boolean]
console.log(Object.prototype.toString.call(3.14159))      // [object Number]
console.log(Object.prototype.toString.call('hello'))      // [object String]
console.log(Object.prototype.toString.call(Symbol()))     // [object Symbol]
console.log(Object.prototype.toString.call(123n))         // [object BigInt]
console.log(Object.prototype.toString.call({}))           // [object Object]
console.log(Object.prototype.toString.call(function(){})) // [object Function]
console.log(Object.prototype.toString.call([]))           // [object Array]
```
