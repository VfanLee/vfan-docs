# Computed State

```vue
<script setup>
import { ref, computed } from "vue";
const count = ref(10);
const doubleCount = computed(() => count.value * 2);
</script>

<template>
  <div>{{ doubleCount }}</div>
</template>
```

计算属性不能直接传参，但是可以通过返回一个函数来进行间接传参。
