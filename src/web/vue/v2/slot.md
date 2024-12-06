# 插槽

## 作用域插槽

```html [过时写法]
<template slot="default" slot-scope="slotProps">
  {{ slotProps.msg }}
</template>
```

```html [新写法]
<template slot="default" v-slot="slotProps">
  {{ slotProps.msg }}
</template>
```
