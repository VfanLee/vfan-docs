<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const activeTab = ref(route.name)
</script>

<template>
  <van-tabbar class="l-tabbar__container" v-model="activeTab" :fixed="false">
    <van-tabbar-item name="chat" to="/chat" :icon="activeTab === 'chat' ? 'chat' : 'chat-o'">Chats</van-tabbar-item>
    <van-tabbar-item name="contact" to="/contact" :icon="activeTab === 'contact' ? 'friends' : 'friends-o'">Contacts</van-tabbar-item>
    <van-tabbar-item name="me" to="/me" :icon="activeTab === 'me' ? 'user' : 'user-o'">Me</van-tabbar-item>
  </van-tabbar>
</template>
