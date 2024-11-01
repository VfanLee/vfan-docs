# State

## observable 对象

### 定义

```js
var personName = 'Bob'
var personName = ko.observable('Bob')

var personAge = 123
var personAge = ko.observable(123)

var flag = true
var flag = ko.observable(true)

var obj = {
  id: 100,
  name: 'foo'
}
var obj = ko.observable({
  id: 100,
  name: 'foo'
})
var obj = {
  id: ko.observable(100)
  name: ko.observable("foo")
}
var obj = ko.observable({
  id: ko.observable(100)
  name: ko.observable("foo")
})
```

总而言之，哪里需要“动态数据”，哪里就通过 `observable` 进行包裹。

### getter

```js
myViewModel.personName() // => Bob
myViewModel.personAge() // => 123
```

### setter

```js
myViewModel.personName('Mary') // => personName: Mary

// 支持链式 setter
myViewModel.personName('Mary').personAge(50) // => personName: Mary, personAge: 50
```

::: warning 请谨记，`ko.observable` 是一个函数！
:::

## observableArray 对象

### 定义

当定义一个数组时，使用 `observableArray` 而不是 `observable`。

```js
// 初始化一个空数组
var myObservableArray = ko.observableArray()

// 初始化带有默认值的数组
var anotherObservableArray = ko.observableArray([
  { name: 'Bungle', type: 'Bear' },
  { name: 'George', type: 'Hippo' },
  { name: 'Zippy', type: 'Unknown' },
])
```

## computed

### pureComputed

频繁访问、依赖较多的计算属性：如果需要高效管理订阅关系，可以选择 `ko.pureComputed`。

```js
self.fullName = ko.pureComputed(function () {
  return `${self.firstName()} ${self.lastName()}`
})
```

### computed

复杂依赖、状态变化频繁：当有复杂的依赖链条，或者希望 computed 始终监听所有依赖时，选择 `ko.computed`。

```js
self.fullName = ko.computed(function () {
  return `${self.firstName()} ${self.lastName()}`
})
```

## subscribe

`subscribe(callback, [target], [event])` 函数：

1. `callback`：在通知发生时调用的函数。
2. `target`：（可选）定义 this 回调函数中的值。
3. `event`（可选，默认为"change"）：要接收通知的事件的名称。

```js
// 当监测数据发生变化时触发订阅事件
var subscription = 监测数据.subscribe(
  function (val) {
    console.log(val)
  },
  null,
  'beforeChange',
)

// 取消订阅事件
subscription.dispose()
```

## 实用方法

- `ko.toJS`：这个方法会克隆你的 ViewModel 对象结构，将每个 `observable` 属性替换为它的当前值，因此你得到的是一个纯粹的数据副本，包含的只有数据本身，没有任何与 Knockout 相关的内容。
- `ko.toJSON`：这个方法会生成一个表示 ViewModel 数据的 JSON 字符串。它的内部实现会先对 ViewModel 调用 `ko.toJS`，然后使用浏览器原生的 JSON 序列化功能将结果转换成 JSON 字符串。（注意：若在没有原生 JSON 序列化功能的老旧浏览器（例如 IE 7 或更早版本）上使用该方法，需要引入 [json2.js](https://github.com/douglascrockford/JSON-js/blob/master/json2.js) 库以提供支持。）
