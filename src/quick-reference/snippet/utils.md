# Utils

## getHistoryQueryParams

获取 url 中的 search 参数。

```js
function getHistoryQueryParams(url) {
  const urlObject = new URL(url)
  const params = new URLSearchParams(urlObject.search)
  const queryParams = {}

  for (const [key, value] of params.entries()) {
    queryParams[key] = value
  }

  return queryParams
}
```

示例：

```js
const url = 'https://example.com/page?name=John&age=30'
console.log(getHistoryQueryParams(url))
// 输出: { name: "John", age: "30" }
```

## getHashQueryParams

获取 hash 模式下，url 中的 query 参数。

```js
function getHashQueryParams(url) {
  const hashIndex = url.indexOf('#')
  if (hashIndex === -1) return {}

  const hash = url.slice(hashIndex + 1)
  const queryIndex = hash.indexOf('?')
  if (queryIndex === -1) return {}

  const queryString = hash.slice(queryIndex + 1)
  const params = new URLSearchParams(queryString)
  const queryParams = {}

  for (const [key, value] of params.entries()) {
    queryParams[key] = value
  }

  return queryParams
}
```

示例：

```js
const url = 'https://example.com/page#section?name=John&age=30'
console.log(getHashQueryParams(url))
// 输出: { name: "John", age: "30" }
```

## removeFalsy

过滤掉数组中的所有 [falsy](https://developer.mozilla.org/zh-CN/docs/Glossary/Falsy)。

```js
function removeFalsy(arr) {
  return arr.filter(Boolean)
}
```

示例：

```js
removeFalsy([0, 'a string', '', NaN, true, 5, undefined, 'another string', false]) // [ 'a string', true, 5, 'another string' ]
```
