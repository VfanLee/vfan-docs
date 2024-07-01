# Vue3

## 强制刷新某个组件

1. 通过 v-if。
2. 可以通过更新 `key` 值来实现。推荐。

## `h` 函数

<https://cn.vuejs.org/api/render-function.html#h>

## 什么是 Vue 的响应式？

Vue 的响应式指的是：数据变化时，依赖数据的函数重新运行。

在 Vue 开发中，数据和组件的 render 函数关联在一起，从而实现了数据变化时，会重新执行 render 函数。当然除了 vue 中的 render 函数之外，如：computed、watch …… 也是响应式的场景。
