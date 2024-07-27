import { DefaultTheme } from 'vitepress'

const sidebar: DefaultTheme.Sidebar = {
  // computer-basis
  '/article/computer-basis/': [
    {
      text: '计算机基础',
      items: [
        { text: '计算机组成原理', link: '/article/computer-basis/计算机组成原理' },
        { text: '操作系统', link: '/article/computer-basis/操作系统' },
        { text: 'IO模型', link: '/article/computer-basis/IO模型' },
      ],
    },
  ],

  // computer-network
  '/article/computer-network/': [
    {
      text: '计算机网络',
      items: [
        { text: '网络模型', link: '/article/computer-network/网络模型' },
        { text: 'IP', link: '/article/computer-network/IP' },
        { text: 'HTTP', link: '/article/computer-network/HTTP' },
        { text: 'DNS', link: '/article/computer-network/DNS' },
        { text: 'VPN 协议', link: '/article/computer-network/VPN协议' },
        { text: '其他', link: '/article/computer-network/other' },
      ],
    },
  ],

  // windows
  '/article/windows/': [
    {
      text: '批处理脚本',
      items: [
        {
          text: '介绍',
          link: '/article/windows/batch',
        },
      ],
    },
  ],

  // linux
  '/article/linux/': [
    {
      text: 'Linux',
      collapsed: true,
      items: [
        { text: '系统目录', link: '/article/linux/系统目录' },
        { text: '快捷键', link: '/article/linux/快捷键' },
        {
          text: '文件管理',
          collapsed: true,
          items: [
            { text: 'cd', link: '/article/linux/file/cd' },
            { text: 'touch', link: '/article/linux/file/touch' },
            { text: 'mkdir', link: '/article/linux/file/mkdir' },
            { text: 'cp', link: '/article/linux/file/cp' },
            { text: 'mv', link: '/article/linux/file/mv' },
            { text: 'vim', link: '/article/linux/file/vim' },
          ],
        },
        { text: '用户管理', link: '/article/linux/用户管理' },
        { text: '权限管理', link: '/article/linux/权限管理' },
        { text: '打包压缩', link: '/article/linux/打包压缩' },
        {
          text: '网络',
          collapsed: true,
          items: [
            { text: 'ip', link: '/article/linux/network/ip' },
            { text: 'netplan', link: '/article/linux/network/netplan' },
            { text: 'ssh', link: '/article/linux/network/ssh' },
          ],
        },
      ],
    },
    {
      text: 'Ubuntu',
      collapsed: true,
      items: [
        { text: 'apt', link: '/article/linux/ubuntu/apt' },
        { text: 'ufw', link: '/article/linux/ubuntu/ufw' },
      ],
    },
    {
      text: 'Shell 脚本',
      collapsed: true,
      items: [
        { text: '基本格式', link: '/article/linux/shell/基本格式' },
        { text: '变量', link: '/article/linux/shell/变量' },
        { text: '流程控制', link: '/article/linux/shell/流程控制' },
      ],
    },
  ],

  // docker
  '/article/docker/': [
    {
      text: 'Docker',
      items: [
        { text: 'container 容器', link: '/article/docker/container' },
        { text: 'image 镜像', link: '/article/docker/image' },
        { text: 'network 网络', link: '/article/docker/network' },
        { text: 'volume 数据卷', link: '/article/docker/volume' },
        { text: 'dockerfile', link: '/article/docker/dockerfile' },
        { text: '其他命令', link: '/article/docker/other-command' },
        { text: 'Docker Compose', link: '/article/docker/docker-compose' },
      ],
    },
  ],

  // mysql
  '/article/mysql/': [
    {
      text: 'MySQL',
      items: [
        { text: 'DDL', link: '/article/mysql/DDL' },
        { text: 'DML', link: '/article/mysql/DML' },
        { text: 'DQL', link: '/article/mysql/DQL' },
        { text: 'TCL', link: '/article/mysql/TCL' },
        { text: '函数', link: '/article/mysql/函数' },
        { text: '变量', link: '/article/mysql/变量' },
        { text: '存储过程', link: '/article/mysql/存储过程' },
        { text: '流程控制结构', link: '/article/mysql/流程控制结构' },
      ],
    },
  ],

  // nginx
  '/article/nginx/': [
    {
      text: 'Nginx',
      items: [
        { text: '配置目录介绍', link: '/article/nginx/config-dir' },
        { text: '命令', link: '/article/nginx/command' },
        { text: '变量', link: '/article/nginx/variable' },
        { text: '示例模板', link: '/article/nginx/template' },
        { text: '负载均衡', link: '/article/nginx/load-balancing' },
      ],
    },
  ],

  // cloudflare
  '/article/cloudflare/': [
    {
      text: 'Cloudflare',
      items: [
        { text: 'DNS', link: `/article/cloudflare/dns` },
        { text: 'SSL/TLS', link: `/article/cloudflare/ssl` },
        { text: 'Warp', link: `/article/cloudflare/warp` },
        {
          text: 'Workers',
          items: [
            { text: 'Workers 演练场', link: `https://workers.cloudflare.com` },
            { text: '介绍', link: `/article/cloudflare/workers/` },
            { text: '快速开始', link: `/article/cloudflare/workers/get-started` },
            { text: 'hono', link: `/article/cloudflare/workers/hono` },
            { text: '实例：Docker 镜像代理', link: `/article/cloudflare/workers/docker-proxy` },
          ],
        },
        { text: 'Pages', items: [{ text: '介绍', link: `/article/cloudflare/pages` }] },
      ],
    },
  ],
}

export default sidebar
