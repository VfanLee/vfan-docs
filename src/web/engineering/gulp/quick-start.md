# 快速上手

## 安装

```sh
npm i -D gulp

# 验证版本
gulp --version
```

## gulpfile

在 gulpfile 文件中，会看到类似 `src()`、`dest()`、`series()` 或 `parallel()` 函数之类的 *gulp API*，除此之外，纯 JavaScript 代码或 Node 模块也会被使用。

任何导出（export）的函数都将注册到 gulp 的 *任务（task）系统* 中。

::: tip gulp 默认配置文件
默认情况下，运行 gulp 命令时，会在项目根目录下寻找 `gulpfile.js` 或者 `Gulpfile.js`。

当然，我们也可以手动选择配置文件，例如：`gulp -f build/index.js`
:::
