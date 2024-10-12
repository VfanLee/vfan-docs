# CSS 变量

## 定义 CSS 变量

```css
:root {
  --width: 100px;
}

.box {
  --height: 100px;
}
```

## 使用 CSS 变量

```css
.box {
  width: var(--height);
}
```

## JavaScript 使用 CSS 变量

### JavaScript 获取变量

```js
getComputedStyle(document.querySelector(':root')).getPropertyValue('--width')
getComputedStyle(document.querySelector('.box')).getPropertyValue('--height')
```

### JavaScript 设置变量值

```js
document.querySelector(':root').style.setProperty('--width', '50px')
document.querySelector('.box').style.setProperty('--height', '50px')
```
