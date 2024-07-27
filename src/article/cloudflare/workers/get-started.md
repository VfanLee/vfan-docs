# 快速开始

## Cloudflare Dashboard

1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/) 并选择您的账户。
2. 转到 **Workers & Pages**。
3. 选择创建应用程序。
4. 选择一个模板或创建 Worker。
5. 查看提供的代码并选择部署。
6. 在提供的 [workers.dev](https://developers.cloudflare.com/workers/configuration/routing/workers-dev/) 子域中预览 Worker。

## C3 (create-cloudflare-cli)

### 创建项目

1. 安装 [`node.js`](https://nodejs.org/en/)、[`npm`](https://docs.npmjs.com/getting-started)。
2. 通过 C3 创建一个 Worker 项目：

    ```sh
    npm create cloudflare@latest
    ```

    有多种项目类型可选，选择 “Hello World” Worker。

### Hello World 目录总览

```sh
├── node_modules
├── package.json        # 依赖项配置文件
├── package-lock.json
├── src
│   └── index.js        # worker 入口，使用 ES 模块语法
├── test
├── vitest.config.js
└── wrangler.toml       # Wrangler 配置文件
```
