# JavaScript 笔试题

## this 指向

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

## function 函数调用

```js
function getitems(fruitList, ...args, favoriteFruit){
  return [ ...fruitList, ...args, favoriteFruit];
}

// 下面的函数调用结果是什么？
getitems([' banana', 'apple'], 'pear', 'orange ')
// => 报错：Rest parameter must be last formal parameter（剩余参数必须是最后一个）
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

## Promise 笔试题

> await 会将后续代码推至微队列，如果没有后续代码，会将该函数的完成推至微队列。

```js
async function asy1() {
  console.log(1)
  await asy2()
  console.log(2)
}

async function asy2() {
  await setTimeout(_ => {
    Promise.resolve().then(_ => {
      console.log(3)
    })
    console.log(4)
  }, 0)
}

async function asy3() {
  Promise.resolve().then(() => {
    console.log(6)
  })
}

asy1()
console.log(7)
asy3()

// => 1 7 6 2 4 3
```

```js
async function asy1() {
  console.log(1)
  await asy2()
  console.log(2)
}

async function asy2() {
  await (async () => {
    await (() => {
      console.log(3)
    })()
    console.log(4)
  })()
}

async function asy3() {
  Promise.resolve().then(() => {
    console.log(6)
  })
}

asy1()
console.log(7)
asy3()

// => 1 3 7 4 6 2
```
