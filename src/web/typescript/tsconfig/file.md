# tsconfig.json

## 介绍

`tsconfig.json` 文件是 TypeScript 项目的配置文件，用于指定编译选项、文件包含和排除规则以及其他编译相关的配置。

## 生成 tsconfig.json

```sh
tsc --init
```

## 拓展

### jsconfig.json

[jsconfig.json](https://vscode.js.cn/docs/languages/jsconfig) 是专为纯 `JavaScript` 项目设计的，主要用于配置 `VS Code` 对 `JavaScript` 项目的智能感知（IntelliSense）、模块解析、跳转定义等功能。

`jsconfig.json` 是 `tsconfig.json` 的后代，它是 TypeScript 的配置文件。`jsconfig.json` 是将 `allowJs` 属性设置为 `true` 的 `tsconfig.json`。

### VS Code 中的 TypeScript 服务

VS Code 有时需要手动重载 TypeScript 服务，特别是在修改了 `tsconfig.json` 之后。

- 打开命令面板（`Ctrl+Shift+P` 或 `Cmd+Shift+P`）。
- 搜索并选择 **TypeScript: Restart TS Server**。
- 如果问题仍未解决，尝试重启 VS Code。
