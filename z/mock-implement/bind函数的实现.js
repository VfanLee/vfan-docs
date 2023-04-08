/**
 * bind() 函数的实现
 * @param {*} thisArg 指定 this 对象
 * @param  {...any} argArray 函数参数（rest 参数）
 * @returns 执行函数
 */
Function.prototype.myBind = function (thisArg, ...argArray) {
  const fn = this

  thisArg = thisArg !== null && thisArg !== undefined ? Object(thisArg) : window

  /**
   * 返回的执行函数
   * @param  {...any} args 返回函数的参数
   * @returns 执行函数的返回值
   */
  function proxyFn(...args) {
    thisArg.fn = fn
    // 特殊：对两个函数的参数进行合并
    const result = thisArg.fn(...[...argArray, ...args])
    delete thisArg.fn
    return result
  }

  return proxyFn
}
