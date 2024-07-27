# pnpm

<https://pnpm.io/zh/>

## 基本命令

| 功能               | npm 命令                      | pnpm 命令                          |
| ------------------ | ----------------------------- | ---------------------------------- |
| 初始化项目         | `npm init`                    | `pnpm init`                        |
| 安装所有依赖       | `npm install`                 | `pnpm install`                     |
| 安装特定依赖       | `npm install <package>`       | `pnpm add <package>`               |
| 安装开发依赖       | `npm install -D <package>`    | `pnpm add -D <package>`            |
| 卸载依赖           | `npm uninstall <package>`     | `pnpm remove <package>`            |
| 更新依赖           | `npm update`                  | `pnpm update`                      |
| 运行脚本           | `npm run <script>`            | `pnpm run <script>`                |
| 全局安装包         | `npm install -g <package>`    | `pnpm add -g <package>`            |
| 执行本地安装的命令 | `npx <command>`               | `pnpm dlx <command>`               |
| 登录               | `npm login`                   | `pnpm login`                       |
| 发布包             | `npm publish`                 | `pnpm publish`                     |
| 增加版本号         | `npm version <update_type>`   | `pnpm version <update_type>`       |
| 动态包执行         | `npx create-react-app my-app` | `pnpm dlx create-react-app my-app` |

## 修改设置下载包的存储路径

```sh
pnpm config set store-dir <new path> # 设置 .pnpm-store 存储路径
pnpm config set store-dir "/d/.pnpm-store/v3"

pnpm store path # 验证
```
