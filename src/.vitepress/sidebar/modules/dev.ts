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
    { text: '前端开发环境', link: '/dev/front-end' },
    { text: 'Git', link: '/dev/git' },
    {
      text: '准备好一台 Linux 虚拟机',
      items: [
        { text: 'Docker', link: '/dev/docker' },
        { text: 'Nginx', link: '/dev/nginx' },
        { text: 'MySQL', link: '/dev/mysql' },
        { text: 'MongoDB', link: '/dev/mongodb' },
      ],
    },
    {
      text: '其他',
      collapsed: true,
      items: [
        { text: 'Java 开发环境', link: '/dev/java' },
        { text: 'Android 开发环境', link: '/dev/android' },
        { text: 'Python 开发环境', link: '/dev/python' },
      ],
    },
  ],
}

export default sidebar
