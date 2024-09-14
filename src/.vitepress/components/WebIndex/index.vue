<script setup lang="ts">
import Card from '../Card.vue'
import data from './data.json'

defineOptions({
  name: 'WebIndex',
})
</script>

<template>
  <div class="index-layout">
    <template v-for="(group, groupIndex) of data" :key="groupIndex">
      <h2 class="group-title">{{ group.title }}</h2>
      <div class="card-grid">
        <Card v-for="(item, itemIndex) of group.items" :key="itemIndex" :title="item.title" :details="item.details" :link="item.link" />
      </div>
    </template>
  </div>
</template>
