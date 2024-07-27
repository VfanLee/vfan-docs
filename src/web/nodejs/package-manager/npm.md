# npm

> npm CLI：<https://docs.npmjs.com/cli/>  
> npm 仓库：<https://www.npmjs.com/>

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

## npm

> npm 配置文件路径：`~/.npmrc`

### npm 镜像

```sh
npm config set registry https://registry.npmmirror.com
```

### npm 清缓存

```sh
npm cache clear --force
```

## 发包

1. 注册 npm 账号
2. npm login
3. npm publish

You do not have permission to publish "xxx"

极有可能是重名了，修改 package.json

```json
{
   "name": "@vfanlee/xxx"
}
```

You must sign up for private packages

加上前缀，默认认为是私有包，需要付费，可以将权限设置为公开

```sh
npm publish --access public
```

You cannot publish over the previously published versions

发包不能版本相同，需要提升版本

```sh
npm version patch  # 补丁版本,最后一位数加1 
npm version minor  # 增加了新功能 中间的数字加1
npm version major # 大改动,不向下兼容 第一位数字加1
```

## 取消发布包

```sh
npm unpublish [packagename]--force
```

## 发包隐藏源码

在发布 npm 包时，你可以通过以下几种方法来确保密钥文件不被包含在发布包中：

1. **使用 `.npmignore` 文件：**

   在项目根目录下创建一个 `.npmignore` 文件，并在文件中列出你不希望包含在 npm 包中的文件或目录。比如：

   ```plaintext
   secret-key-file.txt
   config/secret/
   ```

   `.npmignore` 文件的语法与 `.gitignore` 类似。它会告诉 npm 哪些文件或目录在发布时应该被忽略。

2. **使用 `files` 字段：**

   在 `package.json` 文件中，可以使用 `files` 字段来指定应该包含在 npm 包中的文件和目录。其他未列出的文件将被排除。比如：

   ```json
   {
     "name": "your-package-name",
     "version": "1.0.0",
     "main": "index.js",
     "files": [
       "index.js",
       "lib/"
     ]
   }
   ```

   这样，只有 `index.js` 和 `lib` 目录会被包含在发布的 npm 包中。

3. **使用 `npm publish` 命令时的 `--ignore-scripts` 选项：**

   发布包时，可以使用 `--ignore-scripts` 选项来忽略指定的脚本，例如：

   ```bash
   npm publish --ignore-scripts
   ```

4. **通过 `.gitignore` 自动生成 `.npmignore`：**

   如果你的项目已经有一个 `.gitignore` 文件，可以通过以下命令自动生成一个 `.npmignore` 文件：

   ```bash
   cp .gitignore .npmignore
   ```

   这样，`.gitignore` 文件中列出的所有文件和目录也会被 npm 忽略。
