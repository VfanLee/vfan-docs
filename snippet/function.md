# Function

## debounce

```js
function debounce(func, wait, immediate) {
  let timeout
  return function (...args) {
    const context = this
    clearTimeout(timeout)
    timeout = setTimeout(function () {
      timeout = null
      if (!immediate) {
        func.apply(context, args)
      }
    }, wait)
    if (immediate && !timeout) {
      func.apply(context, args)
    }
  }
}
```

## throttle

```js
function throttle(func, timeFrame) {
  let lastTime = 0
  return function (...args) {
    const now = new Date()
    if (now - lastTime >= timeFrame) {
      func(...args)
      lastTime = now
    }
  }
}
```
