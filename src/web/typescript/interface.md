# interface 接口

## 介绍

当一个对象类型被多次使用时，使用接口（interface）来描述对象类型，来进行复用。

[Duck Type](https://zh.wikipedia.org/wiki/%E9%B8%AD%E5%AD%90%E7%B1%BB%E5%9E%8B)

## `type` vs `interface`

1. `type` 可以为任意类型指定别名，而 `interface` 只能为对象指定类型。
2. `type` 无法继承其它类型，而 `interface` 可以继承其他类型，包括 type。

## 基本使用

```ts
// 定义接口
interface IPerson {
  readonly id: number
  name: string
  age?: number // ? 代表可选
  say(): void
  greet?(name: string): void
}

// 使用接口
const p: IPerson = {
  id: 112,
  name: 'foo',
  say() {},
}
```

## 继承

### 继承 interface

```ts
// 定义接口
interface point2D {
  x: number
  y: number
}

// 继承接口
interface point3D extends point2D {
  z: number
}

const pInterface: point3D = {
  x: 11,
  y: 22,
  z: 33
}
```

### 继承 type

```ts
// 定义 type
type point2D = {
  x: number
  y: number
}

// 继承 type
interface point3D extends point2D {
  z: number
}

const pType: point3D = {
  x: 11,
  y: 22,
  z: 33
}
```
