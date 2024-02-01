# npm

> npm CLI：https://docs.npmjs.com/cli/  
> npm 仓库：https://www.npmjs.com/

## npm vs npx

为了方便比较，同一个场景，分两个命令来实现，比较之后，非常清晰，如下：

### npm 场景

1. `npm install -g cowsay`
2. `cowsay hello`
3. `npm uninstall -g cowsay`

过程分析：

1. 全局安装了 cowsay。
2. 通过 cowsay 将 hello 输出到控制台。
3. 全局卸载 cowsay。

### npx 场景

1. `npx cowsay hello`

过程分析：

1. 全局临时安装 cowsay；
2. 通过 cowsay 将 hello 输出到控制台；
3. 执行完后，卸载 cowsay。

## package.json 语义版本控制

- 补丁发布：1.0 或 1.0.x 或 ~1.0.4
- 次要版本：1 或 1.x 或 ^1.0.4
- 主要版本：* 或 x

## node 模块寻找策略

使用路径（相对路径、绝对路径）写法导入模块，例如：`require(./a)`。

1. 文件查找
   1. 首先根据路径寻找 `a` 文件，
   2. 若找不到，会寻找 `a.js`、`a.json` 文件。
2. 文件夹查找
   1. 若找不到，会进入 `a` 文件夹，寻找 `package.json` 文件中的 `main` 字段的指定文件。
   2. 若找不到 `package.json` 文件或者其 `main` 字段文件不存在，则会在 `a` 文件夹下寻找 `index.js`、`index.json`文件。

使用非路径写法导入模块，例如：`require(xxx)`。

1. 内置模块
   1. 首先去寻找内置模块，如：fs、path、http ……
2. 第三方模块
   1. 若找不到，会认为是第三方模块，会从 `node_modules` 文件夹中寻找。并且在 `node_modules` 中寻找的时候，也是遵循 **文件查找** 和 **文件夹查找** 的逻辑的。
   2. 若该层的 `node_modules` 的没有找到，则会去上层的 `node_modules` 文件夹中寻找。
