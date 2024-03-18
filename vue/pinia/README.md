# Pinia

> 当前记录版本：v2

## 目录规范

https://pinia.vuejs.org/zh/cookbook/migration-vuex.html#restructuring-modules-to-stores

## 定义

### Options API

<!-- tabs:start -->
<!-- tab:Options -->
在 Options Store 中：

- `state` 就是 store 的数据 (data)。
- `getters` 就是 store 的计算属性 (computed)。
- `actions` 就是 store 的方法 (methods)。

```js
import { defineStore } from "pinia"

export const useCounterStore = defineStore("counter", {
  state() {
    return {
      count: 1,
    }
  },
  getters: {
    double(state) {
      return state.count * 2
    },
  },
  actions: {
    increment(step) {
      this.count += step
    },
  },
})
```

### Composition API

<!-- tab:Setup -->
在 Setup Store 中：

- `ref()` 就是 state。
- `computed()` 就是 getters。
- `function()` 就是 actions。

```js
import { ref, computed } from "vue"
import { defineStore } from "pinia"

export const useCounterStore = defineStore("counter", () => {
  const count = ref(1)

  const double = computed(() => count.value * 2)

  const increment = step => {
    count.value += step
  }

  return { count, double, increment }
})
```
<!-- tabs:end -->

## 基本使用

### 在组件中使用 store

```vue
<script setup>
import { useCounterStore } from "@/stores/counter"

const counterStore = useCounterStore()

const onClick = () => {
  counterStore.increment(1)
}
</script>

<template>
  <p>store: {{ counterStore.count }}</p>
  <p>getter: {{ counterStore.double }}</p>
  <button @click="onClick">+1</button>
</template>
```

### 在组件外使用 store

在组件外使用 store 时，语法也是一样的，但需要注意加载顺序的问题，参考：[Vue Router 中使用 Pinia](https://pinia.vuejs.org/zh/core-concepts/outside-component-usage.html)。
