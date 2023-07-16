# Element Plus

## 自定义主题

> 参考 [vite: css.preprocessorOptions](https://cn.vitejs.dev/config/shared-options.html#css-preprocessoroptions)

在 Element Plus 按需加载的前提下，自定义主题（更改默认变量）。

<!-- tabs:start -->
<!-- tab:全局自定义变量 -->
```scss
// ./src/styles/variable.scss";
$primary-color: #42b883;
```

<!-- tab:element-plus 定义自定义变量 -->

> 参考 [Element Plus 变量](https://github.com/element-plus/element-plus/blob/dev/packages/theme-chalk/src/common/var.scss)

```scss
// ./src/styles/element/var.scss";
@forward 'element-plus/theme-chalk/src/common/var.scss' with (
  $colors: (
    'primary': (
      'base': #42b883
    )
  )
);
```

<!-- tab:vite.config.js -->
```js
export default defineConfig({
    plugins: [
    vue(),
    Components({
      // 配置 element-plus 采用 sass 样式
      resolvers: [ElementPlusResolver({ importStyle: 'sass' })]
    })
  ],
  css: {
    preprocessorOptions: {
      scss: {
        // 导入全局样式
        additionalData: `
        @use ./src/styles/element/var.scss" as *;
        @use "./src/styles/variable.scss" as *;
        `
      }
    }
  }
})
```
<!-- tabs:end -->

## 表单

> 参考 [Formitem Exposes](https://element-plus.org/zh-CN/component/form.html#formitem-exposes)

手动更改某个 FormItem 的状态和提示信息

```js
const passwordItemRef = ref() // 指定的 FormItem

passwordItemRef.value.validateState = 'error' // 更改 FormItem 校验状态
passwordItemRef.value.validateMessage = '用户名或者密码错误' // 更改 FormItem 校验信息
```
