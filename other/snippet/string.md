# String

## indexOf

返回指定子字符串第一次出现的索引。

```js
'a cat'.indexOf('a')
// => 0

'a cat'.indexOf('x')
// => -1

'a cat'.indexOf('a', 3)
// => 3
```

## includes

是否包含指定子字符串。

```js
'a cat'.includes('a')
// => true

'a cat'.includes('x')
// => false

'a cat'.includes('a', 3)
// => true
```

## toLower

给定字符串的小写。

```js
'FOOBAR'.toLowerCase()
// => 'foobar'
```

## ToUpper

给定字符串的大写。

```js
'foobar'.ToUpperCase()
// => 'FOOBAR'
```

## lowerFirst

将字符串的第一个字符转换为小写。

```js
const lowerFirst = str.charAt(0).toLowerCase() + str.slice(1)

lowerFirst('Fred')
// => 'fred'
```

## upperFirst

将字符串的第一个字符转换为大写。

```js
const upperFirst = str.charAt(0).toUpperCase() + str.slice(1)

upperFirst('fred')
// => 'Fred'
```

## capitalize

将字符串的第一个字符转换为大写，将其余字符转换为小写。

```js
const capitalize = str => `${str.charAt(0).toUpperCase()}${str.slice(1).toLowerCase()}`

capitalize('FRED')
// => 'Fred'
```

## startsWith

检查字符串是否以给定的目标字符串开头。

```js
'abc'.startsWith('a')
// => true

'abc'.startsWith('c')
// => false
```

## endsWith

检查字符串是否以给定的目标字符串结尾。

```js
'abc'.endsWith('a')
// => false

'abc'.endsWith('c')
// => true
```

## padStart

用另一个字符串填充当前字符串（开头）

```js
'abc'.padStart(5, '**')
// => '**abc'
```

## padEnd

用另一个字符串填充当前字符串（结尾）

```js
'abc'.padEnd(5, '**')
// => 'abc**'
```

## repeat

重复给定的字符串。

```js
'abc'.repeat(3)
// => 'abcabcabc'
```

## replace

返回一个新字符串，其中 pattern 的部分或全部匹配项替换为 replacement。

```js
'Apples are round, and apples are juicy.'.replace(/re/gi, 'oranges')
// => 'Apples aoranges round, and apples aoranges juicy.'
```

## split

按分隔符拆分字符串。

```js
'2022-02-22'.split('-')
// => ['2022', '02', '22']
```

## trim

从字符串中删除前导和尾随空格字符。

```js
' abc '.trim()
// => 'abc'
```

## trimStart

从字符串中删除前导和尾随空格字符。

```js
' abc '.trimStart()
// => 'abc '
```

## trimEnd

从字符串中删除前导和尾随空格字符。

```js
' abc '.trimEnd()
// => ' abc'
```

## customCase

将字符串转换为指定形式（默认：`-` 短横线）。

```js
const re = /([0-9]+|([A-Z][a-z]+)|[a-z]+|([A-Z]+)(?![a-z]))/g
const customCase = (str, flag = '-') => (String(str).match(re) || []).map(x => x.toLowerCase()).join(flag)
```

## escapeHTML

转义 HTML 特殊字符。

```js
function escapeHTML(str) {
  return str.replace(/[&<>"']/g, m => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m]))
}

// example
escapeHTML('<div >Hi Medium</div>') // '&lt;div &gt;Hi Medium&lt;/div&gt;'
```
