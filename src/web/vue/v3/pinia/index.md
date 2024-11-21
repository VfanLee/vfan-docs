# Pinia

::: tip
当前 [Pinia](https://Pinia.vuejs.org/zh/) 最新版本为 2.x。
:::

## 从 vuex 迁移到 Pinia

**请注意：Vue3 更推荐使用 Pinia 而非 [Vuex](https://vuex.vuejs.org/zh/)。**

Vuex 有一个概念，带有多个模块的单一 store。这些模块可以被命名，甚至可以互相嵌套。

将这个概念过渡到 Pinia 最简单的方法是，你以前使用的每个模块现在都是一个 store。每个 store 都需要一个 id，类似于 Vuex 中的命名空间。这意味着每个 store 都有命名空间的设计。嵌套模块也可以成为自己的 store。互相依赖的 store 可以直接导入其他 store。

你的 Vuex 模块如何重构为 Pinia store，完全取决于你，不过这里有一个示例：

```sh
# Vuex 示例(假设是命名模块)。
src
└── store
    ├── index.js           # 初始化 Vuex，导入模块
    └── modules
        ├── module1.js     # 命名模块 'module1'
        └── nested
            ├── index.js   # 命名模块 'nested'，导入 module2 与 module3
            ├── module2.js # 命名模块 'nested/module2'
            └── module3.js # 命名模块 'nested/module3'

# Pinia 示例，注意 ID 与之前的命名模块相匹配
src
└── stores
    ├── index.js          # (可选) 初始化 Pinia，不必导入 store
    ├── module1.js        # 'module1' id
    ├── nested-module2.js # 'nested/module2' id
    ├── nested-module3.js # 'nested/module3' id
    └── nested.js         # 'nested' id
```

这为 store 创建了一个扁平的结构，但也保留了和之前等价的 id 命名方式。如果你在根 store (在 Vuex 的 `store/index.js` 文件中)中有一些 `state/getter/action/mutation`，你可以创建一个名为 `root` 的 `store`，来保存它们。

Pinia 的目录一般被命名为 stores 而不是 store。这是为了强调 Pinia 可以使用多个 store，而不是 Vuex 的单一 store。

对于大型项目，你可能希望逐个模块进行转换，而不是一次性全部转换。其实在迁移过程中，你可以同时使用 Pinia 和 Vuex。这样也完全可以正常工作，这也是将 Pinia 目录命名为 `stores` 的另一个原因。

## 在 Vue 项目中引入 Pinia

1. 安装 `pinia`。

    ```sh
    npm install pinia@latest
    ```

2. 在 `src/stores/index.js` 中创建一个 `pinia` 实例 (根 store)。

    ```js{3}
    import { createPinia } from 'pinia'

    const pinia = createPinia()

    export default pinia
    ```

3. 在 `src/main.js` 中引入 `pinia` 实例。

    ```js{1,5}
    import pinia from './stores'

    const app = createApp(App)

    app.use(pinia)

    app.mount('#app')
    ```

## 定义一个 Store

Store 是用 `defineStore()` 定义的，它的 **第一个参数** 要求是 **一个独一无二** 的名字。

```js
import { defineStore } from 'pinia'

// 你可以任意命名 `defineStore()` 的返回值，但最好使用 store 的名字，同时以 `use` 开头且以 `Store` 结尾。
// (比如 `useUserStore`，`useCartStore`，`useProductStore`)
// 第一个参数是你的应用中 Store 的唯一 ID。
export const useAlertsStore = defineStore('alerts', {
  // 其他配置...
})
```

这个名字 ，也被用作 `id` ，**是必须传入的**， Pinia 将用它来连接 `store` 和 `devtools`。

为了养成习惯性的用法，将返回的函数命名为 `use...` 是 **一个符合组合式函数风格的约定**。

`defineStore()` 的 **第二个参数** 可接受两类值：**Setup 函数** 或 **Option 对象**。

### Options Store

与 Vue 的 Options API 类似：

- `state` 相当于 `data`。
- `getters` 相当于 `computed`。
- `actions` 相当于 `methods`。

```js
export const useCounterStore = defineStore('counter', {
  state: () => ({ count: 0 }),
  getters: {
    double: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++
    },
  },
})
```

### Setup Store

也存在另一种定义 store 的可用语法。与 Vue 的 Composition API 的 setup 函数类似：

- `state` 相当于 `ref()`。
- `getters` 相当于 `computed()`。
- `actions` 相当于 `function()`。

我们可以传入一个函数，该函数定义了一些响应式属性和方法，并且 **返回** 一个带有我们想暴露出去的属性和方法的对象。

```js
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})
```

注意，要让 pinia 正确识别 state，**你必须在 setup store 中返回 state 的所有属性**。这意味着，你不能在 store 中使用私有属性。**不完整返回会影响 SSR ，开发工具和其他插件的正常运行。**

Setup store 也可以依赖于全局提供的属性，比如路由。任何应用层面提供的属性都可以在 store 中使用 `inject()` 访问，就像在组件中一样：

```js
import { inject } from 'vue'
import { useRoute } from 'vue-router'

export const useSearchFilters = defineStore('search-filters', () => {
  const route = useRoute()
  // 这里假定 `app.provide('appProvided', 'value')` 已经调用过
  const appProvided = inject('appProvided')

  // ...

  return {
    // ...
  }
})
```

::: warning
不要返回像 `route` 或 `appProvided（上例中）` 之类的属性，因为它们不属于 store，而且你可以在组件中直接用 `useRoute()` 和 `inject('appProvided')` 访问。
:::

## 使用 store

### 在组件中使用 store

一旦 store 被实例化，你可以直接访问在 store 的 `state`、`getters` 和 `actions` 中定义的任何属性。

请注意，**store 是一个用 `reactive` 包装的对象**，这意味着不需要在 `getters` 后面写 `.value`。就像 setup 中的 `props` 一样，我们不能对它进行解构：

```vue
<script setup>
import { useCounterStore } from '@/stores/counter'

// 可以在组件中的任意位置访问 `store` 变量 ✨
const store = useCounterStore()
</script>
```

::: tip 从 Store 解构
为了从 store 中提取属性时保持其响应性，你需要使用 `storeToRefs()`。它将为每一个响应式属性创建引用。**当你只使用 store 的 `state` 而不调用任何 `action` 时**，它会非常有用。

请注意，**你可以直接从 `store` 中解构 `action`**，因为它们也被绑定到 store 上。

举个例子：

```vue{2,7}
<script setup>
import { storeToRefs } from 'pinia'

const store = useCounterStore()

// `name` 和 `doubleCount` 是响应式的 ref
// 同时通过插件添加的属性也会被提取为 ref
// 并且会跳过所有的 action 或非响应式 (不是 ref 或 reactive) 的属性
const { name, doubleCount } = storeToRefs(store)

// 作为 action 的 increment 可以直接解构
const { increment } = store
</script>
```

:::

### 在组件外使用 store

如果你不做任何 SSR(服务器端渲染)，在用 `app.use(pinia)` 安装 pinia 插件后，对 `useStore()` 的任何调用都会正常执行：

```js
import { useUserStore } from '@/stores/user'
import { createApp } from 'vue'
import App from './App.vue'

const userStore = useUserStore() // ❌  失败，因为它是在创建 pinia 之前被调用的

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)

const userStore = useUserStore() // ✅ 成功，因为 pinia 实例现在激活了
```

为确保 pinia 实例被激活，最简单的方法就是将 `useStore()` 的调用放在 pinia 安装后才会执行的函数中。

例如，在 Vue Router 的导航守卫中使用 store：

```js
import { createRouter } from 'vue-router'

const router = createRouter({
  // ...
})

const store = useStore() // ❌ 由于引入顺序的问题，这将失败。

router.beforeEach((to, from, next) => {
  // 我们想要在这里使用 store
  if (store.isLoggedIn) next()
  else next('/login')
})

router.beforeEach((to) => {
  const store = useStore() // ✅ 这样做是可行的，因为路由器是在其被安装之后开始导航的，而此时 Pinia 也已经被安装。

  if (to.meta.requiresAuth && !store.isLoggedIn) return '/login'
})
```
