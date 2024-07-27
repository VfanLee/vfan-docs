# 变量

在 Sass 中，变量可以有多种类型。这些类型允许开发者存储各种不同类型的数据，使样式更加灵活和动态。

## 数字（Numbers）

- 数字包括整数和小数，可以带有单位（如 px、em、rem 等）或无单位。
- 支持常见的算术运算。

```scss
$number: 10;
$font-size: 16px;
$line-height: 1.5;
```

## 字符串（Strings）

- 字符串可以是带引号的或不带引号的。
- 可以用于 CSS 值或选择器名称。

```scss
$font-family: "Helvetica, Arial, sans-serif";
$content: 'Hello, world!';
$selector: unquote(".my-class");
```

## 颜色（Colors）

- 颜色可以用多种格式表示，如十六进制、RGB、RGBA、HSL、HSLA。
- 支持颜色运算和调整。

```scss
$primary-color: #3498db;
$secondary-color: rgb(255, 99, 71);
$transparent-black: rgba(0, 0, 0, 0.5);
```

## 布尔值（Booleans）

- 布尔值只有两个：`true` 和 `false`。
- 通常用于条件语句。

```scss
$is-active: true;
$is-hidden: false;
```

## 空值（Null）

- `null` 表示空值或没有值。
- 在条件语句中，`null` 会被视为 `false`。

   ```scss
   $no-value: null;
   ```

列表（Lists）

- 列表是有序的值集合，可以用空格或逗号分隔。
- 列表可以包含任何类型的值，包括嵌套列表。

```scss
$font-sizes: 12px 14px 16px 18px;
$margin-sizes: (5px, 10px, 15px, 20px);
```

## 映射（Maps）

- 映射是键值对的集合，类似于 JavaScript 中的对象或 Python 中的字典。
- 映射的键可以是任何类型，但通常是字符串或标识符。

```scss
$colors: (
  primary: #3498db,
  secondary: #2ecc71,
  accent: #e74c3c
);

// 获取值
@debug map-get($colors, "primary"); // #3498db

// 判断是否包含值
@debug map-has-key($colors, "info"); // false

// 删除 key
@debug map-remove($colors, "primary");

// 合并 map
@debug map-merge($colors, ("pink": #ffc0cb));
```

## 函数（Functions）

- 自定义函数可以作为值存储在变量中，并在样式中调用。
- Sass 内置了许多函数，用于颜色、字符串、数字、列表等操作。

```scss
@function double($number) {
  @return $number * 2;
}

// 使用 function
$doubled-value: double(10); // 20
```
