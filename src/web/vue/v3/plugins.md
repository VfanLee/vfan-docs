# 插件

## 介绍

插件 (Plugins) 是一种能为 Vue 添加全局功能的工具代码。

插件没有严格定义的使用范围，但是插件发挥作用的常见场景主要包括以下几种：

- 通过 `app.component()` 和 `app.directive()` 注册一到多个全局组件或自定义指令。
- 通过 `app.provide()` 使一个资源可被注入进整个应用。
- 向 `app.config.globalProperties` 中添加一些全局实例属性或方法。

## 使用插件

```js{3,7-9}
// main.js
import { createApp } from 'vue'
import myPlugin from './plugins/myPlugin'

const app = createApp({})

app.use(myPlugin, {
  /* 可选的选项 */
})
```

## 定义插件

一个插件可以是一个拥有 `install()` 方法的对象，也可以直接是一个安装函数本身。安装函数会接收到安装它的应用实例和传递给 `app.use()` 的额外选项作为参数：

```js{3}
// plugins/i18n.js
const myPlugin = {
  install(app, options) {
    // 配置此应用
  }
}

export default myPlugin
```

## 插件中的 Provide / Inject

在插件中，我们可以通过 `provide` 来为插件用户供给一些内容。

举例来说，我们可以将插件接收到的 `options` 参数提供给整个应用，让任何组件都能使用这个翻译字典对象。

```js
// plugins/i18n.js
export default {
  install: (app, options) => {
    app.provide('i18n', options)
  }
}
```

现在，插件用户就可以在他们的组件中以 i18n 为 key 注入并访问插件的选项对象了。

```vue
<script setup>
import { inject } from 'vue'

const i18n = inject('i18n')

console.log(i18n.greetings.hello)
</script>
```

## npm 发布一个 Vue 插件包

<https://www.youtube.com/watch?v=BoACsUqqoN0>
