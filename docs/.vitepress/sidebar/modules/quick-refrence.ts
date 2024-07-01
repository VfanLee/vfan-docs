import type { DefaultTheme } from 'vitepress'

const quickRefrenceSidebar: DefaultTheme.Sidebar = {
  '/quick-refrence/': [
    // 解决方案
    { text: '解决方案', link: 'https://github.com/VfanLee/vfan-solution/blob/main/README.md#vfan-solution', collapsed: true, items: [] },

    {
      text: '原生方法',
      collapsed: true,
      items: [
        { text: 'Array 方法汇总', link: '/quick-refrence/vanilla-js/array' },
        { text: 'String 方法汇总', link: '/quick-refrence/vanilla-js/string' },
        { text: 'DOM 操作', link: '/quick-refrence/vanilla-js/dom-operation' },
      ],
    },
    {
      text: '代码片段',
      collapsed: true,
      items: [
        { text: 'Array', link: '/quick-refrence/tools-snippet/array' },
        { text: 'String', link: '/quick-refrence/tools-snippet/string' },
        { text: 'Number', link: '/quick-refrence/tools-snippet/number' },
        { text: 'Date', link: '/quick-refrence/tools-snippet/date' },
        { text: 'Function', link: '/quick-refrence/tools-snippet/function' },
        { text: 'Object', link: '/quick-refrence/tools-snippet/object' },
        { text: 'Utils', link: '/quick-refrence/tools-snippet/utils' },
      ],
    },
    {
      text: 'Git',
      collapsed: true,
      items: [
        { text: '命令', link: '/quick-refrence/git/command' },
        { text: '配置', link: '/quick-refrence/git/configuration' },
        { text: '.gitignore', link: '/quick-refrence/git/gitignore' },
      ],
    },
    { text: 'SVN', link: '/quick-refrence/svn/' },
    {
      text: '代码质量',
      collapsed: true,
      items: [
        { text: '约定式提交', link: '/quick-refrence/code-quality/conventional-commits' },
        { text: '开发风格', link: '/quick-refrence/code-quality/dev-style' },
      ],
    },
    {
      text: '开发环境搭建',
      collapsed: true,
      items: [
        {
          text: 'Windows',
          collapsed: false,
          items: [
            { text: '系统安装', link: '/quick-refrence/dev-env/windows/windows-install' },
            { text: 'node.js', link: '/quick-refrence/dev-env/windows/nodejs' },
            { text: 'Java', link: '/quick-refrence/dev-env/windows/java' },
            { text: 'Android', link: '/quick-refrence/dev-env/windows/android' },
            { text: 'Python', link: '/quick-refrence/dev-env/windows/python' },
          ],
        },
        {
          text: 'Linux - Ubuntu',
          collapsed: false,
          items: [
            { text: '系统安装', link: '/quick-refrence/dev-env/linux/linux-install' },
            { text: 'Docker', link: '/quick-refrence/dev-env/linux/docker' },
            { text: 'node.js', link: '/quick-refrence/dev-env/linux/nodejs' },
            { text: 'Java', link: '/quick-refrence/dev-env/linux/java' },
            { text: 'MySQL', link: '/quick-refrence/dev-env/linux/mysql' },
            { text: 'Nginx', link: '/quick-refrence/dev-env/linux/nginx' },
          ],
        },
      ],
    },
  ],
}

export default quickRefrenceSidebar
