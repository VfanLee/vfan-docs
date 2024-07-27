# 条件与循环

## `@if` 条件判断

根据条件表达式的结果（`true` 或 `false`）执行不同的代码块。

语法：

```scss
@if <expression> {
  // 条件为 true 时执行的代码
} @else if <expression> {
  // 另一个条件为 true 时执行的代码
} @else {
  // 条件都不满足时执行的代码
}
```

示例：

```scss
$color: blue;

@if $color == blue {
  .element {
    background-color: blue;
  }
} @else if $color == red {
  .element {
    background-color: red;
  }
} @else {
  .element {
    background-color: green;
  }
}
```

- 使用 `and` 逻辑运算符来检查多个条件是否同时为真。
- 使用 `or` 逻辑运算符来检查多个条件中是否有一个为真。

```scss
$color: green;
$size: small;

.element {
  @if ($color == green or $color == blue) and $size == small {
    background-color: $color;
    font-size: 14px;
  } @else {
    background-color: gray;
  }
}
```

## `@for` 循环

创建一个循环，根据给定的范围重复执行代码。

语法：

```scss
@for $i from <start> through <end> {
  // 循环代码
}
```

示例：

  ```scss
  @for $i from 1 through 5 {
    .item-#{$i} {
      width: 2em * $i;
    }
  }
  ```

## `@each` 循环

遍历列表或映射，针对每个元素执行代码。

语法：

```scss
@each $item in <list> {
  // 循环代码
}
```

示例：

```scss
$colors: red, green, blue;

@each $color in $colors {
  .#{$color}-text {
    color: $color;
  }
}
```

## `@while` 循环

根据条件表达式的结果重复执行代码，只要条件为 `true` 就继续循环。

语法：

```scss
@while <expression> {
  // 循环代码
}
```

示例：

```scss
$i: 1;

@while $i <= 5 {
  .item-#{$i} {
    width: 2em * $i;
  }
  $i: $i + 1;
}
```
