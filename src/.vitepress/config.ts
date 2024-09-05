import { defineConfig } from 'vitepress'
import nav from './nav'
import sidebar from './sidebar/index'

// https://vitepress.dev/zh/reference/site-config
export default defineConfig({
  // 站点元数据
  title: 'Vfan Docs',
  titleTemplate: false,
  description: '个人专属知识库，前端技术为主',
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/vitepress-logo-mini.svg' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/vitepress-logo-mini.png' }],
  ],
  lang: 'zh-CN',
  base: '/',

  // 路由
  cleanUrls: false,

  // 构建
  srcDir: '.',
  srcExclude: ['./.vitepress/dist'],
  outDir: './.vitepress/dist',
  assetsDir: 'assets',
  cacheDir: './.vitepress/cache',
  ignoreDeadLinks: false,
  metaChunk: true,
  mpa: false,

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
      tipLabel: '提示',
      warningLabel: '警告',
      dangerLabel: '危险',
      infoLabel: '信息',
      detailsLabel: '详情',
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
      copyright: `版权所有 © 2024 Vfan Lee`,
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
    // search: {
    //   provider: 'local',
    //   options: {
    //     translations: {
    //       button: {
    //         buttonText: '搜索文档',
    //         buttonAriaLabel: '搜索文档',
    //       },
    //       modal: {
    //         noResultsText: '无法找到相关结果',
    //         resetButtonTitle: '清除查询条件',
    //         displayDetails: '显示详情',
    //         footer: {
    //           selectText: '选择',
    //           navigateText: '切换',
    //           closeText: '关闭',
    //         },
    //       },
    //     },
    //   },
    // },
  },
})
