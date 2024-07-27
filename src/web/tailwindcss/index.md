# Tailwind CSS

## 介绍

Tailwind CSS 是一个 CSS 框架，本质上是一个工具集，包含了大量类似 `flex`、`pt-4`、`text-center` 以及 `rotate-90` 等工具 class，可以组合使用并直接在 HTML 代码上实现任何 UI 设计。

## 参考

- [官方文档（英文）](https://tailwindcss.com/)
- [中文文档](https://www.tailwindcss.cn/)

## nuxt

1. 安装

   ```sh
   npm i @nuxtjs/tailwindcss
   ```

2. `nuxt.config.js` 添加模块

   ```js
   export default defineNuxtConfig({
     // ...
     modules: [
       // ...
       '@nuxtjs/tailwindcss',
     ],
   })
   ```
