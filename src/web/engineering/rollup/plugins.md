# 插件

## 常用插件

### rollup-plugin-copy

```js
import copy from 'rollup-plugin-copy'

export default {
  plugins: [
    copy({
      targets: [{ src: 'src/ui/*', dest: `${outputDir}/ui` }],
    }),
  ],
}
```

### @rollup/plugin-terser

```js
import terser from '@rollup/plugin-terser'

export default {
  input: 'src/main.js',
  output: [
    {
      file: `${outputDir}/plugin.min.js`,
      format: 'iife',
      plugins: [terser()],
    },
  ],
}
```

### rollup-plugin-serve

```js
import serve from 'rollup-plugin-serve'

export default {
  // ...
  plugins: [
    serve({
      open: true,
      contentBase: ['demo'],
      host: 'localhost',
      port: 10001,
    }),
  ],
}
```
