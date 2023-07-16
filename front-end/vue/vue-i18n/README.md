# Vue I18n

> [Vue I18n 参考文档](https://github.com/intlify/vue-i18n-next#readme)  
> 当前记录版本：v9

## 1. 安装依赖

**注意：vue3 请使用 v9 版本。**

```sh
npm i vue-i18n@9
```

## 2. locale 配置

参考如下目录结构创建对应文件。

```markdown
- locale      # i18n 文件夹
  - index.js  # i18n 配置文件
  - zh.json   # 中文包
  - en.json   # 英文包
- main.js     # 项目入口
```

### 2.1. i18n 配置文件

```js
import { createI18n } from 'vue-i18n'
import zh from './zh.json'
import en from './en.json'

const messages = {
  zh,
  en,
}

const i18n = createI18n({
  legacy: false,        // you must set `false`, to use Composition API
  locale: 'zh',         // set locale
  fallbackLocale: 'en', // set fallback locale
  messages,             // set locale messages
})

export default i18n
```

### 2.2. 语言包参考

<!-- tabs:start -->
<!-- tab:zh.json -->
```json
{
  "test1": "测试1",
  "test2": "测试2",
  "test3": "测试3"
}
```

<!-- tab:en.json -->
```json
{
  "test1": "test1",
  "test2": "test2",
  "test3": "test3"
}
```
<!-- tabs:end -->

### 2.3. 引入 i18n 配置文件

```js
import { createApp } from 'vue'

import i18n from './locale'

createApp(App)
  .use(i18n)
  .mount('#app')
```

## 3. 使用示例

### 3.1. `<template>` 中使用国际化字段

```html
<template>
  <!-- 当前语言 -->
  <div>{{ $i18n.locale }}</div>

  <!-- 使用国际化语言字段 -->
  <div>{{ $t('test1') }}</div>
  <div>{{ $t('test2') }}</div>
  <div>{{ $t('test3') }}</div>
</template>
```

### 3.2. `<script>` 中使用国际化字段

```js
import { useI18n } from 'vue-i18n'
const $i18n = useI18n()

// 使用国际化语言字段
console.log($i18n.t('test1'))
console.log($i18n.t('test2'))
console.log($i18n.t('test3'))

// --- or ---
import i18nLocale from '@/locale'

// 使用国际化语言字段
console.log(i18nLocale.global.t('test1'))
console.log(i18nLocale.global.t('test2'))
console.log(i18nLocale.global.t('test3'))
```

### 3.3. 更改语言

```js
import { useI18n } from 'vue-i18n'

const i18n = useI18n()

// when vue-i18n is being used with legacy: false, note that i18n.global.locale is a ref, so we must set it via .value:
i18n.locale.value = 'en'

// otherwise - when using legacy: true, we set it like this:
i18n.locale = 'en'

// or
import i18nLocale from '@/locale'

// when vue-i18n is being used with legacy: false, note that i18n.global.locale is a ref, so we must set it via .value:
i18nLocale.global.locale.value = 'en'

// otherwise - when using legacy: true, we set it like this:
i18nLocale.global.locale = 'en'
```

对于一些单独的 js 文件，可能会有响应式丢失，导致更改语言后字段没有更新的情况，可以使用 `location.reload()` 来刷新页面来重新加载该 js 文件。
