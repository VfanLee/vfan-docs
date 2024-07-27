# mixin 混合

**mixin** 是 Sass 提供的一种功能，用于创建可复用的代码片段。

mixin 可以包含 CSS 声明、变量、选择器、甚至其他 mixin。

## 定义和使用

通过 `@mixin` 关键字定义，通过 `@include` 关键字调用。

::: code-group

```scss [定义 mixin]
@mixin border-radius($radius) {
  -webkit-border-radius: $radius;
    -moz-border-radius: $radius;
      -ms-border-radius: $radius;
          border-radius: $radius;
}
```

```scss [调用 mixin]
.box {
  @include border-radius(10px);
}
```

:::

## 参数

mixin 可以接受参数，使其更加灵活和可复用。

参数可以有默认值。

```scss
@mixin box-shadow($shadow: 0 2px 4px rgba(0, 0, 0, 0.1)) {
  -webkit-box-shadow: $shadow;
          box-shadow: $shadow;
}

.card {
  @include box-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
}

.panel {
  @include box-shadow; // 使用默认值
}
```

## 变量作用域

在 mixin 内部定义的变量是局部变量，只在 Mixin 内部可见。

可以使用外部变量。

```scss
$color: red;

@mixin text-color($color) {
  color: $color;
}

.heading {
  @include text-color(blue); // 使用 Mixin 参数
}

.paragraph {
  @include text-color($color); // 使用外部变量
}
```

## 内容块

mixin 可以接受内容块，这样可以在调用 Mixin 时插入额外的样式。

使用 `@content` 关键字插入内容块。

```scss
@mixin media($query) {
  @media #{$query} {
    @content;
  }
}

.container {
  @include media('screen and (min-width: 600px)') {
    background-color: blue;
  }
}
```
