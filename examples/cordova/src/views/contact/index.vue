<script setup>
import { ref } from 'vue'

const count = ref(0)
const loading = ref(false)
const onRefresh = () => {
  setTimeout(() => {
    loading.value = false
    count.value = 0
  }, 1000)
}
</script>

<template>
  <van-pull-refresh v-model="loading" @refresh="onRefresh">
    <h2>contact page</h2>

    <van-button type="primary" @click="count++">{{ count }}</van-button>
  </van-pull-refresh>
</template>

<style>
.van-pull-refresh {
  height: 100%;
}
</style>