# Modules 模块化

Sass Modules 能提供更好的命名空间管理和模块隔离，避免命名冲突，并支持更好的性能优化。

::: warning 关于 `@import` 导入

Sass Modules 是一种通过 `@use` 和 `@forward` 关键字实现的模块化系统，旨在 [替代旧的 `@import` 方法](https://sass-lang.com/documentation/at-rules/import/)。

:::

## 命名空间

### 默认命名空间

- 使用 `@use` 引入模块时，默认会使用文件名作为命名空间。
- 这可以避免不同文件中同名变量、函数和混合宏的冲突。

::: code-group

```scss [styles.scss]
@use 'variables';
@use 'mixins';

.button {
  background-color: variables.$primary-color;
  @include mixins.border-radius(5px);
}
```

```scss [_variables.scss]
$primary-color: #3498db;
```

```scss [_mixins.scss]
@mixin border-radius($radius) {
  -webkit-border-radius: $radius;
  -moz-border-radius: $radius;
  border-radius: $radius;
}
```

:::

### 自定义命名空间

使用 `as` 关键字，可以为引入的模块指定自定义命名空间

::: code-group

```scss [styles.scss]
@use 'variables' as vars;
@use 'mixins' as mx;

.button {
  background-color: vars.$primary-color;
  @include mx.border-radius(5px);
}
```

```scss [_variables.scss]
$primary-color: #3498db;
```

```scss [_mixins.scss]
@mixin border-radius($radius) {
  -webkit-border-radius: $radius;
  -moz-border-radius: $radius;
  border-radius: $radius;
}
```

:::

### 全局命名空间

使用 `*`，可以在引入模块时不使用命名空间。

::: code-group

```scss [styles.scss]
@use 'variables' as *;

.button {
  background-color: $primary-color;
}
```

```scss [_variables.scss]
$primary-color: #3498db;
```

:::

_需要注意的是，这种做法会将所有引入的内容直接暴露在全局作用域中，可能会引发 **命名冲突**。_

## 私有成员

在模块中，可以通过前缀 `_` 将变量或混合宏标记为私有成员，这样它们就不会被 `@use` 引入。

::: code-group

```scss [styles.scss]
@use 'variables';

.button {
  background-color: variables.$primary-color;
  // variables.$_private-color; // 会报错，$_private-color 是私有的，不能被访问
}
```

```scss [_variables.scss]
$primary-color: #3498db;
$_private-color: #ff0000;
```

:::

## `with`

`@use with` 是 Sass 中的一个功能，用于在使用 `@use` 引入模块时，**修改或重命名模块中的变量**。它允许你在加载模块的同时，传递自定义的配置选项，如变量值，或者改变变量的默认值。

### 修改模块中的变量

::: code-group

```scss [styles.scss]
@use 'variables' with (
  $primary-color: red,
  $secondary-color: blue
);

.button {
  background-color: variables.$primary-color;
}
```

```scss [_variables.scss]
$primary-color: #3498db !default;
$secondary-color: #2ecc71 !default;
```

:::

编译后的 `styles.scss`：

```css
.button {
  background-color: red;
}
```

### 重命名变量

还可以使用 `with` 来重命名模块中的变量。

例如，如果你不想使用原本的变量名，可以通过重命名来避免命名冲突：

```scss [styles.scss]
@use 'variables' with (
  $primary-color as $my-primary-color
);

.button {
  background-color: variables.$my-primary-color;
}
```

编译后的 `styles.scss`：

```scss
.button {
  background-color: #3498db; /* 原始的 $primary-color 的值 */
}
```

## `@forward`

使用 `@forward` 转发模块时，可以控制导出的命名空间和内容：

::: code-group

```scss [styles.scss]
@use 'base';

.button {
  background-color: base.$primary-color;
  @include base.border-radius(5px);
}
```

```scss [_base.scss]
@forward 'variables';
@forward 'mixins';
```

```scss [_variables.scss]
$primary-color: #3498db;
```

```scss [_mixins.scss]
@mixin border-radius($radius) {
  -webkit-border-radius: $radius;
  -moz-border-radius: $radius;
  border-radius: $radius;
}
```

:::

也可以在转发时选择性导出特定内容：

::: code-group

```scss [styles.scss]
@use 'base';

.button {
  background-color: base.$primary-color;
  // @include base.border-radius(5px); // 会报错，因为 border-radius 没有被转发
}
```

```scss [_base.scss]
@forward 'variables' show $primary-color;
@forward 'mixins' hide border-radius;
```

```scss [_variables.scss]
$primary-color: #3498db;
```

```scss [_mixins.scss]
@mixin border-radius($radius) {
  -webkit-border-radius: $radius;
  -moz-border-radius: $radius;
  border-radius: $radius;
}
```

:::
