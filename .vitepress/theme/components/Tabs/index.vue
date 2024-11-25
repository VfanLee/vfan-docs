<script setup lang="ts">
import { ref, provide, useSlots, watch } from 'vue'
import { tabsContextKey } from './types'
import type { TabsProps, TabsEmits } from './types'
import type { TabPaneProps } from '../TabPane/types'

defineOptions({
  name: 'Tabs',
})

const props = defineProps<TabsProps>()
defineEmits<TabsEmits>()
const slots = useSlots()

const panes = ref<TabPaneProps[]>([])

watch(
  () => (typeof slots.default === 'function' ? slots.default() : []),
  newVal => {
    panes.value = newVal.map(p => ({
      label: p.props?.label,
      name: p.props?.name,
    }))
  },
  { immediate: true },
)

const activeName = ref(props.modelValue)

provide(tabsContextKey, {
  activeName,
})
</script>

<template>
  <div class="tabs">
    <div class="tabs__header">
      <div class="tabs__nav">
        <div class="tabs__item" :class="{ 'is-active': activeName === pane.name }" v-for="pane of panes" :key="pane.name" @click="activeName = pane.name">
          {{ pane.label }}
        </div>
      </div>
    </div>
    <div class="tabs__content">
      <slot />
    </div>
  </div>
</template>

<style lang="scss">
.tabs__nav {
  display: flex;
  border-bottom: 1px solid var(--vp-c-divider, #e2e2e3);
}

.tabs__item {
  position: relative;
  padding: 0 12px;
  font-weight: 700;
  line-height: 48px;
  cursor: pointer;

  &.is-active {
    color: var(--vp-c-text-1);

    &::after {
      position: absolute;
      right: 8px;
      bottom: -1px;
      left: 8px;
      z-index: 1;
      height: 2px;
      border-radius: 2px;
      content: '';
      background-color: var(--vp-c-brand-1);
      transition: background-color 0.25s;
    }
  }
}
</style>
