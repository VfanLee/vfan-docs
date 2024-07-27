# Partials 文件

Partials 是 Sass 文件的一种特殊形式，用于将代码分割成更小、更易管理的模块。

Partials 文件通常以 `_` 开头，并且不会被编译成独立的 CSS 文件。

::: code-group

```scss [定义 Partial 文件]
// _variables.scss
$primary-color: #3498db;
$secondary-color: #2ecc71;

// _mixins.scss
@mixin border-radius($radius) {
  -webkit-border-radius: $radius;
     -moz-border-radius: $radius;
      -ms-border-radius: $radius;
          border-radius: $radius;
}
```

```scss [引用 Partial 文件]
// styles.scss
@use 'variables';
@use 'mixins';

.button {
  background-color: variables.$primary-color;
  @include mixins.border-radius(5px);
}
```

:::
