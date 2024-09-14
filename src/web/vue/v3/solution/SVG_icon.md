# 全局 SVG 图标

> 参考：
>
> - [SVG MDN](https://developer.mozilla.org/zh-CN/docs/Web/SVG)
> - [vite-plugin-svg-icons](https://github.com/vbenjs/vite-plugin-svg-icons)

## 1. 逻辑分析

1. 定义一个全局 SvgIcon 组件，通过不同的 name 来引用不同的 SVG。

## 2. 实现示例

1. 安装 `vite-plugin-svg-icons` 插件

    ```sh
    npm i -D vite-plugin-svg-icons
    ```

2. 在 `vite.config.ts` 中引入 `vite-plugin-svg-icons` 插件

    ```js
    import path from 'node:path'
    import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

    export default defineConfig({
      plugins: [
        createSvgIconsPlugin({
          // 需要生成雪碧图的图标文件夹
          iconDirs: [path.resolve(process.cwd(), 'src/icons')],
          // svg 的 symbolId 格式
          symbolId: 'icon-[name]'
        })
      ]
    })
    ```

3. 在 `main.js` 中引入注册脚本。

    ```js
    import 'virtual:svg-icons-register'
    ```

4. 定义 `<SvgIcon />` 组件，参考：[SvgIcon.vue](https://github.com/VfanLee/vue3-admin-template/blob/main/src/components/SvgIcon.vue)。
