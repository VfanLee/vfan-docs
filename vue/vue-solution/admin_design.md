# 后台管理系统架构设计

## 技术选型

- Vite `4.x`
- Vue `3.x`
- Pinia `2.x`
- Vue Router `4.x`
- Element Plus
- Axios
- Vue I18n `9.x`

## 目录结构

```
├── dist                      # 编译文件
│   ├── assets
│   ├── favicon.ico
│   └── index.html
├── node_modules              # 项目依赖
├── public                    # 静态文件（不会编译）
├── src                       # 开发核心*
│   ├── assets                # 静态文件（会编译）
│   ├── components              # 全局组件
│   ├── icons                   # SVG 图标
│   ├── layout                  # 布局组件
│   ├── locale                  # 国际化相关
│       ├── zh.json               # 翻译文本文件
│       ├── en.json               # 翻译文本文件
│       └── index.js              # 国际化配置文件
│   ├── router                  # Vue Router 路由相关
│       ├── routes                # 路由定义
│       └── index.js              # Vue Router 配置文件
│   ├── store                   # pinia 全局状态管理相关
│       ├── routes                # store 定义
│       └── index.js              # pinia 配置文件
│   ├── styles                  # 全局样式
│   ├── utils                   # 全局工具
│   ├── views                   # RouterView 文件
│   ├── App.vue                 # App 根组件
│   └── main.js                 # 项目入口 JS
├── README.md                 # 项目说明
├── index.html                # 项目入口 HTML
├── jsconfig.json             # JavaScript 配置文件
├── package.json              # npm 配置文件
└── vite.config.js            # vite 配置文件
```

## HTML

### 元素命名

HTML 元素命名参考 `BEM` 和 `SMACSS` 命名规则。

## CSS

### 样式管理

1. 采用 [`normalize.css`](https://necolas.github.io/normalize.css/) 对样式统一初始化。

2. 样式统一放在 `styles` 文件夹中：

    ```
    # 目录接口示例

    └── styles
    ├── _base.scss            # 基础样式
    ├── _modules.scss         # 通用模块样式
    ├── animation.scss        # 通用动画
    └── index.scss            # 全局样式入口
    ```

    `styles/index.scss`

    ```css
    @import './_base.scss';
    @import './_module.scss';
    @import './animation.scss';
    @import './nprogress.scss';
    ```

3. `main.js` 中引入相关 css 文件

  ```js
  import 'normalize.css'
  import './styles/variable.css'
  import './styles/index.scss'
  ```

## JS

### 命名规范

- 列表数据统一以 `单数` + `List` 命名，如：`countryList`。
- 方法函数统一以 `动词` + `名词` 命名，如：`submitForm`。

## Vue

- 一般组件
  - 一般组件文件采用 “大驼峰” 命名，如：`FooBar.vue`。
  - 一般组件采用 “大驼峰” 命名，如：`<FooBar>`。
- 路由
  - 路由文件采用 “烧烤串” 命名，如：`foo-bar.js`。
  - 路由组件采用 “烧烤串” 命名，如：`<foo-bar>`。
  - 路由 name 采用 “小驼峰” 命名，如：`name: 'fooBar'`。
