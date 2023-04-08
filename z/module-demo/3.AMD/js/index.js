// 使用 AMD 规范定义模块
// index.js 是处理 index.html 页面的模块
define(["jquery", "lodash"], function (jq, ld) {
  console.log($, _);
  console.log(jq, ld);
});
