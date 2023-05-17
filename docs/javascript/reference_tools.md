# Tools Reference

## Array

### chunk(array, [size=1])

将数组（array）拆分成多个 size 长度的区块，并将这些区块组成一个新数组。 如果array 无法被分割成全部等长的区块，那么最后剩余的元素将组成一个区块。

```js
const chunk = (arr, chunkSize = 1, cache = []) => {
  const tmp = [...arr]
  if (chunkSize <= 0) return cache
  while (tmp.length) cache.push(tmp.splice(0, chunkSize))
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

### compact(array)

创建一个新数组，包含原数组中所有的非假值元素。例如false, null,0, "", undefined, 和 NaN 都是被认为是“假值”。

```js
[0, 1, 2].filter(x => !!x)
// => [1, 2]
```

### concat(array, [values])

创建一个新数组，将array与任何数组 或 值连接在一起。

### _.difference(array, [values])

const chunk = (array, chunkSize = 1, cache = []) => {
  const tmp = [...arr]
  if (chunkSize <= 0) {
    return cache
  }
  while (tmp.size) {
    cache.push(tmp.splice(0, chunkSize))
  }
  return cache
}

const compact = array => array.filter(x => !!x)

;[1].concat(2, [3], [[4]])

const difference = (array, values) => array.filter(x => !values.includes(x))

// const differenceBy

const drop = (array, n = 1) => array.slice(n)

const dropRight = (array, n = 1) => array.slice(0, -n)

;[4, 6, 8, 10].fill('*', 1, 3)

;[
  { user: 'fred1', active: false },
  { user: 'barney', active: true },
  { user: 'pebbles', active: true },
  { user: 'fred2', active: false },
].findIndex(o => o.active)

;[
  { user: 'fred1', active: false },
  { user: 'barney', active: true },
  { user: 'pebbles', active: true },
  { user: 'fred2', active: false },
].findLastIndex(o => o.active)

;[1, 2, 3, 4].flatMap(n => n === 2 ? [n, n] : n)

;[1, [2, [3, [4]], 5]].flat()

;[1, [2, [3, [4]], 5]].flat(Infinity)

;[1, [2, [3, [4]], 5]].flat(2)

Object.fromEntries([
  ['a', 1],
  ['b', 2],
])

;[1, 2, 3].indexOf(3)

[1, 2, 3].slice(0, -1)

const intersection = (arr, ...args) => arr.filter(item => args.every(arr => arr.includes(item)))

// intersectionBy

## Collection

## Date

## Function

## Lang

## Math

## Number

## Object

## String

## Util
