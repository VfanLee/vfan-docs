# XMLHTTPRequest

> - [XMLHttpRequest API](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest_API)
> - [XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)

- **原生 JavaScript API**：XHR 是浏览器原生提供的 API，用于进行异步通信。
- **回调风格**：XHR 使用回调函数的方式来处理异步操作，通常需要设置 `onreadystatechange` 事件回调。
- **老式，不够现代**：相对较老，不支持 Promise 风格的编程，对于复杂的异步操作可能显得不够现代化。

## CRUD

### read list

```js
const xhr = new XMLHttpRequest()
xhr.open('GET', 'https://reqres.in/api/users?page=2', true)
xhr.onreadystatechange = e => {
  if (xhr.readyState == 4 && xhr.status == 200) {
    const response = JSON.parse(xhr.response)
    console.log(response)
  }
}
xhr.onerror = e => {
  console.error(e)
}
xhr.send()
```

### read single

```js
// 'https://reqres.in/api/users/2'
const xhr = new XMLHttpRequest()
xhr.open('GET', 'https://reqres.in/api/users?page=2', true)
xhr.onreadystatechange = e => {
  if (xhr.readyState == 4 && xhr.status == 200) {
    const response = JSON.parse(xhr.response)
    console.log(response)
  }
}
xhr.onerror = e => {
  console.error(e)
}
xhr.send()
```

### create

```js
// 'https://reqres.in/api/users'
```

### update

```js
// 'https://reqres.in/api/users/2'
```

### delete

```js
// 'https://reqres.in/api/users/2'
```

## 跨域请求携带 Cookie

> [withCredentials 属性 - MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/withCredentials)

```js
const xhr = new XMLHttpRequest()
xhr.open("GET", "http://example.com/", true)
xhr.withCredentials = true
xhr.send(null)
```
