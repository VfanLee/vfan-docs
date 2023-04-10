module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage', // 按需加载 core-js 的 polyfill
        corejs: 3 // 指定 corejs 版本
      }
    ]
  ]
}
