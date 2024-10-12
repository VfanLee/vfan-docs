# 逻辑属性

## 介绍

CSS 逻辑属性（Logical Properties）与逻辑值（Logical Values）是 CSS 中的一个模块，旨在提供一种更具语义化和可读性的方式来描述元素的布局和外观，而无需考虑页面书写方向或文本方向等因素。

## 书写模式

[`writing-mode`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/writing-mode) 属性定义了文本水平或垂直排布以及在块级元素中文本的行进方向。为整个文档设置该属性时，应在根元素上设置它（对于 HTML 文档，应该在 html 元素上设置）

<iframe width="100%" height="500" src="https://interactive-examples.mdn.mozilla.net/pages/css/writing-mode.html" loading="lazy"></iframe>

[`direction`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/direction) CSS 属性用于设置文本、表格列和水平溢出的方向。对于从右到左书写的语言（如希伯来语或阿拉伯语），应将该属性设置为 rtl；对于从左到右书写的语言（如英语和大多数其他语言），则应将该属性设置为 ltr。

<iframe width="100%" height="500" src="https://interactive-examples.mdn.mozilla.net/pages/css/direction.html" loading="lazy"></iframe>

避免使用 [CSS direction 属性](https://developer.mozilla.org/zh-CN/docs/Web/CSS/direction)，而使用 [HTML dir 属性](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes/dir)。

<iframe width="100%" height="500" src="https://interactive-examples.mdn.mozilla.net/pages/tabbed/attribute-dir.html" loading="lazy"></iframe>

## 逻辑维度（Logical Dimensions）

取代了传统的物理维度（physical dimensions）概念，例如宽度（width）和高度（height）。逻辑维度包括：

- 内联轴（inline axis）：文本在内联方向上的延伸方向。例如，在从左到右书写的语言中，内联轴为水平方向；在从右到左书写的语言中，则为垂直方向。
- 块轴（block axis）：与内联轴垂直的方向。
- 开始（start）：内联轴或块轴的起始端。
- 结束（end）：内联轴或块轴的末端。

## 参考于

- [逻辑属性](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_logical_properties_and_values/Basic_concepts_of_logical_properties_and_values)
