define(['plugins', 'thirdPlugins'], function (plugins, thirdPlugins) {
  'use strict'

  window.$docsify = {
    el: '#app',
    // repo: 'https://github.com/VfanLee/vfan-docs',
    // logo: 'assets/images/avatar.png',
    // name: 'vfan-docs',
    nameLink: location.pathname,
    alias: {
      // '/.*/_sidebar.md': '/_sidebar.md',
      '/.*/_navbar.md': '/_navbar.md'
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
    // maxLevel: 1,
    // subMaxLevel: 0,

    // ------------ plugins ------------
    ...thirdPlugins,
    plugins
  }
})
