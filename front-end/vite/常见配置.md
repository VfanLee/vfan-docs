# Vite

> vite 配置：https://vitejs.dev/config/  
> 当前版本：v4

## 配置 alias 别名

参考于：[resolve.alias](https://cn.vitejs.dev/config/shared-options.html#resolve-alias)

```js
// 写法1
resolve: {
  alias: {
    '@': fileURLToPath(new URL('./src', import.meta.url))
  }
}

// 写法2
resolve: {
  alias: [
    {
      find: '@',
      replacement: fileURLToPath(new URL('./src', import.meta.url))
    }
  ]
}
```

## 设置全局 sass 变量

```js
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        javascriptEnabled: true,
        additionalData: '@import "./src/styles/variable.scss";',
      }
    }
  }
})
```
