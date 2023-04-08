# String

## 常见属性

- length：长度

## 方法

- [repeat](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/repeat)
- [split](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/split)

### 截取字符串

- [slice()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/slice)
- [substring()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/substring)
- [substr()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/substr)【已过时】

### 正则相关

- [replace](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
- [match](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/match)
- [matchAll](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll)
- [search](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/search)

### replace 示例

示例中的 `$2` 表示匹配第二个原子组的字符串。

```js
// 需求：将符合 h1-h6 标签替换成 p 标签
let temp = `
  <h1>foo</h1>
  <h1>foo</h6>
  <h2>bar</h2>
  <h3></h3>
`

// 匹配符合 h1-h6 标签的正则
let reg = /<(h[1-6])>(.*)<\/\1>/g

// 写法一
const r1 = temp.replace(reg, `<p>$2</p>`)
console.log(r1)

// 写法二
const r2 = temp.replace(
  reg,
  /*
    p0 表示匹配字符串
    p1 表示匹配的一个原子组
    p2 表示匹配的二个原子组
    ...
  */
  (p0, p1, p2) => {
    return `<p>$2</p>`
  }
)
console.log(r2)
```
