# 泛型

泛型可以在保证类型安全的前提下，让函数等多个类型一起工作，从而实现复用，常用于：函数、接口、class 中。

## 泛型函数

```ts
// 定义
function foo<T>(value: T): T {
  return value
}

const foo = <T>(value: T): T => {
  return value;
}
```

```js
// 使用泛型函数
const str = foo<string>('a') // const str: string
const num = foo<number>(1) // const num: number
const bool = foo<boolean>(false) // const bool: boolean

const str_1 = foo('a') // 自动推断为 'a'
let str_2 = foo('a') // 自动推断为 string
```

```ts
// 更复杂的定义
function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]]
}
```

## 泛型约束

默认情况下，泛型函数的类型变量可以代表多个类型，这会导致无法访问任何类型属性，比如：当参数为数组类型时，无法获取 length 属性。

```ts
// 方式1：指定更加具体的类型来获取属性
function foo<T>(value: T[]): T[] {
  console.log(value.length)
  return value
}
```

```ts
// 方式2：通过 extends 继承来获取属性
interface ILength { length: number }
function foo<T extends ILength>(value: T): T {
  console.log(value.length)
  return value
}
```

## 多个泛型变量

```ts
function getProp<T, K extends keyof T>(obj: T, key: K) {
  return obj[key]
}
```

## 泛型接口

```ts
interface IFoo<T> {
  id: T
}
```

## 泛型类

```ts
class Foo<T> {
  id: T

  constructor(id: T) {
    this.id = id
  }
}
```

## 泛型工具类型

- `Partial<T>` 用来构造一个类型，将 T 的所有属性设置为可选。
- `Readonly<T>` 用来构造一个函数，将 T 的所有属性都设置为 readonly。
- `Pick<T, K>` 从 T 中选择一组属性来构造新类型。
- `Record<K, T>` 构造一个对象类型，属性键为 K，属性类型为 T。

```ts
interface Props {
  id: string,
  title: string,
  children: number[]
}

type PartialProps = Partial<Props>
type ReadonlyProps = Readonly<Props>
type PickProps = Pick<Props, 'id' | 'title'>

type RecordObj = Record <'a' | 'b' | 'c', string[]>
let obj: RecordObj = {
  a: ['1'],
  b: ['2'],
  c: ['3'],
}
```
