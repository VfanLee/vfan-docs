# Event

> 参考：
>
> [MDN Event](https://developer.mozilla.org/zh-CN/docs/Web/API/event)

- `event.clientX/x`、`event.clientY/y`：以浏览器窗口（视口）左上顶角为原点，定位 x/y 轴坐标，单位是像素。
- `event.pageX`、`event.pageY`：以 document 对象（文档窗口）左上顶角为原点，定位 x/y 轴坐标，单位是像素。包括滚动条的偏移量。
- `event.screenX`、`event.screenY`：以计算机屏幕左上顶角为原点，定位 x/y 轴坐标，单位是像素。
- `event.offsetX、event.offsetY`：以当前事件的目标对象左上顶角为原点，定位 x/y 轴坐标，单位是像素。受 CSS transform 的影响。
- `event.layerX`、`event.layerY`：以最近的绝对定位的父元素（如果没有，则为 document 对象）左上顶角为元素，定位 x/y 轴坐标，单位是像素。包括滚动条的偏移量，受 CSS transform 的影响。
