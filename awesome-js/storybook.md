# Storybook

> 文档：https://storybook.js.org/docs/vue/get-started/introduction  
> 当前版本：6.5.16

## 1. 安装

> - node.js v16
> - vue.js v2.6
> - webpack v4

```sh
npx storybook init
```

## 2. 目录介绍

```txt
|-- .storybook
  |-- main.js
  |-- preview.js
|-- story
  |-- *.stories.mdx
  |-- *.stories.js
```

### 2.1. main.js

```js
module.exports = {
  // 指定静态目录
  staticDirs: ['../public'],
  // webpack 配置
  webpackFinal: async config => {
    config.resolve.alias['@'] = path.resolve(__dirname, '../src')
    return config
  }
}
```

### 2.2. preview.js

```js
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

// 集成 Element UI
Vue.use(ElementUI)

export const parameters = {
  // ...
}
```

## 3. 插件

### 3.1. scss 支持

<!-- tabs:start -->
<!-- tab:安装 -->
```sh
npm i -D @storybook/preset-scss css-loader@5.2.7 sass sass-loader@10.1.1 style-loader@2.0.0
```

<!-- tab:配置 -->
```js
// main.js
module.exports = {
  addons: [
    '@storybook/preset-scss'
  ]
}
```
<!-- tabs:end -->

### 3.2. 可访问性

<!-- tabs:start -->
<!-- tab:安装 -->
```sh
npm i -D @storybook/addon-a11y
```

<!-- tab:配置 -->
```js
// main.js
module.exports = {
  addons: [
    '@storybook/addon-a11y'
  ]
}
```
<!-- tabs:end -->

### 3.3. design-token

<!-- tabs:start -->
<!-- tab:安装 -->
```sh
npm i -D storybook-design-token
```

<!-- tab:配置 -->
```js
// main.js
module.exports = {
  addons: [
    'storybook-design-token'
  ]
}
```
<!-- tabs:end -->
