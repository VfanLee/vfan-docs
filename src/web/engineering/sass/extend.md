# extend 继承

**extend** 是 Sass 提供的一种功能，用于让一个选择器继承另一个选择器的样式。

**基本用法**:

`@extend` 关键字使一个选择器继承另一个选择器的所有样式。

```scss
.button {
  padding: 10px;
  color: white;
  background-color: blue;
}

.primary-button {
  @extend .button;
  background-color: green;
}
```

编译后的 CSS：

```css
.button, .primary-button {
  padding: 10px;
  color: white;
  background-color: blue;
}

.primary-button {
  background-color: green;
}
```

**局限性**:

- **选择器耦合**: `@extend` 会将所有继承的选择器组合成一个复杂的选择器，这可能会导致样式过于耦合。
- **复杂性增加**: 在大型项目中，大量使用 `@extend` 可能导致选择器的复杂性增加，影响维护。

**注意事项**:

1. **不能使用 `@extend` 嵌套选择器**:
   - `@extend` 只能用于基础选择器，不能用于嵌套选择器或组合选择器。

   ```scss
   .button {
     .icon {
       // 这种用法是不允许的
       @extend .icon;
     }
   }
   ```

2. **组合选择器的使用**:
   - `@extend` 可以用于组合选择器，但要注意选择器的复杂性。

   ```scss
   .button {
     padding: 10px;
     color: white;
     background-color: blue;
   }

   .icon-button {
     @extend .button;
     display: flex;
     align-items: center;
   }
   ```

3. **占位符选择器**:
   - 使用 `%` 定义占位符选择器，可以避免 `@extend` 带来的复杂性。
   - 占位符选择器不会在最终的 CSS 中生成，但可以被 `@extend` 继承。

   ```scss
   %button {
     padding: 10px;
     color: white;
     background-color: blue;
   }

   .button {
     @extend %button;
   }

   .primary-button {
     @extend %button;
     background-color: green;
   }
   ```
