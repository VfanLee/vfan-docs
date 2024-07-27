# 静态文件

```js
const { resolve } = require('path')

app.use(express.static(resolve(__dirname, 'public')))
```
