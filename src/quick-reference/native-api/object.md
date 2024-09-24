---
outline: [2, 3]
---

# Object 方法

## 静态方法

### Object.assign()

[Object.assign()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/assign) 静态方法将一个或者多个源对象中所有可枚举的自有属性复制到目标对象，并返回修改后的目标对象。

语法：

```js
Object.assign(target, ...sources)
```

### Object.create()

### Object.defineProperties()

[Object.defineProperties()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties) 静态方法直接在一个对象上定义新的属性或修改现有属性，并返回该对象。

语法：

```js
Object.defineProperties(obj, props)
```

### Object.defineProperty()

[Object.defineProperty()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty) 静态方法会直接在一个对象上定义一个新属性，或修改其现有属性，并返回此对象。

语法：

```js
Object.defineProperty(obj, prop, descriptor)
```

### Object.entries()

[Object.entries()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/entries) 静态方法返回一个数组，包含给定对象自有的可枚举字符串键属性的键值对。

语法：

```js
Object.entries(obj)
```

### Object.freeze()

### Object.fromEntries()

### Object.getOwnPropertyDescriptor()

[Object.getOwnPropertyDescriptor()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor) 静态方法返回一个对象，该对象描述给定对象上特定属性（即直接存在于对象上而不在对象的原型链中的属性）的配置。返回的对象是可变的，但对其进行更改不会影响原始属性的配置。

语法：

```js
Object.getOwnPropertyDescriptor(obj, prop)
```

### Object.getOwnPropertyDescriptors()

[Object.getOwnPropertyDescriptors()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptors) 静态方法返回给定对象的所有自有属性描述符。

语法：

```js
Object.getOwnPropertyDescriptors(obj)
```

### Object.getOwnPropertyNames()

### Object.getOwnPropertySymbols()

### Object.getPrototypeOf()

### Object.groupBy()

### Object.hasOwn()

[Object.hasOwn()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn) 旨在取代 [Object.prototype.hasOwnProperty()](#object-prototype-hasownproperty)：

- 如果指定的对象自身有指定的属性，该方法返回 true。
- 如果属性是继承的或者不存在，该方法返回 false。

语法：

```js
Object.hasOwn(obj, prop)
```

### Object.is()

### Object.isExtensible()

### Object.isFrozen()

### Object.isSealed()

### Object.keys()

[Object.keys()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/keys) 静态方法返回一个由给定对象自身的可枚举的字符串键属性名组成的数组。

语法：

```js
Object.keys(obj)
```

### Object.preventExtensions()

### Object.seal()

### Object.setPrototypeOf()

### Object.values()

[Object.values()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/values) 静态方法返回一个给定对象的自有可枚举字符串键属性值组成的数组。

语法：

```js
Object.values(obj)
```

## 实例方法

::: details 以下实例方法已弃用，不做记录

- `__defineGetter__`
- `__defineSetter__`
- `__lookupGetter__`
- `__lookupSetter__`
  :::

### Object.prototype.hasOwnProperty()

[hasOwnProperty()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty) 方法返回一个布尔值，表示对象自有属性（而不是继承来的属性）中是否具有指定的属性。

::: tip 在 [支持](https://caniuse.com/?search=Object.hasOwn) Object.hasOwn 的浏览器中，建议使用 [Object.hasOwn()](#object-hasown)，而非 hasOwnProperty()。
:::

语法：

```js
hasOwnProperty(prop)
```

### Object.prototype.isPrototypeOf()

### Object.prototype.propertyIsEnumerable()

### Object.prototype.toLocaleString()

### Object.prototype.toString()

### Object.prototype.valueOf()
