# Element Plus

## vite 优雅地引入 Element Plus

> 参见：
>
> - [vite: css.preprocessorOptions](https://cn.vitejs.dev/config/shared-options.html#css-preprocessoroptions)
> - [Element Plus 按需导入](https://element-plus.org/zh-CN/guide/quickstart.html#%E6%8C%89%E9%9C%80%E5%AF%BC%E5%85%A5)
> - [Element Plus 自定义主题](https://element-plus.org/zh-CN/guide/theming.html)
> - [Element Plus 内置变量](https://github.com/element-plus/element-plus/blob/dev/packages/theme-chalk/src/common/var.scss)

<!-- tabs:start -->
<!-- tab:自定义 sass 变量 -->
> ./src/styles/variable.scss";

```scss
$primary-color: #42b883;
```

<!-- tab:自定义 element plus sass 变量 -->
> ./src/styles/element/var.scss";

```scss
// 变量参考：
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
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @use "@/styles/element/var.scss" as *;
        @use "@/styles/variable.scss" as *;
        `
      }
    }
  },
  plugins: [
    AutoImport({
      resolvers: [ElementPlusResolver({ importStyle: 'sass' })]
    }),
    Components({
      resolvers: [ElementPlusResolver({ importStyle: 'sass' })]
    })
  ]
})
```

<!-- tab:jsconfig.json -->
引入 `components.d.ts` 和 `auto-imports.d.ts` 可获取智能提示。

```json
{
  "compilerOptions": {
    "baseUrl": "/",
    "paths": {
      "@/*": ["src/*"]
    }
  },
  "include": ["src/**/*", "components.d.ts", "auto-imports.d.ts"],
  "exclude": ["node_modules", "dist"]
}
```
<!-- tabs:end -->

### 使用全局方法

使用 `ElMessage`、`ElMessageBox`、`ElNotification` 等全局方法时，直接使用即可，无需再手动指定引入

```js
import { ElNotification } from 'element-plus'// 可以省去这一步

// 直接使用即可
ElNotification({})
```

## 表单

> 参考 [Formitem Exposes](https://element-plus.org/zh-CN/component/form.html#formitem-exposes)

手动更改某个 FormItem 的状态和提示信息

```js
const passwordItemRef = ref() // 指定某个 FormItem 模板引用

passwordItemRef.value.validateState = 'error' // 更改 FormItem 校验状态
passwordItemRef.value.validateMessage = '用户名或者密码错误' // 更改 FormItem 校验信息
```
