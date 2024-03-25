# Document Object Model (DOM)

> - [MDN Document](https://developer.mozilla.org/zh-CN/docs/Web/API/Document)
> - [MDN DocumentFragment](https://developer.mozilla.org/zh-CN/docs/Web/API/DocumentFragment)

- **元素** 是一种特殊的节点，是元素节点 (Node.ELEMENT_NODE) 的简称，它由 HTML 文档中的标签表示。例如，`<div>`，`<p>`，`<span>` 都是元素。
- **节点** 是一个更广泛的概念，它包括元素节点，文本节点 (Node.TEXT_NODE) ，注释节点 (Node.COMMENT_NODE) ，文档节点 (Node.DOCUMENT_NODE) 等。例如，`<div>` 是一个元素节点，“Hello” 是一个文本节点，`<!-- comment -->` 是一个注释节点。

## 选择器

### 获取文档对象 `document`

```js
document
```

### 获取文档对象的根元素

```js
document.documentElement
```

### 获取 `<body>`

```js
document.body
```

### 获取 `<iframe>` 内的 `document`

```js
iframeEl.contentDocument
```

### 选择器查询

```js
// 查询单个
document.querySelector('selector')

// 查询多个
document.querySelectorAll('selector')
```

### class 查询

```js
document.querySelectorAll('.class')

// or
document.getElementsByClassName('class')
```

### id 查询

```js
document.querySelector('#id')

// or
document.getElementById('id')

// or
window['id']
```

### 属性查询

```js
document.querySelectorAll('a[target=_blank]')
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

> `el.parentNode` 获取父级节点

```js
el.parentElement
```

### 获取最近的匹配的祖先元素

```js
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

// or
el.closest(selector)
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

> `el.previousSibling` 获取上一个兄弟节点

```js
el.previousElementSibling
```

### 获取下一个兄弟元素

> `el.nextSibling` 获取下一个兄弟节点

```js
el.nextElementSibling
```

### 获取子元素集合

> `el.childrenNodes` 获取子节点集合

```js
el.children
```

### 获取第一个子元素

> `el.firstChild` 获取第一个子节点

```js
el.firstElementChild
```

### 获取最后一个子元素

> `el.lastChild` 获取最后一个子节点

```js
el.lastElementChild
```

### 是否匹配指定的选择器

```js
el.matches(selector)
```

## 属性

### 获取属性

```js
el.getAttribute('foo')
```

### 设置属性

```js
el.setAttribute('foo', 'bar')
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

注意：通过 `el.style` 获取的是内联样式，若需要获取元素实际的样式，需要使用 `getComputedStyle`

```js
el.style // 获取内联样式
el.style.color // 获取内联样式中的 color 值
```

> 参考：
>
> - [MDN getComputedStyle](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/getComputedStyle)
> - [MDN Node.ownerDocument](https://developer.mozilla.org/zh-CN/docs/Web/API/Node/ownerDocument)
> - [MDN Document.defaultView](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/defaultView)

```js
window.getComputedStyle(el, null)

// 获取元素的 ::before 伪元素的样式
var style = window.getComputedStyle(el, "::before");
```

1. 当我们使用元素的 `style` 属性来获取元素的 CSS 属性值时，有时候会遇到一个问题，就是当属性值为 `auto` 时，返回的也是 `auto` ，而不是实际的像素值。
2. 又或者，如果我们有一个 `iframe` 元素，它包含了另一个文档，我们想获取 `iframe` 中的某个元素的样式，我们就不能直接使用 `window.getComputedStyle()` 方法，因为 `window` 对象指向的是当前文档的窗口对象，而不是 `iframe` 中的文档的窗口对象。

在遇到如上问题时，可以采取如下写法：

```js
const win = el.ownerDocument.defaultView
win.getComputedStyle(el, null)
```

### 设置 Style

```js
el.style.color = '#ff0011'
```

### 获取 Class

```js
// 数组形式
el.classList

// 字符串形式
el.className
```

### 添加 Class

```js
el.classList.add(className) // 添加单个
el.classList.add("foo", "bar", "baz") // 添加多个
el.classList.add(["foo", "bar", "baz"]) // 添加多个
```

### 移除 Class

```js
el.classList.remove(className) // 移除单个
el.classList.remove("foo", "bar", "baz") // 移除多个
el.classList.remove(["foo", "bar", "baz"]) // 移除多个
```

### 切换 Class

```js
el.classList.toggle(className)
```

### 替换某个 Class

```js
el.classList.replace('show', 'hide')
```

### 是否包含某个 Class

```js
el.classList.contains(className)
```

## Width & Height

Width 与 Height 获取方法相同，以 Height 为例。

### Windows 高度

```js
// 不含 scrollbar，与 jQuery 行为一致
window.document.documentElement.clientHeight

// 含 scrollbar
window.innerHeight
```

### Document 高度

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

### Element 高度

```js
function getHeight(el) {
  const styles = this.getComputedStyle(el)
  const height = el.offsetHeight
  const borderTopWidth = parseFloat(styles.borderTopWidth)
  const borderBottomWidth = parseFloat(styles.borderBottomWidth)
  const paddingTop = parseFloat(styles.paddingTop)
  const paddingBottom = parseFloat(styles.paddingBottom)
  return height - borderBottomWidth - borderTopWidth - paddingTop - paddingBottom
}

// 精确到整数（border-box 时为 height - border 值，content-box 时为 height + padding 值）
el.clientHeight

// 精确到小数（border-box 时为 height 值，content-box 时为 height + padding + border 值）
el.getBoundingClientRect().height
```

## Position & Offset

### 获得匹配元素相对父元素的偏移

```js
// 左偏移
el.offsetLeft

// 上偏移
el.offsetTop
```

### 获得匹配元素相对文档的偏移

```js
function getOffset (el) {
  const box = el.getBoundingClientRect()

  return {
    top: box.top + window.pageYOffset - document.documentElement.clientTop,
    left: box.left + window.pageXOffset - document.documentElement.clientLeft
  }
}
```

### 获取元素滚动条垂直位置

```js
(document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop
```

## Text & HTML

### 获取元素及后代的文本内容

```js
el.innerText // 受样式影响

el.textContent // 不受样式影响
```

### 设置元素的文本内容

```js
el.innerText = string

el.textContent = string
```

### 获取 HTML 内容

```js
el.innerHTML
```

### 设置 HTML 内容

```js
el.innerHTML = htmlString
```

## DOM 处理

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

## 事件处理

### 标签事件

```html
<button onclick="handleClick()">Btn</button>

<script>
  const handleClick = function () {
    console.log('btn click')
  }
</script>
```

### onXXX

```html
<button id="btn">btn</button>

<script>
  const btn = document.querySelector('#btn')
  btn.onclick = function () {
    console.log('btn click')
  }
</script>
```

### addEventListener

> [addEventListener](https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/addEventListener)

```html
<button id="btn">btn</button>

<script>
  const btn = document.querySelector('#btn')
  const handleClick = function () {
    console.log('btn click')
  }
  btn.addEventListener('click', handleClick) // 添加事件监听器
  btn.removeEventListener('click', handleClick) // 移除事件监听器
</script>
```

### 事件对象

- 阻止事件传播：`event.stopPropagation()`
- 阻止默认行为：`event.preventDefault()`
- 事件触发元素：`event.target`
