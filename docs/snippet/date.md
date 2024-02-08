# Date

## 获取当前时间戳

```js
+new Date()

new Date().getTime()

Date.now()
```

## diffDays

计算两个日期之间的相差天数。

```js
const diffDays = (date, otherDate) => Math.ceil(Math.abs(date - otherDate) / (1000 * 60 * 60 * 24));

diffDays(new Date("2021-11-3"), new Date("2022-2-1"))  // 90
```

## dayOfYear

从日期获取一年中的某一天。

```js
const dayOfYear = (date) => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24))

dayOfYear(new Date()) // 74
```
