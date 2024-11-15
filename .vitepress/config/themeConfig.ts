import { DefaultTheme } from 'vitepress'
import nav from './nav'
import sidebar from './sidebar'

const isProd = process.env.NODE_ENV === 'production'

// https://vitepress.dev/zh/reference/default-theme-config
const themeConfig: DefaultTheme.Config = {
  logo: { src: '/vitepress-logo-mini.svg', alt: 'Logo' },
  outline: {
    label: '页面导航',
    level: [2, 3],
  },
  editLink: {
    pattern: 'https://github.com/VfanLee/vfan-docs/edit/main/src/:path',
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
  nav,
  sidebar,
  socialLinks: [{ icon: 'github', link: 'https://github.com/VfanLee/vfan-docs' }],
  search: isProd
    ? {
        provider: 'local',
        options: {
          translations: {
            button: {
              buttonText: '搜索文档',
              buttonAriaLabel: '搜索文档',
            },
            modal: {
              noResultsText: '无法找到相关结果',
              resetButtonTitle: '清除查询条件',
              displayDetails: '显示详情',
              footer: {
                selectText: '选择',
                navigateText: '切换',
                closeText: '关闭',
              },
            },
          },
        },
      }
    : undefined,
}

export default themeConfig
