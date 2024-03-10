define(['knockout', 'css!./styles/index.min.css'], function (ko) {
  function mainController() {
    // 路由
    self.routingRules = {
      '/index': {
        rule: {
          template: {
            require: 'text!./views/index/index.html'
          },
          viewModel: {
            require: './views/index/indexController'
          }
        },
        title: 'index',
        params: {}
      },
      '/about': {
        rule: {
          template: {
            require: 'text!./views/about/index.html'
          },
          viewModel: {
            require: './views/about/indexController'
          }
        },
        title: 'about',
        params: {}
      }
    }

    // 组件
    ko.components.register('ko-view', {
      template: {
        require: 'text!./components/koView/koView.html'
      },
      viewModel: {
        require: './components/koView/koView.min'
      }
    })
  }
  return mainController
})
