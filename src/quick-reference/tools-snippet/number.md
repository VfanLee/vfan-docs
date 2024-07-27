# Number

## ceil

向上取整

```js
Math.ceil(5.1) // 6
Math.ceil(-5.1) // -5
```

## floor

向下取整

```js
Math.floor(5.1) // 5
Math.floor(-5.1) // -6
```

## round

四舍五入

```js
Math.round(5.1) // 5
Math.round(5.5) // 6
Math.round(-5.1) // -5
Math.round(-5.5) // -6
```

## randomString

生成随机字符串。

```js
function randomString() {
  return Math.random().toString(36).slice(2)
}

// example
randomString() // '0bvmstwmgmgb'
```

## getRandom

获取 `[min, max]` 范围内的随机整数。

```js
function getRandom(min, max) {
  Math.floor(Math.random() * (10 - 0 + 1)) / 10;
}

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

// example
getRandom(1, 50) // 18
```

## 生成随机十六进制颜色

生成随机十六进制颜色

```js
const randomColor = () => `#${Math.random().toString(16).slice(2, 8).padEnd(6, '0')}`

randomColor() // #9dae4f
randomColor() // #6ef10e
```

## isEven

检查数字是偶数还是奇数。

```js
function isEven(num) {
  return num % 2 === 0
}

// example
isEven(2) // true
isEven(1) // false
```

## average

获取参数的平均值。

```js
function average(...args) {
  return args.reduce((a, b) => a + b) / args.length
}

// example
average(1, 2, 3, 4, 5) // 3
```
