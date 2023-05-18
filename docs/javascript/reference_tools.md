# Tools Reference

## Array

将数组（array）拆分成多个 size 长度的区块，并将这些区块组成一个新数组。 如果array 无法被分割成全部等长的区块，那么最后剩余的元素将组成一个区块。

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

创建一个新数组，包含原数组中所有的非假值元素。例如false, null,0, "", undefined, 和 NaN 都是被认为是“假值”。

```js
array.filter(x => !!x)

[0, 1, 2].filter(x => !!x)
// => [1, 2]
```

创建一个新数组，将array与任何数组 或 值连接在一起。

```js
array.concat(2, [3], [[4]])
```

创建一个具有唯一array值的数组，每个值不包含在其他给定的数组中。（注：即创建一个新数组，这个数组中的值，为第一个数字（array 参数）排除了给定数组中的值。）该方法使用SameValueZero做相等比较。结果值的顺序是由第一个数组中的顺序确定。

```js
const difference = (array, values) => array.filter(x => !values.includes(x))
```

这个方法类似 difference ，除了它接受一个 iteratee （注：迭代器）， 调用 array 和 values 中的每个元素以产生比较的标准。 结果值是从第一数组中选择。iteratee 会调用一个参数：(value)。（注：首先使用迭代器分别迭代array 和 values中的每个元素，返回的值作为比较值）。

```js
// differenceBy
```

创建一个切片数组，去除array前面的n个元素。（n默认值为1。）

```js
const drop = (array, n = 1) => array.slice(n)
```

创建一个切片数组，去除array尾部的n个元素。（n默认值为1。）

```js
const dropRight = (array, n = 1) => array.slice(0, -n)
```

使用 value 值来填充（替换） array，从start位置开始, 到end位置结束（但不包含end位置）。

```js
[4, 6, 8, 10].fill('*', 1, 3)
```

该方法类似_.find，区别是该方法返回第一个通过 predicate 判断为真值的元素的索引值（index），而不是元素本身。

```js
[
  { user: 'fred1', active: false },
  { user: 'barney', active: true },
  { user: 'pebbles', active: true },
  { user: 'fred2', active: false },
].findIndex(o => o.active)
```

这个方式类似_.findIndex， 区别是它是从右到左的迭代集合array中的元素。

```js
[
  { user: 'fred1', active: false },
  { user: 'barney', active: true },
  { user: 'pebbles', active: true },
  { user: 'fred2', active: false },
].findLastIndex(o => o.active)
```

减少一级array嵌套深度。

```js
[1, [2, [3, [4]], 5]].flat()
```

将array递归为一维数组。

```js
[1, [2, [3, [4]], 5]].flat(Infinity)
```

根据 depth 递归减少 array 的嵌套层级

```js
[1, [2, [3, [4]], 5]].flat(2)
```

与_.toPairs正好相反；这个方法返回一个由键值对pairs构成的对象。

```js
Object.fromEntries([
  ['a', 1],
  ['b', 2],
])
```

使用 SameValueZero 等值比较，返回首次 value 在数组array中被找到的 索引值， 如果 fromIndex 为负值，将从数组array尾端索引进行匹配。

```js
[1, 2, 3].indexOf(3)
```

获取数组array中除了最后一个元素之外的所有元素（注：去除数组array中的最后一个元素）。

```js
[1, 2, 3].slice(0, -1)
```

创建唯一值的数组，这个数组包含所有给定数组都包含的元素，使用SameValueZero进行相等性比较。（注：可以理解为给定数组的交集）

```js
const intersection = (arr, ...args) => arr.filter(item => args.every(arr => arr.includes(item)))
```

这个方法类似_.intersection，区别是它接受一个 iteratee 调用每一个arrays的每个值以产生一个值，通过产生的值进行了比较。结果值是从第一数组中选择。iteratee 会传入一个参数：(value)。

```js
// intersectionBy
```

将 array 中的所有元素转换为由 separator 分隔的字符串。

```js
['a', 'b', 'c'].join('~')
```

获取array中的最后一个元素。

```js
const arr = ['a', 'b', 'c']

arr[arr.length - 1]
```

这个方法类似_.indexOf ，区别是它是从右到左遍历array的元素。

```js
[1, 2, 1, 2].lastIndexOf(2)
// => 3

// Search from the `fromIndex`
[1, 2, 1, 2].lastIndexOf(2, 2)
// => 1
```

获取array数组的第n个元素。如果n为负数，则返回从数组结尾开始的第n个元素。

```js
const nth = (arr, idx) => arr.slice(idx, idx + 1)[0]

const array = ['a', 'b', 'c', 'd']

nth(array, 1)
// => 'b'

nth(array, -2)
// => 'c';
```

## Collection

创建一个扁平化（注：同阶数组）的数组，这个数组的值来自collection（集合）中的每一个值经过 iteratee（迭代函数） 处理后返回的结果，并且扁平化合并。 iteratee 调用三个参数： (value, index|key, collection)。

```js
[1, 2, 3, 4].flatMap(n => n === 2 ? [n, n] : n)
```

## Date

## Function

## Lang

## Math

## Number

## Object

## String

## Util
