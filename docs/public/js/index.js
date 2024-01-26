window.$docsify = {
  el: '#app',
  repo: 'https://github.com/VfanLee/vfan-docs',
  // name: 'vfan-docs',
  nameLink: location.pathname,
  alias: {
    // '/.*/_sidebar.md': '/_sidebar.md',
    '/.*/_navbar.md': '/_navbar.md'
  },
  auto2top: true,

  // ------------ coverpage ------------
  coverpage: true,
  onlyCover: true,

  // ------------ navbar ------------
  loadNavbar: true,

  // ------------ sidebar ------------
  // hideSidebar: true,
  loadSidebar: true,
  // maxLevel: 1,
  // subMaxLevel: 0,

  // ------------ third plugins ------------
  // https://docsify.js.org/#/zh-cn/plugins?id=%e5%85%a8%e6%96%87%e6%90%9c%e7%b4%a2-search
  search: {
    placeholder: '搜索'
  },

  // https://github.com/jperasmus/docsify-copy-code
  copyCode: {
    buttonText: '复制',
    errorText: '复制失败',
    successText: '复制成功'
  },

  // https://jhildenbiddle.github.io/docsify-tabs/
  tabs: {
    persist: false,
    sync: false,
    theme: 'classic',
    tabComments: true,
    tabHeadings: true
  },

  // https://github.com/jl15988/docsify-hide-code
  hideCode: {
    scroll: false, // Enable scrolling
    height: 300 // Max height
  },

  // https://github.com/HerbertHe/docsify-progress
  progress: {
    position: 'top',
    color: 'var(--theme-color,#42b983)',
    height: '3px'
  },

  // ------------ plugins ------------
  plugins: [
    //
    function (hook, vm) {
      hook.init(function () {
        // 初始化完成后调用，只调用一次，没有参数。
      })

      hook.beforeEach(function (content) {
        // 每次开始解析 Markdown 内容时调用
        // ...
        return content
      })

      hook.afterEach(function (html, next) {
        // 解析成 html 后调用。
        // beforeEach 和 afterEach 支持处理异步逻辑
        // ...
        // 异步处理完成后调用 next(html) 返回结果
        next(html)
      })

      hook.doneEach(function () {
        // 每次路由切换时数据全部加载完成后调用，没有参数。
      })

      hook.mounted(function () {
        // 初始化并第一次加载完成数据后调用，只触发一次，没有参数。
      })

      hook.ready(function () {
        // 初始化并第一次加载完成数据后调用，没有参数。
      })
    }
  ]
}
