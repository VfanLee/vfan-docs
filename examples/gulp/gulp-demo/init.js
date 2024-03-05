require.config({
  baseUrl: 'src',
  paths: {
    // --- requirejs 插件 ---
    text: ['https://cdn.jsdelivr.net/npm/requirejs-text@2.0.16/text.min'],
    css: ['https://cdn.jsdelivr.net/npm/require-css@0.1.10/css.min'],
    // --- 第三方库 ---
    knockout: ['https://cdn.jsdelivr.net/npm/knockout@3.5.1/build/output/knockout-latest.min'],
    director: ['https://cdn.jsdelivr.net/npm/director@1.2.8/build/director.min'],
    jquery: ['https://cdn.jsdelivr.net/npm/jquery@1.12.4/dist/jquery.min'],
    bootstrap: ['https://cdn.jsdelivr.net/npm/bootstrap@3.4.1/dist/js/bootstrap.min']
    // --- 自定义模块 ---
    // ...
  },
  shim: {
    jquery: {
      exports: '$'
    },
    bootstrap: {
      deps: ['jquery'],
      exports: '$'
    }
  },
  map: {
    '*': {
      css: 'css'
    }
  }
})

require(['knockout', './mainController', 'jquery', 'bootstrap'], function (ko, mainController) {
  ko.applyBindings(new mainController())
})
