# 文本

## font-weight

- 100 - Thin
- 200 - Extra Light (Ultra Light)
- 300 - Light
- 400 - Regular (Normal、Book、Roman)
- 500 - Medium
- 600 - Semi Bold (Demi Bold)
- 700 - Bold
- 800 - Extra Bold (Ultra Bold)
- 900 - Black (Heavy)

## 文字换行

- [word-break](https://developer.mozilla.org/en-US/docs/Web/CSS/word-break)
- [line-break](https://developer.mozilla.org/en-US/docs/Web/CSS/line-break)
- [white-space](https://developer.mozilla.org/zh-CN/docs/Web/CSS/white-space)
- [overflow-wrap](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-wrap)

overflow-wrap 原本属于微软扩展的一个非标准、无前缀的属性，叫做 word-wrap，后来在大多数浏览器中以相同的名称实现。目前它已被更名为 overflow-wrap，word-wrap 相当于其别称。

## 溢出省略

### 单行省略

```
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
```

### 多行省略

```
overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 3; // 指定行数
```
