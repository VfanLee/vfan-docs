<!-- https://github.com/vuejs/vitepress/blob/main/src/client/theme-default/Layout.vue -->
<script setup lang="ts">
import { useRoute } from 'vitepress'
import { watch } from 'vue'
// import VPBackdrop from 'vitepress/dist/client/theme-default/components/VPBackdrop.vue'
import VPContent from 'vitepress/dist/client/theme-default/components/VPContent.vue'
import VPFooter from 'vitepress/dist/client/theme-default/components/VPFooter.vue'
import VPLocalNav from 'vitepress/dist/client/theme-default/components/VPLocalNav.vue'
import VPNav from 'vitepress/dist/client/theme-default/components/VPNav.vue'
import VPSidebar from 'vitepress/dist/client/theme-default/components/VPSidebar.vue'
// import VPSkipLink from 'vitepress/dist/client/theme-default/components/VPSkipLink.vue'
import { useData } from 'vitepress/dist/client/theme-default/composables/data'
import { useCloseSidebarOnEscape, useSidebar } from 'vitepress/dist/client/theme-default/composables/sidebar'

const { isOpen: isSidebarOpen, open: openSidebar, close: closeSidebar } = useSidebar()

const route = useRoute()
watch(() => route.path, closeSidebar)

useCloseSidebarOnEscape(isSidebarOpen, closeSidebar)

const { frontmatter } = useData()
</script>

<template>
  <div :class="frontmatter.pageClass">
    <!-- <VPSkipLink /> -->
    <!-- <VPBackdrop class="backdrop" :show="isSidebarOpen" @click="closeSidebar" /> -->
    <!-- <VPNav></VPNav> -->
    <!-- <VPLocalNav :open="isSidebarOpen" @open-menu="openSidebar" /> -->
    <!-- <VPSidebar :open="isSidebarOpen"></VPSidebar> -->
    <VPContent></VPContent>
    <VPFooter />
  </div>
</template>

<style scoped>
.Layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
