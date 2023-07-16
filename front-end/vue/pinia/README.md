# Pinia

> [Pinia 参考文档](https://pinia.vuejs.org/zh/)  
> 当前记录版本：v2

## 1. 基本概念

1. state
2. action
3. getter

## 2. 定义

<!-- tabs:start -->
<!-- tab:Option -->
在 Option Store 中：

- `state` 就是 store 的数据 (data)。
- `getters` 就是 store 的计算属性 (computed)。
- `actions` 就是 store 的方法 (methods)。

```js
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state() {
    return {
      count: 1,
    };
  },
  getters: {
    double(state) {
      return state.count * 2;
    },
  },
  actions: {
    increment(step) {
      this.count += step;
    },
  },
});
```

<!-- tab:Setup -->
在 Setup Store 中：

- `ref()` 就是 state。
- `computed()` 就是 getters。
- `function()` 就是 actions。

```js
import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", () => {
  const count = ref(1);

  const double = computed(() => count.value * 2);

  const increment = step => {
    count.value += step;
  };

  return { count, double, increment };
});
```
<!-- tabs:end -->

## 3. 使用

```vue
<script setup>
import { useCounterStore } from "@/stores/counter";

const counterStore = useCounterStore();

const onClick = () => {
  counterStore.increment(1);
};
</script>

<template>
  <p>store: {{ counterStore.count }}</p>
  <p>getter: {{ counterStore.double }}</p>
  <button @click="onClick">+1</button>
</template>
```
