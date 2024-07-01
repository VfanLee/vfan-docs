import type { DefaultTheme } from 'vitepress'
import quickRefrence from './modules/quick-refrence'
import web from './modules/web'
import expandSidebar from './modules/expand'
import articleSidebar from './modules/article'

export default function sidebar(): DefaultTheme.Sidebar {
  return {
    // 速查手册
    ...quickRefrence,

    // web(HTML, CSS, JS, ...)
    ...web,

    // 技术拓展
    ...expandSidebar,

    // 随记
    ...articleSidebar,
  }
}
