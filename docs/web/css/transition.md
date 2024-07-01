# transition

`transition` 可以为一个元素在不同状态之间切换的时候定义不同的过渡效果。

```css
.btn {
  transition: all 0.15s linear;
}

.btn:hover {
  transform: scale(1.05);
}
```

注意：`transition` 只对数值类的 css 属性生效。例如：`display: block` 变为 `display: node` 就不会生效。

transform 不适用于某些内联元素。

## 参阅

- <https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_transitions/Using_CSS_transitions>
- <https://developer.mozilla.org/en-US/docs/Web/CSS/transition>
