<script setup lang="ts">
import { computed, inject } from 'vue'
import type { TabPaneProps } from './types'
import { tabsContextKey } from '../Tabs/types'

defineOptions({
  name: 'TabPane',
})

const TabsContext = inject(tabsContextKey)
const props = defineProps<TabPaneProps>()

const isActive = computed(() => TabsContext?.activeName.value === props.name)
</script>

<template>
  <div class="tab-pane" v-if="isActive">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.tab-pane {
  padding: 12px;
}
</style>