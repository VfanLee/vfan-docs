# with

> https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/with

with 语句可以拓展作用域链。已弃用。

```js
var message = 'GO - message'
var obj = { message: 'obj - message' }

function foo() {
  function bar() {
    console.log(message) // GO - message

    with (obj) {
      console.log(message) // obj - message
    }
  }
  bar()
}

foo()
```
