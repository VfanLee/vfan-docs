import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { DefineComponent } from 'vue'

import './styles/index.scss'

export default {
  extends: DefaultTheme,
  async enhanceApp({ app, router, siteData }) {
    const components = import.meta.glob('./components/**/index.vue')
    for (const path in components) {
      const match = path.match(/\/([^/]+)\/index\.vue$/)
      const name = match ? match[1] : null
      if (name) {
        const component = (await components[path]()) as DefineComponent
        app.component(name, component.default)
      }
    }
  },
} satisfies Theme
