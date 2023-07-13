# Element Plus

## 按需加载主题定制

1. 编写自定义样式

    ```scss
    // ./src/styles/element/index.scss
    @forward 'element-plus/theme-chalk/src/common/var.scss' with (
      $colors: (
        'primary': (
          'base': #42b883
        )
      )
    );
    ```

2. 添加 vite.config.js 配置

    ```js
    export default defineConfig({
      plugins: [
        Components({
          // 配置 element-plus 采用 sass 样式
          resolvers: [ElementPlusResolver({ importStyle: 'sass' })]
        }),
      ],
      css: {
        preprocessorOptions: {
          scss: {
            // element-plus 自动导入样式覆盖
            additionalData: `@use "@/styles/element/index.scss" as *;`
          }
        }
      }
    })
    ```
