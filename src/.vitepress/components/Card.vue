<script lang="ts" setup>
import { EXTERNAL_URL_RE, normalizeLink } from '../utils'
import { computed } from 'vue'

defineOptions({
  name: 'Card',
})

const props = defineProps<{
  title: string
  details?: string
  link: string
}>()

const isExternal = computed(() => props.link && EXTERNAL_URL_RE.test(props.link))
</script>

<template>
  <div class="card">
    <div class="card__header" :title="title">📖 {{ title }}</div>
    <div class="card__body" :title="details">{{ details }}</div>
    <div class="card__footer">
      <a
        class="link"
        :href="link ? normalizeLink(link) : undefined"
        :target="isExternal ? '_blank' : undefined"
        :rel="isExternal ? 'noreferrer' : undefined"
      >
        查看更多
      </a>
    </div>
  </div>
</template>

<style lang="scss">
.card {
  padding: 24px;
  border: 1px solid var(--vp-c-bg-soft);
  border-radius: 12px;
  background-color: var(--vp-c-bg-soft);
  transition: border-color 0.25s, background-color 0.25s;
}
.card__header {
  line-height: 24px;
  font-size: 16px;
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.card__body {
  height: 24px;
  margin: 6px 0;
  line-height: 24px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-2);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.card__footer {
  text-align: end;
  font-size: 14px;
  color: var(--vp-c-brand-1);
}
.link {
  cursor: pointer;
}
</style>
