# Knockout

## 初始化

```html
<div>
  <span data-bind="text: name"></span>
</div>

<!-- 引入knockout -->
<script src="../libs/js/knockout-3.5.1.js"></script>
<script>
  function ViewModel() {
    this.name = ko.observable("Hello World");
  }
  const vm = new ViewModel();
  ko.applyBindings(vm);
</script>
```

## state

数据绑定
text:
数据双向绑定
textInput:
事件绑定
event: { 事件名: 触发函数 }

数据监测
ko中数组的常见方法：
- push()
- pop()
- unshift()
- shift()
- reverse()
- sort()
- remove()
- removeAll()

```js
// 监听一个数据
ko.observable("hello world")

// 监听对象
ko.observable({})

// 监听数组
ko.observableArray([])
```

数据监听
subscribe()函数的三个参数：
1. callback是在通知发生时调用的函数。
2. target（可选）定义this回调函数中的值。
3. event（可选；默认为"change"）是要接收通知的事件的名称。

```js
// 当监测数据发生变化时触发订阅事件
var subscription = 监测数据.subscribe(
  function (val) {
    console.log(val);
  },
  null,
  "beforeChange"
);

// 取消订阅事件
subscription.dispose();
```

计算属性

```js
// computed()
self.fullName = ko.computed(function () {
  return `${self.firstName()} ${self.lastName()}`;
});

// pureComputed()
```

- 频繁访问、依赖较多的计算属性：如果需要高效管理订阅关系，可以选择 `ko.pureComputed`。
- 复杂依赖、状态变化频繁：当有复杂的依赖链条，或者希望 computed 始终监听所有依赖时，选择 `ko.computed`。

$component / $index() / $data

- `ko.toJS` 会递归地将 observable 的值转成普通值，生成一个包含当前 observable 值的 JavaScript 对象。
- `ko.toJSON` 它与 `ko.toJS` 类似，但会将结果转换为 JSON 字符串格式。

## 参考资料

- [Knockout.js 官方文档](https://knockoutjs.com/documentation/introduction.html)
- <http://www.aizhengli.com/knockoutjs/50/knockout.html>
- <https://www.cnblogs.com/smallprogram/p/5976954.html>
