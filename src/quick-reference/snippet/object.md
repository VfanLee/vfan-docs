# Object

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

-----------------------------------------------------

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

将一个或多个源对象的所有可枚举的自有和继承属性的值复制到一个目标对象。

```js
function Foo() {
  this.c = 3;
}
function Bar() {
  this.e = 5;
}
Foo.prototype.d = 4;
Bar.prototype.f = 6;

Object.assign({}, new Foo, Foo.prototype, new Bar, Bar.prototype);
// => { 'c': 3, 'd': 4, 'e': 5, 'f': 6 }
```

## has

检查 path 是否是 object 对象的直接属性。

```js
const has = function (obj, key) {
  const keyParts = key.split('.')

  return !!obj && (
    keyParts.length > 1
      ? has(obj[key.split('.')[0]], keyParts.slice(1).join('.'))
      : hasOwnProperty.call(obj, key)
  )
}

const object = { a: 1, b: 'settings', c: { d: 'test', e: { f: "deep"} } }
has(object, 'a')
// => true
has(object, 'c.d')
// => true
has(object, 'c.d.f')
// => true
```

## get

获取对象 path 值。

```js
const get = (obj, path, defaultValue) => {
  const travel = regexp =>
    String.prototype.split
      .call(path, regexp)
      .filter(Boolean)
      .reduce((res, key) => (res !== null && res !== undefined ? res[key] : res), obj);
  const result = travel(/[,[\]]+?/) || travel(/[,[\].]+?/);
  return result === undefined || result === obj ? defaultValue : result;
};

const object = { a: [{ b: { c: 3 } }] };
get(object, 'a[0].b.c', 1);
// => 3
```

## keys

检索对象自身可枚举属性的所有名称。

```js
Object.keys({one: 1, two: 2, three: 3})
// => ["one", "two", "three"]
```

## omit

返回对象的副本，过滤以忽略指定的键。

```js
const object = { a: 1, b: '2', c: 3 }

const { a, c, ...result } = object
// result => { 'b': '2' }
```

## pick

创建一个从 object 中选中的属性的对象。

```js
const obj = { a: 1, b: '2', c: 3 }

const { a, c } = obj
const result = { a, c }
// result => {a: 1, c: 3}

const pick = (object, keys) => {
  return keys.reduce((obj, key) => {
    if (object && object.hasOwnProperty(key)) {
      obj[key] = object[key]
    }
    return obj
  }, {})
}

pick(obj, ['a', 'c'])
// => {a: 1, c: 3}
```

## toPairs

检索所有给定对象自己的可枚举属性 [ key, value ] 对。

```js
Object.entries({one: 1, two: 2, three: 3})
// => [["one", 1], ["two", 2], ["three", 3]]
```

## values

检索所有给定对象自己的可枚举属性值。

```js
Object.values({one: 1, two: 2, three: 3})
// => [1, 2, 3]
```
