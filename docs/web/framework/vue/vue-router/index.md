# Vue Router

::: tip
当前 [Vue Router](https://router.vuejs.org/zh/) 最新版本为 4.x。

**兼容性说明：Vue3 请使用 4.x 版本。**
:::

## 在 Vue 项目中引入 Vue Router

1. 安装 `vue-router`。

    ```sh
    npm install vue-router@latest
    ```

2. 在 `src/router/index.js` 中创建一个路由器（`router`）实例。

    ```js{4}
    import { createRouter, createWebHistory } from 'vue-router'
    import HomeView from '../views/HomeView.vue'

    const router = createRouter({
      history: createWebHistory(import.meta.env.BASE_URL),
      routes: [
        {
          path: '/',
          name: 'home',
          component: HomeView
        },
        {
          path: '/about',
          name: 'about',
          component: () => import('../views/AboutView.vue')
        }
      ]
    })

    export default router
    ```

3. 在 `src/main.js` 中引入路由器（`router`）实例。

    ```js{1,5}
    import router from './router'

    const app = createApp(App)

    app.use(router)

    app.mount('#app')
    ```

当我们完成上述操作后，Vue Router 插件会做如下事情：

1. 全局注册 `RouterView` 和 `RouterLink` 组件。
2. 添加全局 `$router` 和 `$route` 属性。
3. 启用 `useRouter()` 和 `useRoute()` 组合式函数。
4. 触发路由器解析初始路由。

## 访问路由器（`router`）和当前路由（`route`）

### 在组件中访问路由器（`router`）和当前路由（`route`）

对于组合式 API，我们在 `setup` 里面没有访问 `this`，所以我们不能再直接访问 `this.$router` 或 `this.$route`。而作为替代，我们可以使用 `useRouter` 和 `useRoute` 函数：

```vue{2,4,5}
<script setup>
import { useRouter, useRoute } from 'vue-router'

const router = useRouter() // 路由器实例
const route = useRoute() // 当前路由（reactive 包装）

function pushWithQuery(query) {
  router.push({
    name: 'search',
    query: {
      ...route.query,
      ...query,
    },
  })
}
</script>
```

::: tip
在 `<template>` 模板中仍然可以访问 `$router` 和 `$route`，而不需要在 `setup` 中显式地返回 `router` 和 `route`。

**不过，当前路由（`route`）仍有不同：**

- `$router` 和 `router` 并无差异。
- `$route` 和 `route` 有差异，`$route` 会比 `route` 多一个 `href` 属性。

```vue{9-10,12-13}
<script setup>
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
</script>

<template>
  <!-- 返回 true -->
  {{ $router === router }}

  <!-- 返回 false -->
  {{ $route === route }}
</template>
```
:::

### 在组件外访问路由器实例（`router`）

如果你是从 ES 模块导出路由器实例的，你可以将路由器实例直接导入到你需要它的地方：

```js
import router from '@/router'

console.log(router) // 路由器实例
console.log(router.currentRoute) // 当前路由（ref 包装）
```

::: tip
在一些情况下这是最好的方法，但如果我们在组件内部，那么我们还有其他选择。

```vue{7,11,12}
<script setup>
import router from '@/router'
import { useRouter } from 'vue-router'

const _router = useRouter()

console.log(router === _router) // true
</script>

<template>
  {{ $router === _router }} <!-- true -->
  {{ $router === router }} <!-- true -->
</template>
```
:::

## 监听当前路由（`route`）的变化

`route` 对象是一个响应式对象，所以它的任何属性都可以被监听，但你应该避免监听整个 `route` 对象。**在大多数情况下，你应该直接监听你期望改变的参数。**

```vue{10}
<script setup>
import { useRoute } from 'vue-router'
import { ref, watch } from 'vue'

const route = useRoute()
const userData = ref()

// 当参数更改时获取用户信息
watch(
  () => route.params.id,
  async newId => {
    userData.value = await fetchUser(newId)
  }
)
</script>
```

## 导航

### `<router-link>` 导航

`<router-link>` 实际上就是通过创建 `<a>` 标签来定义导航链接的。

具体的用法可以参考 [RouterLinkProps](https://router.vuejs.org/zh/api/interfaces/RouterLinkProps.html)。

### 编程式导航

`router.push()` 和 `router.replace()` 会返回一个 `Promise` 对象，若希望在路由变更后在执行某些操作，需要配合 `then()` 或者 `async / await` 来进行使用。

具体用法可以参考 [Router](https://router.vuejs.org/zh/api/interfaces/Router.html)，其中与 **路由导航** 相关的方法有：`push()`、`replace()`、`go()`、`back()`、`forward()`。

## 历史记录模式

在创建路由器实例时，history 配置允许我们在不同的历史模式中进行选择。

### Hash 模式

hash 模式是用 `createWebHashHistory()` 创建的：

```js
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    //...
  ],
})
```

它在内部传递的实际 URL 之前使用了一个哈希字符（`#`）。由于 **这部分 URL 从未被发送到服务器**，所以它不需要在服务器层面上进行任何特殊处理。不过，**它在 `SEO` 中确实有不好的影响**。如果你担心这个问题，可以使用 [HTML5 模式](#html5-模式)。

### Memory 模式

Memory 模式不会假定自己处于浏览器环境，因此不会与 URL 交互也 **不会自动触发初始导航**。这使得它非常适合 `Node` 环境和 `SSR`。它是用 `createMemoryHistory()` 创建的，并且 **需要你在调用 `app.use(router)` 之后手动 `push` 到初始导航**。

```js
import { createRouter, createMemoryHistory } from 'vue-router'
const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    //...
  ],
})
```

虽然不推荐，你仍可以在浏览器应用程序中使用此模式，但请注意它 **不会有历史记录**，这意味着你无法后退或前进。

### HTML5 模式

用 `createWebHistory()` 创建 HTML5 模式，推荐使用这个模式：

```js
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    //...
  ],
})
```

当使用这种历史模式时，URL 会看起来很 "正常"，例如 `https://example.com/user/id`。漂亮!

不过，问题来了。由于我们的应用是 **一个单页的客户端应用**，如果没有适当的服务器配置，用户在浏览器中直接访问 `https://example.com/user/id`，就会得到一个 404 错误。这就尴尬了。

不用担心：要解决这个问题，你需要做的就是在你的服务器上添加一个简单的 **回退路由**。如果 URL 不匹配任何静态资源，它应提供与你的应用程序中的 `index.html` 相同的页面。漂亮依旧!

## 服务器配置示例

如果你部署到子目录，你应该使用 [`Vue CLI`](https://github.com/vuejs/vue-cli) 的 [`publicPath` 配置](https://cli.vuejs.org/zh/config/#publicpath) 或者 [create-vue](https://github.com/vuejs/create-vue) 的 [`base` 配置](https://cn.vitejs.dev/config/shared-options#base) 和 [`相关的路由器的 base 属性`（HTML5 模式为例）](https://router.vuejs.org/zh/api/#Functions-createWebHistory)。

你还需要调整下面的例子，以使用子目录而不是根目录（例如，将 `RewriteBase/` 替换为 `RewriteBase/name-of-your-subfolder/`）。

::: tip 附加说明
这有一个注意事项。你的服务器将不再报告 404 错误，因为现在所有未找到的路径都会显示你的 `index.html` 文件。为了解决这个问题，你应该在你的 Vue 应用程序中实现一个万能的路由来显示 404 页面。

```js
const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: '/:pathMatch(.*)', component: NotFoundComponent }],
})
```

另外，如果你使用的是 Node.js 服务器，你可以通过在服务器端使用路由器来匹配传入的 URL，如果没有匹配到路由，则用 404 来响应，从而实现回退。查看 [Vue 服务器端渲染文档](https://cn.vuejs.org/guide/scaling-up/ssr.html) 了解更多信息。
:::

## 完整的导航解析流程

1. 导航被触发。
2. 在失活的组件里调用 `beforeRouteLeave` 守卫。
3. 调用全局的 `beforeEach` 守卫。
4. 在重用的组件里调用 `beforeRouteUpdate` 守卫(2.2+)。
5. 在路由配置里调用 `beforeEnter`。
6. 解析异步路由组件。
7. 在被激活的组件里调用 `beforeRouteEnter`。
8. 调用全局的 `beforeResolve` 守卫(2.5+)。
9. 导航被确认。
10. 调用全局的 `afterEach` 钩子。
11. 触发 DOM 更新。
12. 调用 `beforeRouteEnter` 守卫中传给 `next` 的回调函数，创建好的组件实例会作为回调函数的参数传入。

## 命名路由

所有路由的命名都必须是唯一的。如果为多条路由添加相同的命名，路由器只会保留最后那一条。

## 获取路由表

1. [router.options.routes](https://router.vuejs.org/zh/api/interfaces/RouterOptions.html#Properties-routes)：路由器的初始路由列表。
2. [router.getRoutes()](https://router.vuejs.org/zh/api/interfaces/Router.html#Methods-getRoutes)：获得所有路由记录的完整列表。