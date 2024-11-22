# Node.js 中的 ESM

::: tip
Node.js 从 **v12.0.0** 开始支持 ECMAScript Modules (ESM)，但在早期版本中它处于 **试验阶段**。

正式的 ESM 支持则是在 Node.js **v14.0.0** 中引入并 **稳定** 的。
:::

package.json

```json
"type": "module",
```

`__filename` / `__dirname`

在 ES Moulde 的语法下，不存在 `__filename` 和 `__dirname`。

import.meta.url -> file://xxx/xxx.js

```js
// Node.20.11+
const __filename = import.meta.filename
const __dirname = import.meta.dirname
```

```js
// Node.js 10.12+
import { fileURLToPath, URL } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = fileURLToPath(new URL('./', import.meta.url))
```

可以移除所有自执行函数

可以移除所有 'use strict'
