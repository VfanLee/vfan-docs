# Vant

## 按需引入 Vant

[Vant 4.x](https://vant-ui.github.io/vant/#/zh-CN) 适用于 Vue 3 开发。

```sh
npm i vant
```

```sh
npm i -D @vant/auto-import-resolver unplugin-vue-components unplugin-auto-import
```

如果是基于 Vite 的项目，在 `vite.config.js` 文件中配置插件：

```js{2-4,9-14}
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
