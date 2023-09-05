require.config({
  baseUrl: '.',
  paths: {
    /* docsify */
    docsify: ['https://cdn.jsdelivr.net/npm/docsify/lib/docsify.min'],
    /* customize */
    config: 'src/config',
    thirdPlugins: 'src/plugins/third',
    plugins: 'src/plugins/index',
    /* plugins */
    docsifySearch: ['https://cdn.jsdelivr.net/npm/docsify@4.13.1/lib/plugins/search.min'],
    docsifyZoomImage: ['https://cdn.jsdelivr.net/npm/docsify@4.13.1/lib/plugins/zoom-image.min'],
    docsifyPagination: ['https://cdn.jsdelivr.net/npm/docsify-pagination@2.10.1/dist/docsify-pagination.min'],
    docsifySidebarCollapse: ['https://cdn.jsdelivr.net/npm/docsify-sidebar-collapse@1.3.5/dist/docsify-sidebar-collapse.min'],
    docsifyCopyCode: ['https://cdn.jsdelivr.net/npm/docsify-copy-code@3.0.0/dist/docsify-copy-code.min'],
    docsifyTabs: ['https://cdn.jsdelivr.net/npm/docsify-tabs@1.6.0/dist/docsify-tabs.min'],
    docsifyHideCode: ['https://cdn.jsdelivr.net/npm/docsify-hide-code@1.0.1/dist/docsify-hide-code.min'],
    docsifyProgress: ['https://cdn.jsdelivr.net/npm/docsify-progress@1.0.3/dist/progress.min']
  },
  shim: {
    docsifySearch: { deps: ['config'] },
    docsifyZoomImage: { deps: ['config'] },
    docsifyPagination: { deps: ['config'] },
    docsifySidebarCollapse: { deps: ['config'] },
    docsifyCopyCode: { deps: ['config'] },
    docsifyTabs: { deps: ['config'] },
    docsifyHideCode: { deps: ['config'] },
    docsifyProgress: { deps: ['config'] }
  },
  map: {
    '*': {
      css: 'https://cdn.jsdelivr.net/npm/require-css@0.1.10/css.min.js'
    }
  }
})

require(['config', 'docsifySearch', 'docsifyZoomImage', 'docsifyPagination', 'docsifySidebarCollapse', 'docsifyCopyCode', 'docsifyTabs', 'docsifyHideCode', 'docsifyProgress'], function () {
  require(['docsify'], function () {})
})
