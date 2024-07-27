---
outline: [2, 3]
---

# Document Object Model (DOM)

> 参考：
>
> - [Document - MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Document)
> - [You might not need jQuery](https://youmightnotneedjquery.com)
> - [You-Dont-Need-jQuery](https://github.com/camsong/You-Dont-Need-jQuery)

## 选择器

### 获取 `document`

```js
document

// or
window.document

// 获取当前节点顶层的 document
node.ownerDocument
```

### 根据选择器获取元素（通用）

```js
// 查询单个
document.querySelector('selector')

// 查询多个
document.querySelectorAll('selector')
```

::: tip

- `getElement(s)ByXxx` 获取的是动态集合。
- `querySelector(All)` 获取的是静态集合。
:::

### 获取 `document` 的根元素

例如，HTML 文档的 `<html>` 元素

```js
document.documentElement
```

### 获取 `<body>` 元素

```js
document.body
```

### 后代查询

```js
// 查询单个
el.querySelector('selector')

// 查询多个
el.querySelectorAll('selector')
```

## 遍历

### 获取父级元素

```js
el.parentElement
```

::: tip

- `el.parentNode` 获取父级节点
- `el.parentElement` 获取父级元素
:::

### 是否匹配指定的选择器

> [Element.matches(selector)](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/matches)

```js
el.matches(selector)
```

### 获取最近的匹配的祖先元素

> [Element.closest(selector)](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/closest)

```js
el.closest(selector)

// or
function closest(el, selector) {
  const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector
  while (el) {
    if (matchesSelector.call(el, selector)) {
      return el
    } else {
      el = el.parentElement
    }
  }
  return null
}
```

### 获取兄弟元素

```js
[...el.parentNode.children].filter(child => child !== el)

// or
Array.from(el.parentNode.children).filter(child => child !== el)

// or
Array.prototype.filter.call(el.parentNode.children, child => child !== el)
```

### 获取上一个兄弟元素

```js
el.previousElementSibling
```

::: tip
`el.previousSibling` 获取上一个兄弟节点
:::

### 获取下一个兄弟元素

```js
el.nextElementSibling
```

::: tip
`el.nextSibling` 获取下一个兄弟节点
:::

### 获取子元素集合

```js
el.children
```

### 获取第一个子元素

```js
el.firstElementChild
```

::: tip
`el.firstChild` 获取第一个子节点
:::

### 获取最后一个子元素

```js
el.lastElementChild
```

::: tip
`el.lastChild` 获取最后一个子节点
:::

## 属性

### 获取属性

```js
el.getAttribute('foo')

// 若为 data-* 属性，可以使用 dataset
el.getAttribute('data-theme')
el.dataset.theme
```

### 设置属性

```js
el.setAttribute('foo', 'bar')

// 若为 data-* 属性，可以使用 dataset
el.setAttribute('data-theme', 'dark')
el.dataset.theme = 'dark'
```

### 删除属性

```js
el.removeAttribute('foo')
```

### 检查元素是否具有某个属性

```js
el.hasAttribute('foo')
```

## Style & Class

### 获取 Style

> [wndow.getComputedStyle(element, [pseudoElt])](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/getComputedStyle)
> [Element.getBoundingClientRect()](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/getBoundingClientRect)

```js
el.style // 获取内联样式对象

window.getComputedStyle(el, null) // 获取实际样式对象
window.getComputedStyle(el, '::before') // 获取元素的 ::before 伪元素的样式
```

::: tip
`el.style` 只能获取内联样式，若需获取元素的实际样式，则需要使用 `window.getComputedStyle()` 方法。
:::

### 设置 Style

```js
el.style.color = '#ff0011' // 设置内联样式
```

### 获取 Class

```js
// 数组形式 ['foo', 'bar']
el.classList
```

::: tip
通过 `el.className` 可获取类名的字符串形式（`'foo bar baz'`），也可以通过 `el.className = 'foo bar baz'` 的形式修改元素的类名，但是会覆盖掉之前的类名。
:::

### 给元素添加 className

```js
el.classList.add('foo') // 添加单个
el.classList.add('foo', 'bar', 'baz') // 添加多个
```

### 移除元素的 className

```js
el.classList.remove(className) // 移除单个
el.classList.remove('foo', 'bar', 'baz') // 移除多个
```

### 切换元素的 className

```js
el.classList.toggle(className)
```

### 替换元素的某个 className

```js
el.classList.replace('show', 'hide')
```

### 检查元素是否包含某个 className

```js
el.classList.contains(className)
```

### Width & Height

Width 与 Height 获取方法相同，以 Height 为例。

#### Windows 高度

```js
// 不含 scrollbar
window.document.documentElement.clientHeight

// 含 scrollbar
window.innerHeight
```

#### Document 高度

```js
const body = document.body
const html = document.documentElement
const height = Math.max(
  body.offsetHeight,
  body.scrollHeight,
  html.clientHeight,
  html.offsetHeight,
  html.scrollHeight
)
```

#### Element 高度

```js
// 精确到整数
// content-box: height + padding
// border-box: height - border
el.clientHeight

// 精确到小数
// border-box: height
// content-box: height + padding + border
el.getBoundingClientRect().height
```

### Position & Offset

#### 获得元素相对父元素的偏移量

```js
{ 
  top: el.offsetTop,
  left: el.offsetLeft
}
```

#### 获得元素相对 `window` 的偏移量

```js
{
  top: el.getBoundingClientRect().top,
  left: el.getBoundingClientRect().left
}
```

#### 获得元素相对 `document` 的偏移量

```js
{
  top: el.getBoundingClientRect().top + window.pageYOffset - document.documentElement.clientTop,
  left: el.getBoundingClientRect().left + window.pageXOffset - document.documentElement.clientLeft
}
```

#### 获取两个元素之间的相对偏移量

```js
{
  top: el.getBoundingClientRect().top - target.getBoundingClientRect().top,
  left: el.getBoundingClientRect().left - target.getBoundingClientRect().left
}
```

#### 获取元素滚动条垂直位置

```js
(document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop
```

## DOM 处理

> - [insertAdjacentHTML - MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/insertAdjacentHTML)
> - [insertAdjacentElement - MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/insertAdjacentElement)

### 元素自身的前面插入新元素

```js
el.insertAdjacentHTML('beforebegin', '<div id="container">Hello World</div>')

// or
el.insertAdjacentElement('beforebegin', newEl)

// or
el.parentNode.insertBefore(newNode, el)
```

### 元素内部的第一个子节点之前插入新元素

```js
el.insertAdjacentHTML('afterbegin', '<div id="container">Hello World</div>')

// or
el.insertAdjacentElement('afterbegin', newEl)

// or
el.insertBefore(newNode, el.firstChild)

// or
el.prepend(newNode)
```

### 元素内部的最后一个子节点之后插入新元素

```js
el.insertAdjacentHTML('beforeend', '<div id="container">Hello World</div>')

// or
el.insertAdjacentElement('beforeend', newEl)

// or
el.append(newNode)
```

### 元素自身的后面插入新元素

```js
el.insertAdjacentHTML('afterend', '<div id="container">Hello World</div>')

// or
el.insertAdjacentElement('afterend', newEl)

// or
el.parentNode.insertBefore(newNode, el.nextSibling)
```

### 替换元素

```js
parentNode.replaceChild(newChild, oldChild)
```

### 移除元素

```js
el.remove()

// or
el.parentNode.removeChild(el)
```

### 移除所有子节点

```js
el.innerHTML = ''
```

### 克隆节点

```js
el.cloneNode(true) // true 代表进行深拷贝（生成被选元素的副本，包含子节点、文本和属性）
```

### 判断元素是否包含指定的节点

```js
el.contains(node)
```

### Text & HTML

#### 获取元素及后代的文本内容

```js
el.innerText // 受样式影响

el.textContent // 不受样式影响
```

#### 设置元素的文本内容

```js
el.innerText = string

el.textContent = string
```

#### 获取 HTML 内容

```js
el.innerHTML
```

#### 设置 HTML 内容

```js
el.innerHTML = htmlString
```

## iframe

### 获取 iframe 元素 Window

```js
iframe.contentWindow
```

### 获取 iframe 元素 Document

```js
iframe.contentDocument
```

::: tip
如果 `iframe` 及其父 `document` 处于同源，则返回一个 `document`（即嵌套浏览上下文中的活动文档）对象，否则返回 `null`。
:::
