# 基本类型

## 原始类型

定义 js 原始类型。

```ts
/* boolean */
let boolean1: boolean = true
let boolean2: boolean = false

/* number */
let number1: number = 1
let number2: number = 5.3
let number3: number = -10

/* string */
let string1: string = 'hi'
let string2: string = 'hi'
let string3: string = `hi`

/* null */
let null1: null = null
/* undefined */
let undefined1: undefined = undefined

// bigint
let bigint1: bigint = 12n
let bigint2: bigint = BigInt(12)

/* Symbol */
let symbol1: Symbol = Symbol()
```

## any

any 表示任意类型。

```ts
let noSure: any = false
noSure = 17
noSure = 'ts'
noSure = undefined
noSure = null
noSure = 12n
noSure = Symbol()
// ...
```
