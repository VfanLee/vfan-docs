# Element Plus

## 引入 Element Plus

### 按需引入

::: code-group

```sh
npm i element-plus
```

```sh
npm i -D unplugin-vue-components unplugin-auto-import
```

:::

### vite

修改 `vite.config.js` 配置：

```js{2-4,9-14}
import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  plugins: [
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
})
```

## 修改主题

```scss
// src/styles/element/var.scss

@forward 'element-plus/theme-chalk/src/common/var.scss' with (
  $colors: (
    'primary': (
      'base': #42b883,
    ),
  )
);
```

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
        `,
      },
    },
  },
  plugins: [
    AutoImport({
      resolvers: [ElementPlusResolver({ importStyle: 'sass' })],
    }),
    Components({
      resolvers: [ElementPlusResolver({ importStyle: 'sass' })],
    }),
  ],
})
```

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

### 参考资料

- [vite: css.preprocessorOptions](https://cn.vitejs.dev/config/shared-options.html#css-preprocessoroptions)
- [Element Plus 按需导入](https://element-plus.org/zh-CN/guide/quickstart.html#%E6%8C%89%E9%9C%80%E5%AF%BC%E5%85%A5)
- [Element Plus 自定义主题](https://element-plus.org/zh-CN/guide/theming.html)
- [Element Plus 内置变量](https://github.com/element-plus/element-plus/blob/dev/packages/theme-chalk/src/common/var.scss)

## 使用全局方法

使用 `ElMessage`、`ElMessageBox`、`ElNotification` 等全局方法时，直接使用即可，无需再手动指定引入

```js
// 【X】无需手动引入
// import { ElNotification } from 'element-plus'

// 直接使用即可
ElNotification({})
```

## 表单

### 手动更改某个 FormItem 的状态和提示信息

[Formitem Exposes](https://element-plus.org/zh-CN/component/form.html#formitem-exposes)

```js
const passwordItemRef = ref() // 指定某个 <FormItem /> 模板引用

passwordItemRef.value.validateState = 'error' // 更改 FormItem 校验状态
passwordItemRef.value.validateMessage = '用户名或者密码错误' // 更改 FormItem 校验信息
```

### el-form-item 校验问题

<https://juejin.cn/post/6844903792605921294>

## Element Plus 的一些警告

### Detected CSS transitions on at least one of the following CSS properties: "transform", "top", "right", "bottom", "left"

::: warning
Popper: Detected CSS transitions on at least one of the following CSS properties: "transform", "top", "right", "bottom", "left". Disable the "computeStyles" modifier's `adaptive` option to allow for smooth transitions, or remove these properties from the CSS transition declaration on the popper element if only transitioning opacity or background-color for example. We recommend using the popper element as a wrapper around an inner element that can have any CSS property transitioned for animations.
:::

解决方案如下：

1. 禁用 "computeStyles" 修饰符的 adaptive 选项：这将允许平滑过渡，但可能会降低性能。

   ```js
   import { createPopper } from '@popperjs/core'

   const popper = document.querySelector('.popper')
   const reference = document.querySelector('.reference')

   createPopper(reference, popper, {
     modifiers: [
       {
         name: 'computeStyles',
         options: {
           adaptive: false,
         },
       },
     ],
   })
   ```

   在上面的代码中，我们创建了一个 Popper 实例，并将 computeStyles 修饰符的 adaptive 设置为 false。这样就可以禁用 adaptive 选项并允许平滑过渡。

   Element Plus 的 ElDropdown 组件是基于 [Popper.js](https://github.com/popperjs/popper-core) 构建的，所以可以使用相同的方式来禁用 adaptive 选项。

   在 ElDropdown 组件中，你可以使用 popper-options 属性来指定 Popper 实例的选项。因此，要禁用 adaptive 选项，你可以将 popper-options 属性设置为一个对象，并在其中指定 modifiers 选项。示例如下：

   ```vue-html
   <el-dropdown trigger="click" popper-class="my-dropdown" :popper-options="{ modifiers: [{ name: 'computeStyles', options: { adaptive: false } }] }">
   <!-- Dropdown content -->
   </el-dropdown>
   ```

2. 删除这些属性的过渡声明：如果可能的话，从这些属性中删除任何过渡，以便它们不会干扰 popper 的定位。
3. 使用包装元素：而不是直接在 popper 元素上应用过渡，将您想要动画化的内容包裹在一个单独的内部元素中，并将过渡应用于该元素。这允许平滑的动画，而不会干扰 popper 的定位。
