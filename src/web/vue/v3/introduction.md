# Vue 介绍

## 什么是 Vue？

Vue (发音为 /vjuː/，类似 view) 是一款用于构建用户界面的 JavaScript 框架。

## 使用 Vue 的多种方式

### create-vue

<https://github.com/vuejs/create-vue>

The recommended way to start a Vite-powered Vue project

### Vue CLI

<https://github.com/vuejs/vue-cli>

### 导出当前项目的 webpack 配置文件

```sh
vue inspect --mode development > webpack.config.dev.js    # 开发环境
vue inspect --mode production > webpack.config.prod.js    # 生产环境
```
