# object 对象类型

定义对象（属性）类型

```ts
const p1: { name: string; age: number; say(): void; greet(name: string): void } = {
  name: 'foo',
  age: 18,
  say() {},
  greet(name) {}
}

// ? 可选属性
const p2: { name: string; age?: number; say(): void; greet?(name: string): void } = {
  name: 'foo',
  say() {}
}
```
