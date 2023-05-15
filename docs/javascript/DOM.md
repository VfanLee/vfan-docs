# DOM 常见操作

## 1. 元素选择

- 通过 CSS 选择器选择元素（单个）：`document.querySelector('selector')`
- 通过 CSS 选择器选择元素（多个）：`document.querySelectorAll('selector')`

## 2. 元素遍历与查询

- 获取父元素：`element.parentElement`
- 获取所有子元素：`element.children`
- 获取第一个子节点：`element.firstElementChild`
- 获取最后一个子节点：`element.lastElementChild`
- 获取下一个兄弟元素：`element.nextElementSibling`
- 获取上一个兄弟元素：`element.previousElementSibling`
- 判断元素是否包含指定的子元素：`parentElement.contains(element)`

## 3. 元素属性与内容

- 获取或设置元素的文本内容：`element.textContent`、`element.innerText`
- 获取或设置元素的 HTML 内容：`element.innerHTML`
- 获取或设置元素属性：`element.property`
- 获取元素的属性：`element.getAttribute('attribute')`
- 设置元素的属性：`element.setAttribute('attribute', 'value')`
- 删除元素的属性：`element.removeAttribute('attribute')`
- 检查元素是否具有某个属性：`element.hasAttribute('attribute')`

## 4. 元素样式与类

- 获取或设置元素的内联样式属性：`element.style.property`
- 获取或设置元素类名（字符串形式）：`element.className`
- 获取或设置元素类名（数组形式）：`element.classList`
- 添加元素的类名：`element.classList.add('classname')`
- 移除元素的类名：`element.classList.remove('classname')`
- 切换类名：`element.classList.toggle('classname')`
- 替换类名：`element.classList.replace('classname', 'classname')`
- 检查元素是否具有某个类名：`element.classList.contains('classname')`

## 5. 元素创建与插入

- 创建新的文本节点：`document.createTextNode('text')`
- 创建新的元素节点：`document.createElement('tagname')`
- 克隆元素：`element.cloneNode(true)`、`element.cloneNode(false)`
- 插入元素作为子节点：`parentElement.appendChild(newElement)`
- 在元素之前插入新元素：`parentElement.insertBefore(newElement, referenceElement)`

## 6. 元素删除与替换

- 删除节点：`element.remove()`
- 移除子节点：`parentElement.removeChild(element)`
- 替换节点：`parentElement.replaceChild(newElement, oldElement)`

## 7. 元素事件处理

- 添加事件监听器：`element.addEventListener('event', callback, ?option)`
- 移除事件监听器：`element.removeEventListener('event', callback)`
- 触发元素的事件：`element.dispatchEvent(event)`

## 8. 其他

- 使元素被用户可见：[`scrollIntoView()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/scrollIntoView)
