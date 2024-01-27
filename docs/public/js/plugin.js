export default {
  plugins: [
    function (hook, vm) {
      // 初始化完成后调用，只调用一次，没有参数。
      hook.init(function () {
        // ...
      })

      // 每次开始解析 Markdown 内容时调用。支持异步
      hook.beforeEach(function (content) {
        console.log(vm);
        // ...
        return content
      })

      // 解析成 html 后调用。支持异步
      hook.afterEach(function (html, next) {
        console.log(vm);
        // ...
        // 异步处理完成后调用 next(html) 返回结果
        next(html)
      })

      // 每次路由切换时数据全部加载完成后调用，没有参数。
      hook.doneEach(function () {
        // ...
      })

      // 初始化并第一次加载完成数据后调用，只触发一次，没有参数。
      hook.mounted(function () {
        // ...
      })

      // 初始化并第一次加载完成数据后调用，没有参数。
      hook.ready(function () {
        // ...
      })
    }
  ]
}
