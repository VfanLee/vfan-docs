# 假植

**假值**（**falsy**，有时写为 **falsey**）是在布尔上下文中认定为 false 的值。

JavaScript 在需要用到布尔类型值的上下文中使用类型转换将值转换为布尔值，例如 *条件语句* 和 *循环语句*。

| 值           | 类型      | 描述                                                                                    |
| ------------ | --------- | --------------------------------------------------------------------------------------- |
| null         | Null      | 关键词 `null` — 任何值的缺失                                                            |
| undefined    | Undefined | `undefined` — 原始类型值                                                                |
| false        | Boolean   | 关键字 `false`。                                                                        |
| NaN          | Number    | `NaN` — 不是一个数字                                                                    |
| 0            | Number    | `Number` 零，也包括 `0.0`、`0x0` 等。                                                   |
| -0           | Number    | `Number` 负的零，也包括 `-0.0`、`-0x0` 等。                                             |
| 0n           | BigInt    | `BigInt` 零，也包括 `0x0n` 等。需要注意没有 `BigInt` 负的零 —— `0n` 的相反数还是 `0n`。 |
| ""           | String    | 空字符串值，也包括 `''` 和 ````。                                                       |
| document.all | Object    | 唯一具有假值的 JavaScript 对象是内置的 `document.all`。                                 |
