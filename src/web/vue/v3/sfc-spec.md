# SFC

## SFC 结构总览

一个 Vue 单文件组件 (SFC)，通常使用 `*.vue` 作为文件扩展名。

::: tip
[这里](https://play.vuejs.org)，试一试。
:::

每一个 `*.vue` 文件都由三种顶层语言块构成：`<template>`、`<script>` 和 `<style>`，以及一些其他的自定义块：

```vue
<template>
  <div class="example">{{ msg }}</div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'Hello world!'
    }
  }
}
</script>

<style>
.example {
  color: red;
}
</style>

<custom1>
  This could be e.g. documentation for the component.
</custom1>
```

## `<script setup>`

<https://cn.vuejs.org/api/sfc-script-setup.html>

### 顶层 await

`<script setup>` 中可以使用顶层 `await`。结果代码会被编译成 `async setup()`：

```vue
<script setup>
const post = await fetch(`/api/post/1`).then((r) => r.json())
</script>
```

另外，`await` 的表达式会自动编译成在 `await` 之后保留当前组件实例上下文的格式。

::: warning
`async setup()` 必须与 `Suspense` 组合使用，**该特性目前仍处于实验阶段**。
:::
