# Knockout

> 参考：[Knockout 官方文档](https://knockoutjs.com/documentation/introduction.html)

- http://www.aizhengli.com/knockoutjs/50/knockout.html
- https://www.cnblogs.com/smallprogram/p/5976954.html

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

数据绑定
text: 
数据双向绑定
textInput:
事件绑定
event: { 事件名: 触发函数 }


数据监测
ko中数组的常见方法：
● push()
● pop()
● unshift()
● shift()
● reverse()
● sort()
● remove()
● removeAll()

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

```html
<!-- 使用组件 -->
<div data-bind="component: 'MessageAndList'"></div>
<div data-bind="component: {name: 'MessageAndList', params: 'jerry'}"></div>

<script>
	// 定义组件
	ko.components.register("MessageAndList", {
		viewModel: function (params) {
			let self = this;
			self.account = ko.observable(params != null ? params : "tom");
			self.messageText = ko.observable("");
			self.messageList = ko.observableArray([]);
			self.send = function () {
				self.messageList.push({
					message: self.messageText(),
					account: self.account(),
				});
				self.messageText("");
			};
		},
		template: `<input type="text" data-bind="value: messageText" /><button data-bind="click: send">发送</button>
					<ul data-bind="foreach: messageList">
						<li>
							<span data-bind="text: message"></span>
							<span data-bind="text: account"></span>
						</li>
					</ul>`,
	});
	ko.applyBindings();
</script>
```

其他

$component / $index()
