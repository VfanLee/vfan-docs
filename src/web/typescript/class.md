# `class` 类

## 定义构造器类型

```ts
class Person {
  name: string
  age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
}

```

## 定义实例类型

```ts
class point {
  // 定义实例属性，若赋予默认值，则会进行类型推断
  x: number = 1 // 显式定义类型
  y = 2 // 类型推断为：number

  // 定义实例方法
  scale(n: number) {
    this.x *= n
    this.y *= n
  }
}
```

## 继承

```ts
class Animal {
  move() { console.log("moving") }
}

class Dog extends Animal {
  bark() { console.log("wong") }
}
```

## 实现接口

```ts
// 定义接口
interface Singer {
  name: string

  sing(): void
}

// 实现接口
class Person implements Singer {
  name: string = 'foo'

  sing() {
    console.log('sing...')
  }
}
```

## 可见性

1. public【默认】：公开的；公有成员可以被任何地方访问。
2. protected：受保护的；仅对其声明的类与子类（不包括实例对象）可见。
3. private：私有的。仅对其声明的类可见。

```ts
class Father {
  public funcPublic() { console.log('public...') }
  protected funcProtected() { console.log('protected...') }
  private funcPrivate() { console.log('private...') }

  ftest() {
    this.funcPublic()
    this.funcProtected()
    this.funcPrivate()
  }
}

const f = new Father()
f.funcPublic()
f.funcProtected() // 报错：不可访问
f.funcPrivate() // 报错：不可访问

class Son extends Father {
  stest() {
    this.funcPublic()
    this.funcProtected()
    this.funcPrivate() // 报错：不可访问
  }
}

const s = new Son()
s.funcPublic()
s.funcProtected() // 报错：不可访问
s.funcPrivate() // 报错：不可访问
```
