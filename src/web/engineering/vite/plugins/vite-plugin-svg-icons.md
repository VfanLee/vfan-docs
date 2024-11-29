# vite-plugin-svg-icons

## 介绍

用于生成 svg sprite。

## 安装

```sh
npm i -D vite-plugin-svg-icons
```

## 使用

在 vite 项目中配置插件：

```js {4,9-12}
// vite.config.js
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

export default defineConfig({
  plugins: [
    createSvgIconsPlugin({
      iconDirs: [fileURLToPath(new URL('./src/icons', import.meta.url))], // 指定存放 svg 图标的文件夹
      symbolId: 'icon-[name]', // 指定 symbolId 格式
    }),
  ],
})
```

创建一个渲染图标组件：

```vue
<!-- src/components/SvgIcon.vue -->
<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  className: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <svg :class="className" aria-hidden="true">
    <use :xlink:href="`#${name}`"></use>
  </svg>
</template>

<style scoped>
svg {
  width: 1em;
  height: 1em;
  fill: currentColor;
}
</style>
```

将 `SvgIcon.vue` 注册为全局组件：

```js
// main.js
import { createApp } from 'vue'
import 'virtual:svg-icons-register'

import App from './App.vue'
import SvgIcon from './components/SvgIcon.vue'

const app = createApp(App)

app.component('SvgIcon', SvgIcon)

app.mount('#app')
```

使用示例：

```vue
<template>
  <div>
    <SvgIcon name="icon-custom" className="custom-class" />
  </div>
</template>
```

::: warning
`name` 属性对应的值应是文件名（去掉 `.svg` 后缀）。
:::

## 参考资料

- [vite-plugin-svg-icons](https://github.com/vbenjs/vite-plugin-svg-icons)
