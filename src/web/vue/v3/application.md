# 创建一个应用

::: code-group

```html [index.html]
<!DOCTYPE html>
<html>
  <body>
    <div id="app"></div>
    <script type="module" src="./main.js"></script>
  </body>
</html>
```

```vue [App.vue]
<template>
  <h1>Hello world</h1>
</template>
```

```js [main.js]
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
```

:::

## 获取 attrs

在 `<template>` 中可以使用 `$attrs`

在 `<script>` 中可以使用 `useAttrs`
