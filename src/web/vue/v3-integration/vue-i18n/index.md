# Vue I18n

::: tip
当前 [Vue I18n](https://vue-i18n.intlify.dev/) 最新版本为 9.x。

**兼容性说明：Vue3 请使用 9.x 版本。**
:::

## 在 Vue 项目中引入 Vue I18n

1. 安装 `vue-i18n`。

    ```sh
    npm i vue-i18n@latest
    ```

2. 在 `i18n/index.js` 中创建 `i18n` 实例。

    ```js
    import { createI18n } from 'vue-i18n'

    const messages = {
      zh: {
        "home": "首页",
        "about": "关于",
        "currentDate": "当前日期：{date}"
      },
      en: {
        "home": "Home",
        "about": "About",
        "currentDate": "Current Date: {date}"
      }
    }

    const i18n = createI18n({
      legacy: false,
      locale: 'en',
      fallbackLocale: 'zh',
      messages
    })

    export default i18n
    ```

    ::: tip
    在 Vue I18n v9 及之后版本中，Vue I18n v8.x 提供的 API 称为 `Legacy API` 模式。

    也就是说，如果 `legacy: false`，则 `i18n` 实例将使用 `Composition API` 模式。
    :::

3. 在 `src/main.js` 中引入 `i18n` 实例。

    ```js
    import i18n from './i18n'

    const app = createApp(App)

    app.use(i18n)

    app.mount('#app')
    ```

## 获取翻译文本

### 在组件中访问翻译字段

```vue{6,11}
<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

console.log(t('message.hello')) // setup 中访问翻译字段
</script>

<template>
  <!-- template 中访问翻译字段 -->
  <div>{{ $t('message.hello') }}</div> 
</template>
```

### 在组件外访问翻译字段

```js{3}
import i18n from '@/i18n'

console.log(i18n.global.t('message.hello'))
```

## 切换语言区域（全局范围）

### 组件内切换语言区域

在 setup 中切换语言区域：

```vue{4,7}
<script setup>
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const changeLocale = value => {
  locale.value = value
}
</script>
```

在 `<template>` 中切换语言区域：

```vue{3}
<template>
  <div class="locale-changer">
    <select v-model="$i18n.locale">
      <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">{{ locale }}</option>
    </select>
  </div>
</template>
```

### 组件外切换语言区域

```js{4,7}
import i18n from '@/i18n'

// legacy: false
i18n.global.locale.value = 'en'

// legacy: true
i18n.global.locale = 'en'
```

## 消息格式语法

### 命名插值

```js
const messages = {
  en: {
    message: {
      hello: '{msg} world'
    }
  }
}
```

```html
<p>{{ $t('message.hello', { msg: 'hello' }) }}</p>
```

输出：

```html
<p>hello world</p>
```

### 列表插值

```js
const messages = {
  en: {
    message: {
      hello: '{0} world'
    }
  }
}
```

```html
<p>{{ $t('message.hello', ['hello']) }}</p>
```

输出：

```html
<p>hello world</p>
```

### 文字插值

```js
const messages = {
  en: {
    address: "{account}{'@'}{domain}"
  }
}
```

```html
<p>email: {{ $t('address', { account: 'foo', domain: 'domain.com' }) }}</p>
```

输出：

```html
<p>email: foo@domain.com</p>
```

::: tip
文本插值对于消息格式语法中的特殊字符（如 `{` and `}`）很有用，这些字符不能直接在 message 中使用。
:::

## vscode 插件

[i18n Ally](https://marketplace.visualstudio.com/items?itemName=Lokalise.i18n-ally)
