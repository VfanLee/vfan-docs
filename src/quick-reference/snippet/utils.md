# Utils

## getSearchParams

获取 url 中的 search 参数。

```js

```

## getHashSearchParams

获取 hash 模式下，url 中的 search 参数。

```js

```

## removeFalsy

过滤掉数组中的所有 [falsy](https://developer.mozilla.org/zh-CN/docs/Glossary/Falsy)。

```js
function removeFalsy(arr) {
  return arr.filter(Boolean)
}

// example
removeFalsy([0, 'a string', '', NaN, true, 5, undefined, 'another string', false]) // [ 'a string', true, 5, 'another string' ]
```

## 监听新窗口关闭

```js
function windowCloseCallback(newWindow) {
  const createGroupHomeworkTimer = setInterval(function () {
    if (newWindow.closed) {
      // do ...
      clearInterval(createGroupHomeworkTimer)
    }
  }, 1000)
}
```
