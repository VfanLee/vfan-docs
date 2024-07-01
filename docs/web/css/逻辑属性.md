# 逻辑属性

> [逻辑属性](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_logical_properties_and_values/Basic_concepts_of_logical_properties_and_values)

CSS 逻辑属性（Logical Properties）与逻辑值（Logical Values）是 CSS 中的一个模块，旨在提供一种更具语义化和可读性的方式来描述元素的布局和外观，而无需考虑页面书写方向或文本方向等因素。

## 书写模式

[`writing-mode`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/writing-mode) 属性定义了文本水平或垂直排布以及在块级元素中文本的行进方向。为整个文档设置该属性时，应在根元素上设置它（对于 HTML 文档，应该在 html 元素上设置）

<iframe width="100%" height="500" src="https://interactive-examples.mdn.mozilla.net/pages/css/writing-mode.html" loading="lazy"></iframe>

[`direction`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/direction) CSS 属性用于设置文本、表格列和水平溢出的方向。对于从右到左书写的语言（如希伯来语或阿拉伯语），应将该属性设置为 rtl；对于从左到右书写的语言（如英语和大多数其他语言），则应将该属性设置为 ltr。

<iframe width="100%" height="500" src="https://interactive-examples.mdn.mozilla.net/pages/css/direction.html" loading="lazy"></iframe>

避免使用 CSS 方向属性，而使用 [HTML dir 全局属性](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes/dir)。

<iframe width="100%" height="500" src="https://interactive-examples.mdn.mozilla.net/pages/tabbed/attribute-dir.html" loading="lazy"></iframe>

## 逻辑维度（Logical Dimensions）

取代了传统的物理维度（physical dimensions）概念，例如宽度（width）和高度（height）。逻辑维度包括：

- 内联轴（inline axis）：文本在内联方向上的延伸方向。例如，在从左到右书写的语言中，内联轴为水平方向；在从右到左书写的语言中，则为垂直方向。
- 块轴（block axis）：与内联轴垂直的方向。
- 开始（start）：内联轴或块轴的起始端。
- 结束（end）：内联轴或块轴的末端。

## 逻辑属性

> 仅总结逻辑属性的单值写法，二值和四值写法暂不记录。

### 文本

| 逻辑属性或逻辑值  | 实体属性或实体值  |
| ----------------- | ----------------- |
|                   |                   |
| text-align: start | text-align: left  |
| text-align: end   | text-align: right |

### 浮动

| 逻辑属性或逻辑值    | 实体属性或实体值 |
| ------------------- | ---------------- |
|                     |                  |
| float: inline-start | float: left      |
| float: inline-end   | float: right     |
| clear: inline-start | clear: left      |
| clear: inline-end   | clear: right     |

### 定位

| 逻辑属性或逻辑值   | 实体属性或实体值 |
| ------------------ | ---------------- |
|                    |                  |
| inset-inline-start | left             |
| inset-inline-end   | right            |
| inset-block-start  | top              |
| inset-block-end    | bottom           |

### 外边距

| 逻辑属性            | 实体属性      |
| ------------------- | ------------- |
| margin-block-end    | margin-bottom |
| margin-block-start  | margin-top    |
| margin-inline-end   | margin-right  |
| margin-inline-start | margin-left   |

### 内边距

| 逻辑属性             | 实体属性       |
| -------------------- | -------------- |
| padding-block-end    | padding-bottom |
| padding-block-start  | padding-top    |
| padding-inline-end   | padding-right  |
| padding-inline-start | padding-left   |

### 边框

| 逻辑属性                  | 实体属性                   |
| ------------------------- | -------------------------- |
| border-block-end          | border-bottom              |
| border-block-end-color    | border-bottom-color        |
| border-block-end-style    | border-bottom-style        |
| border-block-end-width    | border-bottom-width        |
| border-block-start        | border-top                 |
| border-block-start-color  | border-top-color           |
| border-block-start-style  | border-top-style           |
| border-block-start-width  | border-top-width           |
| border-inline-end         | border-right               |
| border-inline-end-color   | border-right-color         |
| border-inline-end-style   | border-right-style         |
| border-inline-end-width   | border-right-width         |
| border-inline-start       | border-left                |
| border-inline-start-color | border-left-color          |
| border-inline-start-style | border-left-style          |
| border-inline-start-width | border-left-width          |
| border-start-start-radius | border-top-left-radius     |
| border-end-start-radius   | border-bottom-left-radius  |
| border-start-end-radius   | border-top-right-radius    |
| border-end-end-radius     | border-bottom-right-radius |

### 尺度

| 逻辑属性        | 实体属性   |
| --------------- | ---------- |
| inline-size     | width      |
| block-size      | height     |
| min-inline-size | min-width  |
| min-block-size  | min-height |
| max-inline-size | max-width  |
| max-block-size  | max-height |

### resize

[resize](https://developer.mozilla.org/en-US/docs/Web/CSS/resize) 属性用于设置元素是否可调整尺寸。

| 逻辑属性 | 实体属性   |
| -------- | ---------- |
| block    | vertical   |
| inline   | horizontal |

<iframe width="100%" height="500" src="https://interactive-examples.mdn.mozilla.net/pages/css/resize.html" loading="lazy"></iframe>
