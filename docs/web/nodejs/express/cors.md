# 处理跨域

```sh
npm i cors
```

```js{2,6}
var express = require('express')
var cors = require('cors')

var app = express()

app.use(cors())
```
