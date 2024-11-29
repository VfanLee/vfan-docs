# 滑动条

## scrollbar

```css
html {
  scrollbar-color: red orange;
  /* auto | thin | none */
  scrollbar-width: thin;
}
```

## ::-webkit-scrollbar

```css
html::-webkit-scrollbar {
  width: 6px;
}

html::-webkit-scrollbar-thumb {
  background-color: #bbb;
  border-radius: 4px;
}

html::-webkit-scrollbar-track {
  background-color: transparent;
}
```

## 参考资料

- [CSS_scrollbars_styling](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_scrollbars_styling)
- [-webkit-scrollbar](https://developer.mozilla.org/zh-CN/docs/Web/CSS/::-webkit-scrollbar)
- WebKit 论坛 [设置滚动条样式](https://webkit.org/blog/363/styling-scrollbars/)
