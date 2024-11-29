
# unplugin-auto-import

## 介绍

按需自动导入 Vite、Webpack、Rspack、Rollup 和 esbuild 的 API。

支持 TypeScript。

## 使用

例如：`vite` 项目中自动导入 `vue` 函数：

```js{2,6-9}
import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  plugins: [
    AutoImport({
      dts: true,
      imports: ['vue'],
    }),
  ],
})
```

::: tip 更好的 TypeScript 开发体验
若使用 TypeScript，还需要在 `tsconfig.json` 的 `include` 配置中添加 `auto-imports.d.ts`。

```json{5}
{
  // ...
  "include": [
    // ...
    "auto-imports.d.ts"
  ],
  // ...
}
```

:::

## 参考资料

- [unplugin-auto-import](https://github.com/unplugin/unplugin-auto-import)
