# Modules 模块化

Sass Modules 是一种通过 `@use` 和 `@forward` 关键字实现的模块化系统，旨在 [替代旧的 `@import` 方法](https://sass-lang.com/documentation/at-rules/import/)。

Sass Modules 能提供更好的命名空间管理和模块隔离，避免命名冲突，并支持更好的性能优化。

## 默认命名空间

- 使用 `@use` 引入模块时，默认会使用文件名作为命名空间。
- 这可以避免不同文件中同名变量、函数和混合宏的冲突。

```scss
// _variables.scss
$primary-color: #3498db;

// _mixins.scss
@mixin border-radius($radius) {
  -webkit-border-radius: $radius;
  -moz-border-radius: $radius;
  border-radius: $radius;
}

// styles.scss
@use 'variables';
@use 'mixins';

.button {
  background-color: variables.$primary-color;
  @include mixins.border-radius(5px);
}
```

## 自定义命名空间

使用 `as` 关键字，可以为引入的模块指定自定义命名空间

```scss
@use 'variables' as vars;
@use 'mixins' as mx;

.button {
  background-color: vars.$primary-color;
  @include mx.border-radius(5px);
}
```

## 全局命名空间

使用 `*`，可以在引入模块时不使用命名空间。

```scss
@use 'variables' as *;

.button {
  background-color: $primary-color;
}
```

*需要注意的是，这种做法会将所有引入的内容直接暴露在全局作用域中，可能会引发 **命名冲突**。*

## 部分加载和重命名

通过 `with` 关键字在加载模块时重命名变量或修改其值。

```scss
// _variables.scss
$primary-color: #3498db;
$secondary-color: #2ecc71;

// styles.scss
@use 'variables' with (
  $primary-color: red,
  $secondary-color: blue
);

.button {
  background-color: variables.$primary-color;
}
```

## 私有成员

在模块中，可以通过前缀 `_` 将变量或混合宏标记为私有成员，这样它们就不会被 `@use` 引入。

```scss
// _variables.scss
$primary-color: #3498db;
$_private-color: #ff0000;

// styles.scss
@use 'variables';

.button {
  background-color: variables.$primary-color;
  // variables.$_private-color; // 会报错，$_private-color 是私有的，不能被访问
}
```

## 转发模块的命名空间管理

使用 `@forward` 转发模块时，可以控制导出的命名空间和内容：

```scss
// _base.scss
@forward 'variables';
@forward 'mixins';

// styles.scss
@use 'base';

.button {
  background-color: base.$primary-color;
  @include base.border-radius(5px);
}
```

也可以在转发时选择性导出特定内容：

```scss
// _base.scss
@forward 'variables' show $primary-color;
@forward 'mixins' hide border-radius;

// styles.scss
@use 'base';

.button {
  background-color: base.$primary-color;
  // @include base.border-radius(5px); // 会报错，因为 border-radius 没有被转发
}
```
