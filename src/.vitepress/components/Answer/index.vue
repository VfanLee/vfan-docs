<script setup lang="ts">
import { ref } from 'vue'

defineOptions({
  name: 'Answer',
})

const show = ref(false)
</script>

<template>
  <div class="answer" v-if="show">
    <button class="answer-btn hide" type="button" @click="show = false">隐藏答案</button>
    <slot></slot>
  </div>
  <button class="answer-btn show" type="button" v-else @click="show = true">显示答案</button>
</template>

<style lang="scss">
.answer {
  position: relative;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  padding: 0 8px;
}

.answer-btn {
  padding: 8px 12px;
  background-color: #eee;
  border-end-start-radius: 8px;
  font-size: 14px;
  &.hide {
    position: absolute;
    top: 0;
    right: 0;
  }
  &.show {
    border-radius: 8px;
  }
}
</style>
