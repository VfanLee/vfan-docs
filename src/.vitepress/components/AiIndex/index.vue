<script setup lang="ts">
import Card from '../Card.vue'
import data from './data.json'
</script>

<template>
  <div class="index-layout">
    <div class="card-grid">
      <Card v-for="item of data" :title="item.text" :link="item.link" />
    </div>
  </div>
</template>
