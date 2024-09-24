# 深入响应式

## Vue 中的响应性是如何工作的

在 JavaScript 中有两种劫持 property 访问的方式：[getter](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/get#description) / [setters](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/set#description) 和 [Proxies](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy)。

- Vue 2 使用 `getter / setters` 完全是出于支持旧版本浏览器的限制。
- Vue 3 中则使用了 `Proxy` 来创建响应式对象，仅将 getter / setter 用于 ref。

伪代码：

```js
function reactive(obj) {
  return new Proxy(obj, {
    get(target, key) {
      track(target, key)
      return target[key]
    },
    set(target, key, value) {
      target[key] = value
      trigger(target, key)
    }
  })
}

function ref(value) {
  const refObject = {
    get value() {
      track(refObject, 'value')
      return value
    },
    set value(newValue) {
      value = newValue
      trigger(refObject, 'value')
    }
  }
  return refObject
}
```
