# vite-plugin-static-copy

## 介绍

用于复制文件。

## 使用

```js
import { defineConfig } from 'vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  plugins: [
    // ...
    viteStaticCopy({
      targets: [
        {
          src: 'README.md',
          dest: '',
        },
      ],
    }),
    // ...
  ],
})
```

## 参考资料

- [vite-plugin-static-copy](https://github.com/sapphi-red/vite-plugin-static-copy)
