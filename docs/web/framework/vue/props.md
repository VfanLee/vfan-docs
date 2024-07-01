# props

prop model === $props.model === props.model

```vue
<script setup>
const props = defineProps(['modelValue']) // 不成文规定，一般取名为：props
</script>

<template>
  <input type="text" :value="modelValue" />

  <input type="text" :value="$props.modelValue" />

  <input type="text" :value="props.modelValue" />
</template>
```