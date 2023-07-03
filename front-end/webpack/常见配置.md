# webpack

> webpack 配置：https://webpack.docschina.org/configuration/  
> 当前版本：v5

## 1. 核心概念

> 参考文档：https://webpack.docschina.org/concepts/

- **mode（模式）**：定义模式，有 development、production 两种模式。
- **entry（入口）**：定义打包的入口文件。
- **output（输出）**：定义打包后文件的命名、路径 ……
- **loader（加载器）**：通过不同的 loader 能将各种文件转换成有效模块。
- **plugins（插件）**：拓展 webpack 功能，插件相对于 loader 执行任务更广。
- **chunk**：源 module 文件经过 webpack 打包时，会自动根据文件的引用关系生成 chunk 文件。
- **bundle**：chunk 文件经过 webpack 处理后，最后会输出 bundle 文件，这些文件可以在浏览器中运行。

## 2. 基本开发环境（development）

在本地进行开发时，首先考虑的就是如何让项目能够顺利运行起来，所以需要考虑到的几个方面：

- 如何打包样式文件：.css、.scss、.less、.styl ……
- 如何打包资源文件：图片、字体、媒体文件 ……
- 如何打包 js 文件，使浏览器兼容 ES6+ 语法，开发时定制编码规范 ……
- 如何打包 html 文件，能够自动引入编译文件 ……
- 如何配置开发服务器，自动化构建，提高开发效率 ……

### 2.1. 处理样式文件

1. `sass-loader`：将 .scss 转换成 .css 文件（其他预处理器类似）。
2. `postcss-loader`：css 兼容性处理。
对于浏览器的兼容性处理范围，通过 Browserslist 来对兼容性范围进行限制，[参考这里](https://github.com/browserslist/browserslist#readme)。
3. `css-loader`：将 .css 文件转换成 webpack 可识别模块。
4. `style-loader`：将 css 插入到 DOM 中。

### 2.2. 处理资源文件

webpack4 中处理如字体、图片、音视频 …… 时，通常会用到 `url-loader` ， `file-loader` ，而在 webpack5 中已经集成进来了，通过 `asset module` 进行配置，[参考这里](https://webpack.docschina.org/guides/asset-modules/)。

### 2.3. 处理 js 文件

1. `babel-loader`：js 兼容性处理。只能处理大部分的 js 语法，对于较新语法，浏览器可能也不支持，需要配合 corejs 来使用。
然后定义具体的 babel 配置，[参考这里](https://babeljs.io/docs/en/config-files)。
对于浏览器的兼容性处理范围，通过 Browserslist 来对兼容性范围进行限制，[参考这里](https://github.com/browserslist/browserslist#readme)。
2. `eslint-webpack-plugin`：为 js 代码定制规则，提高开发时代码质量。
然后定义具体的 eslint 配置，[参考这里](https://eslint.org/docs/latest/user-guide/configuring/configuration-files)。

### 2.4. 处理 html 文件

`html-webpack-plugin`：简化 HTML 文件的创建，自动引入那些编译后为哈希值的文件。

### 2.5. Devtool

开发中，代码难免会有报错，而浏览器又是运行的编译后的文件，排错起来不太方便，好在 webpack 为开发者提供多种 SourceMap 配置，[参考这里](https://webpack.docschina.org/configuration/devtool/)。

### 2.6. DevServer

开发中，并不需要一直编译，然后再编译后的文件中进行调试，这样开发效率极其低下，`webpack-dev-server` 会帮助开发者在本地启动一个服务器，在内存中实时编译，通过自定义配置，可以非常有效的在本地进行开发，[参考这里](https://webpack.docschina.org/configuration/dev-server/)。

## 3. 基本生产环境（production）

项目开发完成，在保证项目顺利运行的前提下，项目上线后主要就是考虑如何对打包后的文件进行优化，提高性能。

### 3.1. 处理样式文件

1. `sass-loader`：将 .scss 转换成 .css 文件（其他预处理器类似）。
2. `postcss-loader`：css 兼容性处理。
对浏览器的兼容性处理范围，通过 Browserslist 来对兼容性范围进行限制，[参考这里](https://github.com/browserslist/browserslist#readme)。
3. `css-loader`：将 .css 文件转换成 webpack 可识别模块。
4. `mini-css-extract-plugin`：将 css 提取到单独文件中，再进行引入，性能会更好。
5. `css-minimizer-webpack-plugin`：css 压缩。

### 3.2. 处理资源文件

webpack4 中处理如字体、图片、音视频 …… 时，通常会用到 `url-loader` ， `file-loader` ，而在 webpack5 中已经集成进来了，通过 `asset module` 进行配置，[参考这里](https://webpack.docschina.org/guides/asset-modules/)。

### 3.3. 处理 js 文件

1. `babel-loader`：js 兼容性处理。只能处理大部分的 js 语法，对于较新语法，浏览器可能也不支持，需要配合 corejs 来使用。
然后定义具体的 babel 配置，[参考这里](https://babeljs.io/docs/en/config-files)。
对于浏览器的兼容性处理范围，通过 Browserslist 来对兼容性范围进行限制，[参考这里](https://github.com/browserslist/browserslist#readme)。
2. `TerserWebpackPlugin`：在生产环境下，webpack 默认开启 js 文件的压缩。

### 3.4. 处理 html 文件

1. `html-webpack-plugin`：简化 HTML 文件的创建，自动引入那些编译后为哈希值的文件。
2. 在生产环境下，webpack 默认开启 html 文件的压缩。

## 4. 优化方案

### 4.1. HotModuleReplacement

在程序运行时，在未开启 HMR（热模块替换）时，每次改动时都会重新加载整个页面。开启后就不会每次改动加载整个页面了。由于生产环境不需要 devServer，所以仅适用于开发环境。

1. 开启HMR功能

    ```js
    module.exports = {
      devServer: {
        host: "localhost",
        port: "3000",
        open: true,
        hot: true, // 开启HMR功能
      },
    };
    ```

2. css 经过 `style-loader` ，已经具备 HMR 功能，但是 js 还需要额外配置。

    ```js
    // 判断是否支持HMR功能
    if (module.hot) {
      module.hot.accept("./foo.js", function () {
      })
    }
    ```

### 4.2. oneOf

文件打包时会经过所有 loader 的处理，虽然有 test 决定是否匹配，但是这种已知不必要的判断却在重复执行。通过 oneOf 配置，只要匹配一个 loader 后，后续的 loader 就不会执行了。

```js
module.exports = {
    module: {
    rules: [
      {
        oneOf: [
          // loader1
          // loader2
          // ...
        ]
      }
    ]
}
```

### 4.3. Include、Exclude

编译时可以指定是否包含、排除某些文件，例如：

```js
{
  test: /\.js$/,
  // exclude: /node_modules/,
  include: path.resolve(__dirname, "../src"),
  loader: "babel-loader"
}
```

### 4.4. 开启多线程打包

> 适用于项目较大情况下，不然开启反而会降低打包速度。

- `thread-loader`：开启多线程打包。

### 4.5. Tree Shaking

开发中，难免会使用到第三方的工具库，但是工具库也不是用到所有方法，难道打包的时候把这些方法也打包进文件里了吗？webpack 当然也想到了，已经默认开启了这个功能。

### 4.6. ESLint 相关优化

开启 ESLint 缓存

```js
new ESLintWebpackPlugin({
  context: path.resolve(__dirname, '../src'),
  cache: true, // 开启 eslint 缓存
  cacheLocation: path.resolve(__dirname, '../node_modules/.cache/.eslint') // 缓存目录
})
```

### 4.7. Babel 相关优化

- Babel 开启缓存。
- Babel 在编译时，对每个文件都插入了辅助代码，所以可以引入 Babel runtime 作为一个独立模块，来避免重复引入。

```js
{
  loader: 'babel-loader',
  options: {
	  cacheDirectory: true, // 开启 babel 缓存
    cacheCompression: false, // 关闭缓存文件压缩
    plugins: [
      '@babel/plugin-transform-runtime' // 减少代码体积
    ]
  }
}
```

- Babel 在配合 corejs 使用时，可以在 babel 配置中让 corejs 按需引入。

```js
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage', // 按需加载 core-js 的 polyfill
        corejs: 3 // 指定 corejs 版本
      }
    ]
  ]
}
```

### 4.8. 代码分割

将所有 js 文件全部引入一个 js 文件中，文件会变得很大。而且有些没有用到的模块也在一开始就加载了，使用 import 动态导入，实现 js 文件的按需加载。分成若干小的 js 文件，对于并行处理也更快。

```js
splitChunks: {
  chunks: 'all' // 对所有模块都进行分割
},
```

### 4.9. RuntimeChunk

在做了缓存优化后，浏览器从第二次开始，一般就会读取缓存文件，速度也会加快，为了确保缓存不失效，所以文件在打包时，一般需要做 hash 处理，确保更新后，每次不一样，浏览器就不会出现更新异常了。但是问题来了，每次更新都不一样，那缓存不久失效了吗？所以通过 runtime 文件单独存储 hash 值，当某些文件更新，别的文件不更新时，不需要全部更新，只需要更新 runtime 内各个文件的关系就好啦。

```js
runtimeChunk: {
  name: entrypoint => `runtime~${entrypoint.name}.js`
}
```
