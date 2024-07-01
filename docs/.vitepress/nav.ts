import type { DefaultTheme } from 'vitepress'

export default function nav(): DefaultTheme.NavItem[] {
  return [
    { text: '速查手册', link: '/quick-refrence/vanilla-js/array', activeMatch: '/quick-refrence/' },
    { text: 'Web', link: '/web/' },
    { text: '技术拓展', link: '/expand/ ' },
    { text: '随记', link: '/article/' },
  ]
}
