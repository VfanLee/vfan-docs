# Vue

## 什么是 Vue？

<Answer>

1. Vue 是一款用于构建用户界面的 JavaScript 框架。
2. 渐进式框架：

   - Vue 不仅仅是一个框架，更是一个生态系统，可以根据不同的需求场景，以不同的方式使用 Vue：
     - 无需构建，渐进式地增强 HTML
     - 单页应用（SPA）
     - 全栈/服务器端渲染（SSR）
     - 静态站点生成（SSG）
     - 开发桌面端、移动端、WebGL、甚至是命令行终端界面

   - 除了以上提到的场景外，Vue 中的插件系统这也是 “渐进式” 的体现。插件系统允许按需引入特定的功能，例如：
     - Vue Router 路由系统
     - Vuex、Pinia 状态管理
     - Vue I18n 国际化
     - ...

3. 在使用了构建工具的 Vue 项目中，通常是以类似于一种类似于 “HTML 结构” 的格式的文件来进行开发的，它被称为 **单文件组件**（Single-File Components，缩写为 SFC，`.vue` 文件）
4. 自 Vue3 出来以后，Vue 组件可以按照 **选项式**（Options API） 和 **组合式** Composition API 两种不同的风格进行书写。

    ::: code-group

    ```vue [选项式]
    <script>
    export default {
      // data() 返回的属性将会成为响应式的状态
      // 并且暴露在 `this` 上
      data() {
        return {
          count: 0
        }
      },

      // methods 是一些用来更改状态与触发更新的函数
      // 它们可以在模板中作为事件处理器绑定
      methods: {
        increment() {
          this.count++
        }
      },

      // 生命周期钩子会在组件生命周期的各个不同阶段被调用
      // 例如这个函数就会在组件挂载完成后被调用
      mounted() {
        console.log(`The initial count is ${this.count}.`)
      }
    }
    </script>

    <template>
      <button @click="increment">Count is: {{ count }}</button>
    </template>
    ```

    ```vue [组合式]
    <script setup>
    import { ref, onMounted } from 'vue'

    // 响应式状态
    const count = ref(0)

    // 用来修改状态、触发更新的函数
    function increment() {
      count.value++
    }

    // 生命周期钩子
    onMounted(() => {
      console.log(`The initial count is ${count.value}.`)
    })
    </script>

    <template>
      <button @click="increment">Count is: {{ count }}</button>
    </template>
    ```

    :::

</Answer>

## SPA、SSR、SSG 的区别？

<Answer>

### SPA（Single Page Application）单页面应用

  在 **客户端** 通过 JavaScript 动态构建页面。

  1. **首次加载速度慢**：首次加载时需要下载整个应用的所有资源（HTML、CSS、JavaScript），因此初始加载时间较长。
  2. **页面切换流畅**：页面切换时，仅需动态渲染 **变化的部分**，无需重新加载整个页面，用户体验更好。
  3. **对搜索引擎不友好**：因为内容是通过 JavaScript 动态生成的，搜索引擎爬虫可能无法有效抓取页面内容。

### SSR（Server-Side Rendering）服务器端渲染

  在 **服务器端** 生成 HTML 页面并发送给客户端。

  1. **首次加载速度快**：首次加载时服务器返回完整的 HTML 页面，因此初始加载时间较短，用户可以更快看到内容。
  2. **页面切换可能不流畅**：每次页面切换都需要从服务器获取新的页面，因此可能会导致页面切换时出现短暂的加载时间。
  3. **对搜索引擎友好**：服务器端渲染生成的 HTML 页面可以被搜索引擎爬虫轻松抓取，提高 SEO 友好性。

### SSG（Static Site Generation）静态站点生成

  在 **构建时** 生成静态 HTML 页面，并在 **部署时** 将这些页面直接部署到服务器上。

  1. **首次加载速度快**：与 SSR 类似，静态页面在构建时生成，首次加载时直接从服务器获取完整的 HTML 页面，因此初始加载时间较短。
  2. **页面切换速度快**：与 SPA 类似，静态页面可以使用前端框架（如 Vue 或 React）进行客户端路由，页面切换时仅需加载变化的部分，提高用户体验。
  3. **对搜索引擎友好**：静态页面在构建时生成，包含完整的 HTML 内容，搜索引擎爬虫可以轻松抓取，提高 SEO 友好性。
  4. **构建时间长**：对于内容频繁更新或页面数量庞大的网站，构建时间可能较长，因为需要生成每一个静态页面。
  5. **部署简单**：静态页面可以部署到任何静态文件服务器，如 GitHub Pages、Netlify 等，部署过程简单快捷。

</Answer>

## 什么是 Vue 的响应式？

虚拟dom diff

Vue 的响应式指的是：数据变化时，依赖数据的函数重新运行。

在 Vue 开发中，数据和组件的 render 函数关联在一起，从而实现了数据变化时，会重新执行 render 函数。当然除了 vue 中的 render 函数之外，如：computed、watch …… 也是响应式的场景。

对象新增属性

响应式（Object.defineProperty 与 Proxy）

数据双向绑定

## 生命周期

- `beforeCreate`：实例初始化之后，数据观测和事件配置之前调用。
- `created`：实例创建完成后调用，此时已经完成数据观测、属性和方法的运算，事件也已经配置好，但是 DOM 还没有生成。
- `beforeMount`：在挂载开始之前被调用，相关的 render 函数首次被调用。
- `mounted`：el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用。
- `beforeUpdate`：数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前。
- `updated`：由于数据更改导致的虚拟 DOM 重新渲染和打补丁之后调用。
- `beforeDestroy`：实例销毁之前调用。在这一步，实例仍然完全可用。
- `destroyed`：实例销毁后调用。调用后，Vue 实例指示的所有东西都会解除绑定，所有事件监听器会被移除，所有子实例也会被销毁。

## v-show v-if

## v-for

## key

## v-if 和 v-for

nexttick

## 组合式函数 和 Mixin

vue2 中复用逻辑通常采用 mixin。

vue3 中复用逻辑通常采用 组合式函数。

## vue 组件通信

### props

- props 可以传递任意类型吗？

- props 会保持响应式吗？ -> 如何解决？

    computed、watch

### slot

### provide / reject

### 子组件

## method vs computed

## watch 侦听器

### 如何监听一个对象的某个属性？

### watch vs watchEffect

## `.vue` 文件中的 html 是真实的 html 吗？

> 或者说：`.vue` 文件中的 template 中写入的 HTML 是真实的 THML 标签节点吗？

不是的！

## render 函数

## h 函数
