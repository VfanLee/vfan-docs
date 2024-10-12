import type { DefaultTheme } from 'vitepress'

export default function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: '速查手册',
      activeMatch: '/quick-reference/',
      items: [
        { text: '原生 API', link: '/quick-reference/native-api/array', activeMatch: '/quick-reference/native-api/' },
        { text: '代码片段', link: '/quick-reference/snippet/array', activeMatch: '/quick-reference/snippet/' },
        { text: 'CSS 相关', link: '/quick-reference/css/selector', activeMatch: '/quick-reference/css/' },
        { text: '开发环境搭建', link: '/dev/front-end', target: '_blank' },
      ],
    },
    { text: 'Web', link: '/web/', activeMatch: '/web/' },
    { text: '学无止境', link: '/learning/', activeMatch: '/learning/' },
    {
      text: '更多专题',
      items: [
        { text: '📖 随记', link: '/article/', activeMatch: '/article/' },
        { text: '🤖 AI', link: '/ai/', activeMatch: '/ai/' },
        // { text: '✅ 面试题', link: '/interview/html' },
      ],
    },
  ]
}
