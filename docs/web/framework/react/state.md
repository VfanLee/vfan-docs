# State

## 声明 State

```vue
<script setup>
import { ref } from "vue";
const name = ref("John");
</script>

<template>
  <h1>Hello {{ name }}</h1>
</template>
```

## 更新 State

```vue
<script setup>
import { ref } from "vue";
const name = ref("John");
name.value = "Jane";
</script>

<template>
  <h1>Hello {{ name }}</h1>
</template>
```
