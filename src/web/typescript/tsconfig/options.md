# TypeScript 配置项

## `extend`

通过 `extends` 字段，当前配置文件可以继承另一个配置文件的所有配置。

如果在当前配置文件中定义了与继承文件相同的字段，当前配置将覆盖继承的值。

## `include`

指定需要编译的文件或目录的列表，使用通配符可以匹配多个文件。

```json
"include": ["src/**/*"]
```

## `exclude`

指定需要排除在编译之外的文件或目录的列表。常见的排除项包括 `node_modules` 和输出目录（如 `dist`）。

```json
"exclude": ["node_modules", "dist"]
```

## `files`

指定需要编译的特定文件列表。**注意：** 这个选项不支持通配符。

```json
"files": ["src/main.ts", "src/helper.ts"]
```

## `references`

用于多项目工作区，允许一个 TypeScript 项目引用另一个项目。这对于在多个独立项目之间共享代码非常有用。

```json
"references": [
  { "path": "../library" }
]
```

## `compilerOptions`

`compilerOptions` 用于指定 TypeScript 编译器的配置选项。

### `target`

指定 ECMAScript 目标版本。编译后的代码将会使用指定版本的 ECMAScript 标准。

可选值：

- **`ES3`**：目标版本为 ECMAScript 3，适用于旧版 JavaScript 引擎（如 IE 5.x/6.x）。这种设置编译出的代码在非常旧的浏览器中运行，但不支持现代 JavaScript 特性，如类、箭头函数、模块等。
- **`ES5`**：目标版本为 ECMAScript 5，支持类、严格模式、`JSON` 对象等 ES5 特性。它是大多数现代浏览器的最低支持版本，适用于支持 ECMAScript 5 及以上版本的环境。
- **`ES6`** 或 **`ES2015`**：目标版本为 ECMAScript 6（ES6，也称为 ECMAScript 2015），引入了许多新特性，如类、箭头函数、模块、`let`/`const` 等。它是现代浏览器的普遍支持版本。
- **`ES2016`**：目标版本为 ECMAScript 2016，新增了 `Array.prototype.includes` 方法，并对其他特性进行了小幅改进。
- **`ES2017`**：目标版本为 ECMAScript 2017，新增了 `async/await` 等异步编程特性。
- **`ES2018`**：目标版本为 ECMAScript 2018，新增了异步迭代器（`for-await-of`）、正则表达式的改进等。
- **`ES2019`**：目标版本为 ECMAScript 2019，新增了 `Array.prototype.flat`、`Object.fromEntries` 等特性。
- **`ES2020`**：目标版本为 ECMAScript 2020，新增了 `BigInt`、`Promise.allSettled`、动态导入等特性。
- **`ES2021`**：目标版本为 ECMAScript 2021，新增了 `String.prototype.replaceAll`、`Promise.any`、`WeakRef` 等特性。
- **`ES2022`**：目标版本为 ECMAScript 2022，新增了 `Top-level await`、`Array.prototype.at` 等特性。
- **`ES2023`**：目标版本为 ECMAScript 2023，继续对语法和内置方法进行扩展，新增了诸如 `Array.prototype.findLast`、`findLastIndex` 等方法。
- **`ESNext`**：目标版本为 ECMAScript 的最新版本，通常包含还未正式发布的特性。`ESNext` 允许使用正在标准化的最新特性，但可能需要使用特定的运行时或浏览器支持。

```json
"target": "ESNext"
```

### `module`

指定模块系统，用于编译输出的模块格式。

常见值:
- `'CommonJS'`：适用于 Node.js 环境。
- `'AMD'`：适用于需要异步模块定义（如浏览器端的模块加载）。
- `'ES6'` 或 `'ESNext'`：编译为 ES6 模块，适用于支持 ES6 模块的环境（如现代浏览器或 Node.js）。

```json
"module": "ESNext"
```

### `lib`

指定在编译过程中包含的库文件，可以使 TypeScript 知道全局变量或类型信息。

常见值:
- `'ES6'`：包括 ECMAScript 2015 标准的库。
- `'DOM'`：包括 Web 浏览器的 DOM 和 BOM 库。
- `'DOM.Iterable'`：支持浏览器中的可迭代对象。

```json
"lib": ["ES6", "DOM"]
```

### `outDir`

指定编译后的输出目录。所有的 `.js` 文件将被输出到该目录。

```json
"outDir": "./dist"
```

### `rootDir`

指定输入文件的根目录。它影响编译后的文件组织结构。

```json
"rootDir": "./src"
```

### `strict`

启用所有严格类型检查选项。包括：
- `noImplicitAny`：禁止隐式 `any` 类型。
- `strictNullChecks`：严格的空值检查。

```json
"strict": true
```

### `esModuleInterop`

启用对 ES 模块默认导入的互操作性支持。通常用于使 TypeScript 能够兼容 CommonJS 模块导入。

```json
"esModuleInterop": true
```

### `resolveJsonModule`

允许导入 JSON 文件，适用于将 JSON 数据作为模块进行导入。

```json
"resolveJsonModule": true
```

### `sourceMap`

生成 `.map` 文件，便于在浏览器开发者工具中调试代码，映射编译后的代码和源代码。

```json
"sourceMap": true
```

### `declaration`

生成 `.d.ts` 类型声明文件。这对于将代码库作为 npm 包发布时提供类型支持非常有用。

```json
"declaration": true
```

### `removeComments`

从输出的 JavaScript 文件中删除注释。

```json
"removeComments": true
```

### `noImplicitAny`

当表达式和声明的类型为隐式 `any` 时会报错。强制开发者为变量、函数等显式指定类型。

```json
"noImplicitAny": true
```

### `moduleResolution`

选择模块解析策略。

可选值：

- **`classic`**：这是 TypeScript 早期的模块解析策略，通常用于不依赖于 Node.js 的环境。它的模块解析方式比较简单，不会考虑 `node_modules` 目录。
  - **不推荐**，除非维护老旧项目。
- **`node`**：采用 Node.js 的模块解析方式，这是默认的设置，并适用于大多数现代 JavaScript/TypeScript 项目，特别是在 Node.js 环境中。它会根据模块路径解析文件，并遵循 Node.js 的模块解析规则，包括在 `node_modules` 中查找模块。
- **`node10`**：专为 Node.js 10.x 版本及更低版本设计的模块解析方式。它与 `node` 模式类似，但在一些细节上有所不同，特别是与较新的 Node.js 版本的 `module` 和 `imports` 处理机制有关。
- **`node16`**：适用于 Node.js 16.x 及更高版本的模块解析方式。Node.js 16 引入了对 ES 模块的原生支持，因此 `node16` 模式会对 ES 模块和 CommonJS 模块的解析做出相应优化。
- **`nodenext`**：支持 Node.js 14.x 及更高版本中对 ECMAScript 模块（ESM）的原生支持。它为 ES 模块和 CommonJS 模块的混合项目提供更好的兼容性。`nodenext` 是为了兼容 `package.json` 中的 `"type": "module"` 设置，支持 ES 模块和 CommonJS 混合使用的情况。
- **`bundler`**：专为现代打包工具（如 Webpack、Rollup、Vite 等）设计的解析方式，适用于将模块打包成一个单独文件或多个文件的情况。在打包工具中，模块解析通常需要不同于传统 Node.js 的规则，因此 TypeScript 提供了专门为打包优化的解析策略。

```json
"moduleResolution": "node"
```

在 TypeScript 的 `tsconfig.json` 配置中，`baseUrl` 和 `paths` 用于设置模块解析的基础路径和路径映射规则，它们能够帮助你简化模块导入，尤其是在大型项目中。以下是对这两个选项的详细说明：

### `baseUrl`

`baseUrl` 设置了 TypeScript 在解析模块时的基础目录路径。它告诉 TypeScript 在寻找模块时，首先从哪个目录开始查找。

```json
{
  "compilerOptions": {
    "baseUrl": "./src"
  }
}
```

### `paths`

`paths` 用于进一步定义如何解析模块，与 `baseUrl` 一起使用。它允许你为某些特定模块设置别名（路径映射），从而避免冗长的路径。

```json
{
  "compilerOptions": {
    "baseUrl": "./src",
    "paths": {
      "@utils/*": ["utils/*"],
      "@components/*": ["components/*"]
    }
  }
}
```

### `composite`

启用项目的增量编译，常用于 `references` 配置的多项目环境。

### `noEmit`

当 `noEmit` 设置为 true 时，TypeScript 编译器会跳过生成 `.js` 文件或其他输出文件（如 `.d.ts`），但仍会对代码进行类型检查。

### `tsBuildInfoFile`

设置 TypeScript 增量编译的缓存文件路径。

## 参考资料

- [tsconfig](https://www.typescriptlang.org/tsconfig)
