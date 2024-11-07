# 渲染函数

## 基本用法

### 创建 Vnodes

```js
import { h } from 'vue'

const vnode = h(
  'div', // type
  { id: 'foo', class: 'bar' }, // props
  [
    /* children */
  ],
)
```
