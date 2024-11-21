# SFC

## 总览

一个 Vue 单文件组件 (SFC)，通常使用 `*.vue` 作为文件扩展名。

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

## 其他

- [@vue/compiler-sfc 在线预览](https://play.vuejs.org)
