# Component

## Define

### 最小方式

```js
ko.components.register('like-widget', {
  viewModel: function (params) {
    // Data: value is either null, 'like', or 'dislike'
    this.chosenValue = params.value

    // Behaviors
    this.like = function () {
      this.chosenValue('like')
    }.bind(this)
    this.dislike = function () {
      this.chosenValue('dislike')
    }.bind(this)
  },
  template:
    '<div class="like-or-dislike" data-bind="visible: !chosenValue()">\
        <button data-bind="click: like">Like it</button>\
        <button data-bind="click: dislike">Dislike it</button>\
    </div>\
    <div class="result" data-bind="visible: chosenValue">\
        You <strong data-bind="text: chosenValue"></strong> it\
    </div>',
})
```

### require.js 加载

```js
ko.components.register('like-or-dislike', {
  viewModel: { require: 'files/component-like-widget' },
  template: { require: 'text!files/component-like-widget.html' },
})
```

### 使用组件

```html
<like-widget params="value: userRating"></like-widget>
```

## Props

### 通过 params 传递

父组件通过 `params` 向子组件传递数据：这是 Knockout.js 中最常见的父子组件通信方式，父组件将 `observable` 或 `observableArray` 作为 `params` 参数传递给子组件。

```js
// 父组件
function ParentViewModel() {
    this.sharedData = ko.observable("Initial Data");
}

ko.components.register('child-component', {
    viewModel: function(params) {
        this.data = params.sharedData;
    },
    template: `<div data-bind="text: data"></div>`
});

// HTML
<div data-bind="component: { name: 'child-component', params: { sharedData: sharedData } }"></div>
```

### 使用 ko.subscribable

ko.subscribable 提供了一种基于订阅-发布模式的通信机制，可以让不同组件之间发送和接收消息，类似于全局的事件系统。

```js
function EventManager() {
    this.onDataChanged = ko.subscribable();
}

const eventManager = new EventManager();

// 父组件监听事件
eventManager.onDataChanged.subscribe((newData) => {
    console.log("Data changed to:", newData);
});

// 子组件发送事件
eventManager.onDataChanged.notifySubscribers("Updated Data");
```

### 全局状态管理

可以将一些公用的属性放在全局下进行管理，例如：

```js
window.globalState = {
  foo: ko.observable(false),
  bar: ko.observable({}),
}
```

## Context

```
$component

$index()

$data
```
