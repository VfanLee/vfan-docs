import { defineConfig, UserConfig } from 'vitepress'
import themeConfig from './themeConfig'

// https://vitepress.dev/zh/reference/site-config
const config: UserConfig = {
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
  srcDir: 'src',
  srcExclude: ['.vitepress/dist'],
  outDir: '.vitepress/dist',
  assetsDir: 'assets',
  cacheDir: '.vitepress/cache',
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

  // https://cn.vitejs.dev/config/
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler', // or "modern"
        },
      },
    },
  },

  themeConfig,
}

export default defineConfig(config)
