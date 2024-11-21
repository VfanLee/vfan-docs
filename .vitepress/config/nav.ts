import type { DefaultTheme } from 'vitepress'

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: 'JS 速查',
      items: [
        { text: '原生 API', link: '/quick-reference/native-api/array', activeMatch: '/quick-reference/native-api/' },
        { text: '代码片段', link: '/quick-reference/snippet/array', activeMatch: '/quick-reference/snippet/' },
      ],
    },
    {
      text: 'CSS 速查',
      items: [
        { text: 'css', link: '/quick-reference/css/selector', activeMatch: '/quick-reference/css/' },
        { text: 'sass', link: '/quick-reference/sass/mixins', activeMatch: '/quick-reference/sass/' },
      ],
    },
    { text: 'Web', link: '/web/', activeMatch: '/web/' },
    { text: '学无止境', link: '/learning/', activeMatch: '/learning/' },
    {
      text: '更多专题',
      items: [
        { text: '开发环境搭建', link: '/dev/front-end', target: '_blank' },
        { text: '📖 随记', link: '/article/', activeMatch: '/article/' },
        { text: '🤖 AI', link: '/ai/', activeMatch: '/ai/' },
        // { text: '✅ 面试题', link: '/interview/html' },
      ],
    },
  ]
}

export default nav()
