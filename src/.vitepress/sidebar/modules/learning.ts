import { DefaultTheme } from 'vitepress'

const sidebar: DefaultTheme.Sidebar = {
  // windows
  '/learning/windows/': [
    {
      text: '批处理脚本',
      items: [
        {
          text: '介绍',
          link: '/learning/batch-script/introduction',
        },
      ],
    },
  ],

  // linux
  '/learning/linux/': [
    { text: '命令大全', link: 'https://www.linuxcool.com', collapsed: true, items: [] },
    // 文件/目录
    { text: 'cd', link: '/learning/linux/cd' },
    { text: 'touch', link: '/learning/linux/touch' },
    { text: 'mkdir', link: '/learning/linux/mkdir' },
    { text: 'cp', link: '/learning/linux/cp' },
    { text: 'mv', link: '/learning/linux/mv' },
    { text: 'vim', link: '/learning/linux/vim' },
    // 用户管理
    { text: 'useradd', link: '/learning/linux/useradd' },
    { text: 'passwd', link: '/learning/linux/passwd' },
    { text: 'su', link: '/learning/linux/su' },
    // 打包压缩
    { text: 'tar', link: '/learning/linux/tar' },
    { text: 'zip', link: '/learning/linux/zip' },
    { text: '7z', link: '/learning/linux/7z' },
    // 网络
    { text: 'ip', link: '/learning/linux/ip' },
    { text: 'netplan', link: '/learning/linux/netplan' },
    { text: 'ssh', link: '/learning/linux/ssh' },
    { text: 'curl', link: '/learning/linux/curl' },
    { text: 'wget', link: '/learning/linux/wget' },
    // Ubuntu
    {
      text: 'Ubuntu',
      collapsed: true,
      items: [
        { text: 'apt', link: '/learning/linux/ubuntu/apt' },
        { text: 'ufw', link: '/learning/linux/ubuntu/ufw' },
      ],
    },
    {
      text: '待分类',
      collapsed: true,
      items: [
        { text: '系统目录', link: '/learning/linux/系统目录' },
        { text: '快捷键', link: '/learning/linux/快捷键' },
        { text: '权限管理', link: '/learning/linux/权限管理' },
      ],
    },
  ],

  // shell
  '/learning/shell/': [
    { text: '介绍', link: '/learning/shell/introduction' },
    { text: '变量', link: '/learning/shell/variable' },
    { text: '流程控制', link: '/learning/shell/process-control' },
  ],

  // mysql
  '/learning/database/mysql/': [
    {
      text: 'MySQL',
      items: [
        { text: 'DDL', link: '/learning/database/mysql/DDL' },
        { text: 'DML', link: '/learning/database/mysql/DML' },
        { text: 'DQL', link: '/learning/database/mysql/DQL' },
        { text: 'TCL', link: '/learning/database/mysql/TCL' },
        { text: '函数', link: '/learning/database/mysql/函数' },
        { text: '变量', link: '/learning/database/mysql/变量' },
        { text: '存储过程', link: '/learning/database/mysql/存储过程' },
        { text: '流程控制结构', link: '/learning/database/mysql/流程控制结构' },
      ],
    },
  ],
  // redis
  '/learning/database/redis/': [
    {
      text: 'Redis',
      items: [
        { text: '介绍', link: '/learning/database/redis/introduction' },
        { text: '命令', link: '/learning/database/redis/command' },
        { text: '持久化', link: '/learning/database/redis/storage' },
      ],
    },
  ],
}

export default sidebar
