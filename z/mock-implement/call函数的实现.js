/**
 * call() 函数的实现
 * @param {*} thisArg 指定 this 对象
 * @param  {...any} argArray 函数参数（rest 参数）
 * @returns 执行函数返回值
 */
Function.prototype.myCall = function (thisArg, ...argArray) {
  // 获取需要被执行的函数
  const fn = this

  // 将传入的 thisArg 转成对象类型（防止传入非对象类型）
  thisArg = thisArg !== null && thisArg !== undefined ? Object(thisArg) : window
  thisArg.fn = fn
  // 调用需要被执行的函数
  const result = thisArg.fn(...argArray)
  delete thisArg.fn

  // 返回函数执行结果
  return result
}
