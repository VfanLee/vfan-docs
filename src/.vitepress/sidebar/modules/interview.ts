import type { DefaultTheme } from 'vitepress'

const sidebar: DefaultTheme.Sidebar = {
  '/interview/': [
    { text: 'html', link: '/interview/html' },
    { text: 'css', link: '/interview/css' },
    { text: 'js', link: '/interview/js' },
    { text: 'ts', link: '/interview/ts' },
    { text: 'vue', link: '/interview/vue' },
    { text: 'other', link: '/interview/other' },
  ],
}

export default sidebar
