# function 函数类型

定义函数（参数、返回值）类型

```ts
// 分别指定参数、返回值定义类型
function f1(num1: number, num2: number): number {
  return num1 + num2
}
const f2 = (num1: number, num2: number): number => num1 + num2

// 通过函数形式，同时指定参数、返回值定义类型
// (num1: number, num2: number) => number
const f3: (num1: number, num2: number) => number = (num1, num2) => num1 + num2

// void 返回值类型
function f4(str: string): void {}

// ? 函数可选参数
// 并且可选参数后面不能加确定参数，不然会发生参数混乱的情况
function f5(num1?: number, num2?: number): void {}
```
