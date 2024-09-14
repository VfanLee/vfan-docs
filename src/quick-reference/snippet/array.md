# Array

## chunk

将数组（array）拆分成多个 size 长度的区块，并将这些区块组成一个新数组。 如果 array 无法被分割成全部等长的区块，那么最后剩余的元素将组成一个区块。

```js
const chunk = (array, chunkSize = 1, cache = []) => {
  const tmp = [...array]
  if (chunkSize <= 0) {
    return cache
  }
  while (tmp.size) {
    cache.push(tmp.splice(0, chunkSize))
  }
  return cache
}

chunk(['a', 'b', 'c', 'd', 'e', 'f', 'g'])
// => [['a'], ['b'], ['c'], ['d'], ['e'], ['f'], ['g']]

chunk(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 3)
// => [['a', 'b', 'c'], ['d', 'e', 'f'], ['g']]

chunk(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 0)
// => []

chunk(['a', 'b', 'c', 'd', 'e', 'f', 'g'], -1)
// => []
```

## compact

创建一个新数组，包含原数组中所有的非假值元素。例如：`false`, `null`, `0`, `""`, `undefined` 和 `NaN` 都是被认为是“假值”。

```js
const compact = array => {
  return array.filter(x => !!x)
}

compact([0, 1, 2])
// => [1, 2]
```

## concat

将 array 与任何 `数组` 或 `值` 连接在一起。

```js
const concat = (array, ...args) => array.concat(...args)

concat([1], 2, [3], [[4]])
// => [1, 2, 3, [4]]

[1].concat(2, [3], [[4]])
// => [1, 2, 3, [4]]
```

## difference

创建一个具有唯一 array 值的数组，每个值不包含在其他给定的数组中。（注：即创建一个新数组，这个数组中的值，为第一个数字（array 参数）排除了给定数组中的值。）该方法使用 SameValueZero 做相等比较。结果值的顺序是由第一个数组中的顺序确定。

```js
const difference = (array, values) => array.filter(x => !values.includes(x))

difference([2, 1], [3, 2])
// => [1]
```

## drop

创建一个切片数组，去除 arra y前面的 `n`个元素。（`n` 默认值为 1）

```js
const drop = (array, n = 1) => array.slice(n)

drop([1, 2, 3])
// => [2, 3]

drop([1, 2, 3], 2)
// => [3]

drop([1, 2, 3], 5)
// => []

drop([1, 2, 3], 0)
// => [1, 2, 3]
```

## dropRight

创建一个切片数组，去除 array 尾部的 n 个元素。（`n` 默认值为 1）

```js
const dropRight = (array, n = 1) => array.slice(0, -n || array.length)

dropRight([1, 2, 3])
// => [1, 2]

dropRight([1, 2, 3], 2)
// => [1]

dropRight([1, 2, 3], 5)
// => []

dropRight([1, 2, 3], 0)
// => [1, 2, 3]
```

## fill

使用 value 值来填充（替换）array，从 start 位置开始, 到 end 位置结束（但不包含 end 位置）。

```js
const fill = (array, value, start = 0, end = array.length) => array.fill(value, start, end)

fill([1, 2, 3], 'a')
// => ['a', 'a', 'a']

fill(Array(3), 2)
// => [2, 2, 2]

fill([4, 6, 8, 10], '*', 1, 3)
// => [4, '*', '*', 10]
```

## find

返回满足提供的测试函数的数组中第一个元素的值。否则返回未定义。

```js
const users = [
  { user: 'barney', age: 36, active: true },
  { user: 'fred', age: 40, active: false },
  { user: 'pebbles', age: 1, active: true },
]

users.find(o => o.age < 40)
// => {user: 'barney', age: 36, active: true}
```

## findIndex

返回第一个通过 predicate 判断为真值的元素的索引值（index）。

```js
const findIndex = (array, predicate, fromIndex = 0) => array.findIndex(predicate)

const users = [
  { user: 'barney', age: 36, active: true },
  { user: 'fred', age: 40, active: false },
  { user: 'pebbles', age: 1, active: true },
]

findIndex(users, o => o.age >= 40)
// => 1
```

## findLastIndex

返回最后一个通过 predicate 判断为真值的元素的索引值（index）。

```js
const findLastIndex = (array, predicate) => array.findLastIndex(predicate)

const users = [
  { user: 'barney', active: true },
  { user: 'fred', active: false },
  { user: 'pebbles', active: false },
]

findLastIndex(users, o => !o.active)
// => 2

findLastIndex(users, o => !o.user)
// => -1
```

## flatten

根据 depth 递归减少 array 的嵌套层级。（depth 默认为 Infinity）

```js
const flatten = (array, depth = Infinity) => {
  return array.flat(depth)
}

flatten([1, [2, [3, [4]], 5]])
// => [1, 2, 3, 4, 5]

flatten([1, [2, [3, [4]], 5]], 0)
// => [1, [2, [3, [4]], 5]]

flatten([1, [2, [3, [4]], 5]], 1)
// => [1, 2, [3, [4]], 5]

flatten([1, [2, [3, [4]], 5]], 2)
// => [1, 2, 3, [4], 5]
```

## fromPairs

返回一个由键值对 pairs 构成的对象。

```js
const fromPairs = (array) => Object.fromEntries(array)

fromPairs([
  ['a', 1],
  ['b', 2],
])
// => { 'a': 1, 'b': 2 }
```

## head

获取数组的第一个元素

```js
const head = array => {
  const [head] = array
  return head
}

head([1, 2, 3])
// => 1
```

## indexOf

使用 SameValueZero 等值比较，返回首次 value 在数组array中被找到的 索引值， 如果 fromIndex 为负值，将从数组 array 尾端索引进行匹配。

```js
const indexOf = (array, value, fromIndex = 0) => array.indexOf(value, fromIndex)

indexOf([1, 2, 1, 2], 2)
// => 1

indexOf([1, 2, 1, 2], 2, 1)
// => 3
```

## initial

获取数组 array 中除了最后一个元素之外的所有元素（注：去除数组 array 中的最后一个元素）。

```js
const initial = (array) => array.slice(0, -1)

initial([1, 2, 3])
// => [1, 2]
```

## intersection

创建唯一值的数组，这个数组包含所有给定数组都包含的元素，使用 SameValueZero 进行相等性比较。（注：可以理解为给定数组的交集）

```js
const intersection = (arrry, ...args) => arrry.filter(item => args.every(arr => arr.includes(item)))

intersection([2, 1], [2, 3])
// => [2]
```

## join

将 array 中的所有元素转换为由 separator 分隔的字符串。

```js
const join = (array, value) => array.join(value)

join(['a', 'b', 'c'], '~')
// => 'a~b~c'
```

## last

获取 array 中的最后一个元素。

```js
const last = (array) => array[array.length - 1]

last(['a', 'b', 'c'])
// => 'c'
```

## lastIndexOf

使用 SameValueZero 等值比较，返回首次 value 在数组array中被找到的 索引值， 如果 fromIndex 为负值，将从数组 array 尾端索引进行匹配。

```js
const lastIndexOf = (array, value, fromIndex = +Infinity) => array.lastIndexOf(value, fromIndex)

lastIndexOf([1, 2, 1, 2], 2)
// => 3

lastIndexOf([1, 2, 1, 2], 2, 2)
// => 1
```

## nth

获取 array 数组的第 n 个元素。如果 n 为负数，则返回从数组结尾开始的第 n 个元素。

```js
const nth = (array, index) => array.slice(index)[0]

// or => array.at(index)

const array = ['a', 'b', 'c', 'd']

nth(array, 0)
// => 'a'

nth(array, 1)
// => 'b'

nth(array, -1)
// => 'd'

nth(array, -2)
// => 'c';
```

## pull

从给定数组中删除所有提供的值。

```js
const pull = (array, ...values) => {
  const valuesSet = new Set(values)
  return array.filter(x => !valuesSet.has(x))
}

const array = ['a', 'b', 'c', 'a', 'b', 'c']

pull(array, 'a', 'c')
// => ['b', 'b']

array
// 不会改变原数组 => ['a', 'b', 'c', 'a', 'b', 'c']
```

## reject

返回 predicate 不返回 Truthy 的 collection 元素。

```js
const reject = (arr, predicate) => arr.filter(x => !predicate(x))

reject(['a', 'b', 'c', 'd', 'e', 'f', 'g'], char => char === 'd')
// => ['a', 'b', 'c', 'e', 'f', 'g']
```

## Array 使用场景

```js
const products = [
  { name: 'XiaoMi', stock: 2000 },
  { name: 'iphone14', stock: 1500 },
  { name: 'Huawei', stock: 1300 }
]

// 要求：面的所有对象不可更改，使 iphone14 的库存 -1，得到一个新数组
products.map(p => (p.name === 'iphone14' ? { ...p, stock: p.stock - 1 } : p))
```

```js
const arr1 = [33, 22, 22, 55, 33, 11, 33, 5]
const arr2 = [22, 22, 55, 77, 88, 88, 99, 99]

// 要求：两个数组的并集、交集、差集，不能出现重复项,得到的结果是一个新数组
const union = [...new Set([...arr1, ...arr2])]
const cross = [...new Set([...arr1.filter(x => arr2.includes(x))])]
const diff = union.filter(x => !cross.includes(x))
```
