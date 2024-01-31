# 文本

> 参考：[MDN font](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font)

## font

`font` 属性必须按照如下排列顺序，且 `font-size` 和 `font-family` 不可省略。

- `font-style`：指定文本字体样式。
- `font-weight`：指定文本字体的粗细。
- `font-stretch`：指定文本字体拉伸变形。
- `font-size`：指定文本字体尺寸。
- `line-height`：指定文本字体的行高。
- `font-family`：指定文本使用某个字体或字体序列。

## font-weight

`font-weight` 取值范围：1 ~ 1000。

常见粗细值名称和数值对应：

- `100`：Thin (Hairline)
- `200`：Extra Light (Ultra Light)
- `300`：Light
- `400 / normal`：Normal
- `500`：Medium
- `600`：Semi Bold (Demi Bold)
- `700 / bold`：Bold
- `800`：Extra Bold (Ultra Bold)
- `900`：Black (Heavy)

## 文本换行

- [word-break](https://developer.mozilla.org/en-US/docs/Web/CSS/word-break)
- [line-break](https://developer.mozilla.org/en-US/docs/Web/CSS/line-break)
- [white-space](https://developer.mozilla.org/zh-CN/docs/Web/CSS/white-space)
- [overflow-wrap](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-wrap)

> `overflow-wrap` 原本属于微软扩展的一个非标准、无前缀的属性，叫做 `word-wrap`，后来在大多数浏览器中以相同的名称实现。

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