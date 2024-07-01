import type { DefaultTheme } from 'vitepress'

const frontEndSidebar: DefaultTheme.Sidebar = {
  // web
  '/web': [
    {
      text: '必知必会',
      items: [
        { text: 'HTML', link: '/web/html' },
        { text: 'CSS', link: '/web/css' },
        { text: 'ECMAScript', link: '/web/ecmascript' },
        { text: 'TypeScript', link: '/web/typescript' },
      ],
    },
    {
      text: '运行时',
      items: [
        { text: '什么是运行时？', link: '/web/runtime-env' },
        { text: 'v8引擎', link: '/web/runtime-env/v8引擎' },
        { text: '事件循环', link: '/web/runtime-env/event-loop' },
        { text: 'Browser 浏览器', link: '/web/browser' },
        { text: 'Node.js', link: '/web/nodejs' },
      ],
    },
    { text: '工程化', collapsed: true, items: [], link: '/web/engineering/' },
    {
      text: '开发框架',
      collapsed: true,
      items: [
        { text: 'Vue', link: '/web/framework/vue/' },
        { text: 'React', link: '/web/framework/react/' },
        { text: 'Nuxt.js', link: '/web/framework/nuxt/' },
        { text: 'angularjs', link: '/web/framework/angularjs/' },
        { text: 'knockoutjs', link: '/web/framework/knockoutjs/' },
      ],
    },
    {
      text: '混合开发',
      collapsed: true,
      items: [{ text: 'Cordova', link: '/web/hybrid/cordova/' }],
    },
  ],

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
  // typescript
  '/web/typescript/': [
    {
      text: 'TypeScript',
      items: [
        { text: '介绍', link: '/web/typescript' },
        { text: '数据类型', link: '/web/typescript/数据类型' },
        { text: '关键字', link: '/web/typescript/关键字' },
        { text: '类型声明文件', link: '/web/typescript/类型声明文件' },
        { text: 'tsconfig', link: '/web/typescript/tsconfig' },
      ],
    },
  ],

  // browser
  '/web/browser/': [
    {
      text: 'Browser',
      collapsed: false,
      items: [
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
        { text: 'Clipboard', link: '/web/browser/clipboard' },
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
    { text: '浏览器扩展开发', link: 'https://developer.mozilla.org/zh-CN/docs/Mozilla/Add-onsExtensions', collapsed: true, items: [] },
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

  // nodejs
  '/web/nodejs/': [
    {
      text: 'Node.js',
      items: [
        { text: '介绍', link: '/web/nodejs' },
        { text: 'NPM', link: '/web/nodejs/npm' },
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
    { text: '一些好用的工具库', link: '/web/nodejs/useful-tools-library', collapsed: true, items: [] },
  ],

  // engineering
  '/web/engineering/': [
    { text: '介绍', link: '/web/engineering/' },
    { text: '模块化', link: '/web/engineering/' },
    { text: 'browserslist', link: '/web/engineering/browserslist' },
    { text: 'postcss', link: '/web/engineering/postcss' },
    { text: 'babel', link: '/web/engineering/babel' },
    {
      text: 'Vite',
      collapsed: true,
      items: [
        { text: '介绍', link: '/web/engineering/vite/' },
        { text: '配置', link: '/web/engineering/vite/config' },
        { text: '插件', link: '/web/engineering/vite/plugins' },
      ],
    },
    {
      text: 'Webpack',
      collapsed: true,
      items: [
        { text: '介绍', link: '/web/engineeringpack/' },
        { text: 'CLI', link: '/web/engineeringpack/cli' },
        { text: '配置', link: '/web/engineeringpack/config' },
        { text: 'Loader', link: '/web/engineeringpack/loader' },
        { text: '插件', link: '/web/engineeringpack/plugins' },
      ],
    },
    { text: 'Gulp', link: '/web/engineering/gulp/' },
  ],

  // vue
  '/web/framework/vue/': [
    { text: '👍 Vue3 演练场', link: 'https://play.vuejs.org/', collapsed: true, items: [] },
    {
      text: '基础',
      collapsed: false,
      items: [
        { text: 'State', link: '/web/framework/vue/state' },
        { text: 'Computed State', link: '/web/framework/vue/computed' },
        { text: '事件处理', link: '/web/framework/vue/event' },
        { text: '“原生” v-model', link: '/web/framework/vue/原生-v-model' },
        { text: '生命周期', link: '/web/framework/vue/lifecycle' },
      ],
    },
    {
      text: '组件化',
      collapsed: false,
      items: [
        { text: 'props', link: '/web/framework/vue/props' },
        { text: 'emit', link: '/web/framework/vue/emit' },
        { text: '“组件” v-model', link: '/web/framework/vue/组件-v-model' },
        { text: 'slot', link: '/web/framework/vue/slot' },
        { text: 'context', link: '/web/framework/vue/context' },
      ],
    },

    {
      text: 'Vue3 集成',
      collapsed: true,
      items: [
        { text: 'Vue CLI', link: '/web/framework/vue/cli' },
        { text: '集成 Typescript', link: '/web/framework/vue/typescript' },
        { text: '路由管理 - Vue Router（官方）', link: '/web/framework/vue/vue-router/' },
        { text: '状态管理 - Pinia（官方）', link: '/web/framework/vue/pinia/' },
        { text: '国际化 - Vue I18n', link: '/web/framework/vue/vue-i18n/' },
      ],
    },
    {
      text: 'Vue3 组件库',
      collapsed: true,
      items: [
        { text: 'PC - Element Plus', link: '/web/framework/vue/element-plus' },
        { text: 'Mobile - Vant', link: '/web/framework/vue/vant' },
      ],
    },
    { text: 'SFC 单文件组件', link: '/web/framework/vue/sfc-spec' },
    { text: 'Composition API', link: '/web/framework/vue/composition-api' },
    { text: 'Render app', link: '/web/framework/vue/render-app' },
    { text: 'Fetch data', link: '/web/framework/vue/fetch-data' },
    { text: '...', link: '/web/framework/vue/' },
    { text: '👉 Vue 2', link: '/web/framework/vue/v2/', target: '_blank' },
  ],
  // react
  '/web/framework/react/': [
    {
      text: '基础',
      items: [
        { text: 'State', link: '/web/framework/react/state' },
        { text: 'Computed State', link: '/web/framework/react/computed' },
      ],
    },
    { text: 'Render app', link: '/web/framework/react/render-app' },
    { text: 'Fetch data', link: '/web/framework/react/fetch-data' },
    {
      text: 'React 集成',
      items: [
        { text: '路由管理 - React Router', link: '/web/framework/react/react-router' },
        { text: '状态管理 - Redux', link: '/web/framework/react/redux' },
      ],
    },
  ],
  // nuxt
  '/web/framework/nuxt/': [
    { text: '介绍', link: '/web/framework/nuxt/' },
    { text: '自动化和约定', link: '/web/framework/nuxt/conventions' },
    { text: '组件库', link: '/web/framework/nuxt/组件库' },
    { text: '样式化', link: '/web/framework/nuxt/样式化' },
    { text: 'Server', link: '/web/framework/nuxt/server' },
    { text: '数据获取', link: '/web/framework/nuxt/数据获取' },
  ],
}

export default frontEndSidebar
