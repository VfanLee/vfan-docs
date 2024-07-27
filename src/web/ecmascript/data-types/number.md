# Number 类型

- <https://zh.javascript.info/types#number-lei-xing>
- <https://zh.javascript.info/number>

```js
let n = 123;
n = 12.345;
```

*number* 类型代表整数和浮点数。

数字可以有很多操作，比如，乘法 *、除法 /、加法 +、减法 - 等等。

除了常规的数字，还包括所谓的“特殊数值（“special numeric values”）”也属于这种类型：`Infinity`、`-Infinity` 和 `NaN`。

- Infinity 代表数学概念中的 无穷大 ∞。是一个比任何数字都大的特殊值。

  我们可以通过除以 0 来得到它：

  ```js
  alert( 1 / 0 ); // Infinity
  ```

  或者在代码中直接使用它：

  ```js
  alert( Infinity ); // Infinity
  ```

- NaN 代表一个计算错误。它是一个不正确的或者一个未定义的数学操作所得到的结果，比如：

  ```js
  alert( "not a number" / 2 ); // NaN，这样的除法是错误的
  ```

  NaN 是粘性的。任何对 NaN 的进一步数学运算都会返回 NaN：

  ```js
  alert( NaN + 1 ); // NaN
  alert( 3 * NaN ); // NaN
  alert( "not a number" / 2 - 1 ); // NaN
  ```

  所以，如果在数学表达式中有一个 NaN，会被传播到最终结果（只有一个例外：NaN ** 0 结果为 1）。

::: tip
在 JavaScript 中做数学运算是安全的。我们可以做任何事：除以 0，将非数字字符串视为数字，等等。

脚本永远不会因为一个致命的错误（“死亡”）而停止。最坏的情况下，我们会得到 NaN 的结果。
:::

特殊的数值属于 “number” 类型。当然，对“特殊的数值”这个词的一般认识是，它们并不是数字。

## 十进制 (Decimal)

十进制是我们日常使用的数字系统，基数为10。

```js
let decimalNumber = 42;
console.log(decimalNumber); // 输出: 42
```

## 二进制 (Binary)

二进制使用基数2，使用前缀 `0b` 来表示二进制数字。

```js
let binaryNumber = 0b101010; // 42的二进制表示
console.log(binaryNumber); // 输出: 42
```

## 八进制 (Octal)

八进制使用基数8，使用前缀 `0o` 来表示八进制数字。

```js
let octalNumber = 0o52; // 42的八进制表示
console.log(octalNumber); // 输出: 42
```

## 十六进制 (Hexadecimal)

十六进制使用基数16，使用前缀 `0x` 来表示十六进制数字。

```js
let hexNumber = 0x2A; // 42的十六进制表示
console.log(hexNumber); // 输出: 42
```

## 将不同进制的数字转换为字符串

你可以使用 `toString` 方法将一个数字转换为不同进制的字符串表示：

```js
let number = 42;

let binaryString = number.toString(2);
console.log(binaryString); // 输出: "101010"

let octalString = number.toString(8);
console.log(octalString); // 输出: "52"

let decimalString = number.toString(10);
console.log(decimalString); // 输出: "42"

let hexString = number.toString(16);
console.log(hexString); // 输出: "2a"
```

## 将字符串解析为不同进制的数字

你可以使用 `parseInt` 方法将一个字符串解析为不同进制的数字：

```js
let binaryNumber = parseInt("101010", 2);
console.log(binaryNumber); // 输出: 42

let octalNumber = parseInt("52", 8);
console.log(octalNumber); // 输出: 42

let decimalNumber = parseInt("42", 10);
console.log(decimalNumber); // 输出: 42

let hexNumber = parseInt("2a", 16);
console.log(hexNumber); // 输出: 42
```
