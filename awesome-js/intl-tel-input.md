# intl-tel-input

> 文档：https://github.com/jackocnr/intl-tel-input#readme  
> 当前版本：17.0.19

## 1. 安装

```sh
npm i intl-tel-input
```

## 2. 基本使用

<!-- tabs:start -->
<!-- tab:HTML -->
```html
<input id="intl-tel-input-demo"/>
```

<!-- tab:JS -->
```js
import 'intl-tel-input/build/css/intlTelInput.css'
import intlTelInput from 'intl-tel-input'
// 【推荐】工具包（可选）
import utils from 'intl-tel-input/build/js/utils'

const telInputElem = document.querySelector("#intl-tel-input-demo")
intlTelInput(telInputElem, {
  utilsScript: utils
})
```
<!-- tabs:end -->
