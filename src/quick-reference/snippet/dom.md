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

## getPlatform

获取当前平台（如：）

```js
function getPlatform() {
  const ua = navigator.userAgent.toLowerCase()
  if (/iphone|ipad|ipod/.test(ua)) {
    return 'ios-platform'
  } else if (/android/.test(ua)) {
    return 'android-platform'
  } else if (/windows/.test(ua)) {
    return 'windows-platform'
  } else if (/macintosh/.test(ua)) {
    return 'mac-platform'
  } else {
    return ''
  }
}
```
