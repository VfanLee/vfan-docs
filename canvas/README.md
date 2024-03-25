# Canvas

> [Canvas_API](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial)

## canvas 相关库

- [roughjs](https://roughjs.com/)：手绘图形。

## 获取绘图上下文

```js
const canvas = document.getElementById('canvasId');
const ctx = canvas.getContext('2d');
```

## 绘制矩形

- 填充矩形: `ctx.fillRect(x, y, width, height)`
- 绘制矩形边框: `ctx.strokeRect(x, y, width, height)`

## 绘制圆形

- 绘制圆弧路径: `ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise)`
- 填充圆形: `ctx.fill()`
- 绘制圆形边框: `ctx.stroke()`

## 绘制路径

- 开始路径: `ctx.beginPath()`
- 移动到指定位置: `ctx.moveTo(x, y)`
- 绘制直线: `ctx.lineTo(x, y)`
- 绘制曲线: `ctx.quadraticCurveTo(cpx, cpy, x, y)` 或 `ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)`
- 闭合路径: `ctx.closePath()`
- 填充路径: `ctx.fill()`
- 绘制路径边框: `ctx.stroke()`

## 绘制文本

- 设置字体样式: `ctx.font = 'fontStyle fontSize fontFamily'`
- 设置填充颜色: `ctx.fillStyle = 'color'`
- 填充文本: `ctx.fillText(text, x, y)`
- 设置边框颜色: `ctx.strokeStyle = 'color'`
- 绘制文本边框: `ctx.strokeText(text, x, y)`

## 绘制图像

```js
const image = new Image();
image.src = 'imagePath';
image.onload = function() {
  ctx.drawImage(image, x, y, width, height);
};
```

## 清除画布

```js
ctx.clearRect(x, y, width, height);
```

## 设置样式和属性

- 设置填充颜色: `ctx.fillStyle = 'color'`
- 设置边框颜色: `ctx.strokeStyle = 'color'`
- 设置边框宽度: `ctx.lineWidth = value`
- 设置透明度: `ctx.globalAlpha = value`
- 设置阴影颜色: `ctx.shadowColor = 'color'`
- 设置阴影模糊度: `ctx.shadowBlur = value`

## 变换和平移

- 平移坐标原点: `ctx.translate(x, y)`
- 旋转画布: `ctx.rotate(angle)`
- 缩放画布: `ctx.scale(scaleX, scaleY)`
