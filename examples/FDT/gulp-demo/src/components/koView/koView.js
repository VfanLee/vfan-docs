'use strict'

/* // 路由定义方式示例
  var routes = {
    '/author': author,
    '/books': [
      books,
      function () {
        console.log('An inline route handler.')
      }
    ],
    '/books/view/:bookId': viewBook,
    '/dog': {
      '/aaa': function () {
        console.log('dog aaa')
      },
      '/bbb': function () {
        console.log('dog bbb')
      },
      '/color/:color': {
        on: function (color) {
          console.log('dog color ' + color)
        }
      },
      'on': function () {
        console.log('only dog')
      }
    }
  }
  var author = function () {
    console.log('author')
  }
  var books = function () {
    console.log('books')
  }
  var viewBook = function (bookId) {
    console.log('viewBook: bookId is populated: ' + bookId)
  }
  router.on('/some/resource', function () {
    console.log('some resource')
  })
*/
define(['knockout', 'director'], function (ko) {
  function koView(params) {
    var self = this
    self.routingRules = params.routingRules
    if (!self.routingRules) {
      return
    }
    self.showViewPage = ko.observable(false)
    self.viewParams = ko.observable()
    self.id = 'koView' + (Math.random() * 1000).toFixed(0)
    window.koViewRouterInstance = window.koViewRouterInstance ? window.koViewRouterInstance : null
    window.koViewRouterPreviousRoute = window.koViewRouterPreviousRoute ? window.koViewRouterPreviousRoute : []
    window.routeChangedByUser = window.routeChangedByUser != undefined ? window.routeChangedByUser : true
    var hasStepInTimer = false
    var destHash = ''

    // 维护异步注册组件的队列
    var callbackQueue = []
    var callbackQueueTimer
    var callbackLastRule
    function startTimer() {
      return setInterval(function () {
        if ($('#' + self.id).length == 0) {
          clearInterval(callbackQueueTimer)
          callbackQueueTimer = null
        }
        if ($('#' + self.id).html()) {
          var registerMethod = callbackQueue.shift()
          if (callbackQueue.length == 0) {
            clearInterval(callbackQueueTimer)
            callbackQueueTimer = null
          }
          registerMethod()
        }
      }, 1000)
    }

    // 用来构造路由对应的回调方法
    function generateViewPageCallback(rule, title, params) {
      return function () {
        koViewRouterPreviousRoute = getPureRoute()
        title && (document.title = title)
        if (!self.showViewPage() || $('#' + self.id).length == 0 || $('#' + self.id).html()) {
          ko.components.unregister('ko-view')
          ko.components.register('ko-view', rule)
          callbackLastRule = rule
          self.viewParams(params)
          self.showViewPage(false)
          self.showViewPage(true)
        } else {
          if (rule == callbackLastRule) {
            return
          }
          callbackQueue = []
          callbackQueue.push(
            (function () {
              return function () {
                ko.components.unregister('ko-view')
                ko.components.register('ko-view', rule)
                self.viewParams(params)
                self.showViewPage(false)
                self.showViewPage(true)
              }
            })()
          )
          if (!callbackQueueTimer) {
            callbackQueueTimer = startTimer()
          }
        }
      }
    }
    if (!koViewRouterInstance || (koViewRouterInstance && !(koViewRouterInstance instanceof Router))) {
      // 初始化路由
      var routes = {}
      for (var ruleIndex in self.routingRules) {
        if (self.routingRules.hasOwnProperty(ruleIndex)) {
          var rule = self.routingRules[ruleIndex].rule
          var title = self.routingRules[ruleIndex].title
          var params = self.routingRules[ruleIndex].params
          var callback = generateViewPageCallback(rule, title, params)
          var after = self.routingRules[ruleIndex].after
          routes[ruleIndex] = {
            on: callback,
            after: after
          }
          ruleIndex += '/?((w|.)*)'
          routes[ruleIndex] = {
            on: callback,
            after: after
          }
        }
      }
      var router = new Router(routes)
      koViewRouterInstance = router
      router.configure({
        notfound: function () {
          router.setRoute('/index')
        },
        after: function () {
          $('.modal').remove()
          $('.modal-backdrop').remove()

          // 步进是为了让每一级路由组件初始化在对应的koView层级
          if (destHash != '' && location.hash.indexOf(destHash) == -1) {
            routeChangedByUser = true
            clearTimeout(hasStepInTimer)
          }
          if (routeChangedByUser && needStepInto()) {
            var levelList = location.hash.split('/')
            if (levelList.length > 2) {
              levelList.shift() // 排除掉hash中的#

              var stepList = []
              for (var stepHash = ''; levelList.length > 0; ) {
                stepHash += '/' + levelList.shift()
                //  需要判断步进的路由是否存在通配符
                var destRoute = stepHash.substring(1).split('/')
                destRoute = getPureRoute(destRoute)
                if (canRedirect(destRoute)) {
                  stepList.push(stepHash)
                }
              }
              routeChangedByUser = false
              clearTimeout(hasStepInTimer)
              goStep(stepList)
            }
          }
          function goStep(stepList) {
            if (stepList.length > 0) {
              var dest = stepList.shift()
              destHash = dest
              koViewRouterInstance.dispatch('on', dest)
              // 用延时并不保险，可是director.js的dispatch方法无法触发callback，暂时这样
              hasStepInTimer = setTimeout(function () {
                goStep(stepList)
              }, 500)
            } else {
              hasStepInTimer = false
              routeChangedByUser = true
            }
          }
        }
      })
      router.init()
    } else {
      // 添加路由注册，一级一级注册是为了让每一级路由组件初始化在对应的koView层级
      var router = koViewRouterInstance
      for (var ruleIndex in self.routingRules) {
        if (self.routingRules.hasOwnProperty(ruleIndex)) {
          var rule = self.routingRules[ruleIndex].rule
          var title = self.routingRules[ruleIndex].title
          var params = self.routingRules[ruleIndex].params
          var callback = generateViewPageCallback(rule, title, params)
          var after = self.routingRules[ruleIndex].after
          router.on(ruleIndex, callback)
          router.on('after', ruleIndex, after)
          ruleIndex += '/?((w|.)*)'
          router.on(ruleIndex, callback)
          router.on('after', ruleIndex, after)
        }
      }
      var hasExtraRule = false
      hasExtraRule = deleteExtraRule(router.routes)
      if (hasExtraRule && routeChangedByUser && canRedirect()) {
        // 当有新的子路由被注册，而且不在步进路由的过程中时，重新触发路由
        koViewRouterInstance.dispatch('on', location.hash.substring(1))
      }
    }
  }

  // 注册子路由时，去掉父路由的通配符规则
  function deleteExtraRule(ruleTree) {
    var hasExtraRule = false
    for (var node in ruleTree) {
      if (ruleTree.hasOwnProperty(node)) {
        if (node != '?((w|.)*)' && node != 'on' && node != 'after') {
          // 当有二级路由时，删除一级路由的通配符
          // var temp = ruleTree['?((\w|.)*)']
          delete ruleTree['?((w|.)*)'] // 删除会导致如果 /course/xxx在两个路由里都需要注册时，只能注册成功一个，因为另一个没有通配符可以匹配到
          hasExtraRule = true
        } else {
          if (ruleTree[node] instanceof Array && ruleTree[node].length > 1) {
            // 当路由的回调函数被重复注册时，删除冗余的回调函数
            for (var i = 0; i < ruleTree[node].length - 1; i++) {
              ruleTree[node].shift()
            }
          }
        }
        if (typeof ruleTree[node] !== 'function') {
          deleteExtraRule(ruleTree[node])
        }
      }
    }
    return hasExtraRule
  }

  // 获取纯净的路由路径列表
  function getPureRoute(currentRoute) {
    currentRoute = currentRoute ? currentRoute : koViewRouterInstance.getRoute()
    var leafNode = currentRoute[currentRoute.length - 1]
    if (leafNode == '') {
      currentRoute.pop()
      leafNode = currentRoute[currentRoute.length - 1]
    }
    if (leafNode) {
      leafNode = leafNode.indexOf('?') > -1 ? leafNode.substring(0, leafNode.indexOf('?')) : leafNode
      currentRoute[currentRoute.length - 1] = leafNode
      if (leafNode == '') {
        currentRoute.pop()
      }
    }
    return currentRoute
  }

  // 判断是否存在需要重新触发的路由，防止在不存在的路由无限刷新
  function canRedirect(currentRoute) {
    currentRoute = currentRoute ? currentRoute : getPureRoute()
    var routeNode = koViewRouterInstance.routes
    for (var i = 0; i < currentRoute.length; i++) {
      var level = currentRoute[i]
      if (routeNode[level] != null) {
        routeNode = routeNode[level]
      } else {
        // 当有一级未匹配上时，判断是否有通配符
        if (routeNode['?((w|.)*)']) {
          return true
        } else {
          return false
        }
      }
    }

    // 每一级路由都找到需要判断完整路由是否存在对应触发器
    if (!routeNode['?((w|.)*)'] && !routeNode['on']) {
      return false
    }
    return true
  }

  // 判断是否需要步进到多级路由
  function needStepInto() {
    // 当前路由
    var currentRoute = getPureRoute()
    if (currentRoute.length > 1) {
      if (koViewRouterPreviousRoute.length < currentRoute.length - 1) {
        // 是否跨两级进入更多级的路由
        return true
      }
      for (var i = 0; i < currentRoute.length - 1; i++) {
        if (koViewRouterPreviousRoute[i] == currentRoute[i]) {
        } else {
          // 比对当前路由和上一个路由是否在非最末级有差异
          return true
        }
      }
    } else {
      return false
    }
    return false
  }
  return koView
})
