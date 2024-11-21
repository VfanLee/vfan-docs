import type { DefaultTheme } from 'vitepress'

const sidebar: DefaultTheme.Sidebar = {
  '/quick-reference/native-api/': [
    {
      text: '内置对象',
      items: [
        { text: 'Array', link: '/quick-reference/native-api/array' },
        { text: 'String', link: '/quick-reference/native-api/string' },
        { text: 'Object', link: '/quick-reference/native-api/object' },
      ],
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
        { text: 'DOM', link: '/quick-reference/snippet/dom' },
      ],
    },
  ],
  '/quick-reference/css/': [
    {
      text: 'css 相关',
      items: [
        { text: '选择器', link: '/quick-reference/css/selector' },
        { text: '逻辑属性', link: '/quick-reference/css/logical-properties' },
      ],
    },
  ],
  '/quick-reference/sass/': [
    {
      text: 'sass 相关',
      items: [{ text: 'mixins', link: '/quick-reference/sass/mixins' }],
    },
  ],
}

export default sidebar
