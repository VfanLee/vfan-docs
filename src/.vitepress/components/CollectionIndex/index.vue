<script setup lang="ts">
import Card from '../Card.vue'
import data from './data.json'

defineOptions({
  name: 'CollectionIndex',
})
</script>

<template>
  <div class="index-layout">
    <div class="card-grid">
      <Card
        v-for="(item, itemIndex) of data"
        :key="itemIndex"
        :title="item.title"
        :details="item.details"
        :link="item.link"
      />
    </div>
  </div>
</template>
