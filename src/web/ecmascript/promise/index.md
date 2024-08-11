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
const resolvedPromise = Promise.resolve('Success');

resolvedPromise.then(result => {
  console.log(result); // 输出: "Success"
});
```

## 创建已拒绝（rejected）状态的 Promise

`Promise.reject()` 用于创建一个已拒绝（rejected）状态的 Promise，通常用于返回失败的结果。

```js
// 这个 Promise 会立即进入已拒绝状态，并将传递给 Promise.reject() 的值作为失败的原因。
const rejectedPromise = Promise.reject('Error');

rejectedPromise.catch(error => {
  console.error(error); // 输出: "Error"
});
```

## 使用 `.then()` 处理成功状态

通过 `.then()` 方法附加一个成功状态的回调函数，该函数在Promise成功时被调用，接收成功结果作为参数。

```js
promise.then(result => {
  // 处理成功状态
});
```

## 使用 `.catch()` 处理失败状态

使用 `.catch()` 方法附加一个失败状态的回调函数，该函数在Promise失败时被调用，接收错误信息作为参数。

```js
promise.catch(error => {
  // 处理失败状态
});
```

## 使用 `.finally()` 进行清理工作

使用 `.finally()` 方法附加一个回调函数，无论 Promise 是成功还是失败，该回调函数都会在 Promise 结束时被调用。这用于执行清理操作，例如关闭文件或释放资源。

```js
promise.finally(() => {
  // 清理工作
});
```

## 处理多个 Promise

使用 `Promise.all()` 可以等待多个 Promise 都成功解决后执行操作。如果其中一个 Promise 被拒绝，整个 `Promise.all()` 也将被拒绝。

```js
const promises = [promise1, promise2, promise3];

Promise.all(promises)
  .then(results => {
    // 所有Promise都成功解决时执行
  })
  .catch(error => {
    // 如果任何一个Promise失败，执行
  });
```

## 处理首个解决的 Promise

使用 `Promise.race()` 可以等待多个 Promise 中的第一个成功解决，并执行相应操作。

```js
const promises = [promise1, promise2, promise3];

Promise.race(promises)
  .then(result => {
    // 第一个成功解决的Promise执行
  })
  .catch(error => {
    // 如果首个Promise失败，执行
  });
```

## Promise 链

通过使用多个 `.then()` 来构建 Promise 链，每个 `.then()` 处理前一个 Promise 的结果，并返回一个新的 Promise，从而形成链式操作。这使得可以更清晰地表达异步操作的流程。

```js
asyncTask()
  .then(result => {
    // 处理结果
    return anotherAsyncTask(result);
  })
  .then(anotherResult => {
    // 处理另一个结果
  })
  .catch(error => {
    // 处理错误
  });
```

## async/await 和 Promise

`async/await` 是一个更直观的方式来处理 Promise，它使异步代码看起来更像同步代码，提高了代码的可读性。可以使用 `async` 函数来包装异步操作，然后使用 `await` 来等待 Promise 的解决或拒绝。

```js
async function fetchData() {
  try {
    const result = await asyncTask();
    // 处理结果
  } catch (error) {
    // 处理错误
  }
}
```

当使用 async 函数时，函数内部的错误处理和 Promise 状态的控制是非常重要的。

默认情况下，async 函数会返回一个已解决（resolved）状态的 Promise，除非在函数内部显式抛出错误，此时将返回一个已拒绝（rejected）状态的 Promise，拒绝原因就是抛出的错误。这为异步操作的错误处理提供了一种便捷的方式。

```js
async function asyncFunction() {
  throw new Error("Something went wrong"); // 抛出错误，会导致返回一个rejected状态的Promise
}

asyncFunction()
  .catch(error => {
    console.error(error.message); // 输出: "Something went wrong"
  });
```

## 简单总结

使用 Promise 形式

```js
function test(num) {
  return new Promise((resolve, reject) => {
    if (num > 10) {
      resolve('resolve')
    } else {
      reject('reject')
    }
  })
}

;(() => {
  test(12)
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
    .finally(() => {
      console.log('finally')
    })
})()
```

使用 async / await 改写

```js
async function test(num) {
  if (num > 10) {
    return 'resolve'
  } else {
    throw new Error('reject')
  }
}

;(async () => {
  try {
    const res = await test(12)
    console.log(res)
  } catch (err) {
    console.log(err.message)
  } finally {
    console.log('finally')
  }
})()
```
