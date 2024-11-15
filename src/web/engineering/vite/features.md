# 功能

## Glob 导入

例如，动态加载国际化翻译文本：

```js
const locales = import.meta.glob('./locales/*.json')

for (const path in locales) {
  locales[path]().then(locale => {
    console.log(path, locale)
  })
}
```

::: tip 对标 webpack 中的 [require.context](https://webpack.docschina.org/guides/dependency-management/#requirecontext) 功能
:::
