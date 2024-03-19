# this

JavaScript 作为一个非常灵活的编程语言，this 的指向也相当灵活。

- this 的指向和编写的位置没有关系；
- this 是在运行时被绑定的，与调用的方式有关系。

## this 绑定规则

### 默认绑定

当函数为独立调用时，（浏览器中）this 绑定为 window。

```js
function test1() {
  console.log(this)
  test2()
}

function test2() {
  console.log(this)
  test3()
}

function test3() {
  console.log(this)
}

test1() // 3次输出都是 window
```

```js
function foo(func) {
  func()
}

var obj = {
  name: 'fan',
  bar: function() {
    console.log(this)
  }
}

foo(obj.bar) // window
```

```js
function foo() {
  console.log(this)
}

var obj1 = {
  name: 'obj1',
  foo: foo
}

var bar = obj1.foo

bar() // window
```

### 隐式绑定

当函数通过某个对象进行调用时，该对象内部一定有一个引用指向指向这个函数，间接性地将 this 绑定到了一个对象上，所以 this 指向的就是这个对象。

```js
function foo() {
  console.log(this)
}

var obj1 = {
  name: 'obj1',
  foo: foo
}

var obj2 = {
  name: 'obj2',
  obj: obj1
}

obj2.obj.foo() // obj1
```

### 显式绑定

顾名思义，调用函数时，显式地将 this 的引用绑定到某个对象上。在函数调用时有 3 个方法可以显式地绑定某个对象：

- [call(obj, arg1, arg2 ...)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call)：参数一为指定的对象，后续参数为调用函数所需要的参数。
- [apply(obj, [arg1, arg2])](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)：与 call() 相似，参数一为指定的对象，参数二就是将所需要的参数统一放在一个数组中。
- [bind(obj)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)：与 call() 相似，甚至说传参的方式都一样，但不同的是，call() 调用后会执行，而 bind() 会返回一个新的函数，这个函数需要手动执行，**且该函数的 this 始终为指定的对象**。

> call、apply、bind [实现示例](https://github.com/VfanLee/lab/tree/main/analysis/this)。

```js
function foo(num1, num2, num3) {
  console.log(this, num1 + num2 + num3)
}

var obj1 = {
  name: 'obj1',
  foo: foo
}

var bar = obj1.foo

bar.call('abc', 1, 1, 1) // String {'abc'}

bar.apply('xyz', [2, 2, 2]) // String {'xyz'}

var func = bar.bind('233', 2, 3, 3)
func() // String {'233'}

var fn = bar.bind('886')
fn(8, 8, 6) // String {'886'}
```

### new 绑定

在 JavaScript 中，函数可以作为一个对象的构造函数，在 new 调用函数时，会执行如下操作：

1. 创建一个全新的对象实例；
2. 这个对象会与 prototype 连接；
3. **函数调用的 this 会绑定到这个新对象上**。
4. 如果函数没有返回其他对象，那么表达式会返回这个新对象。

```js
function Person(name) {
  console.log(this) // Person {}
  this.name = name
}

var p = new Person('fan')
```

### this 其他规则

一些内置函数、第三方库 …… 具体的 this 绑定，需要根据具体实现来确定。

- 例如 `setTimeout()`，其实在实现过程中 this 已经确定好了，绑定的就是 window。
- 例如 `forEach()`、`map() 等高阶函数` …… 在传参的时候，最后一个可选参数就是可以指定 this 绑定具体的对象。
- 例如 **DOM 元素在执行某些事件** 时，绑定的就是自身 DOM 元素对象。
- 例如 **在显式绑定时，传递的对象时 null 或者 undefined**，那么这个显式绑定会被忽略，**使用默认规则**。
- ES6+ 中的 **箭头函数** 让 JavaScript 更加灵活，**箭头函数没有自己的 this，都是从上层的作用域（AO）开始寻找**。即使是 `setTimeout()`、`高阶函数`、`DOM 元素执行事件` …… 也是没有自己的 this 对象。

## 规则优先级

> **默认绑定  <  隐式绑定  <  显式绑定(bind)  <  new 绑定**

new 绑定不允许和 call()、apply() 同时使用，所以不存在优先级的说法。

```js
function foo() {
  console.log(this)
}

var func = foo.bind('abc')

var bar = new func() // foo {}
```

## 面试题

```js
function foo() {
  console.log(this)
}

// 1.直接调用
foo() // window

// 2.将foo放到一个对象中，再调用
var obj = {
  name: 'fan',
  foo: foo
}
obj.foo() // obj对象

// 3.call 调用
foo.call('abc') // String {"abc"}对象
```

```js
const obj = {
  name: 'foo',
  sayHi1: () => {
    console.log(this.name)
  },
  sayHi2() {
    ;(() => {
      console.log(this.name)
    })()
  }
}

obj.sayHi1() // window.name => ''
obj.sayHi2() // obj.name => foo
```
