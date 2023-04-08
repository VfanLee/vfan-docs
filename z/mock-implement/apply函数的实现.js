/**
 * apply() 函数的实现
 * @param {*} thisArg 指定 this 对象
 * @param  {...any} argArray 函数参数
 * @returns 执行函数返回值
 */
Function.prototype.myApply = function (thisArg, argArray) {
  const fn = this

  thisArg = thisArg !== null && thisArg !== undefined ? Object(thisArg) : window
  thisArg.fn = fn
  argArray = argArray || []
  const result = thisArg.fn(...argArray)
  delete thisArg.fn

  return result
}
