# Vite 插件

## unplugin-auto-import

[unplugin-auto-import](https://github.com/unplugin/unplugin-auto-import) 可用于自动导入。

例如，自动导入 vue 函数：

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

::: tip Element Plus、Vant …… 的按需引入也是用的这个插件。
:::

::: tip Typescript 中集成
若使用 TS，还需要在 `tsconfig.json` 文件中包含 `auto-imports.d.ts`

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
