# 配置文件

tsconfig.json 文件是 TypeScript 项目的配置文件，用于指定编译选项、文件包含和排除规则以及其他编译相关的配置。

通过这个文件，开发者可以控制 TypeScript 编译器的行为。

```json
{
  "compilerOptions": {
    // 指定 ECMAScript 目标版本。常见值有 'ES5', 'ES6'/'ES2015', 'ESNext' 等
    "target": "ES5",

    // 指定模块系统。常见值有 'CommonJS', 'AMD', 'ES6', 'ESNext' 等
    "module": "CommonJS",

    // 指定需要包含在编译中的库文件。可选值有 'ES6', 'DOM', 'DOM.Iterable' 等
    "lib": ["ES6", "DOM"],

    // 指定编译输出目录
    "outDir": "./dist",

    // 指定输入文件的根目录
    "rootDir": "./src",

    // 启用所有严格类型检查选项
    "strict": true,

    // 启用对 ES 模块默认导入的互操作性支持
    "esModuleInterop": true,

    // 允许导入 JSON 文件
    "resolveJsonModule": true,

    // 生成相应的 .map 文件，以便在调试工具中映射编译后的代码与源代码
    "sourceMap": true,

    // 生成相应的 .d.ts 文件
    "declaration": true,

    // 从输出中删除所有注释
    "removeComments": true,

    // 在表达式和声明上有隐含的 any 类型时报错
    "noImplicitAny": true,

    // 选择模块解析策略。可选值有 'node' 或 'classic'
    "moduleResolution": "node"
  },
  // 指定需要编译的文件或目录的列表
  "include": ["src/**/*"],

  // 指定需要排除在编译之外的文件或目录的列表
  "exclude": ["node_modules", "dist"],

  // 指定需要编译的特定文件列表（不支持通配符）
  "files": ["src/main.ts", "src/helper.ts"],

  // 用于多项目工作区，允许一个项目引用另一个项目
  "references": [
    { "path": "../library" }
  ]
}
```
