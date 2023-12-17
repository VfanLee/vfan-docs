# Vue CLI

## 介绍

Vue CLI 是一个为 Vue.js 项目提供的官方脚手架工具，用于快速搭建和开发 Vue.js 应用。它采用了一些现代化的工程化实践，其中的开发服务器是基于 Webpack 和 webpack-dev-server 构建的。

## 导出当前项目的 webpack 配置文件

```sh
vue inspect --mode development > webpack.config.dev.js    # 开发环境
vue inspect --mode production > webpack.config.prod.js    # 生产环境
```
