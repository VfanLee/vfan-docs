# Operators 运算

**Operators** 是 Sass 中用于执行算术运算、比较运算和逻辑运算的符号或关键字。

## 算术运算符

用于在 Sass 中进行基本的数学运算。

运算符包括：加 (`+`)、减 (`-`)、乘 (`*`)、除 (`/`) 和取模 (`%`)。

```scss
$width: 100px;
$height: 200px;
$area: $width * $height; // 20000px²

$padding: 10px;
$padding-double: $padding * 2; // 20px
```

## 关系运算符

用于比较两个值，并返回布尔值（`true` 或 `false`）。

运算符包括：等于 (`==`)、不等于 (`!=`)、大于 (`>`)、大于等于 (`>=`)、小于 (`<`)、小于等于 (`<=`)。

```scss
$width: 100px;
$height: 200px;

$is-width-greater: $width > $height; // false
$is-height-equal: $height == 200px; // true
```

## 逻辑运算符

用于逻辑运算，返回布尔值。

运算符包括：与 (`and`)、或 (`or`)、非 (`not`)。

```scss
$is-active: true;
$is-visible: false;

$should-display: $is-active and $is-visible; // false
$should-hide: not $is-visible; // true
```

## 字符串运算符

用于字符串连接。

运算符包括：字符串插值 (`#{}`)。

```scss
$font-size: 16px;
$line-height: 1.5;

$font: "#{$font-size}/#{$line-height}"; // "16px/1.5"
```

## 颜色运算

Sass 允许对颜色进行运算，改变颜色的亮度、饱和度等。

```scss
$base-color: #3498db;
$darken-color: darken($base-color, 10%); // #2577a8
$lighten-color: lighten($base-color, 10%); // #5dade2
```

## 列表和映射运算

通过运算符操作列表和映射。

```scss
$list: (1, 2, 3, 4);
$length: length($list); // 4

$map: (key1: value1, key2: value2);
$value: map-get($map, key1); // value1
```

## 单位转换

Sass 支持单位间的自动转换，只要单位相同类型即可进行运算。

```scss
$width: 50px;
$height: 2in;

$total-width: $width + $height; // 242px (assuming 96dpi)
```

## 优先级和括号

运算符有优先级，但可以使用括号明确优先顺序。

```scss
$result: 10px + 5px * 2; // 20px
$result-with-parens: (10px + 5px) * 2; // 30px
```
