# 对象

JavaScript 中有八种数据类型。七种原始类型，它们的值只存储“一种”东西，而剩下的一种类型就是对象，用来存储键值对和更复杂的实体。

我们可以用下面两种语法中的任一种来创建一个空的对象：

```js
let user = new Object(); // “构造函数” 的语法
let user = {};  // “字面量” 的语法
```

js创建动态key的对象

```js
var key = 'age'
var obj = { 
    [key] : '18岁'
}
console.log(obj) // { age: '18岁'}
```
