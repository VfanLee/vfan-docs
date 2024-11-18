import { defineConfig, UserConfig } from 'vitepress'
import themeConfig from './themeConfig'

// https://vitepress.dev/zh/reference/site-config
const config: UserConfig = {
  // 站点元数据
  title: 'Vfan Docs',
  titleTemplate: false,
  description: '个人专属知识库，前端技术为主',
  head: [['link', { rel: 'icon', type: 'image/png', href: '/xiaohuolong.png' }]],
  lang: 'zh-CN',
  base: '/',

  // 路由
  cleanUrls: false,

  // 构建
  srcDir: 'src',
  srcExclude: ['.vitepress/dist', '**/TODO.md'],
  outDir: '.vitepress/dist',
  assetsDir: 'assets',
  cacheDir: '.vitepress/cache',
  ignoreDeadLinks: false,
  metaChunk: true,
  mpa: false,

  // [vue 配置](https://vitepress.dev/zh/reference/site-config#vue)
  vue: {},

  // [vite 配置](https://vitepress.dev/zh/reference/site-config#vite)
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler', // or "modern"
        },
      },
    },
    build: {
      chunkSizeWarningLimit: Infinity,
    },
    json: {
      stringify: true,
    },
  },

  // [markdown 配置](https://vitepress.dev/zh/reference/site-config#markdown)
  markdown: {
    theme: 'github-dark',
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

  themeConfig,
}

export default defineConfig(config)
