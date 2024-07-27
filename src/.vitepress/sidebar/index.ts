import type { DefaultTheme } from 'vitepress'
import dev from './modules/dev'
import quickReference from './modules/quick-reference'
import web from './modules/web'
import article from './modules/article'
import interview from './modules/interview'

export default function sidebar(): DefaultTheme.Sidebar {
  return {
    // 开发环境
    ...dev,

    // 速查手册
    ...quickReference,

    // web(HTML, CSS, JS, ...)
    ...web,

    // 随记
    ...article,

    // 面试题
    ...interview,
  }
}
