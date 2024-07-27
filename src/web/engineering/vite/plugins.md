# Vite 插件

## unplugin-auto-import

<https://github.com/unplugin/unplugin-auto-import>

自动导入 vue 函数

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

::: tip
若使用 ts，还需要在 `tsconfig.json` 文件中包含 `auto-imports.d.ts`

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

Element Plus、Vant …… 的按需引入也是用的这个插件。
