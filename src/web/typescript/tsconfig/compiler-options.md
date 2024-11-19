# `compilerOptions`

`compilerOptions` 是用于指定 TypeScript 编译器的配置选项。

::: info
仅记录一些常用的配置，[这里](https://www.typescriptlang.org/tsconfig/) 查看完整配置。
:::

## Type Checking

### `strict`

[`strict`](https://www.typescriptlang.org/tsconfig/#strict) 用于启用所有严格类型检查选项。

```json
"strict": true
```

### `noImplicitAny`

当表达式和声明的类型为隐式 `any` 时会报错。强制开发者为变量、函数等显式指定类型。

```json
"noImplicitAny": true
```

### `noUnusedLocals`

控制 **未使用的局部变量** 是否会被标记为错误。

## Modules

### `module`

[`module`](https://www.typescriptlang.org/tsconfig/#Module) 用于指定模块系统，用于编译输出的模块格式。

默认值：如果 `target` 是 `ES5`，则为 `CommonJS`；否则为 `ES6/ES2015`。

```json
{
  "compilerOptions": {
    "module": "ESNext"
  }
}
```

### `rootDir`

指定输入文件的根目录。它影响编译后的文件组织结构。

```json
"rootDir": "./src"
```

### `resolveJsonModule`

允许导入 JSON 文件，适用于将 JSON 数据作为模块进行导入。

```json
"resolveJsonModule": true
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

## Emit

### `outDir`

指定编译后的输出目录。所有的 `.js` 文件将被输出到该目录。

```json
{
  "compilerOptions": {
    "outDir": "dist"
  }
}
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

### `noEmit`

当 `noEmit` 设置为 true 时，TypeScript 编译器会跳过生成 `.js` 文件或其他输出文件（如 `.d.ts`），但仍会对代码进行类型检查。

## JavaScript Support

### `allowJs`

`allowJs` 用于 **允许** TypeScript 项目中包含 JavaScript 文件（`.js` 和 `.jsx`）。

## Interop Constraints

### `esModuleInterop`

启用对 ES 模块默认导入的互操作性支持。通常用于使 TypeScript 能够兼容 CommonJS 模块导入。

```json
"esModuleInterop": true
```

## Language and Environment

### `target`

[`target`](https://www.typescriptlang.org/tsconfig/#target) 用于指定 ECMAScript 目标版本。编译后的代码将会使用指定版本的 ECMAScript 标准。

默认值：`ES5`。

```json
{
  "compilerOptions": {
    "target": "ESNext"
  }
}
```

### `lib`

指定在编译过程中包含的库文件，可以使 TypeScript 知道全局变量或类型信息。

### `jsx`

定义编译器在遇到 JSX 文件时的行为方式。

- **react-jsx**: 生成 `.js` 文件，将 JSX 转换为用于生产优化的 `_jsx` 调用。
- **react-jsxdev**: 生成 `.js` 文件，将 JSX 转换为仅用于开发的 `_jsx` 调用。
- **preserve**: 生成 `.jsx` 文件，保留 JSX 原样不做转换。
- **react-native**: 生成 `.js` 文件，保留 JSX 原样不做转换（适用于 React Native）
- **react**: 生成 `.js` 文件，将 JSX 转换为等效的 `React.createElement` 调用。

## Projects

### `composite`

启用项目的增量编译，常用于 `references` 配置的多项目环境。

### `tsBuildInfoFile`

设置 TypeScript 增量编译的缓存文件路径。

## Completeness

### `skipLibCheck`

跳过对定义文件 `*.d.ts` 的类型检查。
