# 快速上手

## 安装

```sh
npm i -D gulp
```

## 验证版本

```sh
gulp --version
```

## gulpfile

gulpfile 是项目目录下名为 `gulpfile.js` （或者首字母大写 `Gulpfile.js`，就像 Makefile 一样命名）的文件，在运行 gulp 命令时会被自动加载。

在这个文件中，会看到类似 `src()`、`dest()`、`series()` 或 `parallel()` 函数之类的 *gulp API*，除此之外，纯 JavaScript 代码或 Node 模块也会被使用。

任何导出（export）的函数都将注册到 gulp 的 *任务（task）系统* 中。
