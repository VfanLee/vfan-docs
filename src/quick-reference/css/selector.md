# CSS 选择器

## 基础选择器

- 通用选择器：选择所有元素。例如：`*`。
- 元素选择器：直接选择 HTML 标签，例如 `p`。
- 类选择器：使用 `.` 选择指定类名的元素，例如 `.className`。
- ID 选择器：使用 `#` 选择指定 ID 的元素，例如 `#idName`。
- 属性选择器：
  - `[attr]`：选择具有指定属性的元素，例如 `[type]` 选择所有带有 `type` 属性的元素。
  - `[attr=value]`：选择指定属性等于某个值的元素，例如 `[type="text"]` 选择 `type` 为 `text` 的元素。
  - `[attr~=value]`
  - `[attr|=value]`
  - `[attr^=value]`：选择指定属性值以某个值开头的元素。
  - `[attr$=value]`：选择指定属性值以某个值结尾的元素。
  - `[attr*=value]`：选择指定属性值包含某个值的元素。

## 分组选择器

`A, B`

## 组合选择器

- 后代选择器：选择某个元素内部的所有指定元素，用空格分隔，例如 `div p` 选择所有位于 `div` 内的 `p`。
- 直接子代选择器：选择某个元素的直接子元素，用 `>` 分隔，例如 `ul > li` 选择所有位于 `ul` 直接下的 `li`。
- 一般兄弟选择器：选择位于另一个元素之后的所有兄弟元素，用 `~` 分隔，例如 `h1 ~ p` 选择所有在 `h1` 之后的 `p`。
- 紧凑兄弟选择器：选择紧接在另一个元素之后的元素，用 `+` 分隔，例如 `h1 + p` 选择紧接在 `h1` 之后的第一个 `p`。
- 列组合器：`A || B`

## 伪选择器

- 动态伪类：用于选择元素在特定状态下的样式。
  - `:hover`
  - `:active`
  - `:focus`
  - `:focus-within`
- 结构伪类：
  - `:nth-child(n)`、`:first-child`、`:last-child` 用于选择特定的子元素。
  - `:nth-of-type(n)`、`:first-of-type`、`:last-of-type` 用于选择特定的子元素。
- `:not(selector)` 用于排除特定选择器。
- `:invalid`
- 伪元素
  - `::before` 和 `::after`：用于在元素内容之前或之后插入内容。
  - `::first-line` 和 `::first-letter`：用于选择元素的首行或首字母。

## 参考资料

- [CSS Selector](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_selectors)
