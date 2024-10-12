
# 逻辑属性

仅总结逻辑属性的单值写法，二值和四值写法暂不记录。

::: tip 什么是逻辑属性？
[请看这里](/web/css/logical-properties)
:::

## 文本

| 逻辑属性或逻辑值    | 实体属性或实体值    |
| ------------------- | ------------------- |
| `text-align: start` | `text-align: left`  |
| `text-align: end`   | `text-align: right` |

## 浮动

| 逻辑属性或逻辑值      | 实体属性或实体值 |
| --------------------- | ---------------- |
| `float: inline-start` | `float: left`    |
| `float: inline-end`   | `float: right`   |
| `clear: inline-start` | `clear: left`    |
| `clear: inline-end`   | `clear: right`   |

## 定位

| 逻辑属性或逻辑值     | 实体属性或实体值 |
| -------------------- | ---------------- |
| `inset-inline-start` | `left`           |
| `inset-inline-end`   | `right`          |
| `inset-block-start`  | `top`            |
| `inset-block-end`    | `bottom`         |

## 外边距

| 逻辑属性              | 实体属性        |
| --------------------- | --------------- |
| `margin-block-end`    | `margin-bottom` |
| `margin-block-start`  | `margin-top`    |
| `margin-inline-end`   | `margin-right`  |
| `margin-inline-start` | `margin-left`   |

## 内边距

| 逻辑属性               | 实体属性         |
| ---------------------- | ---------------- |
| `padding-block-end`    | `padding-bottom` |
| `padding-block-start`  | `padding-top`    |
| `padding-inline-end`   | `padding-right`  |
| `padding-inline-start` | `padding-left`   |

## 边框

| 逻辑属性                    | 实体属性                     |
| --------------------------- | ---------------------------- |
| `border-block-end`          | `border-bottom`              |
| `border-block-end-color`    | `border-bottom-color`        |
| `border-block-end-style`    | `border-bottom-style`        |
| `border-block-end-width`    | `border-bottom-width`        |
| `border-block-start`        | `border-top`                 |
| `border-block-start-color`  | `border-top-color`           |
| `border-block-start-style`  | `border-top-style`           |
| `border-block-start-width`  | `border-top-width`           |
| `border-inline-end`         | `border-right`               |
| `border-inline-end-color`   | `border-right-color`         |
| `border-inline-end-style`   | `border-right-style`         |
| `border-inline-end-width`   | `border-right-width`         |
| `border-inline-start`       | `border-left`                |
| `border-inline-start-color` | `border-left-color`          |
| `border-inline-start-style` | `border-left-style`          |
| `border-inline-start-width` | `border-left-width`          |
| `border-start-start-radius` | `border-top-left-radius`     |
| `border-end-start-radius`   | `border-bottom-left-radius`  |
| `border-start-end-radius`   | `border-top-right-radius`    |
| `border-end-end-radius`     | `border-bottom-right-radius` |

## 尺度

| 逻辑属性          | 实体属性     |
| ----------------- | ------------ |
| `inline-size`     | `width`      |
| `block-size`      | `height`     |
| `min-inline-size` | `min-width`  |
| `min-block-size`  | `min-height` |
| `max-inline-size` | `max-width`  |
| `max-block-size`  | `max-height` |

## resize

[resize](https://developer.mozilla.org/en-US/docs/Web/CSS/resize) 属性用于设置元素是否可调整尺寸。

| 逻辑属性 | 实体属性     |
| -------- | ------------ |
| `block`  | `vertical`   |
| `inline` | `horizontal` |

<iframe width="100%" height="500" src="https://interactive-examples.mdn.mozilla.net/pages/css/resize.html" loading="lazy"></iframe>
