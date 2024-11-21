# Vant

::: tip
[Vant 4.x](https://vant-ui.github.io/vant/#/zh-CN) 适用于 Vue 3 开发。
:::

## 引入 Vant

## 按需引入

安装依赖：

::: code-group

```sh [dependencies]
npm i vant
```

```sh [devDependencies]
npm i -D @vant/auto-import-resolver unplugin-vue-components unplugin-auto-import
```

:::

修改配置：

::: code-group

```js [vite.config.js] {2-4,9-14}
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from '@vant/auto-import-resolver'

export default {
  plugins: [
    vue(),
    AutoImport({
      resolvers: [VantResolver()],
    }),
    Components({
      resolvers: [VantResolver()],
    }),
  ],
}
```

:::
