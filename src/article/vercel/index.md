# vercel

## 部署 express

### 采用默认结构

```sh
├─.vercel # vercel dev 自动生成
├─api
  └─index.js
└─vercel.json
```

1. 在项目根目录下创建一个 `api` 文件夹，在文件夹内，创建一个 `index.js` 文件：

   ```js
   const express = require('express')
   const app = express()

   app.get('/', (req, res) => res.send('Express on Vercel'))

   module.exports = app
   ```

   ::: tip
   不需要显式的启动服务，vercel 会：

   - 定义基本路由 /
   - 调用时在 Vercel 上返回 Express
   - 启动在端口 3000 上运行的 Express 服务器
     :::

2. 在项目根目录下创建一个 `vercel.json` 文件：

   ```json
   {
     "version": 2,
     "rewrites": [
       {
         "source": "/(.*)",
         "destination": "/api"
       }
     ]
   }
   ```

### 自定义目录结构

```sh
├─.vercel # vercel dev 自动生成
├─api2
  └─index.js
└─vercel.json
```

当项目结构与 vercel 默认不符的时候（假设将 `api` 改为 `api2`），也是支持自定义的，需要改下 `vercel.json` 文件：

```json
{
  "version": 2,
  "builds": [{ "src": "api2/index.js", "use": "@vercel/node" }],
  "rewrites": [{ "source": "/(.*)", "destination": "/api2" }]
}
```

### 本地开发/部署

1. 安装 Vercel CLI（如果未安装的话）

    ```sh
    npm i -g vercel
    ```

2. 登录 vercel 账号

    ```sh
    vercel login
    ```

3. 本地开发预览

    ```sh
    vercel dev
    ```

    ::: tip
    首次运行的时候，可能需要一些配置，根据实际情况即可，一般默认即可。
    :::

4. 部署

    ```sh
    vercel
    ```

## rewrites

```json
{
  "rewrites": [
    { "source": "/:path*/", "destination": "/:path*/index.html" },
    { "source": "/:path*", "destination": "/:path*.html" }
  ]
}
```
