# Vue2 记录

::: warning
[Vue 2](https://v2.cn.vuejs.org/) 已于 **2023 年 12 月 31 日** 停止维护。[详见 Vue 2 终止支持 (EOL)](https://v2.cn.vuejs.org/eol/)。
:::

## Vue 执行顺序

> 源码参考：<https://github.com/vuejs/vue/blob/dev/src/core/instance/state.js#L49-L63>

故而得出执行顺序：props -> methods -> data -> computed -> watch

注意点：

1. computed、watch 只能作为变化监听，千万不能做初始化！
2. 所有的 init 方法必须直接调用数据库或者通过状态管理读取。

## Vue 深度选择器

> Vue Loader 文档参考：<https://vue-loader.vuejs.org/zh/guide/scoped-css.html>

一般在当前组件中使用其他组件时，可能会遇到其他组件设置样式时不生效的问题。
原因就是，如果在写样式时，加上scope，那么样式后面都会存在一个属性选择器。
而使用深度选择器后，就不会有属性选择器了。

总结：

- 原生 >>>
- less /deep/
- sass ::v-deep

## v-modal

`v-model` 是 `:value="val" @input` 的语法糖。

props 默认为 `value`，event 默认为 `input`，可通过 [`model`](https://v2.cn.vuejs.org/v2/api/#model) 自定义。

## :xxxValue.sync

`:xxxValue.sync` 是 `:xxxValue="val" @update:xxxValue` 的语法糖。

## Vue 中重置 data 数据

在某种情况下，需要重置 Vue 组件的 data 数据。此时，我们可以通过 `this.$data` 获取当前状态下的 data，通过 `this.$options.data()` 获取该组件初始状态下的 data。然后只要使用 `Object.assign(this.$data, this.$options.data())` 就可以将当前状态的 data 重置为初始状态，非常方便！
