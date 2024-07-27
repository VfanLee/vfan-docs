# Nesting 嵌套语法

## 基本使用

::: code-group

```scss
nav {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li { display: inline-block; }

  a {
    display: block;
    padding: 6px 12px;
    text-decoration: none;
  }
}
```

```css
nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
nav li {
  display: inline-block;
}
nav a {
  display: block;
  padding: 6px 12px;
  text-decoration: none;
}
```

:::

## 父元素选择

```scss
.button {
  background-color: blue;

  &.disabled {
    background-color: gray; 
    color: darkgray;
    cursor: not-allowed;
  }

  &:hover {
    background-color: darkblue;
  }

  &:active {
    background-color: navy;
  }
}
```
