import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

import "./styles/tailwind.css";
import './styles/index.css'

import Demo from '../components/Demo/index.vue'
import Answer from '../components/Answer/index.vue'

import WebIndex from '../components/WebIndex/index.vue'
import LearningIndex from '../components/LearningIndex/index.vue'
import AiIndex from '../components/AiIndex/index.vue'
import CollectionIndex from '../components/CollectionIndex/index.vue'
import ArticleIndex from '../components/ArticleIndex/index.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    app.component('Demo', Demo)
    app.component('Answer', Answer)

    app.component('WebIndex', WebIndex)
    app.component('LearningIndex', LearningIndex)
    app.component('AiIndex', AiIndex)
    app.component('CollectionIndex', CollectionIndex)
    app.component('ArticleIndex', ArticleIndex)
  },
} satisfies Theme
