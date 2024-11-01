# 类型介绍

在 JavaScript 中有[8 种基本的数据类型](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Data_structures)（译注：7 种原始类型和 1 种引用类型）。

- 7 种原始类型：
  - `number` 用于任何类型的数字：整数或浮点数，在 `±(253-1)` 范围内的整数。
  - `string` 用于字符串：一个字符串可以包含 0 个或多个字符，所以没有单独的单字符类型。
  - `boolean` 用于 `true` 和 `false`。
  - `null` 用于未知的值 —— 只有一个 null 值的独立类型。
  - `undefined` 用于未定义的值 —— 只有一个 undefined 值的独立类型。
  - `bigint` 用于任意长度的整数。如：`123n`, `BigInt(123)`。
  - `symbol` 用于唯一的标识符。如：`Symbol()`、`Symbol(1)`。
- 1 种引用类型：
  - `object` 用于更复杂的数据结构。

我们可以将任何类型的值存入变量。例如，一个变量可以在前一刻是个字符串，下一刻就存储一个数字：

```js
let message = "hello";
message = 123456;
```

允许这种操作的编程语言，例如 JavaScript，被称为 **“动态类型”（dynamically typed）** 的编程语言，意思是虽然编程语言中有不同的数据类型，但是你定义的变量并不会在定义后，被限制为某一数据类型。

## Number 类型

👉 详见 [Number 类型](./number)。

## BigInt 类型

👉 详见 [BigInt 类型](./bigint)。

## String 类型

👉 详见 [String 类型](./string)。

## Boolean 类型（逻辑类型）

boolean 类型仅包含两个值：`true` 和 `false`。

这种类型通常用于存储表示 yes 或 no 的值：true 意味着 “yes，正确”，false 意味着 “no，不正确”。

比如：

```js
let nameFieldChecked = true; // yes, name field is checked
let ageFieldChecked = false; // no, age field is not checked
```

布尔值也可作为比较的结果：

```js
let isGreater = 4 > 1;

alert( isGreater ); // true（比较的结果是 "yes"）
```

在 **逻辑运算符** 中会经常用到该类型。

## null 值

特殊值 `null` 是一个独立的类型！

相比较于其他编程语言，`null` 可能是一个“对不存在的 `object` 的引用”或者 “`null` 指针”。

而在 JavaScript 中的 `null` 仅仅是一个 **代表“无”、“空”或“值未知”** 的特殊值。

```js
let age = null;
```

## undefined 值

特殊值 `undefined` 和 `null` 一样，也是一个独立的类型。

`undefined` 的含义是 **“未被赋值”或“未定义”**。

如果一个变量已被声明，但未被赋值，那么它的值就是 `undefined`：

```js
let age;

alert(age); // 弹出 "undefined"
```

从技术上讲，可以显式地将 `undefined` 赋值给变量：

```js
let age = 100;

// 将值修改为 undefined
age = undefined;

alert(age); // "undefined"
```

……但是不建议这样做。通常，使用 `null` 将一个“空”或者“未知”的值写入变量中，而 `undefined` 则保留作为未进行初始化的事物的默认初始值。

## Object 类型和 Symbol 类型

`object` 类型是一个特殊的类型。

其他所有的数据类型都被称为“原始类型”，因为它们的值只包含一个单独的内容（字符串、数字或者其他）。相反，object 则用于储存数据集合和更复杂的实体。

`symbol` 类型用于创建对象的唯一标识符。详见[Symbol 类型](./symbol.md)。
