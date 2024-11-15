# useEffect

## 介绍

`useEffect` 是 React 中的一个 Hook，用于在函数组件中处理副作用。副作用包括数据获取、订阅、手动修改 DOM 以及其他需要在组件渲染后执行的操作。

## 语法

```js
useEffect(setup, dependencies?)
```

参数：

1. `setup`：`setup` 是一个函数，该函数定义了要执行的副作用代码
2. `dependencies`（可选）：`dependencies` 是依赖数组，用于控制副作用的执行时机。

## 用法

### 无依赖数组

如果没有第二个参数，useEffect 会在每次渲染后执行：

```js
useEffect(() => {
  console.log('每次渲染后都会执行')
})
```

### 空依赖数组 []

如果传入空数组，useEffect 只会在组件首次渲染时执行一次。

```js
useEffect(() => {
  console.log('只在首次渲染时执行一次')
}, [])
```

### 有依赖数组 [dep1, dep2, ...]

可以在数组中指定多个依赖项。只有当数组中的依赖发生变化时，useEffect 才会重新执行。

```js
useEffect(() => {
  console.log('只有当依赖 dep1 或 dep2 变化时才会重新执行')
}, [dep1, dep2])
```

### 清理副作用

在副作用中，如果涉及到订阅、计时器等需要清理的操作，可以返回一个清理函数。这个清理函数会在组件卸载或下次执行副作用之前运行：

```js
useEffect(() => {
  const timer = setInterval(() => {
    console.log('计时器运行中')
  }, 1000)

  return () => {
    clearInterval(timer) // 清理计时器
  }
}, [])
```
