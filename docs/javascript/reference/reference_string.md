# String Reference

## capitalize

将字符串的第一个字符转换为大写，将其余字符转换为小写。

```js
const capitalize = string => (string ? string.charAt(0).toUpperCase() + string.slice(1).toLowerCase() : '')

capitalize('FRED')
// => 'Fred'
```

## lowerFirst

将字符串的第一个字符转换为小写。

```js
const lowerFirst = string => (string ? string.charAt(0).toLowerCase() + string.slice(1) : '')

lowerFirst('Fred')
// => 'fred'
```

## upperFirst

将字符串的第一个字符转换为大写。

```js
const upperFirst = string => (string ? string.charAt(0).toUpperCase() + string.slice(1) : '')

upperFirst('fred')
// => 'Fred'
```

## toLower

给定字符串的小写。

```js
'FOOBAR'.toLowerCase()
// => 'foobar'
```

## toUpper

给定字符串的大写。

```js
'foobar'.toLowerCase()
// => 'FOOBAR'
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

重复给定的字符串 n 次。

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

## trim

从字符串中删除前导和尾随空格字符。

```js
' abc '.trim()
// => 'abc'
```
