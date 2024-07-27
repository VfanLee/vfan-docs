# State

## 声明 State

### ref() 👍

- ref() 用于创建一个包含单一值的响应式引用。可以是任何基本类型（如字符串、数字、布尔值）或对象类型。
- 访问/修改对象属性时，需要通过 `.value` 访问/修改其值。

```vue
<script setup>
import { ref } from 'vue'
const name = ref('John')
</script>

<template>
  <h1>Hello {{ name }}</h1>
</template>
```

### reactive()

- reactive() 用于创建一个包含多个属性的响应式对象。这个对象的所有属性都会变成响应式的。
- 访问/修改对象属性时，直接操作属性即可。

```vue
<script setup>
import { ref } from 'vue'
const name = ref('John')
</script>

<template>
  <h1>Hello {{ name }}</h1>
</template>
```

## 更新 State

```vue
<script setup>
import { ref } from 'vue'
const name = ref('John')
name.value = 'Jane'
</script>

<template>
  <h1>Hello {{ name }}</h1>
</template>
```
