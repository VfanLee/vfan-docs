# DOM

## $ {#querySelector}

获取指定 CSS 选择器的第一个 DOM 元素。类似于 `document.querySelector()`。

```js
function $(selector, startNode = document) {
  return startNode.querySelector(selector)
}
```

## $$ {#querySelectorAll}

获取指定 CSS 选择器的第一个 DOM 元素数组。类似于 `Array.from(document.querySelectorAll())`。

```js
function $$(selector, startNode = document) {
  return Array.from(startNode.querySelectorAll(selector))
}
```
