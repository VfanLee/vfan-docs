# DOM Manipulation

## 选择器

### 选择器查询

```js
document.querySelector('selector') // 查询单个
document.querySelectorAll('selector') // 查询多个
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
el.querySelectorAll('li')
```

### 兄弟元素

```js
[...el.parentNode.children].filter((child) =>
  child !== el
)

// or
Array.from(el.parentNode.children).filter((child) =>
  child !== el
)

// or
Array.prototype.filter.call(el.parentNode.children, (child) =>
  child !== el
)
```

### 上一个元素

```js
el.previousElementSibling
```

### 下一个元素

```js
el.nextElementSibling
```

### closest

获得匹配选择器的第一个祖先元素，从当前元素开始沿 DOM 树向上。

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

### parentsUntil

获取当前每一个匹配元素集的祖先，不包括匹配元素的本身。

```js
function parentsUntil(el, selector, filter) {
  const result = []
  const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector

  // match start from parent
  el = el.parentElement
  while (el && !matchesSelector.call(el, selector)) {
    if (!filter) {
      result.push(el)
    } else {
      if (matchesSelector.call(el, filter)) {
        result.push(el)
      }
    }
    el = el.parentElement
  }
  return result
}
```

### 获取 iframe 内的 document

```js
iframeEl.contentDocument
```

### 获取 body

```js
document.body
```

### 获取文档对象

```js
document.documentElement
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

### 获取 `data-` 属性

```js
// or
el.getAttribute('data-foo')

// or
el.dataset['foo']
```

## Style & Class

### 获取 Style

```js
const win = el.ownerDocument.defaultView // 此处为了解决当 style 值为 auto 时，返回 auto 的问题
win.getComputedStyle(el, null).color // null 的意思是不返回伪类元素
```

### 设置 Style

```js
el.style.color = '#ff0011'
```

### 添加 class

```js
el.classList.add(className)
```

### 移除 class

```js
el.classList.remove(className)
```

### 是否包含 class

```js
el.classList.contains(className)
```

### 切换 class

```js
el.classList.toggle(className)
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

## DOM 操作

### 从 DOM 中移除元素

```js
// Native
el.parentNode.removeChild(el)

// or
el.remove()
```

### 返回指定元素及其后代的文本内容

```js
el.textContent
```

### 设置元素的文本内容

```js
el.textContent = string
```

### 获取 HTML

```js
el.innerHTML
```

### 设置 HTML

```js
el.innerHTML = htmlString
```

### 插入到子节点的末尾

```js
el.insertAdjacentHTML('beforeend', '<div id="container">Hello World</div>')

// or
el.appendChild(newEl)
```

### 插入元素内部的第一个子节点之前

```js
el.insertAdjacentHTML('afterbegin', '<div id="container">Hello World</div>')

// or
el.insertBefore(newEl, el.firstChild)
```

### 在选中元素前插入新节点

```js
el.insertAdjacentHTML('beforebegin ', '<div id="container">Hello World</div>')

// or
const el = document.querySelector(selector)
if (el.parentNode) {
  el.parentNode.insertBefore(newEl, el)
}
```

### 在选中元素后插入新节点

```js
el.insertAdjacentHTML('afterend', '<div id="container">Hello World</div>')

// or
const el = document.querySelector(selector)
if (el.parentNode) {
  el.parentNode.insertBefore(newEl, el.nextSibling)
}
```

### 是否匹配给定的选择器

```js
el.matches(selector)
```

### 拷贝被选元素

深拷贝元素包括：生成被选元素的副本，包含子节点、文本和属性。

```js
el.cloneNode() // 深拷贝添加参数'true'
```

### 移除所有子节点

```js
el.innerHTML = ''
```

### 把每个被选元素放置在指定的HTML结构中

```js
Array.from(document.querySelectorAll('.inner')).forEach((el) => {
  const wrapper = document.createElement('div')
  wrapper.className = 'wrapper'
  el.parentNode.insertBefore(wrapper, el)
  el.parentNode.removeChild(el)
  wrapper.appendChild(el)
})
```

### 移除被选元素的父元素的DOM结构

```js
Array.prototype.forEach.call(document.querySelectorAll('.inner'), (el) => {
  let elParentNode = el.parentNode

  if(elParentNode !== document.body) {
      elParentNode.parentNode.insertBefore(el, elParentNode)
      elParentNode.parentNode.removeChild(elParentNode)
  }
})
```

### 用指定的元素替换被选的元素

```js
Array.prototype.forEach.call(document.querySelectorAll('.inner'),(el) => {
  const outer = document.createElement("div")
  outer.className = "outer"
  el.parentNode.insertBefore(outer, el)
  el.parentNode.removeChild(el)
})
```

### 解析 HTML/SVG/XML 字符串

```js
range = document.createRange()
parse = range.createContextualFragment.bind(range)

parse(`<ol>
  <li>a</li>
  <li>b</li>
</ol>
<ol>
  <li>c</li>
  <li>d</li>
</ol>`)
```
