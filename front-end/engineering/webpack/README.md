# Webpack

> 当前记录版本 v5

## 1. 什么是 Webpack ？

> 参考：[Webpack 概念](https://webpack.docschina.org/concepts/)

## 如何创建基于 Webpack 的项目？

### 创建普通项目

> 参考：[Webpack 起步](https://webpack.docschina.org/guides/getting-started/)

[webpack demo 演示](https://github.com/VfanLee/lab/tree/main/demo/webpack-demo)

### 创建 Vue 项目

使用官方脚手架 [vue-cli](https://cli.vuejs.org/zh/guide/installation.html) 来进行创建。

> - `vue-cli@5` 使用的 webpack 为 5.x 版本，若使用 vue2 / vue3 可以使用该版本。
> - `vue-cli@4` 使用的 webpack 为 4.x 版本，使用 vue2 也可以使用此版本。

```sh
npx @vue/cli create vue-project

# or
npm i -g @vue/cli
vue create vue-project
```

### 创建 React 项目

使用官方脚手架 [create-react-app](https://create-react-app.dev/) 来进行创建。

```sh
npx create-react-app react-project
```
