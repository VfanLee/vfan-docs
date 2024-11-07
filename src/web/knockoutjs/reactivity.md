# Reactivity

## 定义 State

```js
define(['knockout'], function (ko) {
  function ExampleViewModel(params) {
    this.name = ko.observable('Tom')
  }

  return {
    viewModel: ExampleViewModel,
    template: `<h1 data-bind="text: Hello ${name}"></h1>`,
  }
})
```

::: tip observables 不一定非要放在外层！
其实说白了，就是哪个数据需要“响应式”，就对哪个数据进行 observables “封装”。
:::

## 更新 State

```js
define(['knockout'], function (ko) {
  function ExampleViewModel(params) {
    this.name = ko.observable('Tom')

    this.name("Jerry")
  }

  return {
    viewModel: ExampleViewModel,
    template: `<h1 data-bind="text: Hello ${name}"></h1>`,
  }
})
```

## Computed State

## Watch

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

## observable 对象

### 定义

```js


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
