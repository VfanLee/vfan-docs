# 引入 SVG

> 参见：
>
> - [SVG MDN](https://developer.mozilla.org/zh-CN/docs/Web/SVG)
> - [vite-plugin-svg-icons](https://github.com/vbenjs/vite-plugin-svg-icons)

## 实现示例

1. 安装 `vite-plugin-svg-icons` 插件：`npm i vite-plugin-svg-icons -D`
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

4. 定义 `<SvgIcon />` 组件。

    ```html
    <script setup>
    import { computed } from 'vue'

    const props = defineProps({
      prefix: {
        type: String,
        default: 'icon'
      },
      name: {
        type: String,
        required: true
      },
      fontSize: {
        type: String,
        default: '1em'
      },
      color: {
        type: String,
        default: 'currentColor'
      }
    })

    const symbolId = computed(() => `#${props.prefix}-${props.name}`)
    </script>

    <template>
      <i class="svg-icon" :style="{ fontSize, color }">
        <svg aria-hidden="true" style="width: 1em; height: 1em">
          <use :xlink:href="symbolId" fill="currentColor" />
        </svg>
      </i>
    </template>

    <style lang="scss" scoped>
    .svg-icon {
      display: inline-flex;
      justify-content: center;
      align-items: center;
    }
    </style>
    ```
