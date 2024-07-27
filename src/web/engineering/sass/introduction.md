# Sass

## 介绍

**Sass (Syntactically Awesome Stylesheets)** 是一种 CSS 扩展语言，旨在使样式表更具动态性和更易维护。

提供两种语法：Sass (缩进语法) 和 SCSS (Sassy CSS, 类似 CSS 语法)。

::: code-group

```sass [Sass]
.nav
  ul
    margin: 0
    padding: 0
    list-style: none

  li
    display: inline-block

  a
    display: block
    padding: 6px 12px
    text-decoration: none
```

```scss [SCSS (类似 CSS 语法)]
.nav {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li {
    display: inline-block;
  }

  a {
    display: block;
    padding: 6px 12px;
    text-decoration: none;
  }
}
```

:::

## 特性

- **嵌套规则**: 允许在选择器内嵌套其他选择器，提高代码的组织性和可读性。
- **变量**: 使用 `$` 符号定义变量，可以存储颜色、字体大小等常量，提高复用性。
- **混合宏 (Mixins)**: 定义可重用的样式块，接受参数，简化代码重复。
- **继承 (Extend/Inherit)**: 使用 `@extend` 关键字，可以共享一组样式，提高代码的模块化。
- **运算**: 支持算术运算，如加、减、乘、除，可以对颜色、像素等进行运算。
- **函数**: 提供内置函数进行颜色处理、字符串操作等，也可以定义自定义函数。
- **模块化**: 通过 `@use` 引入其他 Sass 文件，实现样式的模块化管理。
- **条件与循环**: 支持 `@if`, `@for`, `@each` 等控制结构，使样式表具有编程语言的灵活性。
