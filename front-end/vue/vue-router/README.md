# Vue Router

> [Vue Router 参考文档](https://router.vuejs.org/zh/)  
> 当前记录版本：v4

## 编程式导航

> 参考 [编程式导航](https://router.vuejs.org/zh/guide/essentials/navigation.html)

`router.push()` 和 `router.replace()` 会返回一个 Promise 对象，若希望在路由变更后在执行某些操作，需要配合 `then()` 或者 `async / await` 来进行使用。

## 历史记录模式

> 参考 [不同的历史记录模式](https://router.vuejs.org/zh/guide/essentials/history-mode.html)

## 获取路由表

1. [router.options.routes](https://router.vuejs.org/zh/api/interfaces/RouterOptions.html#Properties-routes)：路由器的初始路由列表。
2. [router.getRoutes()](https://router.vuejs.org/zh/api/interfaces/Router.html#Methods-getRoutes)：获得所有路由记录的完整列表。
