import { DefaultTheme } from 'vitepress'

const sidebar: DefaultTheme.Sidebar = {
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
