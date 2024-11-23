# 文本处理

## font

### 简写形式

- 必须包含以下值：
  - `<font-size>`：指定文本字体尺寸。
  - `<font-family>`：指定文本使用某个字体或字体序列。
- 可以选择性包含以下值：
  - `<font-style>`：指定文本字体样式。
  - `<font-variant>`：是否应以小型大写字体显示文本。
  - `<font-weight>`：指定文本字体的粗细。
  - `<font-stretch>`：指定文本字体拉伸变形。
  - `<line-height>`：指定文本字体的行高。
- `font-style`、`font-variant` 和 `font-weight` 必须在 `font-size` 之前。
- `font-variant` 只可以使用 CSS 2.1 定义的值，即 `normal` 和 `small-cap。s`
- `font-stretch` 必须是单个关键字值。
- `line-height` 必须跟在 `font-size` 后面，由 `/` 分隔，例如 `16px/3`。
- `font-family` 必须最后指定。

### font-weight

`font-weight` 取值范围：1 ~ 1000。

常见 **粗细数值** 和 **粗细名称** 的对应关系：

| 数值        | 名称                      |
| ----------- | ------------------------- |
| 100         | Thin (Hairline)           |
| 200         | Extra Light (Ultra Light) |
| 300         | Light                     |
| 400(normal) | Normal                    |
| 500         | Medium                    |
| 600         | Semi Bold (Demi Bold)     |
| 700(bold)   | Bold                      |
| 800         | Extra Bold (Ultra Bold)   |
| 900         | Black (Heavy)             |

## 文本换行

### `word-break`

[`word-break`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/word-break) 用于指定单词的换行规则，特别适合处理中英文混排或长单词。

#### 可选值

- `normal`（默认值）：单词只有在空格、破折号等地方才会断行，不会在单词中间断开。
- `break-word`：如果单词超出容器宽度，单词会在任何地方断开（允许单词内换行），即使没有空格。
- `keep-all`：禁止在单词内断行，只会在空格或其他适当的地方换行。通常用于中文或东亚语言。

#### 示例

```css
/* 允许在单词内断开 */
.word-break {
  word-break: break-word;
}

/* 禁止在单词内断开 */
.no-word-break {
  word-break: keep-all;
}
```

### `line-break`

[`line-break`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/line-break) 控制行内文本如何换行，特别是在处理东亚语言（如中文、日文、韩文）时的行为。

#### 可选值

- `auto`（默认值）：浏览器根据语言自动决定如何换行。对于英文和其他语言，通常在单词或空格处换行；对于中文、日文、韩文等，允许在字符之间换行。
- `strict`：禁止在字符之间换行，只能在合适的字符之间（如标点符号）换行。
- `loose`：允许在任意位置换行，甚至在非空格字符之间断行。

#### 示例

```css
/* 自动根据语言规则换行 */
.line-break-auto {
  line-break: auto;
}

/* 更严格的换行规则 */
.line-break-strict {
  line-break: strict;
}

/* 允许更松散的换行规则 */
.line-break-loose {
  line-break: loose;
}
```

### `overflow-wrap` / `word-wrap`

::: tip
`overflow-wrap` 这个属性原本属于微软扩展的一个非标准、无前缀的属性，叫做 `word-wrap`，后来在大多数浏览器中以相同的名称实现。目前它已被更名为 `overflow-wrap`，`word-wrap` 相当于其别称。
:::

[`overflow-wrap`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/overflow-wrap) 用于指定当单词过长时，是否允许在单词中间断行换行。

#### 可选值

- `normal`（默认）：不断行，单词会超出容器。
- `break-word`：允许在单词内断行换行。

#### 示例

```css
p {
  word-wrap: break-word; /* 或 overflow-wrap: break-word; */
}
```

### `white-space`

[white-space](https://developer.mozilla.org/zh-CN/docs/Web/CSS/white-space) 控制空白字符的处理方式，以及是否允许换行。

#### 可选值

- `normal`（默认）：正常换行，连续空白会被折叠。
- `nowrap`：强制不换行，内容会超出容器。
- `pre`：保留所有空白符和换行符。
- `pre-wrap`：保留空白符，同时允许自动换行。
- `pre-line`：保留换行符，但连续空白会折叠。

#### 示例

```css
p {
  white-space: pre-wrap;
}
```

### `hyphens`

[`hyphens`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/hyphens) 控制单词是否可以通过连字符（如 -）来断行。属性值：

#### 属性值

- `none`（默认）：不使用连字符断行。
- `manual`：仅在 HTML 中显式添加软连字符（`&shy;`）时断行。
- `auto`：浏览器根据语言规则自动断行（需配合 lang 属性）。

#### 示例

```css
p {
  hyphens: auto;
}
```

### 常用组合推荐

```css
p {
  word-break: break-all; /* 中文自动换行 */
  white-space: normal; /* 默认空白处理 */
  overflow-wrap: break-word; /* 单词超长换行 */
}
```

## 溢出省略

### 单行省略

```css
.ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
```

### 多行省略

```css
.ellipsis--multi {
  overflow: hidden;
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3; // 指定行数
}
```

### 其他

- writing-mode
- @font-face
- letter-spacing
