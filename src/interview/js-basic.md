# js

## 类型

## == / ===

## 原型 / 原型链

## 闭包

## var let const

## array

forEach、map、filter、reduce、some、every

## bind、call、apply

## Promise

### async/await

### .all() .race()

### 代码题

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
