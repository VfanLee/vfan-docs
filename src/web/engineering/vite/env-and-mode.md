# 环境变量与模式

## 环境变量

Vite 在一个特殊的 `import.meta.env` 对象上暴露环境变量，这些变量在构建时会被静态地替换掉。

::: warning 不要和 ESM 弄混了！
`import.meta.env` 看起来非常像 ESM，但其实不是，其实这个是 vite 项目为了方便开发者而提供的。
:::
