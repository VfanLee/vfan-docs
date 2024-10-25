import type { DefaultTheme } from 'vitepress'

const sidebar: DefaultTheme.Sidebar = {
  '/dev/': [
    {
      text: '系统安装',
      collapsed: true,
      items: [
        { text: 'Windows', link: '/dev/windows-install' },
        { text: 'Ubuntu', link: '/dev/ubuntu-install' },
      ],
    },
    {
      text: 'Windows',
      items: [
        { text: 'Git', link: '/dev/git' },
        { text: '前端开发环境', link: '/dev/front-end' },
        { text: 'Java 开发环境', link: '/dev/java' },
        { text: 'Android 开发环境', link: '/dev/android' },
        { text: 'Python 开发环境', link: '/dev/python' },
      ],
    },
    {
      text: '准备好一台 Linux 虚拟机',
      items: [
        { text: 'Docker', link: '/dev/docker' },
        { text: 'Nginx', link: '/dev/nginx' },
        { text: 'MySQL', link: '/dev/mysql' },
        { text: 'MongoDB', link: '/dev/mongodb' },
      ],
    },
  ],
}

export default sidebar
