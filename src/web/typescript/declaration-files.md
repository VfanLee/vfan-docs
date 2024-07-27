# 声明文件

## 声明文件的作用

声明文件的主要作用是为现有的 JavaScript 代码提供类型定义。通过声明文件，TypeScript 能够理解这些 JavaScript 代码的类型信息，从而提供更好的类型检查和代码补全功能。

## 什么时候需要声明文件

1. **使用 JavaScript 库**：当你使用第三方 JavaScript 库（如 jQuery、Lodash 等）时，TypeScript 无法直接知道这些库的类型信息。你需要引入相应的声明文件。
2. **与 JavaScript 代码库交互**：如果你有一个混合项目，部分使用 JavaScript，部分使用 TypeScript，那么你可以为 JavaScript 代码编写声明文件，以便在 TypeScript 中使用它们。
3. **编写库**：如果你正在编写一个库，并希望其他 TypeScript 用户能够使用你的库，那么你需要提供声明文件。

## 编写声明文件

### 基本结构

一个简单的声明文件可能如下所示：

```typescript
// math.d.ts
declare module 'math' {
    export function add(x: number, y: number): number;
    export function subtract(x: number, y: number): number;
}
```

在这个示例中，`math` 模块被声明为具有两个函数 `add` 和 `subtract`，它们都接受两个 `number` 参数并返回一个 `number`。

### 全局声明

声明文件也可以用于声明全局变量或类型：

```typescript
// globals.d.ts
declare var MY_GLOBAL: string;

declare function myGlobalFunction(x: number): void;

interface MyGlobalInterface {
    foo: string;
    bar: number;
}
```

### 为现有库编写声明文件

假设你有一个名为 `myLibrary` 的 JavaScript 库，你可以为它编写一个声明文件：

```typescript
// myLibrary.d.ts
declare namespace myLibrary {
    function doSomething(input: string): void;
    function getValue(): number;
}
```

### 安装 DefinitelyTyped 上的声明文件

许多流行的 JavaScript 库已经有社区维护的声明文件，可以通过 npm 安装。这些声明文件托管在 [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped) 仓库上。

例如，安装 jQuery 的声明文件：

```bash
npm install --save-dev @types/jquery
```

安装完成后，你就可以在 TypeScript 文件中使用 jQuery，并且获得类型检查和代码补全功能。

### 在 tsconfig.json 中配置类型根目录

你可以在 `tsconfig.json` 文件中配置 TypeScript 查找声明文件的根目录：

```json
{
    "compilerOptions": {
        "typeRoots": ["./types", "./node_modules/@types"]
    }
}
```

这样 TypeScript 会在 `types` 文件夹和 `node_modules/@types` 文件夹中查找声明文件。
