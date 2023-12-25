# Webpack 配置

> 参考于：[Webpack 配置](https://webpack.docschina.org/configuration/)

## mode 模式

webpack 主要分为两种配置：`development` 和 `production`。

在 webpack 配置文件中指定不同的模式，来告知 webpack 使用相应模式的内置优化。

## DevTool

DevTool 用于控制是否生成，以及如何生成 source map。

对于 **开发环境**，一般选取如下几种：

1. `eval`：每个模块都使用 eval() 执行，并且都有 //# sourceURL。此选项会非常快地构建。主要缺点是，由于会映射到转换后的代码，而不是映射到原始代码（没有从 loader 中获取 source map），所以不能正确的显示行数。
2. `eval-source-map`：每个模块使用 eval() 执行，并且 source map 转换为 DataUrl 后添加到 eval() 中。初始化 source map 时比较慢，但是会在重新构建时提供比较快的速度，并且生成实际的文件。行数能够正确映射，因为会映射到原始代码中。它会生成用于开发环境的最佳品质的 source map。
3. `eval-cheap-source-map`：类似 eval-source-map，每个模块使用 eval() 执行。这是 "cheap(低开销)" 的 source map，因为它没有生成列映射(column mapping)，只是映射行数。它会忽略源自 loader 的 source map，并且仅显示转译后的代码，就像 eval devtool。
4. `eval-cheap-module-source-map`：类似 eval-cheap-source-map，并且，在这种情况下，源自 loader 的 source map 会得到更好的处理结果。然而，loader source map 会被简化为每行一个映射(mapping)。

对于 **生产环境**，一般选取如下几种：

- `(none)（省略 devtool 选项）`：不生成 source map。这是一个不错的选择。
- `source-map`：整个 source map 作为一个单独的文件生成。它为 bundle 添加了一个引用注释，以便开发工具知道在哪里可以找到它。
- `hidden-source-map`：与 source-map 相同，但不会为 bundle 添加引用注释。如果你只想 source map 映射那些源自错误报告的错误堆栈跟踪信息，但不想为浏览器开发工具暴露你的 source map，这个选项会很有用。
- `nosources-source-map`：创建的 source map 不包含 sourcesContent(源代码内容)。它可以用来映射客户端上的堆栈跟踪，而无须暴露所有的源代码。你可以将 source map 文件部署到 web 服务器。

## context 上下文

context 指的是基础目录，它是一个 **绝对路径**，用于从配置中解析 **入口点(entry point)** 和 **加载器(loader)**。

## entry 入口

一个需要考虑的规则：**每个 HTML 页面都有一个入口起点**。

- 单页应用(SPA)：一个入口起点。

    ```js
    module.exports = {
      context: resolve(__dirname, '../'),
      entry: 'src/main.js'
    }
    ```

- 多页应用(MPA)：多个入口起点。

    ```js
    module.exports = {
      context: resolve(__dirname),
      entry: {
        pc: './src/pages/pc/main.js',
        mobile: './src/pages/mobile/main.js'
      }
    }
    ```

### 关于 chunk 名称

- 如果传入一个 **字符串** 或 **字符串数组**，chunk 会被命名为 main。  
    需要注意的是，如果是  **字符串数组**，会被合并成一个文件。
- 如果传入一个对象，则每个属性的键(key)会是 chunk 的名称，该属性的值描述了 chunk 的入口点。

## output 输出

output 选项指示 webpack 如何去输出、以及在哪里输出你的「bundle、asset 和其他你所打包或使用 webpack 载入的任何内容」。

### publicPath

对于按需加载(on-demand-load)或加载外部资源(external resources)（如图片、文件等）来说，`output.publicPath` 是很重要的选项。如果指定了一个错误的值，则在加载这些资源时会收到 404 错误。

```js
module.exports = {
  //...
  output: {
    // One of the below
    // 它会自动从“import.meta.url”、“document.currentScript”、“<script />”或“self.location”确定公共路径。meta.url`, `document.currentScript`, `<script />` or `self.location`.
    publicPath: 'auto',
    // CDN（总是 HTTPS 协议）
    publicPath: 'https://cdn.example.com/assets/',
    // CDN（协议相同）
    publicPath: '//cdn.example.com/assets/',
    // 相对于服务(server-relative)
    publicPath: '/assets/',
    // 相对于 HTML 页面
    publicPath: 'assets/',
    // 相对于 HTML 页面
    publicPath: '../assets/', 
    // 相对于 HTML 页面（目录相同）
    publicPath: '',
  }
}
```

### hashFunction

散列算法，webpack 默认使用的是 `md4`，一般我们可以使用更快速的 `xxhash64` 算法，来减少 CPU 消耗，并提升打包速度。

### path

**绝对路径**，output 输出的目录。

### filename

filename 决定了每个输出 bundle 的名称。这些 bundle 将写入到 `output.path` 选项指定的目录下。

### chunkFilename

chunkFilename 选项决定了非初始（non-initial）chunk 文件的名称。

### assetModuleFilename

`assetModuleFilename` 与 `output.filename` 相同，不过应用于 Asset Modules。

### clean

```js
module.exports = {
  //...
  output: {
    // One of the below
    // 在生成文件之前清空 output 目录
    clean: true,
    // 打印而不是删除应该移除的静态资源
    clean: {
      dry: true,
    },
    // 保留 'ignored/dir' 下的静态资源（写法1）
    clean: {
      keep: /ignored\/dir\//,
    },
    // 保留 'ignored/dir' 下的静态资源（写法2）
    clean: {
      keep(asset) {
        return asset.includes('ignored/dir');
      },
    },
  }
}
```

## resolve 解析

resolve 选项能设置 **Module 模块** 如何被解析。

### alias

alias 选项用于创建 import 或 require 的别名，来确保模块引入变得更简单。

```js
module.exports = {
  resolve: {
    alias: {
      '@': resolve(__dirname, '../src')
    }
  }
}
```

## module 模块

module 选项决定了如何处理项目中的不同类型的模块。

### noParse

noParse 选项可以阻止 webpack 对特定的模块进行解析和处理。常用于那些不依赖其他模块，或者我们确定不需要处理其依赖关系的库，如：jQuery、lodash。

### rules

创建模块时，匹配请求的规则数组。这些规则能够修改模块的创建方式。 这些规则能够对模块(module)应用 loader，或者修改解析器(parser)。

### Rule

每个 Rule 规则可以分为三部分：

1. 条件(condition)
2. 结果(result)
3. 嵌套规则(nested rule)

```js
module.exports = {
  module: {
    rules: [
      /* Rule */
      {
        test: /\.css$/, // 条件
        use: 'css-loader', // 结果
        rules: [ // 嵌套规则
          {
            resourceQuery: /inline/, // 条件
            use: 'url-loader' // 结果
          }
        ]
      }
    ]
  }
}
```

#### Rule.resource

`Rule.resource` 选项用于匹配模块的资源路径。它可以是一个函数，一个正则表达式，一个字符串，或者这些条件的数组。

```js
module.exports = {
  module: {
    rules: [
      {
        resource: /my-directory/, // 只有在 'my-directory' 目录下的模块会被匹配
        use: 'babel-loader'
      }
    ]
  }
}
```

#### Rule.resourceQuery

`Rule.resourceQuery` 选项用于匹配模块的查询字符串。它也可以是一个函数，一个正则表达式，一个字符串，或者这些条件的数组。

```js
module.exports = {
  module: {
    rules: [
      {
        resourceQuery: /raw/, // 只有查询字符串包含 'raw' 的模块会被匹配
        use: 'raw-loader'
      }
    ]
  }
}
```

#### Rule.test

`Rule.test` 选项用于测试模块的路径是否符合某个条件，通常是一个正则表达式。例如，你可能会使用 `Rule.test` 来匹配所有 `.js` 或 `.css` 文件，然后对这些文件应用特定的 loader。

注意：如果你提供了一个 `Rule.test` 选项，就不能再提供 `Rule.resource`。

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/, // 使用 Rule.test 匹配所有 .css 文件
        use: 'css-loader',
      }
    ]
  }
}
```

#### Rule.exclude

`Rule.exclude` 选项用于 **排除** 所有符合条件的模块。

如果你提供了 `Rule.exclude` 选项，就不能再提供 `Rule.resource`。

#### Rule.include

`Rule.include` 选项用于 **引入** 所有符合条件的模块。

如果你提供了 `Rule.include` 选项，就不能再提供 `Rule.resource`。

#### Rule.type

`Rule.type` 用于设置匹配模块的类型。可设置的值如下：

1. `javascript/auto`：这是默认类型，允许在模块中混合使用 CommonJS 和 ESM。
2. `javascript/dynamic`：这个类型用于处理动态导入的模块。
3. `javascript/esm`：这个类型用于处理ECMAScript模块（ESM）。在 Webpack5 中，你可以使用 ESM 语法，并且 Webpack 会自动处理模块的导入和导出。
4. `json`：这个类型用于处理 JSON 文件。Webpack 会将 JSON 文件转换为 JavaScript 对象。
5. `webassembly/sync`：这个类型用于处理同步导入的 WebAssembly 模块。
6. `webassembly/async`：这个类型用于处理异步导入的 WebAssembly 模块。
7. `asset`：这个类型用于处理各种类型的资源文件，如图片、字体等。在 webpack 5 之前通过使用 `file-loader` 实现。
8. `asset/source`：这个类型用于处理资源文件，Webpack 会将资源文件的源代码内联到 JavaScript bundle 中。在 webpack 5 之前通过使用 `url-loader` 实现。
9. `asset/resource`：这个类型用于处理资源文件，Webpack 会将资源文件输出到构建目录，并在 JavaScript bundle 中包含对这些文件的 URL 引用。在 webpack 5 之前通过使用 `raw-loader` 实现。
10. `asset/inline`：这个类型用于处理资源文件，Webpack 会将资源文件的内容作为 DataURL 内联到 JavaScript bundle 中。在 webpack 5 之前通过使用 `url-loader`，并且配置资源体积限制实现。

#### Rule.generator

`Rule.generator.filename` 与 `output.assetModuleFilename` 相同，并且仅适用于 `asset` 和 `asset/resource` 模块类型。

#### Rule.use

`Rule.use` 选项用于指定一个或多个 loader，这些 loader 将按照 **从右到左** 的顺序应用于匹配的模块。

在这个例子中，所有 `.css` 文件都会首先被 `css-loader` 处理，然后再被 `style-loader` 处理。

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], // 使用 Rule.use 指定多个 loader
      }
    ]
  }
}
```

#### Rule.oneOf

`Rule.oneOf` 选项用于指定一组规则，其中只有第一个匹配的规则会被应用。这意味着，如果你在 `oneOf` 中使用 `Rule.use`，那么只有第一个匹配的 loader 会被应用，其他的 loader 将被忽略。

在这个例子中，对于每个模块，webpack 会首先检查它是否匹配 `.css` 文件。如果匹配，那么 `css-loader` 将被应用，然后跳过其他的规则。如果不匹配，那么 webpack 会继续检查它是否匹配 `.less` 文件。如果匹配，那么 `less-loader` 将被应用。

```js
module.exports = {
  module: {
    rules: [
      {
        oneOf: [
          {
            test: /\.css$/,
            use: 'css-loader', // 使用 Rule.use 指定 loader
          },
          {
            test: /\.less$/,
            use: 'less-loader', // 使用 Rule.use 指定 loader
          }
        ]
      }
    ]
  }
}
```

#### Rule.loader

`Rule.loader` 是 `Rule.use: [ { loader } ]` 的简写。这意味着你可以使用 `Rule.loader` 来更简洁地指定 loader。

这是 `Rule.loader` 的例子：

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: 'css-loader' // 使用 Rule.loader 指定 loader
      }
    ]
  }
}
```

这是相同配置的 `Rule.use: [ { loader } ]` 的写法：

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'css-loader' // 使用 Rule.use: [ { loader } ] 指定 loader
          }
        ]
      }
    ]
  }
}
```

在这两个例子中，所有 `.css` 文件都会被 `css-loader` 处理。你可以看到，`Rule.loader` 提供了一种更简洁的方式来指定 loader，而 `Rule.use: [ { loader } ]` 则提供了更多的灵活性，允许你为 loader 指定选项。

#### Rule.options / Rule.query

`Rule.options` 和 `Rule.query` 是 `Rule.use: [ { options } ]` 的简写。

> 注意：`Rule.query`已经被废弃，建议使用 `Rule.options`。

这是 `Rule.options` 的例子：

```js
module: {
  rules: [
    {
      test: /\.css$/,
      loader: 'style-loader',
      options: {
        // 这里是你的选项
      }
    }
  ]
}
```

在上面的例子中，`options` 对象中的选项将被传递给 `style-loader`。

这是相同配置的 `Rule.use: [ { options } ]` 的写法：

```js
module: {
  rules: [
    {
      test: /\.css$/,
      use: [
        {
          loader: 'style-loader',
          options: {
            // 这里是你的选项
          }
        }
      ]
    }
  ]
}
```

## DevServer

### http2 / https

默认情况下，开发服务器将通过 HTTP 提供服务。https2、https 需要手动开启。

### headers

为所有响应添加 headers。

### host

指定使用的 host。取值如下：

- `local-ip`：将 local-ip 指定为主机将尝试将主机选项解析为本地 IPv4 地址（如果可用），如果 IPv4 不可用，它将尝试解析本地 IPv6 地址。
- `local-ipv4`：将 local-ipv4 指定为主机将尝试将主机选项解析为本地 IPv4 地址。
- `local-ipv4`：指定 local-ipv6 作为主机将尝试将主机选项解析为您的本地 IPv6 地址。

如果想让你的服务器可以被外部访问，需如下指定：

```js
module.exports = {
  devServer: {
    host: '0.0.0.0'
  }
}
```

### port

指定使用的 port 端口号。

port 配置项不能设置为 null 或者空字符串，要想自动使用一个可用端口请使用 `port: 'auto'`。

### hot vs liveReload

- `hot` 是用于配置模块热替换（Hot Module Replacement）。  HMR 是指在应用程序运行过程中，替换、添加、删除模块，而无需重新刷新整个页面¹。当你修改了源代码文件时，`webpack-dev-server` 会自动重新编译并刷新浏览器，使你能够即时看到修改后的效果⁵。
- `liveReload` 是一个在文件改变时自动刷新页面的功能。它与 `hot` 的区别在于，`hot` 只替换发生改变的模块，而 `liveReload` 会刷新整个页面。

> 为了让 liveReload 能够生效，`devServer.hot` 配置项必须禁用或者 `devServer.watchFiles` 配置项必须启用。

### proxy

当拥有单独的 API 后端开发服务器并且希望在同一域上发送 API 请求时，代理某些 URL 可能会很有用。

### static

static 配置项允许配置从目录提供静态文件的选项（默认是 `public` 文件夹）。

## Stats 对象

stats 选项让你更精确地控制 bundle 信息该怎么显示。 如果你不希望使用 quiet 或 noInfo 这样的不显示信息，而是又不想得到全部的信息，只是想要获取某部分 bundle 的信息，使用 stats 选项是比较好的折衷方式。

## externals 外部扩展

防止将某些 import 的包(package)打包到 bundle 中，而是在运行时(runtime)再去从外部获取这些扩展依赖(external dependencies)。

例如，从 CDN 引入 jQuery，而不是把它打包：

1. index.html

    ```html
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.min.js"></script>
    ```

2. webpack.config.js

    ```js
    module.exports = {
      //...
      externals: {
        jquery: 'jQuery'
      }
    }
    ```

3. 使用

    ```js
    import $ from 'jquery';

    $('.my-element').animate(/* ... */);
    ```

## optimization 优化

从 webpack 4 开始，会根据你选择的 mode 来执行不同的优化， 不过所有的优化还是可以手动配置和重写。

### splitChunks

将所有 js 文件全部引入一个 js 文件中，文件会变得很大。而且有些没有用到的模块也在一开始就加载了，使用 import 动态导入，实现 js 文件的按需加载。分成若干小的 js 文件，对于并行处理也更快。

```js
splitChunks: {
  chunks: 'all' // 对所有模块都进行分割
},
```

### RuntimeChunk

在做了缓存优化后，浏览器从第二次开始，一般就会读取缓存文件，速度也会加快，为了确保缓存不失效，所以文件在打包时，一般需要做 hash 处理，确保更新后，每次不一样，浏览器就不会出现更新异常了。但是问题来了，每次更新都不一样，那缓存不久失效了吗？所以通过 runtime 文件单独存储 hash 值，当某些文件更新，别的文件不更新时，不需要全部更新，只需要更新 runtime 内各个文件的关系就好啦。

```js
runtimeChunk: {
  name: entrypoint => `runtime~${entrypoint.name}.js`
}
```
