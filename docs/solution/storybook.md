[Introduction to Storybook](https://storybook.js.org/docs/vue/get-started/introduction)
# 项目初始化
> **环境配置**
> - **node.js v16**
> - **vue.js v2.6**
> - **webpack v4**
> - **storybook v6.5**

1. 新建项目脚手架
2. `npx storybook init`

项目安装完 Storybook 后，项目会出现两个文件夹：`.storybook`和 `src/stories`。

- `.storybook`项目配置。
- `src/stories`story 展示。
```json
// package.json
"devDependencies": {
  "@babel/core": "^7.20.12",
  "@storybook/addon-actions": "^6.5.15",
  "@storybook/addon-essentials": "^6.5.15",
  "@storybook/addon-interactions": "^6.5.15",
  "@storybook/addon-links": "^6.5.15",
  "@storybook/builder-webpack4": "^6.5.15",
  "@storybook/manager-webpack4": "^6.5.15",
  "@storybook/testing-library": "0.0.13",
  "@storybook/vue": "^6.5.15",
  "babel-loader": "^8.3.0",
  "vue-loader": "^15.10.1"
}
```
# 核心文件
## main.js【主配置文件】
```javascript
// .storybook/main.js

module.exports = {
  // story 文件位置
  stories: [
    '../src/stories/**/*.stories.mdx',
    '../src/stories/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  // 插件
  addons: [
    '@storybook/addon-links', // 默认
    '@storybook/addon-essentials', // 默认
    '@storybook/addon-interactions', // 默认
    '@storybook/preset-scss', // 集成 sass
    'storybook-design-token', // 设计 token
    '@storybook/addon-a11y' // 可访问性
  ],
  // 框架特定配置
  framework: '@storybook/vue',
  // 自定义 webpack 配置
  webpackFinal: async (config, { configType }) => {
    return config;
  },
  // 自定义 babel 配置
  babel: async (options) => ({
    ...options
  }),
}
```
## preview.js
```javascript
// .storybook/preview.js

export const parameters = {
  actions: { argTypesRegex: '^[a-z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
}
```
## *.stories.js
```javascript
// stories/*.stories.js

import Button from './Button.vue';

export default {
  title: 'Button',
  component: Button,
};

export const Primary = () => ({
  components: { Button },
  template: '<Button primary label="Button" />',
});
// 重命名
Primary.storyName = '主要';

// args 参数
Primary.args = {
  primary: true,
  label: 'Button',
};
```
# 插件篇
[Integrations | Storybook: Frontend workshop for UI development](https://storybook.js.org/integrations/)
## css 预解析(scss)

1. `npm i -D @storybook/preset-scss css-loader@5.2.7 sass sass-loader@10.1.1 style-loader@2.0.0`
```json
// package.json
"devDependencies": {
  "@storybook/preset-scss": "^1.0.3",
  "css-loader": "^5.2.7",
  "sass": "^1.57.1",
  "sass-loader": "^10.1.1",
  "style-loader": "^2.0.0"
}
```

2. 配置
```javascript
// .storybook/main.js
module.exports = {
  addons: [
    '@storybook/preset-scss'
  ]
}
```
## 可访问性

1. `npm i -D @storybook/addon-a11y`
2. 配置
```javascript
// .storybook/main.js
module.exports = {
  addons: [
    '@storybook/addon-a11y'
  ]
}
```
## design-token

1. `npm i -D storybook-design-token`
2. 配置
```javascript
// .storybook/main.js
module.exports = {
  addons: ['storybook-design-token']
};
```
# Notes
## 配置参考
[https://storybook.js.org/docs/vue/configure/overview](https://storybook.js.org/docs/vue/configure/overview)
## 集成 element-ui
在`.storybook/preview.js`下添加如下配置
```javascript
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI)

export const parameters = {
  // ...
}
```
## 设置 webpack 别名
```javascript
const path = require('path')

module.exports = {
  webpackFinal: async config => {
    config.resolve.alias['@'] = path.resolve(__dirname, '../src')
    return config
  }
}
```
## 指定静态文件目录
```javascript
// .storybook/main.js

module.exports = {
  staticDirs: ['../public'],
};
```
