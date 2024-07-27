# 动态执行 js

> 动态执行 js 即：将 js 字符串当成 js 代码来执行？

## `eval`

> eval 是一个特殊的函数，它可以将传入的字符串当做 JavaScript 代码来运行。

同步，当前作用域。

```js
function exec(code) {
  eval(code)
}
```

## `setTimeout`

异步，全局作用域。

```js
function exec(code) {
  setTimeout(code, 0)
}
```

## `<script> 标签`

同步，全局作用域。

```js
function exec(code) {
  const script = document.createElement('script')
  script.innerHTML = code
  document.body.appendChild(script)
}
```

## `Function`

同步，全局作用域。

```js
function exec(code) {
  const fn = new Function(code)
  fn()
}
```
