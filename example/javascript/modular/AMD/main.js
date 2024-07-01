// requirejs 配置文件
require.config({
  // 当前模块化解析的基本路径
  baseUrl: 'js',
  // 模块的映射，paths 基于 baseUrl
  paths: {
    jquery: 'https://cdn.jsdelivr.net/npm/jquery@3.6.3/dist/jquery.min',
    lodash: 'https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min',
    module1: 'module1',
    module2: 'module2'
  }
})

// 项目入口文件
require(['../index'], function () {})
