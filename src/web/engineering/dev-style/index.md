---
sidebar: false
---

# 开发风格

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

### Vue 项目通用结构

::: details 示例

```sh:no-line-numbers
├── dist                          # 编译文件
├── node_modules                  # 项目依赖
├── public                        # 静态文件（不会编译）
├── src                           # 开发主目录
│   ├── assets                    # 静态文件（会编译）
│   ├── components                # 全局组件
│   ├── icons                     # SVG 图标
│   ├── layout                    # 布局组件
│   ├── i18n                      # 国际化相关
│       ├── zh.json                 # 例如：中文翻译文本
│       ├── en.json                 # 例如：英文翻译文本
│       └── index.js                # 国际化配置文件
│   ├── router                    # Vue Router 路由相关
│       ├── routes.js               # 路由定义
│       └── index.js                # Vue Router 配置文件
│   ├── stores                    # 全局状态管理相关（pinia 为例）
│       ├── count                   # store 定义（例如 count）
│       └── index.js                # pinia 配置文件
│   ├── styles                    # 全局样式
│   ├── utils                     # 全局工具
│   ├── views                     # 路由组件
│   ├── App.vue                   # App 根组件
│   └── main.js                   # 项目入口（js）
├── README.md                     # 项目说明
├── index.html                    # 项目入口（html）
├── jsconfig.json                 # JavaScript 配置文件
├── package.json                  # npm 配置文件
└── vite.config.js                # 主配置文件（vite 为例）
```

:::

### components 命名

对于组件名我们推荐使用 PascalCase，因为这提高了模板的可读性，能帮助我们区分 Vue 组件和原生 HTML 元素。

- 一般组件
  - 一般组件文件采用 “大驼峰” 命名，如：`FooBar.vue`。
  - 一般组件采用 “大驼峰” 命名，如：`<FooBar>`。
- 路由
  - 路由文件采用 “烧烤串” 命名，如：`foo-bar.js`。
  - 路由组件采用 “烧烤串” 命名，如：`<foo-bar>`。
  - 路由 name 采用 “小驼峰” 命名，如：`name: 'fooBar'`。

### Props 命名

如果一个 prop 的名字很长，应使用 `camelCase` 形式，因为它们是合法的 JavaScript 标识符，可以直接在模板的表达式中使用，也可以避免在作为属性 key 名时必须加上引号。

```js
defineProps(['modelValue'])
```

```vue-html
<span>{{ modelValue }}</span>
```

虽然理论上你也可以在向子组件传递 props 时使用 `camelCase` 形式 (使用 DOM 内模板时例外)，但实际上为了和 HTML attribute 对齐，我们通常会将其写为 `kebab-case` 形式：

```vue-html
<MyComponent modelValue="hello" />
<MyComponent model-value="hello" />
```

### emit 命名

事件的名字也提供了自动的格式转换。

```js
defineEmits(['update:modelValue'])
```

与 prop 大小写格式一样，在模板中我们也推荐使用 `kebab-case` 形式来编写监听器。

```vue-html
<MyComponent @update:modelValue="callback" />
<MyComponent @update:model-value="callback" />
```
