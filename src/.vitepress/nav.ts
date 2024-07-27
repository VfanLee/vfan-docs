import type { DefaultTheme } from 'vitepress'

export default function nav(): DefaultTheme.NavItem[] {
  return [
    { text: '速查手册', link: '/quick-reference/vanilla-js/array', activeMatch: '/quick-reference/' },
    {
      text: '演练场',
      items: [
        { text: 'MDN play', link: 'https://developer.mozilla.org/zh-CN/play' },
        { text: 'CodePen', link: 'https://codepen.io/pen' },
        { text: 'TypeScript', link: 'https://www.typescriptlang.org/zh/play/' },
        { text: 'Vue3', link: 'https://play.vuejs.org/' },
        { text: 'Element Plus', link: 'https://element-plus.run/' },
        { text: 'Sass', link: 'https://sass-lang.com/playground/' },
        { text: '正则表达式', link: 'https://regex101.com/' },
      ],
    },
    { text: 'Web', link: '/web/' },
    {
      text: '更多专题',
      items: [
        { text: '👨‍💻 学无止境', link: '/learning/' },
        { text: '🤖 AI', link: '/ai/' },
        { text: '✨ 珍藏网站', link: '/collection/' },
        { text: '📖 随记', link: '/article/' },
        { text: '✅ 面试题', link: '/interview/html' },
      ],
    },
  ]
}
