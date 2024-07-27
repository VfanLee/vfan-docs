import type { DefaultTheme } from 'vitepress'

const sidebar: DefaultTheme.Sidebar = {
  '/quick-reference/': [
    {
      text: '开发环境搭建',
      link: '/dev/front-end',
      collapsed: true,
      items: [],
      target: '_blank',
    },
    {
      text: '解决方案',
      link: 'https://github.com/VfanLee/vfan-solution/blob/main/README.md#vfan-solution',
      collapsed: true,
      items: [],
    },

    {
      text: '原生方法',
      collapsed: true,
      items: [
        { text: 'Array 方法汇总', link: '/quick-reference/vanilla-js/array' },
        { text: 'String 方法汇总', link: '/quick-reference/vanilla-js/string' },
        { text: 'DOM 操作', link: '/quick-reference/vanilla-js/dom-operation' },
      ],
    },
    {
      text: '代码片段',
      collapsed: true,
      items: [
        { text: 'Array', link: '/quick-reference/tools-snippet/array' },
        { text: 'String', link: '/quick-reference/tools-snippet/string' },
        { text: 'Number', link: '/quick-reference/tools-snippet/number' },
        { text: 'Date', link: '/quick-reference/tools-snippet/date' },
        { text: 'Function', link: '/quick-reference/tools-snippet/function' },
        { text: 'Object', link: '/quick-reference/tools-snippet/object' },
        { text: 'Utils', link: '/quick-reference/tools-snippet/utils' },
      ],
    },
  ],
}

export default sidebar
