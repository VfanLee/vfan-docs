# 组合式函数

## 介绍

在 Vue 应用的概念中，“组合式函数”(Composables) 是一个利用 Vue 的组合式 API 来封装和复用 **有状态逻辑** 的函数。

## 约定和最佳实践

### 命名

组合式函数约定用驼峰命名法命名，并以 **“use”** 作为开头。

### 输入参数

即便不依赖于 `ref` 或 `getter` 的响应性，组合式函数也可以接收它们作为参数。

如果你正在编写一个可能被其他开发者使用的组合式函数，最好处理一下输入参数是 `ref` 或 `getter` 而非原始值的情况。可以利用 [toValue()](https://cn.vuejs.org/api/reactivity-utilities.html#tovalue) 工具函数来实现：

```js
import { toValue } from 'vue'

function useFeature(maybeRefOrGetter) {
  // 如果 maybeRefOrGetter 是一个 ref 或 getter，
  // 将返回它的规范化值。
  // 否则原样返回。
  const value = toValue(maybeRefOrGetter)
}
```

如果你的组合式函数在输入参数是 `ref` 或 `getter` 的情况下创建了响应式 `effect`，为了让它能够被正确追踪，请确保要么使用 `watch()` 显式地监视 `ref` 或 `getter`，要么在 `watchEffect()` 中调用 `toValue()`。

### 返回值

推荐的约定是组合式函数始终返回一个包含多个 `ref` 的普通的非响应式对象，这样该对象在组件中被解构为 `ref` 之后仍可以保持响应性：

```js
// x 和 y 是两个 ref
const { x, y } = useMouse()
```

从组合式函数返回一个响应式对象会导致在对象解构过程中丢失与组合式函数内状态的响应性连接。与之相反，`ref` 则可以维持这一响应性连接。

如果你更希望以对象属性的形式来使用组合式函数中返回的状态，你可以将返回的对象用 `reactive()` 包装一次，这样其中的 `ref` 会被自动解包，例如：

```js
const mouse = reactive(useMouse())
// mouse.x 链接到了原来的 x ref
console.log(mouse.x)
```

```vue-html
Mouse position is at: {{ mouse.x }}, {{ mouse.y }}
```

### 副作用​

在组合式函数中的确可以执行副作用 (例如：添加 DOM 事件监听器或者请求数据)，但请注意以下规则：

- 如果你的应用用到了[服务端渲染 (SSR)](https://cn.vuejs.org/guide/scaling-up/ssr.html)，请确保在组件挂载后才调用的生命周期钩子中执行 DOM 相关的副作用，例如：`onMounted()`。这些钩子仅会在浏览器中被调用，因此可以确保能访问到 DOM。
- 确保在 `onUnmounted()` 时清理副作用。举例来说，如果一个组合式函数设置了一个事件监听器，它就应该在 `onUnmounted()` 中被移除。

### 使用限制

组合式函数只能在 `<script setup>` 或 `setup()` 钩子中被调用。在这些上下文中，它们也只能被 **同步** 调用。在某些情况下，你也可以在像 `onMounted()` 这样的生命周期钩子中调用它们。

这些限制很重要，因为这些是 Vue 用于确定当前活跃的组件实例的上下文。访问活跃的组件实例很有必要，这样才能：

- 将生命周期钩子注册到该组件实例上
- 将计算属性和监听器注册到该组件实例上，以便在该组件被卸载时停止监听，避免内存泄漏。

::: tip
`<script setup>` 是唯一在调用 `await` 之后仍可调用组合式函数的地方。编译器会在异步操作之后自动为你恢复当前的组件实例。
:::
