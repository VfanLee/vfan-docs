# jQuery.ajax()

## 介绍

> [jQuery.ajax()](https://api.jquery.com/jQuery.ajax/)

jQuery Ajax 是 jQuery 库的一部分，封装了底层的 `XMLHttpRequest`，提供了更高级的接口，隐藏了许多底层细节，以简化异步请求的处理。

## 常见问题

### 用法

<https://hemin.cn/jq/jQuery.ajax.html>

### 全局设置

```js
$.ajaxSetup({
  beforeSend: function (xhr, ) {
    // 这里可以统一为所有请求发送 token、lang 等等公共参数
  },
  complete: function (xhr, status) {
    // 这里可以为所有响应做统一的处理，例如：权限问题、网络问题等等
    if (xhr.status == 401) {
      // ...
    } else if (xhr.status == 403) {
      // ...
    }
  },
})
```

### 非 GET 请求中优雅地传递 query 参数

```js
const params = $.param({ key1: 'value1', key2: 'value2' })
$.ajax({
  url: `https://example.com/api?${params}`,
  type: 'POST',
  data: { otherKey: 'otherValue' }, // POST 请求体中的参数
  success: function (response) {
    console.log(response)
  },
  error: function (error) {
    console.error(error)
  },
})
```
