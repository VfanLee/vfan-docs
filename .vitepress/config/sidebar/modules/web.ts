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
        { text: '安装 & 配置', link: '/dev/git', target: '_blank' },
        { text: '.gitignore', link: '/web/git/gitignore' },
      ],
    },
    {
      text: '常用命令',
      items: [
        { text: '仓库管理', link: '/web/git/command/repo' },
        { text: '代码提交', link: '/web/git/command/commit' },
        { text: '分支管理', link: '/web/git/command/branch' },
        { text: '“后悔药”', link: '/web/git/command/reset' },
        { text: '打标签', link: '/web/git/command/tag' },
        { text: '暂存', link: '/web/git/command/stash' },
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
        { text: '&lt;DOCTYPE&gt;', link: '/web/html/doctype' },
        { text: '&lt;meta&gt;', link: '/web/html/meta' },
        { text: 'HTML 特殊字符', link: '/web/html/special-characters' },
        { text: '文本级语义元素', link: '/web/html/text-level-semantics' },
        { text: 'form 表单', link: '/web/html/form' },
        { text: 'table 表格', link: '/web/html/table' },
        { text: 'script', link: '/web/html/script' },
        { text: 'SEO', link: '/web/html/script' },
        { text: '媒体查询', link: '/web/html/media' },
        { text: '自定义属性', link: '/web/html/data-attribute' },
        { text: '无障碍/可访问性', link: '/web/html/accessibility' },
      ],
    },
  ],
  // css
  '/web/css/': [
    {
      text: '基础',
      items: [
        { text: '设计模式', link: '/web/css/design-patterns' },
        { text: '选择器', link: '/web/css/selector' },
        { text: 'CSS 变量', link: '/web/css/variable' },
      ],
    },
    {
      text: '现代化布局',
      items: [
        { text: 'Position 定位', link: '/web/css/position' },
        { text: 'Flex 弹性盒子', link: '/web/css/flex/' },
        { text: 'Grid 网格布局', link: '/web/css/grid/' },
      ],
    },
    {
      text: '逻辑属性',
      items: [
        { text: '介绍', link: '/web/css/logical-properties/introduction' },
        { text: '逻辑/实体 - 对应表', link: '/web/css/logical-properties/reference' },
      ],
    },
    {
      text: '更多专题',
      items: [
        { text: '文本处理', link: '/web/css/text' },
        { text: '背景处理', link: '/web/css/background' },
        { text: '滚动条', link: '/web/css/scrollbar' },
      ],
    },
    { text: '疑难杂症', link: '/web/css/you-dont-konw' },
  ],
  // ecmascript
  '/web/ecmascript/introduction': [
    {
      text: '起步',
      items: [
        { text: '认识 JavaScript', link: '/web/ecmascript/introduction' },
        { text: '运行 JavaScript', link: '/web/ecmascript/run' },
      ],
    },
    {
      text: '基础知识',
      items: [
        { text: '代码结构', link: '/web/ecmascript/basic/代码结构' },
        { text: '严格模式', link: '/web/ecmascript/basic/严格模式' },
        { text: '变量', link: '/web/ecmascript/basic/变量' },
        { text: '运算符', link: '/web/ecmascript/basic/运算符' },
        { text: '值的比较', link: '/web/ecmascript/basic/值的比较' },
        { text: '条件分支', link: '/web/ecmascript/basic/条件分支' },
        { text: '循环', link: '/web/ecmascript/basic/循环' },

        { text: '提交表单', link: '/web/ecmascript/basic/提交表单' },
        { text: '其他', link: '/web/ecmascript/basic/其他' },
      ],
    },
    {
      text: '数据类型',
      link: '/web/ecmascript/data-types/introduction',
      collapsed: true,
      items: [],
    },
    {
      text: '深入对象',
      link: 'web/ecmascript/object/object',
      collapsed: true,
      items: [],
    },
    {
      text: '深入函数',
      link: 'web/ecmascript/function/function',
      collapsed: true,
      items: [],
    },
    {
      text: 'Promise, async/await',
      collapsed: true,
      items: [
        { text: 'Promise', link: '/web/ecmascript/promise/promise' },
        { text: 'async/await', link: '/web/ecmascript/promise/async_await' },
      ],
    },
    {
      text: 'class 类',
      collapsed: true,
      items: [{ text: '类', link: '/web/ecmascript/class/class' }],
    },
    {
      text: 'ESM',
      collapsed: true,
      items: [
        { text: 'ES2015 规范', link: 'https://www.ecma-international.org/ecma-262/6.0/' },
        { text: 'import', link: '/web/ecmascript/modular/import' },
        { text: 'export', link: '/web/ecmascript/modular/export' },
      ],
    },
    {
      text: '持续进阶',
      collapsed: true,
      items: [
        { text: 'Proxy 和 Reflect', link: '/web/ecmascript/proxy_reflect' },
        { text: '正则表达式', link: '/web/ecmascript/regular_expression' },
      ],
    },
  ],
  // 数据类型
  '/web/ecmascript/data-types/': [
    {
      text: '认识类型',
      items: [{ text: '介绍', link: '/web/ecmascript/data-types/introduction' }],
    },
    {
      text: '原始类型',
      collapsed: true,
      items: [
        { text: 'Number', link: '/web/ecmascript/data-types/number' },
        { text: 'BigInt', link: '/web/ecmascript/data-types/bigint' },
        { text: 'String', link: '/web/ecmascript/data-types/string' },
        { text: 'Boolean', link: '/web/ecmascript/data-types/boolean' },
        { text: 'Symbol', link: '/web/ecmascript/data-types/symbol' },
        { text: 'undefined', link: '/web/ecmascript/data-types/undefined' },
        { text: 'null', link: '/web/ecmascript/data-types/null' },
      ],
    },
    {
      text: '引用类型',
      collapsed: true,
      items: [
        { text: 'Object', link: '/web/ecmascript/data-types/object' },
        { text: 'Array', link: '/web/ecmascript/data-types/array' },
        { text: 'Function', link: '/web/ecmascript/data-types/function' },
        { text: 'Date', link: '/web/ecmascript/data-types/date' },
        { text: 'JSON', link: '/web/ecmascript/data-types/json' },
        { text: 'Set', link: '/web/ecmascript/data-types/set' },
        { text: 'Map', link: '/web/ecmascript/data-types/map' },
      ],
    },
    {
      text: '类型操作',
      items: [
        { text: '类型判断', link: '/web/ecmascript/data-types/judgment' },
        { text: '类型转换', link: '/web/ecmascript/data-types/conversion' },
      ],
    },

    { text: '🔙 返回', link: '/web/ecmascript/introduction', collapsed: true, items: [] },
  ],
  // 深入对象
  '/web/ecmascript/object/': [
    { text: 'object', link: '/web/ecmascript/object/object' },
    { text: '对象方法，"this"', link: '/web/ecmascript/object/this' },
    { text: '构造器和操作符 "new"', link: '/web/ecmascript/object/new' },
    { text: '可选链 "?."', link: '/web/ecmascript/object/optional-chaining' },
    { text: '对象属性配置', link: '/web/ecmascript/object/properties' },

    { text: '🔙 返回', link: '/web/ecmascript/introduction', collapsed: true, items: [] },
  ],
  // 深入函数
  '/web/ecmascript/function/': [
    { text: '认识函数', link: '/web/ecmascript/function/function' },
    { text: '变量作用域，闭包', link: '/web/ecmascript/function/closure' },
    { text: '老旧的 var', link: '/web/ecmascript/function/var' },

    { text: '🔙 返回', link: '/web/ecmascript/introduction', collapsed: true, items: [] },
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
    { text: '浏览器 (Browser)', link: '/web/browser/introduction', collapsed: true, items: [] },
    { text: 'Node.js', link: '/web/nodejs/introduction', collapsed: true, items: [] },
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
      text: '浏览器（Browser）',
      collapsed: true,
      items: [
        { text: '介绍', link: '/web/browser/introduction' },
        { text: '浏览器的渲染原理', link: '/web/browser/浏览器渲染原理' },
      ],
    },
    {
      text: '操作 Document（文档）',
      collapsed: true,
      items: [
        { text: '介绍', link: '/web/browser/document/introduction' },
        { text: '操作', link: '/web/browser/document/manipulating' },
        { text: 'Window', link: '/web/browser/window' },
        { text: '事件处理', link: '/web/browser/event' },
        { text: '交互', link: '/web/browser/交互' },
        { text: '元素大小和滚动', link: '/web/browser/元素大小和滚动' },
        { text: '坐标', link: '/web/browser/坐标' },
      ],
    },
    {
      text: '从服务端获取数据',
      collapsed: true,
      items: [
        { text: 'XMLHttpRequest', link: '/web/browser/ajax/xhr' },
        { text: 'Fetch', link: '/web/browser/ajax/fetch' },
        { text: 'Axios', link: '/web/browser/ajax/axios' },
        { text: 'jQuery Ajax', link: '/web/browser/ajax/jquery' },
      ],
    },
    {
      text: '绘图',
      collapsed: true,
      items: [
        { text: 'Canvas', link: '/web/browser/canvas' },
        { text: 'WebGL', link: 'https://developer.mozilla.org/zh-CN/docs/Web/API/WebGL_API' },
        { text: 'WebGPU', link: 'https://developer.mozilla.org/zh-CN/docs/Web/API/WebGPU_API' },
      ],
    },
    {
      text: '视频和音频',
      collapsed: true,
      items: [{ text: '媒体技术', link: '/web/browser/media-technologies' }],
    },
    {
      text: '客户端存储',
      collapsed: true,
      items: [],
    },
    {
      text: '安全/加密',
      collapsed: true,
      items: [{ text: 'crypto', link: '/web/browser/encryption/crypto' }],
    },
    {
      text: '更多',
      collapsed: true,
      items: [
        { text: 'Clipboard', link: '/web/browser/clipboard' },
        { text: 'History', link: '/web/browser/history' },
        { text: 'Location', link: '/web/browser/location' },
        { text: 'Navigator', link: '/web/browser/navigator' },
        { text: 'Screen', link: '/web/browser/screen' },
        { text: 'URL', link: '/web/browser/URL' },
        { text: 'Web Worker', link: '/web/browser/web-worker' },
        { text: 'WebSocket', link: '/web/browser/websocket/introduction' },
        { text: 'WebRTC', link: '/web/browser/webrtc/introduction' },
      ],
    },

    { text: '🔙 返回', link: '/web/js-runtime/' },
  ],
  // websocket
  '/web/browser/websocket/': [
    { text: '介绍', link: '/web/browser/websocket/introduction' },
    {
      text: '普通 WebSocket',
      collapsed: false,
      items: [
        { text: '服务端', link: '/web/browser/websocket/websocket/server' },
        { text: '客户端', link: '/web/browser/websocket/websocket/client' },
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
  // WebRTC
  '/web/browser/webrtc/': [
    { text: '介绍', link: '/web/browser/webrtc/introduction' },
    {
      text: 'GUM',
      items: [
        { text: 'MediaStream', link: '/web/browser/webrtc/MediaStream' },
        { text: 'MediaStreamTrack', link: '/web/browser/webrtc/MediaStreamTrack' },
        { text: 'MediaDevices', link: '/web/browser/webrtc/MediaDevices' },
        { text: 'Capabilities, constraints, Settings ', link: '/web/browser/webrtc/constraints' },
        { text: 'MediaRecorder', link: '/web/browser/webrtc/MediaRecorder' },
      ],
    },
    {
      text: '网络传输',
      items: [
        { text: '相关协议及基本概念', link: '/web/browser/webrtc/protocol' },
        { text: '信令服务器', link: '/web/browser/webrtc/signaling' },
        { text: '工作流程', link: '/web/browser/webrtc/workflow' },
        { text: 'RTCPeerConnection', link: '/web/browser/webrtc/RTCPeerConnection' },
        { text: 'RTCDataChannel', link: '/web/browser/webrtc/RTCDataChannel' },
        { text: 'RTCRtpSender', link: '/web/browser/webrtc/RTCRtpSender' },
        { text: 'RTCRtpReceiver', link: '/web/browser/webrtc/RTCRtpReceiver' },
        { text: 'RTCRtpTransceiver', link: '/web/browser/webrtc/RTCRtpTransceiver' },
      ],
    },
  ],
  // Node.js 运行时
  '/web/nodejs/': [
    {
      text: 'Node.js',
      items: [
        { text: '介绍', link: '/web/nodejs/introduction' },
        { text: 'CommonJS', link: '/web/nodejs/commonjs' },
        { text: 'ESM 语法支持', link: '/web/nodejs/esm' },
        { text: '异步机制', link: '/web/nodejs/async_mechanisms' },
        { text: '子进程', link: '/web/nodejs/child_process' },
        { text: '环境变量', link: '/web/nodejs/env' },
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

    { text: '🔙 返回', link: '/web/js-runtime/' },
  ],
  //#endregion

  //#region 工程化
  '/web/engineering/': [
    {
      text: '前言',
      items: [{ text: '⭐ 前端模块化发展史', link: '/web/engineering/modular' }],
    },
    {
      text: '包管理器',
      collapsed: false,
      items: [
        { text: '⭐ npm', link: '/web/engineering/npm/introduction' },
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
        { text: 'rolldown', link: 'https://rolldown.rs/' },
        { text: 'esbuild', link: 'https://esbuild.github.io/' },
        { text: 'gulp', link: '/web/engineering/gulp/introduction' },
        { text: 'grunt', link: 'https://gruntjs.com/' },
      ],
    },
    {
      text: '⭐ 更进一步',
      collapsed: false,
      items: [
        { text: 'Browserslist', link: '/web/engineering/browserslist' },
        { text: 'Babel', link: '/web/engineering/babel' },
        {
          text: 'CSS 预编译器',
          items: [
            { text: '⭐ sass', link: '/web/engineering/sass/introduction' },
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
      collapsed: false,
      items: [
        { text: '⭐ vite', link: '/web/engineering/vite/introduction' },
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
    {
      text: '🔙 返回',
      link: '/web/engineering/modular',
      collapsed: false,
      items: [],
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
        { text: '版本迁移', link: '/web/engineering/webpack/migrate' },
      ],
    },
    {
      text: 'Awesome Loaders',
      collapsed: true,
      items: [
        { text: 'assets', link: '/web/engineering/webpack/loaders/assets' },
        { text: 'babel', link: '/web/engineering/webpack/loaders/babel-loader' },
        { text: 'css', link: '/web/engineering/webpack/loaders/css-loader' },
        { text: 'postcss', link: '/web/engineering/webpack/loaders/postcss-loader' },
        { text: 'sass', link: '/web/engineering/webpack/loaders/sass-loader' },
        { text: 'style', link: '/web/engineering/webpack/loaders/style-loader' },
        { text: 'svg-sprite', link: '/web/engineering/webpack/loaders/svg-sprite-loader' },
        { text: 'thread', link: '/web/engineering/webpack/loaders/thread-loader' },
      ],
    },
    {
      text: 'Awesome Plugins',
      collapsed: true,
      items: [
        { text: 'case-sensitive-paths', link: '/web/engineering/webpack/plugins/case-sensitive-paths-webpack-plugin' },
        { text: 'copy', link: '/web/engineering/webpack/plugins/copy-webpack-plugin' },
        { text: 'css-minimizer', link: '/web/engineering/webpack/plugins/css-minimizer-webpack-plugin' },
        { text: 'friendly-errors', link: '/web/engineering/webpack/plugins/friendly-errors-webpack-plugin' },
        { text: 'html', link: '/web/engineering/webpack/plugins/html-webpack-plugin' },
        { text: 'mini-css-extract', link: '/web/engineering/webpack/plugins/mini-css-extract-plugin' },
        { text: 'terser', link: '/web/engineering/webpack/plugins/terser-webpack-plugin' },
      ],
    },

    {
      text: '🔙 返回',
      link: '/web/engineering/modular',
      collapsed: false,
      items: [],
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
    {
      text: '🔙 返回',
      link: '/web/engineering/modular',
      collapsed: false,
      items: [],
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
        { text: 'Modules 模块化', link: '/web/engineering/sass/modules' },
        { text: 'Partials 文件', link: '/web/engineering/sass/partials' },
        { text: '@mixin 混入', link: '/web/engineering/sass/mixin' },
        { text: '@extend 继承', link: '/web/engineering/sass/extend' },
        { text: '@function 函数', link: '/web/engineering/sass/function' },
        { text: '运算', link: '/web/engineering/sass/operators' },
        { text: '条件与循环', link: '/web/engineering/sass/flow-control' },
      ],
    },
    {
      text: '🔙 返回',
      link: '/web/engineering/modular',
      collapsed: false,
      items: [],
    },
  ],
  // vite
  '/web/engineering/vite/': [
    {
      text: 'Vite',
      items: [
        { text: '介绍', link: '/web/engineering/vite/introduction' },
        { text: '功能', link: '/web/engineering/vite/features' },
        { text: '配置', link: '/web/engineering/vite/config' },
        { text: '环境变量和模式', link: '/web/engineering/vite/env-and-mode' },
        { text: '静态资源', link: '/web/engineering/vite/assets' },
      ],
    },
    {
      text: 'Awesome Plugins',
      collapsed: true,
      items: [
        { text: 'unplugin-auto-import', link: '/web/engineering/vite/plugins/unplugin-auto-import' },
        { text: 'unplugin-vue-components', link: '/web/engineering/vite/plugins/unplugin-vue-components' },
        { text: 'vite-plugin-static-copy', link: '/web/engineering/vite/plugins/vite-plugin-static-copy' },
        { text: 'vite-plugin-svg-icons', link: '/web/engineering/vite/plugins/vite-plugin-svg-icons' },
        { text: 'vite-plugin-vue-devtools', link: '/web/engineering/vite/plugins/vite-plugin-vue-devtools' },
      ],
    },
    {
      text: '🔙 返回',
      link: '/web/engineering/modular',
      collapsed: false,
      items: [],
    },
  ],
  // typescript
  '/web/typescript/': [
    { text: '数据类型(待分类)', link: '/web/typescript/types' },
    {
      text: 'TypeScript',
      collapsed: false,
      items: [
        { text: '介绍', link: '/web/typescript/introduction' },
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
        { text: 'import', link: '/web/typescript/import' },
      ],
    },
    {
      text: '配置',
      collapsed: false,
      items: [
        { text: 'tsconfig.json', link: '/web/typescript/tsconfig/file' },
        {
          text: '配置项',
          items: [
            { text: '顶层配置', link: '/web/typescript/tsconfig/top_level' },
            { text: 'compilerOptions', link: '/web/typescript/tsconfig/compiler-options' },
          ],
        },
      ],
    },
  ],
  //#endregion

  //#region SPA
  // vue3
  '/web/vue/v3/': [
    {
      text: '基础',
      collapsed: true,
      items: [
        { text: '介绍', link: '/web/vue/v3/introduction' },
        { text: '创建一个应用', link: '/web/vue/v3/application' },
        { text: 'State', link: '/web/vue/v3/state' },
        { text: 'Computed State', link: '/web/vue/v3/computed' },
        { text: '事件处理', link: '/web/vue/v3/event' },
        { text: '“原生” v-model', link: '/web/vue/v3/原生-v-model' },
        { text: '生命周期', link: '/web/vue/v3/lifecycle' },
      ],
    },
    {
      text: '组件化',
      collapsed: true,
      items: [
        { text: 'SFC 单文件组件', link: '/web/vue/v3/sfc-spec' },
        { text: 'props', link: '/web/vue/v3/props' },
        { text: 'emit', link: '/web/vue/v3/emit' },
        { text: '透传 Attributes', link: '/web/vue/v3/attr' },
        { text: 'slot', link: '/web/vue/v3/slot' },
        { text: '“组件” v-model', link: '/web/vue/v3/组件-v-model' },
        { text: 'context', link: '/web/vue/v3/context' },
        { text: '依赖注入', link: '/web/vue/v3/provide-inject' },
      ],
    },
    {
      text: '逻辑复用',
      collapsed: true,
      items: [
        { text: '组合式函数', link: '/web/vue/v3/composables' },
        { text: '自定义指令', link: '/web/vue/v3/custom-directives' },
        { text: '插件', link: '/web/vue/v3/plugins' },
      ],
    },
    {
      text: '集成',
      collapsed: true,
      items: [
        {
          text: 'TypeScript',
          collapsed: true,
          items: [
            { text: '搭配 TypeScript 使用 Vue', link: '/web/vue/v3/typescript/' },
            { text: 'TS 与组合式 API', link: '/web/vue/v3/typescript/composition-api' },
            { text: 'TS 与选项式 API', link: 'https://cn.vuejs.org/guide/typescript/options-api.html' },
          ],
        },
        { text: 'Vue Router（官方）', link: '/web/vue/v3/vue-router/' },
        { text: 'Pinia（官方）', link: '/web/vue/v3/pinia/' },
        { text: 'Vue I18n', link: '/web/vue/v3/vue-i18n/' },
        { text: 'VueUse', link: '/web/vue/v3/vueuse/' },
        {
          text: '组件库',
          collapsed: true,
          items: [
            { text: 'Element Plus (PC)', link: '/web/vue/v3/element-plus/' },
            { text: 'Vant (Mobile)', link: '/web/vue/v3/vant/' },
            { text: 'tailwindcss', link: 'https://tailwindcss.com/docs/installation' },
            { text: 'UnoCSS', link: 'https://unocss.dev/integrations/' },
          ],
        },
      ],
    },
    { text: '深入响应式', link: '/web/vue/v3/reactivity' },
    { text: '渲染机制', link: '/web/vue/v3/rendering-mechanism' },
    { text: '渲染函数', link: '/web/vue/v3/render-function' },
    { text: '选项式 API', link: '/web/vue/v3/options' },
    { text: '使用 Vue 的多种方式', link: 'https://cn.vuejs.org/guide/extras/ways-of-using-vue.html' },
    { text: '动画技巧', link: 'https://cn.vuejs.org/guide/extras/animation.html' },
    { text: 'Fetch data', link: '/web/vue/v3/fetch-data' },
    { text: 'Vue 解决方案', link: '/web/vue/v3/solution/' },
  ],
  // vue2
  '/web/vue/v2/': [
    { text: '介绍（待整理）', link: '/web/vue/v2/' },
    { text: '介绍', link: '/web/vue/v2/introduction' },
    { text: '深入响应式', link: '/web/vue/v2/reactivity' },
    {
      text: '集成',
      collapsed: true,
      items: [
        { text: 'Vue Router', link: 'https://v3.router.vuejs.org/zh/' },
        { text: 'Vuex', link: 'https://vuex.vuejs.org/zh/' },
        { text: 'Element UI', link: '/web/vue/v2/element-ui' },
      ],
    },
  ],
  // react
  '/web/react/': [
    {
      text: '基础知识',
      items: [
        { text: '快速开始', link: '/web/react/quick_start' },
        { text: '响应式', link: '/web/react/reactivity' },
        { text: '模板化', link: '/web/react/templating' },
        { text: '表单输入绑定', link: '/web/react/form_input' },
        { text: '生命周期', link: '/web/react/lifecycle' },
      ],
    },
    {
      text: '组件化',
      items: [
        { text: 'Props', link: '/web/react/component/props' },
        { text: 'Emit', link: '/web/react/component/emit' },
        { text: 'Slot', link: '/web/react/component/slot' },
        { text: 'Class Component', link: '/web/react/component/class_component' },
      ],
    },

    { text: 'Hooks', collapsed: true, items: [{ text: 'useEffect', link: '/web/react/hooks/useEffect' }] },
    {
      text: '更进一步',
      items: [
        { text: '组件库', link: '/web/react/step_further/component_library' },
        { text: '路由管理', link: '/web/react/step_further/react-router' },
        { text: '全局状态管理', link: '/web/react/step_further/redux' },
        { text: '国际化', link: '/web/react/step_further/react-i18next' },
      ],
    },
  ],
  // knockout.js
  '/web/knockoutjs/': [
    { text: '快速开始', link: '/web/knockoutjs/quick_start' },
    { text: '响应式', link: '/web/knockoutjs/reactivity' },
    { text: '模板化', link: '/web/knockoutjs/templating' },
    { text: '表单输入', link: '/web/knockoutjs/form_input' },
    { text: '组件化', link: '/web/knockoutjs/component' },
    { text: '更进一步', link: '/web/knockoutjs/step_further' },
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

  //#region 部署篇
  // docker
  '/web/docker/': [
    {
      text: 'Docker',
      items: [
        { text: 'container 容器', link: '/web/docker/container' },
        { text: 'image 镜像', link: '/web/docker/image' },
        { text: 'network 网络', link: '/web/docker/network' },
        { text: 'volume 数据卷', link: '/web/docker/volume' },
        { text: 'dockerfile', link: '/web/docker/dockerfile' },
        { text: '其他命令', link: '/web/docker/other-command' },
        { text: 'Docker Compose', link: '/web/docker/docker-compose' },
      ],
    },
  ],
  // nginx
  '/web/nginx/': [
    {
      text: 'Nginx',
      items: [
        { text: '介绍', link: '/web/nginx/introduction' },
        { text: '命令', link: '/web/nginx/command' },
        { text: '配置目录', link: '/web/nginx/config-dir' },
        { text: '变量', link: '/web/nginx/variable' },
        { text: 'server', link: '/web/nginx/server' },
        { text: 'location', link: '/web/nginx/location' },
        { text: '负载均衡', link: '/web/nginx/load-balancing' },
      ],
    },
    { text: '示例模板', link: '/web/nginx/template' },
  ],
  // jenkins
  '/web/jenkins/': [
    {
      text: 'Jenkins',
      items: [
        { text: '介绍', link: '/web/jenkins/introduction' },
        { text: '安装', link: '/web/jenkins/install' },
      ],
    },
  ],
  //#endregion
}

export default sidebar
