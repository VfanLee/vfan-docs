# Sass Debug 相关知识点总结

在开发过程中，调试样式是确保 CSS 代码质量的重要环节。Sass 提供了一些工具和功能来帮助开发者调试代码。

## `@debug`

打印表达式的值，用于在编译时查看变量和表达式的值。

```scss
$primary-color: #3498db;
@debug $primary-color;
```

## `@warn`

打印警告消息，用于在编译时发出警告而不终止编译。

```scss
$font-size: 16px;

@if $font-size < 12px {
  @warn "Font size is too small!";
}
```

## `@error`

 打印错误消息并终止编译，用于在遇到严重问题时停止编译。

```scss
$line-height: 1.5;

@if type-of($line-height) != 'number' {
  @error "Line height must be a number!";
}
```
