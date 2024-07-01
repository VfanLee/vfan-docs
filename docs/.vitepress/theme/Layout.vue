<script setup>
import DefaultTheme from 'vitepress/theme'
import { useRoute } from 'vitepress/client'
import ArticleLayout from './components/ArticleLayout.vue'

const { Layout } = DefaultTheme
const sidebar = DefaultTheme.DocSidebar

const route = useRoute()

const isArticlePage = route.path.startsWith('/article')
</script>

<template>
  <ArticleLayout v-if="isArticlePage" />
  <Layout v-else />
</template>
