# 静态资源处理

## 将资源引入为字符串

资源可以使用 `?raw` 后缀声明作为字符串引入。

```js
import shaderString from './README.md?raw'
```

## public 目录

目录默认是 `<root>/public`，但可以通过 **`publicDir` 选项** 来配置。

请注意，应该始终使用根绝对路径来引入 public 中的资源。举个例子，`public/icon.png` 应该在源码中被引用为 `/icon.png`。
