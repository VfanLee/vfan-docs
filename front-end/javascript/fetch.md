# Fetch

> 参考于：[Fetch 文档](https://developer.mozilla.org/zh-CN/docs/Web/API/fetch)

## 获取 JSON 数据

```js
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })
  .catch(error => console.error(error))
```

## 获取 Text 数据

```js
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.text())
  .then(data => {
    console.log(data)
  })
  .catch(error => console.error(error))
```

## 自定义请求头

请求的头信息，形式为 [Headers](https://developer.mozilla.org/zh-CN/docs/Web/API/Headers) 的对象或包含 [ByteString](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String) 值的对象字面量。

```js
fetch('https://jsonplaceholder.typicode.com/posts', {
  headers: new Headers({ 'custom-header': 'foo' }),
})
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })
  .catch(error => console.error(error))

// or
fetch('https://jsonplaceholder.typicode.com/posts', {
  headers: { 'custom-header': 'foo' },
})
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })
  .catch(error => console.error(error))
```

## HTTP 错误处理

```js
fetch('https://jsonplaceholder.typicode.com/vfanlee')
  .then(response => (response.ok ? response.json() : Promise.reject(new Error('Failed to load data from server'))))
  .then(data => console.log(data))
  .catch(error => console.error(error))
```

## CORS

```js
fetch('https://jsonplaceholder.typicode.com/posts', {
  credentials: 'include',
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error))
```

## Post JSON

```js
const data = {
  email: 'example@mail.com',
  password: 'PASSWORD',
}

fetch('https://jsonplaceholder.typicode.com/posts', {
  credentials: 'same-origin',
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data), // 匹配 Content-Type
})
  .then(response => response.json())
  .catch(error => console.error(error))
```

## Post an HTML `<form>`

<!-- tabs:start -->
<!-- tab:HTML -->
```html
<form id="form">
  <input type="email" name="email" required value="example@mail.com" />
  <input type="password" name="password" required value="PASSWORD" />
  <button type="submit">提交</button>
  <button type="reset">重置</button>
</form>
```

<!-- tab:JavaScript -->
```js
document.querySelector('#form').addEventListener('submit', function (e) {
  e.preventDefault()
  const formdata = new FormData(e.target)
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: formdata,
  })
    .then(response => response.json())
    .catch(error => console.error(error))
})
```
<!-- tabs:end -->
