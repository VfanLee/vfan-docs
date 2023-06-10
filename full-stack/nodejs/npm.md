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
