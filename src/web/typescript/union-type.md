# 联合类型

由两个或者多个类型组合而成的类型，表示可以是定义类型的其中一种。

```ts
let text1: string | number = 'hello'
let text2: string | number = 123
let arr: (number | string)[] = [1, 'a', 2, 'b']
```
