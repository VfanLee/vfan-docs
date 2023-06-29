# Function

## debounce

**防抖** 指延迟一段时间后才会执行函数，若重复执行，延迟时间则会刷新。例如：表单提交、输入框实时搜索、窗口大小调整事件等。

```js
const debounce = (func, delay = 1000, immediate = false) => {
  let timer
  return (...args) => {
    if (!timer && immediate) {
      func(...args) // 第一次立即执行
    }
    clearTimeout(timer)
    timer = setTimeout(() => {
      func(...args)
    }, delay)
  }
}
```

## throttle

**节流** 指在一段时间内，无论执行多少次函数，只会执行一次。例如：滚动事件、鼠标移动事件等。

<!-- tabs:start -->
<!-- tab:简易版 -->
```js
function throttle(func, delay = 1000) {
  let wait = false // 是否需要等待标识
  return (...args) => {
    if (wait) {
      return
    }
    func(...args) // 第一次执行
    wait = true
    setTimeout(() => {
      wait = false
    }, delay)
  }
}
```

<!-- tab:完整版 -->
```js
function throttle(func, delay = 1000) {
  let wait = false // 是否需要等待标识
  let waitingArgs = null // 等待期间的新增参数

  function timeoutFunc() {
    if (waitingArgs === null) {
      wait = false
    } else {
      func(...waitingArgs)
      waitingArgs = null
      setTimeout(timeoutFunc, delay)
    }
  }

  return (...args) => {
    if (wait) {
      waitingArgs = args // 更新 args
      return
    }
    func(...args) // 第一次执行
    wait = true
    setTimeout(timeoutFunc, delay)
  }
}
```
<!-- tabs:end -->

## debounce_throttle 案例

<iframe height="300" style="width: 100%;" scrolling="no" title="debounce_throttle" src="https://codepen.io/vfanlee/embed/preview/GRwWVZv?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/vfanlee/pen/GRwWVZv">
  debounce_throttle</a> by Vfan Lee (<a href="https://codepen.io/vfanlee">@vfanlee</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
