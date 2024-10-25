import type { DefaultTheme } from 'vitepress'

const sidebar: DefaultTheme.Sidebar = {
  '/interview/': [
    {
      text: '参考',
      collapsed: false,
      items: [
        { text: '前端面试宝典', link: 'https://fe.ecool.fun/' },
        { text: 'web前端面试', link: 'https://vue3js.cn/interview/' },
      ],
    },
    { text: 'html', link: '/interview/html' },
    { text: 'css', link: '/interview/css' },
    { text: 'js', link: '/interview/js' },
    { text: 'ts', link: '/interview/ts' },
    { text: 'vue', link: '/interview/vue' },
    { text: 'other', link: '/interview/other' },
  ],
}

export default sidebar
