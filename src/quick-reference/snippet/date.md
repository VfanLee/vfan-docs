# Date

## getTimestamp

获取时间戳。

```js
function getTimestamp() {
  return Date.now()
}
```

::: tip

- `+new Date()`
- `new Date().getTime()`

也能获取时间戳，但是没有 `Date.now()` 效率高。

:::

## formatDate

格式化日期。

```js
function formatDate(date, format = 'YYYY-MM-DD HH:mm:ss') {
  const map = {
    YYYY: date.getFullYear(),
    MM: String(date.getMonth() + 1).padStart(2, '0'),
    DD: String(date.getDate()).padStart(2, '0'),
    HH: String(date.getHours()).padStart(2, '0'),
    mm: String(date.getMinutes()).padStart(2, '0'),
    ss: String(date.getSeconds()).padStart(2, '0'),
  }

  return format.replace(/YYYY|MM|DD|HH|mm|ss/g, match => map[match])
}
```

## diffDays

计算两个日期之间的相差天数。

```js
function diffDays(date, otherDate) {
  return Math.ceil(Math.abs(date - otherDate) / (1000 * 60 * 60 * 24))
}
```

## dayOfYear

从日期获取一年中的某一天。

```js
function dayOfYear(date) {
  Math.floor((date - new Date(date.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24))
}
```
