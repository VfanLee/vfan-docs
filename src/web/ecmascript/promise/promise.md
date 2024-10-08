# Promise

## Promise 解决了什么问题？

异步是 JS 中的常见场景。在传统模式下，通常会使用回调函数的方式来进行异步编程，当嵌套层级过多时，代码很难维护，这也称之为“回调地狱”。而 Promise 可以通过“链式调用”的方式来避免代码的深度嵌套。

总的来说就是，Promise 可以更方便地进行异步编程，统一异步实现。

> Tips：
>
> - **Promise** 无法完全消除回调，如：Promise.then() 仍然是回调。但是回调变得可控了。
> - **async/await** 是 Promise 的语法糖，用这种方式可以消除回调。

## 创建一个 Promise

使用 Promise 的构造函数来创建一个新的 Promise 对象。构造函数接受一个执行器函数，该函数包含两个参数：`resolve` 和 `reject`，分别用于将 Promise 状态设置为 `resolved`（成功）或 `rejected`（失败）。

```js
const promise = new Promise((resolve, reject) => {
  if (/* 操作成功 */) {
    resolve(result); // 将 Promise 状态设置为 resolved
  } else {
    reject(error); // 将 Promise 状态设置为 rejected
  }
});
```

## 创建已解决（resolved）状态的 Promise

`Promise.resolve()` 用于创建一个已解决（resolved）状态的 Promise，通常用于返回成功的结果。

```js
// 这个 Promise 会立即进入已解决状态，并将传递给 Promise.resolve() 的值作为成功的结果。
const resolvedPromise = Promise.resolve('Success')

resolvedPromise.then(result => {
  console.log(result) // 输出: "Success"
})
```

## 创建已拒绝（rejected）状态的 Promise

`Promise.reject()` 用于创建一个已拒绝（rejected）状态的 Promise，通常用于返回失败的结果。

```js
// 这个 Promise 会立即进入已拒绝状态，并将传递给 Promise.reject() 的值作为失败的原因。
const rejectedPromise = Promise.reject('Error')

rejectedPromise.catch(error => {
  console.error(error) // 输出: "Error"
})
```

## 使用 `.then()` 处理成功状态

通过 `.then()` 方法附加一个成功状态的回调函数，该函数在 Promise 成功时被调用，接收成功结果作为参数。

```js
promise.then(result => {
  // 处理成功状态
})
```

## 使用 `.catch()` 处理失败状态

使用 `.catch()` 方法附加一个失败状态的回调函数，该函数在 Promise 失败时被调用，接收错误信息作为参数。

```js
promise.catch(error => {
  // 处理失败状态
})
```

## 使用 `.finally()` 进行清理工作

使用 `.finally()` 方法附加一个回调函数，无论 Promise 是成功还是失败，该回调函数都会在 Promise 结束时被调用。这用于执行清理操作，例如关闭文件或释放资源。

```js
promise.finally(() => {
  // 清理工作
})
```

## Promise 链

通过使用多个 `.then()` 来构建 Promise 链，每个 `.then()` 处理前一个 Promise 的结果，并返回一个新的 Promise，从而形成链式操作。这使得可以更清晰地表达异步操作的流程。

```js
asyncTask()
  .then(result => {
    // 处理结果
    return anotherAsyncTask(result)
  })
  .then(anotherResult => {
    // 处理另一个结果
  })
  .catch(error => {
    // 处理错误
  })
```

## Promise 工具函数

### Promise.all()

[Promise.all()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/all) 静态方法接受一个 Promise 可迭代对象作为输入，并返回一个 Promise。

- 当所有输入的 Promise 都被兑现时，返回的 Promise 也将被兑现（即使传入的是一个空的可迭代对象），并返回一个包含所有兑现值的数组。
- 如果输入的任何 Promise 被拒绝，则返回的 Promise 将被拒绝，并带有第一个被拒绝的原因。

```js
const promises = [promise1, promise2, promise3]

Promise.all(promises)
  .then(results => {
    // 当所有 Promise 都成功解决时执行
    // results 是所有 Promise 的结果，按顺序返回
  })
  .catch(error => {
    // 如果任意一个 Promise 失败，执行
    // error 是第一个被拒绝的 Promise 的错误
  })
```

### Promise.any()

[Promise.any()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/any) 静态方法将一个 Promise 可迭代对象作为输入，并返回一个 Promise。

- 当输入的任何一个 Promise 兑现时，这个返回的 Promise 将会兑现，并返回第一个兑现的值。
- 当所有输入 Promise 都被拒绝（包括传递了空的可迭代对象）时，它会以一个包含拒绝原因数组的 [AggregateError](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/AggregateError) 拒绝。

```js
const promises = [promise1, promise2, promise3]

Promise.any(promises)
  .then(result => {
    // 任意一个 Promise 成功时执行
    // result 是第一个成功的 Promise 的结果
  })
  .catch(error => {
    // 所有 Promise 都失败时执行
    // error 是一个 AggregateError，包含所有失败的错误信息
  })
```

### Promise.race()

[Promise.race()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/race) 静态方法接受一个 promise 可迭代对象作为输入，并返回一个 Promise。这个返回的 promise 会随着第一个 promise 的敲定而敲定。

```js
const promises = [promise1, promise2, promise3]

Promise.race(promises)
  .then(result => {
    // 第一个 settled（无论成功或失败）的 Promise 是 resolved 时执行
    // result 是第一个 resolved 的 Promise 的结果
  })
  .catch(error => {
    // 第一个 settled 的 Promise 是 rejected 时执行
    // error 是第一个 rejected 的 Promise 的错误
  })
```
