# Promise

async 函数默认会返回一个成功状态的 Promise 对象，若需要返回失败状态的 Promise 对象，需要通过 `Promise.reject()` 来手动指定。