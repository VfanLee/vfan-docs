# typescript 数据类型

## 关键字

`typeof` 获取类型

`keyof` 接收一个对象类型，生成其 key 名称（可能是字符串或数字）的联合类型。

## 字面量类型

字面量类型通常与联合类型一起使用，表示一组明确的可选值列表。

```ts
let str1 = 'hello' // let str1: string
let str2 = 'hello' // let str2: "hello"

let num1 = 11 // let num1: number
let num2 = 22 // let num2: 22

type direction = 'Up' | 'Down' | 'Left' | 'Right' // type direction = "Up" | "Down" | "Left" | "Right"
let direction1: direction = 'aa' // 报错：Type '"aa"' is not assignable to type 'direction'
let direction2: direction = 'Up'
```

## `&` 交叉类型

交叉类型类似于继承，用于组合多个类型为一个类型。

```ts
interface Person { name: string }
interface Contact { phone: string }

type PersonDetail = Person & Contact

let obj: PersonDetail = {
  name: 'foo',
  phone: '1234567890'
}
```

## readonly 只读属性

readonly **只能** 修饰属性，防止在 **构造函数** 之外对属性进行赋值。

注意：只要是 readonly 声明的属性，**必须** 手动声明类型，不然会自动推断为 **字面量** 类型。

接口或者 {} 对象类型，也可以使用 readonly 修饰。

```ts
class Person {
  // readonly age = 18 // 若省略定义类型，由于声明 readonly，类型推断为：18 字面量
  readonly age: number = 18 // 可设置默认值

  constructor(age: number) {
    this.age = age
  }

  setAge(age: number) {
    this.age = age // Cannot assign to 'age' because it is a read-only property
  }
}
```

## 类型兼容性

TS 采用的是结构化类型系统，也叫做 duck Typing（鸭子类型），类型检查关注的是值所具有的形状。也就是说，在结构化类型系统中，如果两个对象具有相同的形状，则认为它们属于同一类型。

### 对象兼容

```ts
class PointClass {
  x: number
  y: number

  constructor(x: number, y: number) {
    this.x = x
    this.y = y
  }
}

class Point2DClass {
  x: number
  y: number

  constructor(x: number, y: number) {
    this.x = x
    this.y = y
  }
}

class Point3DClass {
  x: number
  y: number
  z: number

  constructor(x: number, y: number, z: number) {
    this.x = x
    this.y = y
    this.z = z
  }
}

// 类型兼容，未报错
let pc1: PointClass = new Point2DClass(11, 22)

// 类型兼容，未报错
let pc2: PointClass = new Point3DClass(11, 22, 33)
```

### 接口兼容

```ts
interface PointInterface {
  x: number
  y: number
}

interface Point2DInterface {
  x: number
  y: number
}

interface Point3DInterface {
  x: number
  y: number
  z: number
}

let pi1: PointInterface = { x: 11, y: 22 }
let pi2: Point2DInterface = pi1 // 类型兼容，未报错
let pi3: Point3DInterface = { x: 11, y: 22, z: 33 }
pi2 = pi3 // 类型兼容，未报错

// class 与 interface 之间也可以兼容
class Point3DClass {
  x: number
  y: number
  z: number

  constructor(x: number, y: number, z: number) {
    this.x = x
    this.y = y
    this.z = z
  }
}
let pc3: Point2DInterface = new Point3DClass(11, 22, 33)
```

### 函数兼容

函数兼容需要考虑：函数个数、函数类型、返回值类型。

## 索引签名类型

```ts
interface AnyObject {
  [key: string]: number
}

let obj: AnyObject = {
  a: 1,
  aa: 12,
  aaa: 123
}
```

## 映射类型

基于旧类型创建新类型，减少重复，提高效率。

映射类型只能在 `type` 中使用。

```ts
type PropKeys = 'x' | 'y' | 'z'
// 相当于 type Type1 = { x: number, y: number, z: number }
type Type1 = { [key in PropKeys]: number }

type Props = { a: number, b: string, c: boolean }
// 相当于 type Type2 = { x: number, y: number, z: number }
type Type2 = { [key in keyof Props]: number }
```

### 索引查询

`T[P]` 这种形式在 TS 中称为索引查询类型。作用是用来查询属性类型。

```ts
type Props = { a: number; b: string; c: boolean }

type TypeA = number
type TypeA = Props['a']
type TypeB = Prop['a' | 'b']
type TypeB = Prop[keyof Props]
```
