# Function

在数学和计算机科学中，[高阶函数](https://zh.wikipedia.org/wiki/%E9%AB%98%E9%98%B6%E5%87%BD%E6%95%B0) 是至少满足下列一个条件的函数：

1. 接受一个或多个函数作为输入。
2. 输出一个函数。

## curry

创建一个函数，该函数接收 func 的参数，要么调用func返回的结果，如果 func 所需参数已经提供，则直接返回 func 所执行的结果。

```js
const curry = func => {
  // 获取函数的形参数量
  const expectedArgs = func.length
  const curried = (...args) => {
    return args.length >= expectedArgs
        ? func(...args)
        : (...args2) => curried(...args.concat(args2))
  }
  return curried
}

// 实例
const abc = (a, b, c) => [a, b, c]
const curried = curry(abc)
curried(1)(2)(3)(4) // => [1, 2, 3]
curried(1, 2)(3) // => [1, 2, 3]
curried(1, 2, 3) // => [1, 2, 3]
```

## debounce

**防抖** 指延迟一段时间后才会执行函数，若重复执行，延迟时间则会刷新。例如：表单提交、输入框实时搜索、窗口大小调整事件等。

```js
const debounce = (func, delay = 500) => {
  let timer
  return function (...args) {
    const context = this // 执行上下文
    clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(context, args)
    }, delay)
  }
}
```

## throttle

**节流** 指在一段时间内，无论执行多少次函数，只会执行一次。例如：滚动事件、鼠标移动事件等。

```js
function throttle(func, delay = 500) {
  let isWait = false // 是否需要等待标识
  let waitingArgs = null // 等待期间的新增参数
  let context // 执行上下文

  function timeoutFunc() {
    if (waitingArgs === null) {
      isWait = false
    } else {
      func.apply(context, waitingArgs)
      waitingArgs = null
      setTimeout(timeoutFunc, delay)
    }
  }

  return function (...args) {
    context = this
    if (isWait) {
      waitingArgs = args // 更新 args
      return
    }
    func.apply(context, args) // 第一次执行
    isWait = true
    setTimeout(timeoutFunc, delay)
  }
}
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
