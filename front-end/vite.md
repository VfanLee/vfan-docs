# Vite

> vite 配置：https://vitejs.dev/config/  
> 当前版本：v4

## 设置全局 sass 变量

```js
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        javascriptEnabled: true,
        additionalData: '@import "./src/styles/variable.scss";',
      },
    },
  },
})
```
