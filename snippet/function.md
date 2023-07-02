# Function

在数学和计算机科学中，[高阶函数](https://zh.wikipedia.org/wiki/%E9%AB%98%E9%98%B6%E5%87%BD%E6%95%B0)是至少满足下列一个条件的函数：

1. 接受一个或多个函数作为输入。
2. 输出一个函数。

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

## debounce_throttle 案例

<iframe height="300" style="width: 100%;" scrolling="no" title="debounce_throttle" src="https://codepen.io/vfanlee/embed/preview/GRwWVZv?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/vfanlee/pen/GRwWVZv">
  debounce_throttle</a> by Vfan Lee (<a href="https://codepen.io/vfanlee">@vfanlee</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
