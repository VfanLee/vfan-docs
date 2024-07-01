import { defineConfig } from 'vitepress'
import nav from './nav'
import sidebar from './sidebar/index'

// https://vitepress.dev/zh/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: 'Vfan Docs',
  titleTemplate: false,
  description: '个人定制化开发笔记，主要集中于前端知识',
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/vitepress-logo-mini.svg' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/vitepress-logo-mini.png' }],
  ],

  // https://github.com/vuejs/vitepress/blob/main/src/node/markdown/markdown.ts
  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark',
    },
    codeCopyButtonTitle: '复制代码',
    lineNumbers: false,
    math: true,
    container: {
      tipLabel: 'ℹ️ 提示',
      warningLabel: '⚠️ 注意',
      dangerLabel: '⚡️ 危险',
      infoLabel: 'ℹ️ 信息',
      detailsLabel: '📖 详细信息',
    },
  },

  // https://vitepress.dev/zh/reference/default-theme-config
  themeConfig: {
    logo: { src: '/vitepress-logo-mini.svg', alt: 'VitePress Logo' },
    outline: {
      label: '页面导航',
      level: [2, 3],
    },
    editLink: {
      pattern: 'https://github.com/VfanLee/vfan-docs/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页面',
    },
    footer: {
      message: '基于 MIT 许可发布',
      copyright: `版权所有 © 2024 VfanLee`,
    },
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '返回顶部',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    nav: nav(),
    sidebar: sidebar(),
    socialLinks: [{ icon: 'github', link: 'https://github.com/VfanLee/vfan-docs' }],
  },
})
