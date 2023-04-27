# DOM

## 1. 获取 DOM

```js
// 通用
document.querySelector()
document.querySelectorAll()

// 获取 DOM
document
// 获取 doctype
document.doctype
// 获取 html
document.documentElement
// 获取 body
document.body
```

## 2. 操作元素属性

### property 的方式

修改对象属性，不会体现到 HTML 中

```js
// 获取属性值
Element.PROP

// 设置属性值
Element.PROP = 'foo'
```

### attribute 的方式

修改 HTML 属性，会体现到 HTML 中

```js
// 获取属性值
Element.getAttribute('PROP')

// 设置属性值
Element.setAttribute('PROP', 'foo')

// 移除属性
Element.removeAttribute('PROP')
```

- 获取属性值：元素对象.getAttribute('属性名')
- 设置属性值：元素对象.setAttribute('属性', '值')
- 移除属性：元素对象.removeAttribute('属性')

### 2.1. 操作元素 class

```js
// 获取 class（字符串形式）
Element.className

// 更改 class，会覆盖原先的类名
Element.className = 'foo' // 会覆盖原先的类名 

// 获取 class（数据形式）
Element.classList

// 添加 class
Element.classList.add('foo')
Element.classList.add('foo', 'bar')

// 移除 class
Element.classList.remove('foo')
Element.classList.remove('foo', 'bar')

// 替换 class
Element.classList.replace('foo', 'bar')

// 切换 class
Element.classList.toggle('foo')
```

### 2.2. 操作元素 style

```js
Element.style

Element.style.CSSattribute
```

## 3. DOM 结构操作

获取父节点（通过具体的节点调用）

- 子元素.parentNode
- 子元素.parentElement

获取子节点（通过具体的节点调用）

- 父元素.children ：返回所有的子元素节点。它只返回子元素节点，其余节点不返回
- 父元素.firstElementChild ：返回第一个子元素节点
- 父元素.lastElementChild ：返回最后一个子元素节点
- 父元素.childNodes ：返回当前节点的所有子节点、包括文本节点（空格、换行）、注释节点等
- 父元素.firstChild ：返回当前节点的第一个子节点
- 父元素.firstChild ：返回当前节点的第一个子节点

获取兄弟节点（通过具体的节点调用）

- 元素.previousElementSibling 属性 ：返回当前元素上一个兄弟节点
- 元素.nextElementSibling 属性 ：返回当前元素下一个兄弟元素节点
- 元素.previousSibling 属性 ：表示当前节点的前一个兄弟节点
- 元素.nextSibling 属性 ：表示当前节点的后一个兄弟节点

创建节点

- 元素对象.innerHTML = 'xxx'：将内容写入某个 DOM 节点，不会导致页面全部重绘。innerHTML 效率要比 creatElement 高
- document.createElement(标签名)：创建由 tagName 指定的 HTML 元素。因为这些元素原先不存在，是根据我们的需求动态生成的，所以也称为动态创建元素节点
- document.createDocumentFragment：创建一个DOM片段 
- document.write()：直接将内容写入页面的内容流，但是文档流执行完毕，则它会导致页面全部重绘
- document.createTextNode()：根据文本内容创建一个文本节点对象

改变元素的内容

- 元素对象.innerHTML
  - 将文本内容添加/更新到任意标签位置
  - 文本中包含的标签会被解析
- 元素对象.innerText 
  - 将文本内容添加/更新到任意标签位置
  - 文本中包含的标签不会被解析
- document.write()
  - 只能将文本内容追加到<body>前面的位置
  - 文本中包含的标签会被解析

添加节点

- 父节点.appendChild(新的子节点) ：将一个节点添加到指定父节点的子节点列表 末尾。类似于 CSS 里面的 after伪元素
- 父节点.insertBefore(新的子节点, 作为参考的子节点) ：将一个节点添加到父节点的 指定子节点前面。类似于 CSS 里面的 before伪元素

删除节点

- 父节点.removeChild(子节点)：从 DOM 中删除一个子节点，返回删除的节点。

复制节点

- node.cloneNode()：返回调用该方法的节点的一个副本。 也称为 克隆节点/拷贝节点
  - 如果括号参数为 空 或者为 false ，则是 浅拷贝，即只克隆复制节点本身，不克隆里面的子节点。
  - 如果括号参数为 true ，则是 深度拷贝，会复制节点本身以及里面所有的子节点。

替换节点

- 父节点.replaceChild(新节点, 旧节点)
