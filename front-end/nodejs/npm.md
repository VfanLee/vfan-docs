# npm

> npm CLI：https://docs.npmjs.com/cli/  
> npm 仓库：https://www.npmjs.com/

## 1. 命令

```sh
# 查看全局安装的依赖
npm ls -g --depth=0
```

## 2. npm vs npx

为了方便比较，同一个场景，分两个命令来实现，比较之后，非常清晰，如下：

### 2.1. 例1
<!-- tabs:start -->
<!-- tab:npm -->
1. `npm i -g cowsay`
2. `cowsay hello`
3. `npm un -g cowsay`

分析：

1. 全局安装了 cowsay。
2. 通过 cowsay 将 hello 输出到控制台。
3. 全局卸载 cowsay。

<!-- tab:npx -->
1. `npx cowsay hello`

分析：

1. 临时安装 cowsay；通过 cowsay 将 hello 输出到控制台；执行完后，卸载 cowsay。
<!-- tabs:end -->

### 2.2. 例2
<!-- tabs:start -->
<!-- tab:npm -->
`npm init <package-spec>`

<!-- tab:npx -->
`npx create-<package-spec>`
<!-- tabs:end -->

### package.json

```json
{
  "name": "", // 项目名称
  "version": "1.0.0", // 项目版本
  "description": "xxx", // 项目描述
  "main": "index.js", // 项目入口文件
  "scripts": { // 项目入口文件
    "test": "echo \"test\"" // npm 脚本
  }, 
  "repository": { // 项目仓库
    "type": "git",
    "url": "https://xxx"
  },
  "keywords": [ // 项目关键词
    "aaa",
    "bbb"
  ],
  "author": "vfanlee", // 项目作者
  "license": "MIT", // 项目许可协议
  "bugs": {
    "url": "https://xxx"
  },
  "homepage": "https://xxx", //项目主页
  "dependencies": {}, // 项目依赖
  "devDependencies": {}, // 项目开发依赖
  "typings": "./index.d.ts" // 指定 typescript 的类型声明文件
}
```
