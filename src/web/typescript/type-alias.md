## `type` 类型别名

类型别名（自定义类型）：当某个复杂类型被多次使用，可以独立出来进行复用。

```ts
// 例1：定义 type
type MyType = boolean | number | string | (boolean | number | string)[]
// 使用 type
let m1: MyType = true
let m2: MyType = 123
let m3: MyType = 'abc'
let m4: MyType = [true, 123, 'abc']

// 例2：定义 type
type PersonType = {
  name: string
  age?: number
  say(): void
  greet?(name: string): void
}
// 使用 type
const p: PersonType = {
  name: 'foo',
  say() {}
}
```

## import type

```ts
import type { Xxx } from "xxx"
```
