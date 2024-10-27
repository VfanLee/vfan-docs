# 组件化

## 定义组件

最小方式

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

require.js 加载

```js
ko.components.register('like-or-dislike', {
  viewModel: { require: 'files/component-like-widget' },
  template: { require: 'text!files/component-like-widget.html' },
})
```

## 使用组件

```html
<like-widget params="value: userRating"></like-widget>
```

## 父传子

Knockout.js 在组件声明时，使用 params 来传递数据。在定义子组件时，可以通过 params 来获取从父组件传递过来的数据。

::: code-group

```html [父组件]
<!-- 父组件传递 "message" 和 "count" 到子组件 -->
<child-component params="message: 'Hello', count: 10"></child-component>
```

```js [子组件]
ko.components.register('child-component', {
  viewModel: function (params) {
    this.message = ko.observable(params.message)
    this.count = ko.observable(params.count)
  },
  template: `
        <div>
            <p>Message: <span data-bind="text: message"></span></p>
            <p>Count: <span data-bind="text: count"></span></p>
        </div>
    `,
})
```

:::
