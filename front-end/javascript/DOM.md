# DOM 常见操作

## 获取元素

- 通过 id 获取元素：`document.getElementById`
- 通过 class 获取元素：`document.getElementsByClassName`
- 通过 标签名获取元素：`document.getElementsByTagName`
- 通过 CSS 选择器获取单个元素：`document.querySelector('css_selector')`
- 通过 CSS 选择器获取多个元素：`document.querySelectorAll('css_selector')`

## 元素内容

- 获取或设置元素的文本内容：`element.textContent`、`element.innerText`
- 获取或设置元素的 HTML 内容：`element.innerHTML`

## 元素属性

- 获取或设置元素属性：`element.property`
- 获取元素的属性：`element.getAttribute('attribute')`
- 设置元素的属性：`element.setAttribute('attribute', 'value')`
- 删除元素的属性：`element.removeAttribute('attribute')`
- 检查元素是否具有某个属性：`element.hasAttribute('attribute')`

## style && class

- 获取或设置元素的内联样式属性：`element.style.property`
- 获取或设置元素类名（字符串形式）：`element.className`
- 获取或设置元素类名（数组形式）：`element.classList`
- 添加元素的类名：`element.classList.add('classname')`
- 移除元素的类名：`element.classList.remove('classname')`
- 切换类名：`element.classList.toggle('classname')`
- 替换类名：`element.classList.replace('classname', 'classname')`
- 检查元素是否具有某个类名：`element.classList.contains('classname')`

## 元素创建 && 克隆

- 创建新的文本节点：`document.createTextNode('text')`
- 创建新的元素节点：`document.createElement('tagname')`
- 克隆元素：`element.cloneNode(true)`

## 元素插入

- 插入到第一个子节点之前：`parentElement.prepend(newNode)`
- 插入到最后一个子节点之后：`parentElement.append(newNode)`
- 在元素之前插入新元素：`parentElement.insertBefore(newElement, referenceElement)`
- 在元素之后插入新元素：`parentElement.appendChild(newElement)`

## 元素删除 && 替换

- 删除节点：`element.remove()`
- 移除子节点：`parentElement.removeChild(element)`
- 替换节点：`parentElement.replaceChild(newElement, oldElement)`

## 元素遍历

- 获取父元素节点：`element.parentNode`
- 获取父元素元素：`element.parentElement`
- 获取所有子节点：`element.childrenNodes`
- 获取所有子元素：`element.children`
- 获取第一个子节点：`element.firstChild`
- 获取第一个子元素：`element.firstElementChild`
- 获取最后一个子节点：`element.lastChild`
- 获取最后一个子元素：`element.lastElementChild`
- 获取上一个兄弟节点：`element.previousSibling`
- 获取上一个兄弟元素：`element.previousElementSibling`
- 获取下一个兄弟节点：`element.nextSibling`
- 获取下一个兄弟元素：`element.nextElementSibling`
- 判断元素是否包含指定的节点：`parentElement.contains(node)`

## 事件处理

```html
<button onclick="handleClick()">Btn</button>

<script>
  const handleClick = function () {
    console.log('btn click')
  }
</script>
```

```html
<button id="btn">btn</button>

<script>
  const btn = document.querySelector('#btn')
  btn.onclick = function () {
    console.log('btn click')
  }
</script>
```

[addEventListener 参数文档](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)

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
- 测试元素是否会被指定的 CSS 选择器选中：`event.target.matches(css_selector)`
