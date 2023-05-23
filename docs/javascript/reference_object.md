# Object Reference

## assign

将所有可枚举的自身属性的值从一个或多个源对象复制到目标对象。

```js
function Foo() {
  this.c = 3
}

function Bar() {
  this.e = 5
}

Foo.prototype.d = 4
Bar.prototype.f = 6

Object.assign({}, new Foo(), new Bar())
// => { 'c': 3, 'e': 5 }
```

## default

在具有默认值 key 值的对象上应用新值。

```js
const newValues = { a: 3 }
const defaultValues = { a: 1, b: 2 }

Object.assign({}, defaultValues, newValues)
// output { a: 3, b: 2 }
```

## extend

将所有可枚举的自有属性和继承属性的值从一个或多个源对象复制到目标对象。
