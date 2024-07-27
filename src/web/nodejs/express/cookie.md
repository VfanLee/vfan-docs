# cookie

```sh
npm i cookie-parser
```

```js{2,6}
var express = require('express')
var cookieParser = require('cookie-parser')

var app = express()

app.use(cookieParser())
```
