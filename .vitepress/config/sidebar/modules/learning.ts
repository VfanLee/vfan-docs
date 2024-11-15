import { DefaultTheme } from 'vitepress'

const sidebar: DefaultTheme.Sidebar = {
  // windows
  // batch
  '/learning/batch_script/': [
    {
      text: '批处理脚本',
      items: [{ text: '介绍', link: '/learning/batch_script/introduction' }],
    },
  ],

  // linux
  // '/learning/linux/': [],

  // shell
  '/learning/shell_script/': [
    { text: '介绍', link: '/learning/shell_script/introduction' },
    { text: '变量', link: '/learning/shell_script/variables' },
    { text: '将参数传递给脚本', link: '/learning/shell_script/passing_arguments_to_the_script.md' },
    { text: '运算符', link: '/learning/shell_script/operators' },
    { text: '流程控制', link: '/learning/shell_script/process_control' },
  ],

  // docker
  '/learning/docker/': [
    {
      text: 'Docker',
      items: [
        // { text: '介绍', link: '/learning/docker/introduction' },
        { text: 'container 容器', link: '/learning/docker/container' },
        { text: 'image 镜像', link: '/learning/docker/image' },
        { text: 'network 网络', link: '/learning/docker/network' },
        { text: 'volume 数据卷', link: '/learning/docker/volume' },
        { text: 'dockerfile', link: '/learning/docker/dockerfile' },
        { text: '其他命令', link: '/learning/docker/other-command' },
        { text: 'Docker Compose', link: '/learning/docker/docker-compose' },
      ],
    },
  ],

  // mysql
  '/learning/database/mysql/': [
    {
      text: 'MySQL',
      items: [
        // { text: '介绍', link: '/learning/database/mysql/introduction' },
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
