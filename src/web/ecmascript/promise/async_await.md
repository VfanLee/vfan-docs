# async/await

## async/await 和 Promise

`async/await` 是一个更直观的方式来处理 Promise，它使异步代码看起来更像同步代码，提高了代码的可读性。可以使用 `async` 函数来包装异步操作，然后使用 `await` 来等待 Promise 的解决或拒绝。

```js
async function fetchData() {
  try {
    const result = await asyncTask()
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
  throw new Error('Something went wrong') // 抛出错误，会导致返回一个rejected状态的Promise
}

asyncFunction().catch(error => {
  console.error(error.message) // 输出: "Something went wrong"
})
```

### 对比示例

::: code-group

```js [Promise]
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

```js [async/await]
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

:::
