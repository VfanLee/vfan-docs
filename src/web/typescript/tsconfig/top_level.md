# 顶层配置

## `files`

指定需要编译的特定文件列表。

**注意：** 这个选项不支持通配符。

```json
"files": ["src/main.ts", "src/helper.ts"]
```

## `references`

用于多项目工作区，允许一个 TypeScript 项目引用另一个项目。这对于在多个独立项目之间共享代码非常有用。

```json
{
  "files": [],
  "references": [
    {
      "path": "./tsconfig.node.json"
    },
    {
      "path": "./tsconfig.app.json"
    }
  ]
}
```

## `extend`

通过 `extends` 字段，当前配置文件可以继承另一个配置文件的所有配置。

如果在当前配置文件中定义了与继承文件相同的字段，当前配置将覆盖继承的值。

::: code-group

```json [tsconfig.app.json]
{
  "extends": "@vue/tsconfig/tsconfig.dom.json"
}
```

```json [tsconfig.node.json]
{
  "extends": "@tsconfig/node18/tsconfig.json"
}
```

:::

## `include`

指定一个文件名或模式的数组，用于包含到程序中。这些文件名是相对于 `tsconfig.json` 文件所在的目录解析的。

```json
{
  "include": ["src/**/*", "tests/**/*"]
}
```

`include` 和 `exclude` 支持使用通配符来构建 glob 模式：

- **`*`**：匹配零个或多个字符（不包括目录分隔符）。
- **`?`**：匹配任意一个字符（不包括目录分隔符）。
- **`**/`\*\*：匹配任意层级的目录。

如果模式的最后一个路径片段不包含文件扩展名或通配符字符，则该片段会被视为一个目录，目录中具有支持扩展名的文件会被包含。例如：默认情况下是 `.ts`、`.tsx` 和 `.d.ts` 文件（如果 `allowJs` 设置为 `true`，则包括 `.js` 和 `.jsx` 文件）。

## `exclude`

指定一个文件名或模式的数组，在解析 `include` 时应该跳过这些文件。

**重要说明**:  
`exclude` 仅影响通过 `include` 设置包含的文件范围。即使某个文件被 `exclude` 排除，它仍然可能因为以下原因成为代码库的一部分：

- 在代码中通过 `import` 引用。
- 被 `types` 配置包含。
- 使用 `/// <reference` 指令。
- 在 `files` 列表中明确指定。

**注意**: `exclude` 并不是一种阻止文件被包含到代码库的机制，它只是改变了 `include` 设置能找到的文件范围。

```json
"exclude": ["node_modules", "dist"]
```

## compilerOptions

👉 [查看详情](compiler-options)
