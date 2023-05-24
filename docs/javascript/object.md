# Object

## 判断对象中是否含有某个属性

https://segmentfault.com/a/1190000039158310

## 判断对象是否为空

方案 1：通过 JSON 自带的 stringify() 方法来判断

```js
JSON.stringify(data) === '{}'
```

方案 2：ES6 新增的方法 Object.keys()；如果我们的对象为空，他会返回一个空数组

```js
Object.keys(object).length === 0
```



## for...in

注意，当使用 for...in 循环一个对象时，循环会包含父级对象的属性。

```js
Object.prototype.foo = 'foo'

const obj = { id: 1, name: 'jack' }

for (const key in obj) {
  console.log(key)

  if (Object.hasOwnProperty.call(obj, key)) {
    console.log(key)
  }
}
// => id id name name foo
```

## Object.keys() / Object.values()

使用 `Object.keys(obj)` 可以获取对象的 key 值数组。
使用 `Object.values(obj)` 可以获取对象的 value 值数组。

## hasOwnProperty

返回一个布尔值，指示对象自身属性中是否具有指定的属性（也就是，是否有指定的键）。

```js
function Foo() {
  this.a = 1
}

Foo.prototype.b = 2

const f1 = new Foo()

f1.hasOwnProperty('a')
// => true

f1.hasOwnProperty('b')
// => false
```
