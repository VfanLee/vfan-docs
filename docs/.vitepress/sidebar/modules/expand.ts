import type { DefaultTheme } from 'vitepress'

const expandSidebar: DefaultTheme.Sidebar = {
  // computer-basis
  '/expand/computer-basis/': [
    {
      text: '计算机基础',
      items: [
        { text: '计算机组成原理', link: '/computer-basis/计算机组成原理' },
        { text: '操作系统', link: '/computer-basis/操作系统' },
        { text: 'IO模型', link: '/computer-basis/IO模型' },
      ],
    },
  ],

  // computer-network
  '/expand/computer-network/': [
    {
      text: '计算机网络',
      items: [
        { text: '网络模型', link: '/computer-network/网络模型' },
        { text: 'IP', link: '/computer-network/IP' },
        { text: 'HTTP', link: '/computer-network/HTTP' },
        { text: 'DNS', link: '/computer-network/DNS' },
        { text: 'VPN 协议', link: '/computer-network/VPN协议' },
        { text: '其他', link: '/computer-network/other' },
      ],
    },
  ],

  // windows
  '/expand/windows/': [
    {
      text: 'Windows',
      collapsed: true,
      items: [{ text: '批处理脚本', link: '/expand/windows/batch.md' }],
    },
  ],

  // linux
  '/expand/linux/': [
    {
      text: 'Linux',
      collapsed: true,
      items: [
        { text: '系统目录', link: '/expand/linux/系统目录' },
        { text: '快捷键', link: '/expand/linux/快捷键' },
        {
          text: '文件管理',
          collapsed: true,
          items: [
            { text: 'cd', link: '/expand/linux/file/cd' },
            { text: 'touch', link: '/expand/linux/file/touch' },
            { text: 'mkdir', link: '/expand/linux/file/mkdir' },
            { text: 'cp', link: '/expand/linux/file/cp' },
            { text: 'mv', link: '/expand/linux/file/mv' },
            { text: 'vim', link: '/expand/linux/file/vim' },
          ],
        },
        { text: '用户管理', link: '/expand/linux/用户管理' },
        { text: '权限管理', link: '/expand/linux/权限管理' },
        { text: '打包压缩', link: '/expand/linux/打包压缩' },
        {
          text: '网络',
          collapsed: true,
          items: [
            { text: 'ip', link: '/expand/linux/network/ip' },
            { text: 'netplan', link: '/expand/linux/network/netplan' },
            { text: 'ssh', link: '/expand/linux/network/ssh' },
          ],
        },
      ],
    },
    {
      text: 'Shell 脚本',
      collapsed: true,
      items: [
        { text: '基本格式', link: '/expand/linux/shell/基本格式' },
        { text: '变量', link: '/expand/linux/shell/变量' },
        { text: '流程控制', link: '/expand/linux/shell/流程控制' },
      ],
    },
    {
      text: 'Ubuntu',
      collapsed: true,
      items: [
        { text: 'apt', link: '/expand/linux/ubuntu/apt' },
        { text: 'ufw', link: '/expand/linux/ubuntu/ufw' },
      ],
    },
  ],

  // docker
  '/expand/docker/': [
    {
      text: 'Docker',
      items: [
        { text: 'container 容器', link: '/expand/docker/container' },
        { text: 'image 镜像', link: '/expand/docker/image' },
        { text: 'network 网络', link: '/expand/docker/network' },
        { text: 'volume 数据卷', link: '/expand/docker/volume' },
        { text: 'dockerfile', link: '/expand/docker/dockerfile' },
        { text: '其他命令', link: '/expand/docker/other-command' },
        { text: 'Docker Compose', link: '/expand/docker/docker-compose' },
      ],
    },
  ],

  // mysql
  '/expand/mysql/': [
    {
      text: 'MySQL',
      items: [
        { text: 'DDL', link: '/mysql/DDL' },
        { text: 'DML', link: '/mysql/DML' },
        { text: 'DQL', link: '/mysql/DQL' },
        { text: 'TCL', link: '/mysql/TCL' },
        { text: '函数', link: '/mysql/函数' },
        { text: '变量', link: '/mysql/变量' },
        { text: '存储过程', link: '/mysql/存储过程' },
        { text: '流程控制结构', link: '/mysql/流程控制结构' },
      ],
    },
  ],

  // nginx
  '/expand/nginx/': [
    {
      text: 'Nginx',
      items: [
        { text: '配置目录介绍', link: '/expand/nginx/config-dir' },
        { text: '命令', link: '/expand/nginx/command' },
        { text: '变量', link: '/expand/nginx/variable' },
        { text: '示例模板', link: '/expand/nginx/template' },
        { text: '负载均衡', link: '/expand/nginx/load-balancing' },
      ],
    },
  ],
}

export default expandSidebar
