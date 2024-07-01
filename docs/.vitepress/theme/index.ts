import './styles/custom.css'

import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

import Layout from './Layout.vue'
import Demo from '../components/Demo.vue'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app, router, siteData }) {
    app.component('Demo', Demo)
  },
} satisfies Theme
