import type { DefaultTheme } from 'vitepress'

const sidebar: DefaultTheme.Sidebar = {
  //#region 万丈高楼平地起
  // 计算机基础
  '/web/computer-basis/': [
    {
      text: '计算机基础',
      items: [
        { text: '计算机组成原理', link: '/web/computer-basis/计算机组成原理' },
        { text: '操作系统', link: '/web/computer-basis/操作系统' },
        { text: 'IO模型', link: '/web/computer-basis/IO模型' },
      ],
    },
  ],
  // 计算机网络
  '/web/computer-network/': [
    {
      text: '计算机网络',
      items: [
        { text: '网络模型', link: '/web/computer-network/网络模型' },
        { text: 'IP', link: '/web/computer-network/IP' },
        { text: 'HTTP', link: '/web/computer-network/HTTP' },
        { text: 'DNS', link: '/web/computer-network/DNS' },
        { text: 'VPN 协议', link: '/web/computer-network/VPN协议' },
        { text: '其他', link: '/web/computer-network/other' },
      ],
    },
  ],
  //#endregion

  //#region 多人协作
  '/web/git/': [
    {
      text: 'Git',
      items: [
        { text: '命令', link: '/web/git/command' },
        { text: '.gitignore', link: '/web/git/gitignore' },
      ],
    },
  ],
  '/web/svn/': [
    {
      text: 'SVN',
      items: [{ text: 'svn', link: '/web/svn/' }],
    },
  ],
  //#endregion

  //#region 前端三板斧
  // html
  '/web/html/': [
    {
      text: 'HTML',
      items: [
        { text: 'HTML 特殊字符', link: '/web/html/special-characters' },
        { text: '&lt;DOCTYPE&gt;', link: '/web/html/doctype' },
        { text: '&lt;meta&gt;', link: '/web/html/meta' },
        { text: 'form 表单', link: '/web/html/form' },
        { text: 'table 表格', link: '/web/html/table' },
        { text: 'iframe', link: '/web/html/iframe' },
        { text: 'script', link: '/web/html/script' },
        { text: 'SEO', link: '/web/html/script' },
        { text: '媒体查询', link: '/web/html/media' },
        { text: '自定义属性', link: '/web/html/data-attribute' },
        { text: '无障碍 | 可访问性', link: '/web/html/accessibility' },
      ],
    },
  ],
  // css
  '/web/css/': [
    {
      text: 'CSS',
      items: [
        { text: '设计模式', link: '/web/css/设计模式' },
        { text: 'flex', link: '/web/css/' },
        { text: 'float', link: '/web/css/' },
        { text: 'grid', link: '/web/css/' },
        { text: 'position', link: '/web/css/' },
        { text: 'variable', link: '/web/css/' },
        { text: '其他', link: '/web/css/' },
        { text: '函数', link: '/web/css/' },
        { text: '媒体查询', link: '/web/css/' },
        { text: '引入字体图标', link: '/web/css/' },
        { text: '文本', link: '/web/css/' },
        { text: '滑动条', link: '/web/css/' },
        { text: '盒子模型', link: '/web/css/' },
        { text: '逻辑属性', link: '/web/css/' },
      ],
    },
  ],
  // ecmascript
  '/web/ecmascript/': [
    {
      text: '起步',
      collapsed: false,
      items: [
        { text: '简介', link: '/web/ecmascript/' },
        { text: '运行 JavaScript', link: '/web/ecmascript/run' },
      ],
    },
    {
      text: '基础知识',
      collapsed: true,
      items: [
        { text: '代码结构', link: '/web/ecmascript/basic/代码结构' },
        { text: '严格模式', link: '/web/ecmascript/basic/严格模式' },
        { text: '变量', link: '/web/ecmascript/basic/变量' },
        { text: '运算符', link: '/web/ecmascript/basic/运算符' },
        { text: '值的比较', link: '/web/ecmascript/basic/值的比较' },
        { text: '条件分支', link: '/web/ecmascript/basic/条件分支' },
        { text: '循环', link: '/web/ecmascript/basic/循环' },

        { text: '使用对象', link: '/web/ecmascript/basic/使用对象' },
        { text: '使用类', link: '/web/ecmascript/basic/使用类' },
        { text: '其他', link: '/web/ecmascript/basic/其他' },
        { text: '函数', link: '/web/ecmascript/basic/函数' },
        { text: '提交表单', link: '/web/ecmascript/basic/提交表单' },
        { text: '日期比较', link: '/web/ecmascript/basic/日期比较' },
      ],
    },
    {
      text: '数据类型',
      collapsed: true,
      items: [
        { text: '类型介绍', link: '/web/ecmascript/data-types/类型介绍' },
        { text: '类型判断', link: '/web/ecmascript/data-types/类型判断' },
        { text: '类型转换', link: '/web/ecmascript/data-types/类型转换' },
        { text: 'Number', link: '/web/ecmascript/basic/number' },
        { text: 'BigInt', link: '/web/ecmascript/basic/bigint' },
        { text: '字符串', link: '/web/ecmascript/basic/' },
        { text: '数组', link: '/web/ecmascript/basic/' },
        { text: '可迭代对象', link: '/web/ecmascript/basic/' },
        { text: 'Map', link: '/web/ecmascript/basic/' },
        { text: 'Set', link: '/web/ecmascript/basic/' },
        { text: 'Object', link: '/web/ecmascript/basic/' },
        { text: 'Date', link: '/web/ecmascript/basic/' },
        { text: 'JSON', link: '/web/ecmascript/basic/' },
      ],
    },
    {
      text: '对象',
      collapsed: true,
      items: [
        { text: 'this', link: '/web/ecmascript/basic/' },
        { text: 'new', link: '/web/ecmascript/basic/' },
        { text: '?.', link: '/web/ecmascript/basic/' },
      ],
    },
    {
      text: '函数',
      collapsed: true,
      items: [{ text: '老旧的 var', link: '/web/ecmascript/basic/var' }],
    },
    {
      text: 'Promise',
      collapsed: true,
      items: [{ text: 'Promise', link: '/web/ecmascript/promise' }],
    },
  ],
  //#endregion

  //#region js 运行时
  '/web/js-runtime/': [
    {
      text: 'JS 运行时',
      items: [
        { text: '介绍', link: '/web/js-runtime/' },
        { text: '事件循环', link: '/web/js-runtime/event-loop' },
        { text: 'v8 引擎', link: '/web/js-runtime/v8' },
      ],
    },
    { text: '浏览器 (Browser)', link: '/web/browser', target: '_blank', collapsed: true, items: [] },
    { text: 'Node.js', link: '/web/nodejs', target: '_blank', collapsed: true, items: [] },
  ],
  // 浏览器运行时
  '/web/browser/': [
    {
      text: '🚀 DevTools',
      link: 'https://developer.mozilla.org/zh-CN/docs/Glossary/Developer_Tools',
      collapsed: true,
      items: [],
    },
    {
      text: 'Browser',
      collapsed: false,
      items: [
        { text: '介绍', link: '/web/browser/introduction' },
        { text: '浏览器的基本概念', link: '/web/browser/浏览器基本概念' },
        { text: '浏览器的渲染原理', link: '/web/browser/浏览器渲染原理' },
        { text: '事件处理', link: '/web/browser/事件处理' },
        { text: '交互', link: '/web/browser/交互' },
        { text: '元素大小和滚动', link: '/web/browser/元素大小和滚动' },
        { text: '坐标', link: '/web/browser/坐标' },
      ],
    },
    {
      text: 'Web APIs',
      collapsed: false,
      items: [
        { text: 'document', link: '/web/browser/document' },
        { text: 'window', link: '/web/browser/window' },
        { text: 'Ajax', link: '/web/browser/ajax' },
        { text: 'Clipboard API', link: '/web/browser/clipboard' },
        { text: 'History', link: '/web/browser/history' },
        { text: 'Location', link: '/web/browser/location' },
        { text: 'Navigator', link: '/web/browser/navigator' },
        { text: 'Screen', link: '/web/browser/screen' },
        { text: 'URL', link: '/web/browser/URL' },
        { text: 'Web Worker', link: '/web/browser/web-worker' },
        { text: 'Canvas', link: '/web/browser/canvas' },
        { text: 'WebSocket', link: '/web/browser/websocket' },
        { text: 'WebRTC', link: '/web/browser/webrtc' },
        { text: 'WebGPU', link: '/web/browser/webgpu' },
      ],
    },
  ],
  // websocket
  '/web/browser/websocket/': [
    { text: 'WebSocket 介绍', link: '/web/browser/websocket' },
    {
      text: '普通 WebSocket',
      collapsed: false,
      items: [
        { text: '服务端', link: '/web/browser/websocket/server' },
        { text: '客户端', link: '/web/browser/websocket/client' },
      ],
    },
    {
      text: 'Socket.IO',
      collapsed: false,
      items: [
        { text: '介绍', link: '/web/browser/websocket/socket.io/' },
        { text: '服务端', link: '/web/browser/websocket/socket.io/server' },
        { text: '客户端', link: '/web/browser/websocket/socket.io/client' },
        { text: '发送事件', link: '/web/browser/websocket/socket.io/emit-event' },
        { text: '监听事件', link: '/web/browser/websocket/socket.io/on-event' },
        { text: '房间', link: '/web/browser/websocket/socket.io/room' },
        { text: '命名空间', link: '/web/browser/websocket/socket.io/namespace' },
      ],
    },
  ],
  // webrtc
  '/web/browser/webrtc/': [
    { text: 'WebRTC 介绍', link: '/web/browser/webrtc' },
    {
      text: 'GUM',
      items: [
        { text: 'MediaDevices', link: '/web/browser/webrtc/MediaDevices' },
        { text: 'Capabilities, constraints, Settings ', link: '/web/browser/webrtc/constraints' },
        { text: 'MediaStream', link: '/web/browser/webrtc/MediaStream' },
        { text: 'MediaStreamTrack', link: '/web/browser/webrtc/MediaStreamTrack' },
        { text: 'MediaRecorder', link: '/web/browser/webrtc/MediaRecorder' },
      ],
    },
    {
      text: 'RTCPC',
      items: [
        { text: 'RTCPeerConnection', link: '/web/browser/webrtc/browser/webrtcPeerConnection' },
        { text: '信令服务器', link: '/web/browser/webrtc/signaling' },
      ],
    },
    {
      text: 'RTP',
      items: [
        { text: 'RTCRtpSender', link: '/web/browser/webrtc/browser/webrtcRtpSender' },
        { text: 'RTCRtpReceiver', link: '/web/browser/webrtc/browser/webrtcRtpReceiver' },
        { text: 'RTCRtpTransceiver', link: '/web/browser/webrtc/browser/webrtcRtpTransceiver' },
      ],
    },
  ],
  // node.js 运行时
  '/web/nodejs/': [
    {
      text: 'Node.js',
      items: [
        { text: '介绍', link: '/web/nodejs' },
        { text: '异步机制', link: '/web/nodejs/异步机制' },
        { text: '调试技巧', link: '/web/nodejs/调试技巧' },
      ],
    },
    {
      text: 'Express',
      collapsed: true,
      items: [
        { text: '介绍', link: '/web/nodejs/express' },
        { text: '路由', link: '/web/nodejs/express/route' },
        { text: '中间件', link: '/web/nodejs/express/middleware' },
        { text: '静态文件', link: '/web/nodejs/express/static' },
        { text: '跨域处理', link: '/web/nodejs/express/cors' },
        { text: 'MySQL 集成', link: '/web/nodejs/express/mysql' },
        { text: '鉴权', link: '/web/nodejs/express/auth' },
      ],
    },
  ],
  //#endregion

  //#region 工程化
  '/web/engineering/': [
    {
      text: '⭐前端模块化发展史',
      link: '/web/engineering/modular/introduction',
      collapsed: true,
      items: [],
    },
    {
      text: '包管理器',
      collapsed: false,
      items: [
        { text: '⭐npm', link: '/web/engineering/npm/introduction' },
        { text: 'pnpm', link: '/web/engineering/pnpm' },
        { text: 'cnpm', link: 'https://github.com/cnpm/cnpm' },
        { text: 'yarn', link: 'https://yarnpkg.com/' },
        { text: 'bower', link: 'https://bower.io/' },
      ],
    },
    {
      text: '构建工具',
      collapsed: false,
      items: [
        { text: '⭐webpack', link: '/web/engineering/webpack/introduction' },
        { text: 'rollup', link: 'https://cn.rollupjs.org/' },
        { text: 'esbuild', link: 'https://esbuild.github.io/' },
        { text: 'gulp', link: '/web/engineering/gulp/introduction' },
        { text: 'grunt', link: 'https://gruntjs.com/' },
      ],
    },
    {
      text: '⭐拓展',
      collapsed: false,
      items: [
        { text: 'Browserslist', link: '/web/engineering/browserslist' },
        { text: 'Babel', link: '/web/engineering/babel' },
        {
          text: 'CSS 预编译器',
          items: [
            { text: '⭐sass', link: '/web/engineering/sass/introduction' },
            { text: 'less', link: 'https://lesscss.org/' },
            { text: 'stylus', link: 'https://stylus-lang.com/' },
          ],
        },
        { text: 'CSS 后处理器', items: [{ text: 'PostCSS', link: '/web/engineering/postcss' }] },
        { text: 'ESLint', link: '/web/engineering/eslint' },
        { text: 'Prettier', link: '/web/engineering/prettier' },
      ],
    },
    {
      text: '社区 CLI 脚手架',
      collapsed: true,
      items: [
        { text: '⭐vite', link: '/web/engineering/vite/introduction' },
        { text: 'vue-cli', link: 'https://cli.vuejs.org/zh/' },
        { text: 'create-vue', link: 'https://github.com/vuejs/create-vue' },
        { text: 'create-react-app', link: 'https://create-react-app.dev/' },
      ],
    },
  ],
  // npm
  '/web/engineering/npm/': [
    {
      text: '包管理',
      items: [
        { text: '介绍', link: '/web/engineering/npm/introduction' },
        { text: 'package.json', link: '/web/engineering/npm/packagejson' },
        { text: 'CLI 脚手架开发', link: '/web/engineering/npm/cli' },
        { text: '一些有用的库（global）', link: '/web/engineering/npm/useful-tools-library' },
      ],
    },
  ],
  // webpack
  '/web/engineering/webpack/': [
    {
      text: 'Webpack',
      items: [
        { text: '介绍', link: '/web/engineering/webpack/introduction' },
        { text: 'CLI', link: '/web/engineering/webpack/cli' },
        { text: '配置', link: '/web/engineering/webpack/config' },
        { text: 'Loader', link: '/web/engineering/webpack/loader' },
        { text: '插件', link: '/web/engineering/webpack/plugins' },
      ],
    },
  ],
  // gulp
  '/web/engineering/gulp/': [
    {
      text: 'Gulp',
      items: [
        { text: '介绍', link: '/web/engineering/gulp/introduction' },
        { text: '快速开始', link: '/web/engineering/gulp/quick-start' },
        { text: '任务', link: '/web/engineering/gulp/tasks' },
        { text: 'Globs 详解', link: '/web/engineering/gulp/explaining-globs' },
        { text: '处理文件', link: '/web/engineering/gulp/working-with-files' },
        { text: '使用插件', link: '/web/engineering/gulp/using-plugins' },
      ],
    },
  ],
  // sass
  '/web/engineering/sass/': [
    {
      text: 'Sass',
      items: [
        { text: '介绍', link: '/web/engineering/sass/introduction' },
        { text: '快速上手', link: '/web/engineering/sass/quick-start' },
        { text: 'variable 变量', link: '/web/engineering/sass/variable' },
        { text: '嵌套语法', link: '/web/engineering/sass/nesting' },
        { text: 'Partials', link: '/web/engineering/sass/partials' },
        { text: '模块化', link: '/web/engineering/sass/modules' },
        { text: '@mixin 混入', link: '/web/engineering/sass/mixin' },
        { text: '@extend 继承', link: '/web/engineering/sass/extend' },
        { text: '@function 函数', link: '/web/engineering/sass/function' },
        { text: '运算', link: '/web/engineering/sass/operators' },
        { text: '条件与循环', link: '/web/engineering/sass/flow-control' },
      ],
    },
  ],
  // vite
  '/web/engineering/vite/': [
    {
      text: 'Vite',
      items: [
        { text: '介绍', link: '/web/engineering/vite/introduction' },
        { text: '配置', link: '/web/engineering/vite/config' },
        { text: '插件', link: '/web/engineering/vite/plugins' },
      ],
    },
  ],
  // typescript
  '/web/typescript/': [
    {
      text: 'TypeScript',
      items: [
        { text: '数据类型(待分类)', link: '/web/typescript/types' },
        { text: '介绍', link: '/web/typescript' },
        { text: '快速上手', link: '/web/typescript/quick-start' },
        { text: '基本类型', link: '/web/typescript/basic-type' },
        { text: '数组和元组', link: '/web/typescript/array-tuple' },
        { text: 'function 函数类型', link: '/web/typescript/function-type' },
        { text: 'object 对象类型', link: '/web/typescript/object-type' },
        { text: 'class 类', link: '/web/typescript/class' },
        { text: 'interface 接口', link: '/web/typescript/interface' },
        { text: '类型推论', link: '/web/typescript/type-inference' },
        { text: '联合类型', link: '/web/typescript/union-type' },
        { text: '类型断言', link: '/web/typescript/type-assertions' },
        { text: '类型守卫', link: '/web/typescript/typeof-type-guards' },
        { text: '枚举', link: '/web/typescript/enum' },
        { text: '泛型', link: '/web/typescript/generics' },
        { text: '类型别名', link: '/web/typescript/type-alias' },
        { text: '声明文件', link: '/web/typescript/declaration-files' },
        { text: '内置对象', link: '/web/typescript/build-in-types' },
        { text: '配置文件', link: '/web/typescript/tsconfig' },
      ],
    },
  ],
  //#endregion

  //#region SPA
  // vue
  '/web/vue/': [
    {
      text: '基础',
      collapsed: false,
      items: [
        { text: '介绍', link: '/web/vue/introduction' },
        { text: '创建一个应用', link: '/web/vue/application' },
        { text: 'State', link: '/web/vue/state' },
        { text: 'Computed State', link: '/web/vue/computed' },
        { text: '事件处理', link: '/web/vue/event' },
        { text: '“原生” v-model', link: '/web/vue/原生-v-model' },
        { text: '生命周期', link: '/web/vue/lifecycle' },
      ],
    },
    {
      text: '组件化',
      collapsed: false,
      items: [
        { text: 'SFC 单文件组件', link: '/web/vue/sfc-spec' },
        { text: 'props', link: '/web/vue/props' },
        { text: 'emit', link: '/web/vue/emit' },
        { text: '透传 Attributes', link: '/web/vue/attr' },
        { text: 'slot', link: '/web/vue/slot' },
        { text: '“组件” v-model', link: '/web/vue/组件-v-model' },
        { text: 'context', link: '/web/vue/context' },
        { text: '依赖注入', link: '/web/vue/provide-inject' },
      ],
    },
    {
      text: '逻辑复用',
      collapsed: false,
      items: [
        { text: '组合式函数', link: '/web/vue/composables' },
        { text: '自定义指令', link: '/web/vue/custom-directives' },
        { text: '插件', link: '/web/vue/plugins' },
      ],
    },
    {
      text: '过渡/动画',
      collapsed: false,
      items: [],
    },
    {
      text: 'TypeScript',
      collapsed: true,
      items: [
        { text: '集成 Typescript', link: '/web/vue/typescript/integration' },
        { text: '搭配 TypeScript 使用 Vue', link: 'https://cn.vuejs.org/guide/typescript/overview.html' },
      ],
    },

    {
      text: '集成',
      collapsed: true,
      items: [
        { text: 'Vue Router（官方）', link: '/web/vue/vue-router/' },
        { text: 'Pinia（官方）', link: '/web/vue/pinia/' },
        { text: 'Vue I18n', link: '/web/vue/vue-i18n/' },
        { text: 'VueUse', link: '/web/vue/vueuse/' },
        { text: 'Tailwind CSS', link: 'https://tailwindcss.com/docs/installation' },
        { text: 'Element Plus - PC', link: '/web/vue/element-plus' },
        { text: 'Vant - Mobile', link: '/web/vue/vant' },
      ],
    },
    { text: '选项式 API', link: '/web/vue/options' },
    { text: '进阶主题', link: 'https://cn.vuejs.org/guide/extras/ways-of-using-vue.html' },
    { text: 'Fetch data', link: '/web/vue/fetch-data' },
    { text: 'Vue 解决方案', link: '/web/vue/solution/' },
  ],
  // react
  '/web/react/': [
    {
      text: '基础',
      items: [
        { text: 'State', link: '/web/react/state' },
        { text: 'Computed State', link: '/web/react/computed' },
      ],
    },
    { text: 'Render app', link: '/web/react/render-app' },
    { text: 'Fetch data', link: '/web/react/fetch-data' },
    {
      text: 'React 集成',
      items: [
        { text: '路由管理 - React Router', link: '/web/react/react-router' },
        { text: '状态管理 - Redux', link: '/web/react/redux' },
      ],
    },
  ],
  //#endregion

  //#region SSR
  // nuxt
  '/web/nuxt/': [
    { text: '介绍', link: '/web/nuxt/introduction' },
    { text: '快速开始', link: '/web/nuxt/quick-start' },
    { text: '自动化和约定', link: '/web/nuxt/conventions' },
    { text: '组件库', link: '/web/nuxt/组件库' },
    { text: '样式化', link: '/web/nuxt/样式化' },
    { text: 'Server', link: '/web/nuxt/server' },
    { text: '数据获取', link: '/web/nuxt/数据获取' },
    {
      text: '集成',
      collapsed: true,
      items: [{ text: 'Tailwind CSS', link: 'https://tailwindcss.com/docs/guides/nuxtjs' }],
    },
  ],
  //#endregion
}

export default sidebar
