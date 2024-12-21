# 搭配 TypeScript 使用 Vue

::: tip Vue + TS 语法变化？
👉 [点击这里](/web/vue/v3/typescript/composition-api)
:::

## 集成 TypeScript

1. 安装 ts 相关依赖：

    ```sh
    npm install -D @tsconfig/node<version> \
                  @types/node@^<version> \
                  @vue/tsconfig \
                  npm-run-all2 \
                  typescript \
                  vue-tsc
    ```

    ::: tip version
    建议根据项目的 Node.js 版本来更新 version，Node.js 最低版本 18。
    :::

    ::: details 依赖说明：
    - **@tsconfig/node\<version\>**：这是一个预定义的 TypeScript 配置文件，针对 Node.js \<version\> 进行了优化。它提供了一组推荐的 TypeScript 编译选项，以确保项目与 Node.js \<version\> 版本兼容。
    - **@types/node@\<version\>**：这是 Node.js 的类型定义文件库。它提供了 Node.js 的所有类型声明，使 TypeScript 能够识别 Node.js 内置模块（如 `fs`、`path` 等）的类型。
    - **@vue/tsconfig**：这是 Vue 官方提供的一个 TypeScript 配置文件模板，专门用于 Vue 项目。它包含了推荐的 TypeScript 编译选项，适用于 Vue 的单文件组件（SFC）。
    - **npm-run-all2**：这是一个命令行工具，允许你并行或串行运行多个 npm 脚本。
    - **typescript**：TypeScript 的编译器，它将 TypeScript 代码编译为 JavaScript 代码。
    - **vue-tsc**：这是一个用于检查 Vue 单文件组件（SFC）的 TypeScript 类型的工具。它提供了 `tsc`（TypeScript 编译器）的功能，并增加了对 Vue 文件的支持。
    :::

2. `package.json` 中修改 *build* 相关脚本：

    ```json
    "scripts": {
      "build": "run-p type-check \"build-only {@}\" --",
      "build-only": "vite build",
      "type-check": "vue-tsc --build"
    },
    ```

    该脚本主要是为了在编译之前对类型做校验。

3. 根目录中添加 ts 相关配置文件：

    ::: code-group

    ```ts [env.d.ts]
    /// <reference types="vite/client" />
    ```

    ```json [tsconfig.json]
    {
      "files": [],
      "references": [
        {
          "path": "./tsconfig.node.json"
        },
        {
          "path": "./tsconfig.app.json"
        }
      ]
    }
    ```

    ```json [tsconfig.app.json]
    {
      "extends": "@vue/tsconfig/tsconfig.dom.json",
      "include": [
        "env.d.ts",
        "src/**/*",
        "src/**/*.vue"
      ],
      "exclude": ["src/**/__tests__/*"],
      "compilerOptions": {
        "composite": true,
        "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.app.tsbuildinfo",
        
        "baseUrl": ".",
        "paths": {
          "@/*": ["./src/*"]
        }
      }
    }
    ```

    ```json [tsconfig.node.json]
    {
      "extends": "@tsconfig/node<version>/tsconfig.json",
      "include": [
        "vite.config.*",
        "vitest.config.*",
        "cypress.config.*",
        "nightwatch.conf.*",
        "playwright.config.*"
      ],
      "compilerOptions": {
        "composite": true,
        "noEmit": true,
        "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.node.tsbuildinfo",

        "module": "ESNext",
        "moduleResolution": "Bundler",
        "types": ["node"]
      }
    }
    ```

    :::

## 常见问题

::: danger 报错：
无法找到模块“xxx/Xxx.vue”的声明文件。“xxx/Xxx.vue”隐式拥有 "any" 类型。
:::

原因：typescript 不能识别 `.vue` 文件。

解决方案：在 `env.d.ts` 下添加如下代码：

```ts
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
```

补充说明：随着版本更新，未来可能会修复这个问题，无需手动添加该配置。
