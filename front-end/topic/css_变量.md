# CSS 变量

## css 定义变量

```css
:root {
  --width: 100px;
}

.box {
  --height: 100px;
}
```

## JavaScript 定义与更改

```js
// 获取变量
getComputedStyle(document.querySelector(':root')).getPropertyValue('--width')
getComputedStyle(document.querySelector('.box')).getPropertyValue('--height')

// 设置变量
document.querySelector(':root').style.setProperty('--width', '50px')
document.querySelector('.box').style.setProperty('--height', '50px')
```
