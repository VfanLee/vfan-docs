// import search from './config/search'

window.$docsify = {
  el: '#app',
  // repo: 'https://github.com/VfanLee/vfan-docs',
  // logo: 'assets/images/avatar.png',
  // name: 'vfan-docs',
  nameLink: location.pathname,
  alias: {
    // '/.*/_sidebar.md': '/_sidebar.md',
    '/.*/_navbar.md': '/_navbar.md',
  },
  auto2top: true,

  // ------------ coverpage ------------
  coverpage: true,
  onlyCover: true,

  // ------------ navbar ------------
  loadNavbar: true,

  // ------------ sidebar ------------
  // hideSidebar: true,
  loadSidebar: true,
  maxLevel: 2,
  subMaxLevel: 0,

  // ------------ plugins ------------
  // https://docsify.js.org/#/zh-cn/plugins?id=%e5%85%a8%e6%96%87%e6%90%9c%e7%b4%a2-search
  search: {
    placeholder: '键入搜索',
  },

  count: {
    countable: true,
    fontsize: '0.9em',
    color: 'rgb(90,90,90)',
    language: 'chinese',
  },

  // https://github.com/mrpotatoes/docsify-toc
  // toc: {
  //   scope: '.markdown-section',
  //   headings: 'h2, h3, h4, h5, h6',
  //   title: '目录',
  // },

  // https://github.com/jperasmus/docsify-copy-code
  copyCode: {
    buttonText: '复制',
    errorText: '复制失败',
    successText: '复制成功',
  },

  // https://jhildenbiddle.github.io/docsify-tabs/
  tabs: {
    persist: false,
    sync: false,
    theme: 'classic',
    tabComments: true,
    tabHeadings: true,
  },
  disqus: 'shortname',
}
