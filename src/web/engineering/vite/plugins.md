# Vite 插件

## unplugin-auto-import

[unplugin-auto-import](https://github.com/unplugin/unplugin-auto-import) 可用于自动导入。

::: tip
Element Plus、Vant …… 官网上的“按需引入”方式就是用的这个插件。
:::

例如，自动导入 `vue` 函数：

```js{3,9}
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue'],
    }),
  ],
})
```

::: tip 更好的 TypeScript 开发体验
若使用 TypeScript，还需要在 `tsconfig.json` 的 `include` 配置中添加 `auto-imports.d.ts`。

```json{8}
{
  // ...
  "include": [
    "env.d.ts",
    "src/**/*",
    "src/**/*.vue",
    // ...
    "auto-imports.d.ts"
  ],
  // ...
}
```

:::

## vite-plugin-static-copy

[vite-plugin-static-copy](https://github.com/sapphi-red/vite-plugin-static-copy) 用于复制文件。

```js
import { defineConfig } from 'vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  plugins: [
    // ...
    viteStaticCopy({
      targets: [
        {
          src: 'README.md',
          dest: '',
        },
      ],
    }),
    // ...
  ],
})
```

## vue 相关插件

### vite-plugin-vue-devtools

提升 vue 开发体验

```sh
npm install -D vite-plugin-vue-devtools
```

```js
import { defineConfig } from 'vite'
import vueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig({
  plugins: [vueDevTools()],
})
```

### vite-plugin-svg-icons

用于生成 svg sprite。

安装依赖：

```sh
npm i -D vite-plugin-svg-icons
```

在 vite 项目中配置插件：

```js {4,8-11}
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

## 更多插件

- [官方插件](https://vite.dev/plugins/)
- [社区插件](https://github.com/vitejs/awesome-vite#plugins)
