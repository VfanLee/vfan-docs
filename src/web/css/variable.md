# CSS 变量

::: tip
IE: 啊这？
:::

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

## 通过 JS 来使用 CSS 变量

### 获取变量

```js
getComputedStyle(document.querySelector(':root')).getPropertyValue('--width')
getComputedStyle(document.querySelector('.box')).getPropertyValue('--height')
```

### 设置变量值

```js
document.querySelector(':root').style.setProperty('--width', '50px')
document.querySelector('.box').style.setProperty('--height', '50px')
```
