# Element Plus

## 引入 Element Plus

### 按需引入

安装依赖：

::: code-group

```sh [dependencies]
npm i element-plus
```

```sh [devDependencies]
npm i -D unplugin-vue-components unplugin-auto-import
```

:::

修改项目配置：

::: code-group

```js [vite.config.js] {2-4,8-13}
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

```json [tsconfig.json] {5}
{
  // ...
  "include": [
    // ...
    "auto-imports.d.ts"
  ]
}
```

:::

## 修改主题

### 通过 SCSS 变量

[`theme-chalk`](https://github.com/element-plus/element-plus/blob/dev/packages/theme-chalk) 使用 SCSS 编写而成。 可以在 [packages/theme-chalk/src/common/var.scss](https://github.com/element-plus/element-plus/blob/dev/packages/theme-chalk/src/common/var.scss) 文件中查找 SCSS 变量。

#### 按需引入

::: code-group

```scss [styles/element/var.scss]
@forward 'element-plus/theme-chalk/src/common/var.scss' with (
  $colors: (
    'primary': (
      'base': #42b883,
    ),
  )
);
```

```js [vite.config.js] {10,17,20}
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

:::

### 通过 CSS 变量

::: tip
它兼容 SCSS 变量系统。Element Plus 使用 SCSS 的函数自动生成需要用到的 css 变量。
:::

示例：

```css
:root {
  --el-color-primary: green;

  /* 更改某个组件的 CSS 变量 */
  --el-tag-bg-color: red;
}
```

出于性能考虑，如果是部分地方需要自定义，更推荐在 **类名** 下定义，而不是 `:root`：

```css
.custom-class {
  --el-tag-bg-color: red;
}
```

## 使用全局方法

使用 `ElMessage`、`ElMessageBox`、`ElNotification` 等全局方法时，直接使用即可，无需再手动指定引入

```js
// 【X】无需手动引入
// import { ElNotification } from 'element-plus'

// 直接使用即可
ElNotification({})
```

## Form 表单

### 手动更改某个 FormItem 的状态和提示信息

[Formitem Exposes](https://element-plus.org/zh-CN/component/form.html#formitem-exposes)

```js
const passwordItemRef = ref() // 指定某个 <FormItem /> 模板引用

passwordItemRef.value.validateState = 'error' // 更改 FormItem 校验状态
passwordItemRef.value.validateMessage = '用户名或者密码错误' // 更改 FormItem 校验信息
```

### el-form-item 校验问题

<https://juejin.cn/post/6844903792605921294>

## Menu 菜单

### 子菜单高亮，保持所有父菜单高亮

```html
<el-menu :default-active="$route.path">
  <!-- ... -->
</el-menu>
```

```css
.el-menu .el-sub-menu.is-active > .el-sub-menu__title {
  color: orange;
}
```

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
   <el-dropdown
     trigger="click"
     popper-class="my-dropdown"
     :popper-options="{ modifiers: [{ name: 'computeStyles', options: { adaptive: false } }] }"
   >
    <!-- Dropdown content -->
   </el-dropdown>
   ```

2. 删除这些属性的过渡声明：如果可能的话，从这些属性中删除任何过渡，以便它们不会干扰 popper 的定位。
3. 使用包装元素：而不是直接在 popper 元素上应用过渡，将您想要动画化的内容包裹在一个单独的内部元素中，并将过渡应用于该元素。这允许平滑的动画，而不会干扰 popper 的定位。
