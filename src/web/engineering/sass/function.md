# function 函数

## 定义函数

使用 `@function` 关键字定义一个函数。函数可以接受参数，并返回一个值。示例如下：

```scss
@function calculate-margin($value) {
  @return $value * 1.5;
}
```

## 调用函数

函数定义好之后，可以在样式表中使用，类似于变量的方式：

```scss
.container {
  margin: calculate-margin(10px);
}
```

## 参数

函数可以接受多个参数，包括默认值。默认值在没有传递参数时使用。

```scss
@function add-values($a, $b: 10) {
  @return $a + $b;
}

.result {
  width: add-values(5px); // 返回 15px
}
```

## 返回值

函数必须有一个 `@return` 语句，用于返回计算后的值。

```scss
@function double($number) {
  @return $number * 2;
}
```

## 内置函数

Sass 提供了许多内置函数，涵盖颜色操作、字符串操作、数值操作、列表操作等。例如：

- `lighten($color, $amount)`: 使颜色变亮
- `darken($color, $amount)`: 使颜色变暗
- `percentage($number)`: 将数值转换为百分比

## 嵌套函数

函数可以调用其他函数，从而实现复杂的计算。

```scss
@function multiply($a, $b) {
  @return $a * $b;
}

@function square($number) {
  @return multiply($number, $number);
}
```

## 递归函数

Sass 支持递归函数，但要注意避免无限递归。

```scss
@function factorial($n) {
  @if $n == 0 {
    @return 1;
  } @else {
    @return $n * factorial($n - 1);
  }
}
```

## 使用场景

Sass 函数常用于以下场景：

- 复杂的数学运算
- 动态生成 CSS 属性值
- 颜色处理
- 字符串处理
- 代码抽象和重用

## 实例

以下是一个实际使用 Sass 函数的例子，计算元素的黄金比例宽度：

```scss
@function golden-ratio($base) {
  $ratio: 1.618;
  @return $base * $ratio;
}

.box {
  width: golden-ratio(100px); // 返回 161.8px
}
```

## 内置模块

Sass 提供了一系列内置模块，包含许多有用的函数和混合器，可以帮助开发者简化和增强样式代码的编写。以下是一些常用的内置模块：

### `sass:color`

- **作用**: 提供颜色操作的函数，用于调整、比较和转换颜色。
- **常用函数**:
  - `scale-color()`: 按比例调整颜色的属性。
  - `adjust-color()`: 调整颜色的个别属性。
  - `change-color()`: 改变颜色的个别属性。
  - `mix()`: 混合两种颜色。
  - `invert()`: 反转颜色。

  **示例**:

  ```scss
  @use "sass:color";

  $primary: #3498db;
  $darker: color.scale($primary, $lightness: -20%);
  ```

### `sass:list`

- **作用**: 提供列表操作的函数，用于创建、合并和操作列表。
- **常用函数**:
  - `append()`: 将一个值添加到列表的末尾。
  - `index()`: 返回列表中值的索引。
  - `length()`: 返回列表的长度。
  - `nth()`: 返回列表中指定位置的值。

  **示例**:

  ```scss
  @use "sass:list";

  $colors: red, green, blue;
  $colors: list.append($colors, yellow); // red, green, blue, yellow
  ```

### `sass:map`

- **作用**: 提供映射操作的函数，用于创建、合并和操作映射。
- **常用函数**:
  - `get()`: 获取映射中指定键的值。
  - `set()`: 设置映射中指定键的值。
  - `merge()`: 合并两个映射。
  - `keys()`: 返回映射的所有键。

  **示例**:

  ```scss
  @use "sass:map";

  $theme: (
    primary: #3498db,
    secondary: #2ecc71
  );

  $primary-color: map.get($theme, primary); // #3498db
  ```

### `sass:math`

- **作用**: 提供数学操作的函数，用于执行基本数学运算。
- **常用函数**:
  - `abs()`: 绝对值。
  - `ceil()`: 向上取整。
  - `floor()`: 向下取整。
  - `round()`: 四舍五入。
  - `min()`, `max()`: 最小值和最大值。

  **示例**:

  ```scss
  @use "sass:math";

  $number: -10.6;
  $absolute: math.abs($number); // 10.6
  ```

### `sass:string`

- **作用**: 提供字符串操作的函数，用于创建、操作和格式化字符串。
- **常用函数**:
  - `quote()`, `unquote()`: 添加或移除引号。
  - `to-upper-case()`, `to-lower-case()`: 转换为大写或小写。
  - `str-length()`: 返回字符串的长度。
  - `slice()`: 提取字符串的子字符串。

  **示例**:

  ```scss
  @use "sass:string";

  $greeting: "Hello, world!";
  $upper: string.to-upper-case($greeting); // "HELLO, WORLD!"
  ```

### `sass:meta`

- **作用**: 提供 Sass 元编程的函数，用于操作 Sass 语言的核心特性。
- **常用函数**:
  - `variable-exists()`: 检查变量是否存在。
  - `global-variable-exists()`: 检查全局变量是否存在。
  - `function-exists()`: 检查函数是否存在。
  - `mixin-exists()`: 检查混合器是否存在。

  **示例**:

  ```scss
  @use "sass:meta";

  @if meta.variable-exists(primary-color) {
    .element {
      color: $primary-color;
    }
  }
  ```
