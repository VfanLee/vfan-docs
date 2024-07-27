# emit

自定义事件

emit === $emit

```vue
<script setup>
const emit = defineEmits(['update:modelValue']) // 不成文规定，一般取名为 emit
</script>

<template>
  <input @input="e => $emit('update:modelValue', e.target.value)" />

  <input @input="e => emit('update:modelValue', e.target.value)" />
</template>
```
