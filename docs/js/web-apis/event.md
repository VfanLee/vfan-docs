# Event

## 常见事件

- 加载和卸载事件
  - [DOMContentLoaded](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/DOMContentLoaded_event)：在 Document 完全加载并解析后触发，无需等待样式表、图像和子框架完成加载。
  - [readystatechange](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/readystatechange_event)：在 Document 的 readyState 属性发生变化时触发。

- 拖放事件
  - [drag](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement/drag_event)：在用户拖动元素或选择的文本时每几百毫秒触发一次。
  - [dragend](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement/dragend_event)：在拖动操作结束（通过释放鼠标按钮或按下退出键））时触发。
  - [dragenter](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement/dragenter_event)：在拖动的元素或选择的文本进入有效的放置目标时触发。
  - [dragleave](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement/dragleave_event)：在拖动的元素或选择的文本离开有效的放置目标时触发。
  - [dragover](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement/dragover_event)：在拖动的元素或选择的文本在有效的放置目标时触发（每几百毫秒）。
  - [dragstart](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement/dragstart_event)：在用户开始拖动元素或选择的文本时触发。
  - [drop](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement/drop_event)：在元素或选择的文本被放置在有效的放置目标时触发。

- 剪切板事件
  - [copy](https://developer.mozilla.org/en-US/docs/Web/API/Document/copy_event)：在用户通过浏览器的用户界面使用复制操作时触发。
  - [cut](https://developer.mozilla.org/en-US/docs/Web/API/Document/cut_event)：在用户通过浏览器的用户界面使用剪切操作时触发。
  - [paste](https://developer.mozilla.org/en-US/docs/Web/API/Document/paste_event)：在用户通过浏览器的用户界面使用粘贴操作时触发。

## Event 对象

> [MDN Event](https://developer.mozilla.org/zh-CN/docs/Web/API/event)

- `event.clientX/x`、`event.clientY/y`：以浏览器窗口（视口）左上顶角为原点，定位 x/y 轴坐标，单位是像素。
- `event.pageX`、`event.pageY`：以 document 对象（文档窗口）左上顶角为原点，定位 x/y 轴坐标，单位是像素。包括滚动条的偏移量。
- `event.screenX`、`event.screenY`：以计算机屏幕左上顶角为原点，定位 x/y 轴坐标，单位是像素。
- `event.offsetX、event.offsetY`：以当前事件的目标对象左上顶角为原点，定位 x/y 轴坐标，单位是像素。受 CSS transform 的影响。
- `event.layerX`、`event.layerY`：以最近的绝对定位的父元素（如果没有，则为 document 对象）左上顶角为元素，定位 x/y 轴坐标，单位是像素。包括滚动条的偏移量，受 CSS transform 的影响。
