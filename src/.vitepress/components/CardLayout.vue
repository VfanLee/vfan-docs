<script setup lang="ts">
import Card from './Card.vue'

defineOptions({
  name: 'CardLayout',
})
</script>

<template>
  <div class="card-layout"></div>
</template>

<style>
.card-layout {
  max-width: 1280px;
  margin: 0 auto;
  padding: 32px 24px 64px;
}
</style>
