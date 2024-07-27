# Nuxt.js

::: tip
当前记录 [Nuxt.js](https://nuxt.com) 版本为：3.x。

[Nuxt.js 社区中文网](https://nuxt.com.cn)
:::

## SPA 和 SSR

**SPA（Single Page Application）单页面应用**，在 **客户端** 通过 JS 动态构建页面。

1. 首次加载速度慢。
2. 页面切换流畅，仅需动态渲染 **变化的部分**，用户体验上更好。
3. 对搜索引擎不友好。

**SSR（Server-Side Rendering）服务器端渲染**，在 **服务器端** 生成 HTML 页面并发送给客户端。

1. 首次加载速度快。
2. 页面切换可能不流畅，因为每个页面都是从服务器端来获取的，每个页面都需要动态渲染。
3. SSR 对搜索引擎友好。

## Nuxt 的优势

Nuxt 采用了 **混合的架构模式**，同时支持 SSR 和 SPA，兼顾了 SSR 和 SPA 的优点。

- SSR 服务端渲染：首次访问页面，Nuxt.js 在服务器端执行 Vue 组件的渲染，并生成初始 HTML。
- SPA 客户端激活：一旦初始 HTML 被发送至浏览器，Vue.js 会接管页面，后续的页面切换则使用 SPA 的方式进行。
