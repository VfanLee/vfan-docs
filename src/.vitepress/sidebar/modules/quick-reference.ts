import type { DefaultTheme } from 'vitepress'

const sidebar: DefaultTheme.Sidebar = {
  '/quick-reference/vanilla-api/': [
    {
      text: 'ES API',
      items: [
        { text: 'Array', link: '/quick-reference/vanilla-api/array' },
        { text: 'String', link: '/quick-reference/vanilla-api/string' },
      ],
    },
    {
      text: 'Web API',
      items: [{ text: 'DOM 操作', link: '/quick-reference/vanilla-api/dom-operation' }],
    },
  ],
  '/quick-reference/snippet/': [
    {
      text: '代码片段',
      items: [
        { text: 'Array', link: '/quick-reference/snippet/array' },
        { text: 'String', link: '/quick-reference/snippet/string' },
        { text: 'Number', link: '/quick-reference/snippet/number' },
        { text: 'Date', link: '/quick-reference/snippet/date' },
        { text: 'Function', link: '/quick-reference/snippet/function' },
        { text: 'Object', link: '/quick-reference/snippet/object' },
        { text: 'Utils', link: '/quick-reference/snippet/utils' },
      ],
    },
  ],
}

export default sidebar
