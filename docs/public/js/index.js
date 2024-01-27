import thirdPlugin from './thirdPlugin.js'
import plugin from './plugin.js'

// https://docsify.js.org/#/zh-cn/
window.$docsify = {
  el: '#app',
  repo: 'https://github.com/VfanLee/vfan-docs',
  name: '',
  nameLink: location.pathname,
  alias: {
    '/.*/_navbar.md': '/_navbar.md'
  },
  auto2top: true,

  // ------------ coverpage ------------
  coverpage: true,
  onlyCover: false,

  // ------------ navbar ------------
  loadNavbar: true,

  // ------------ sidebar ------------
  hideSidebar: false,
  loadSidebar: true,
  // maxLevel: 1,
  // subMaxLevel: 0,

  // ------------ plugin ------------
  ...thirdPlugin,
  ...plugin
}
