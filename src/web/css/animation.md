# animation

```css
/* 定义动画 */
@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(-60%);
  }

  to {
    opacity: 1;
    transform: translateX(0%);
  }
}

/* 使用动画 */
.card {
  animation: slideIn 0.4s;
}
```

## 参阅

- <https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animations/Using_CSS_animations>
- <https://developer.mozilla.org/en-US/docs/Web/CSS/animation>
