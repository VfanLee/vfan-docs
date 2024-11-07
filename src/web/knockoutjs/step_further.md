# Step further

## 内置工具方法

- `ko.toJS`：这个方法会克隆你的 ViewModel 对象结构，将每个 `observable` 属性替换为它的当前值，因此你得到的是一个纯粹的数据副本，包含的只有数据本身，没有任何与 Knockout 相关的内容。
- `ko.toJSON`：这个方法会生成一个表示 ViewModel 数据的 JSON 字符串。它的内部实现会先对 ViewModel 调用 `ko.toJS`，然后使用浏览器原生的 JSON 序列化功能将结果转换成 JSON 字符串。（注意：若在没有原生 JSON 序列化功能的老旧浏览器（例如 IE 7 或更早版本）上使用该方法，需要引入 [json2.js](https://github.com/douglascrockford/JSON-js/blob/master/json2.js) 库以提供支持。）

## 全局状态管理

可在 `window` 对象下定义 `observable` 对象，例如：

```js
window.koGlobalState: {
  token: ko.observable("")
}
```

## 路由

...

## 国际化

Knockout.js 通常会与 Require.js 一起使用，可以借助 [requirejs/i18n](https://github.com/requirejs/i18n) 插件来实现。
