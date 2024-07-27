# 类型推论

如果声明变量并立即进行初始化赋值，则会进行类型推论。

```ts
let num = 12 // 此时类型注解为 number
num = '12' // 报错：Type 'string' is not assignable to type 'number'
```
