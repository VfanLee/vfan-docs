# Vite 配置

## 配置 alias 别名

> 参考：[配置 resolve.alias](https://cn.vitejs.dev/config/shared-options.html#resolve-alias)

<!-- tabs:start -->
<!-- tab:对象写法 -->
```js
import { fileURLToPath, URL } from 'node:url'

{
  // ...
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
  // ...
}
```

<!-- tab:数组写法 -->
```js
import { fileURLToPath, URL } from 'node:url'

{
  // ...
  resolve: {
    alias: [
      {
        find: '@',
        replacement: fileURLToPath(new URL('./src', import.meta.url))
      }
    ]
  }
  // ...
}
```
<!-- tabs:end -->

## 自定义底层的 Rollup 打包配置

vite 底层是基于 [`rollup`](https://www.rollupjs.com/) 的，如果脚手架提供的配置无法满足开发需求，可以 [自定义 rollup 配置](https://cn.vitejs.dev/config/build-options.html#build-rollupoptions)。

## Vite CJS Node API deprecated

当 vite 4 升级到 vite 5 时，会提示 `the cjs build of vite's node api is deprecated. see https://vitejs.dev/guide/troubleshooting.html#vite-cjs-node-api-deprecated for more details.`，解决方案如下：

1. vite.config.js 配置文件的内容使用 ESM 语法。
2. `package.json` 含有 `type": "module`，或者使用 `.mjs` / `.mts` 拓展名。例如 `vite.config.mjs` 或者 `vite.config.mts`。

    ```json
    {
      "type": "module"
    }
    ```

如果你不确定警告来自哪里，你可以通过 `VITE_CJS_TRACE=true` 标志运行你的脚本来记录堆栈跟踪，根据如下形式改写脚本：

```json
{
  "scripts": {
    "dev": "set \"VITE_CJS_TRACE=true\" && vite",
    "build": "set \"VITE_CJS_TRACE=true\" && vite build",
  },
}
```

更多信息请参考 [Vite 排错指南 - CJS](https://cn.vitejs.dev/guide/troubleshooting#vite-cjs-node-api-deprecated)。
