# 内置对象

## global objects

```ts
const a: Array<number> = [1, 2, 3]
const date = new Date()
const reg = /abc/
```

## build-in object

```ts
Math.pow(2, 2)
```

## DOM and BOM

```ts
let body = document.body
let allLis = document.querySelectorAll('li')

document.addEventListener('click', e => {
  e.preventDefault()
})
```

## Utility Types

TypeScript 中的工具类型（Utility Types）是一些内置的类型，用于对已有类型进行转换或操作，从而更方便地进行类型定义和操作。工具类型可以帮助你更高效地编写类型安全的代码。

### `Partial<T>`

将类型 `T` 的所有属性变为可选。

```typescript
interface User {
    id: number;
    name: string;
    age: number;
}

type PartialUser = Partial<User>;

let user: PartialUser = {
    name: "Alice"
};
```

### `Required<T>`

将类型 `T` 的所有属性变为必选。

```typescript
interface User {
    id?: number;
    name?: string;
    age?: number;
}

type RequiredUser = Required<User>;

let user: RequiredUser = {
    id: 1,
    name: "Alice",
    age: 25
};
```

### `Readonly<T>`

将类型 `T` 的所有属性变为只读。

```typescript
interface User {
    id: number;
    name: string;
    age: number;
}

type ReadonlyUser = Readonly<User>;

let user: ReadonlyUser = {
    id: 1,
    name: "Alice",
    age: 25
};

// user.id = 2; // Error: Cannot assign to 'id' because it is a read-only property.
```

### `Pick<T, K>`

从类型 `T` 中选择部分属性 `K`，构造一个新的类型。

```typescript
interface User {
    id: number;
    name: string;
    age: number;
}

type UserName = Pick<User, "name">;

let userName: UserName = {
    name: "Alice"
};
```

### `Omit<T, K>`

从类型 `T` 中排除属性 `K`，构造一个新的类型。

```typescript
interface User {
    id: number;
    name: string;
    age: number;
}

type UserWithoutAge = Omit<User, "age">;

let userWithoutAge: UserWithoutAge = {
    id: 1,
    name: "Alice"
};
```

### `Record<K, T>`

构造一个对象类型，属性键为 `K`，属性值为 `T`。

```typescript
type Names = "Alice" | "Bob" | "Charlie";
type UserRecord = Record<Names, number>;

let userAges: UserRecord = {
    Alice: 25,
    Bob: 30,
    Charlie: 35
};
```

### `Exclude<T, U>`

从类型 `T` 中排除类型 `U`。

```typescript
type T = "a" | "b" | "c";
type U = "a";

type Excluded = Exclude<T, U>; // "b" | "c"
```

### `Extract<T, U>`

从类型 `T` 中提取类型 `U`。

```typescript
type T = "a" | "b" | "c";
type U = "a" | "c";

type Extracted = Extract<T, U>; // "a" | "c"
```

### `NonNullable<T>`

排除类型 `T` 中的 `null` 和 `undefined`。

```typescript
type NullableUser = string | null | undefined;
type NonNullableUser = NonNullable<NullableUser>; // string
```

### `ReturnType<T>`

获取函数类型 `T` 的返回值类型。

```typescript
function getUser() {
    return { id: 1, name: "Alice" };
}

type User = ReturnType<typeof getUser>; // { id: number; name: string; }
```

### `InstanceType<T>`

获取构造函数类型 `T` 的实例类型。

```typescript
class User {
    constructor(public id: number, public name: string) {}
}

type UserInstance = InstanceType<typeof User>; // User
```
