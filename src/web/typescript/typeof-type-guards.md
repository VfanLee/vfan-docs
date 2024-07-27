# `typeof` 类型守卫

`typeof` 类型守卫（type guard）是 TypeScript 中的一种类型保护机制，用于在运行时检查变量的类型，以便在类型范围内执行相应的操作。这有助于避免类型错误，并使代码更安全和可读。

## 基本用法

`typeof` 类型守卫用于检查基本类型（如 `string`、`number`、`boolean` 等）。它的语法是 `typeof variable === 'type'`。

```typescript
function printValue(value: string | number) {
    if (typeof value === 'string') {
        // 在这个代码块中，TypeScript 知道 value 是 string 类型
        console.log(`String value: ${value.toUpperCase()}`);
    } else {
        // 在这个代码块中，TypeScript 知道 value 是 number 类型
        console.log(`Number value: ${value.toFixed(2)}`);
    }
}

printValue('hello'); // 输出: String value: HELLO
printValue(123.456); // 输出: Number value: 123.46
```

## 使用场景

1. **处理联合类型**：在处理联合类型时，`typeof` 类型守卫可以帮助你根据实际类型执行不同的逻辑。
2. **函数重载**：当一个函数有多个重载签名时，`typeof` 类型守卫可以帮助你确定实际参数类型，从而执行相应的操作。
3. **代码安全性**：通过类型检查，避免运行时类型错误，提升代码的安全性和稳定性。

## 例子

以下是一些 `typeof` 类型守卫的常见示例：

### 检查字符串类型

```typescript
function isString(value: any): boolean {
    return typeof value === 'string';
}

console.log(isString('hello')); // 输出: true
console.log(isString(123));     // 输出: false
```

### 检查数字类型

```typescript
function isNumber(value: any): boolean {
    return typeof value === 'number';
}

console.log(isNumber('hello')); // 输出: false
console.log(isNumber(123));     // 输出: true
```

### 处理联合类型中的不同类型

```typescript
type User = {
    id: number;
    name: string;
};

function processInput(input: string | number | User) {
    if (typeof input === 'string') {
        console.log(`Received a string: ${input}`);
    } else if (typeof input === 'number') {
        console.log(`Received a number: ${input}`);
    } else {
        console.log(`Received a user: ${input.name}`);
    }
}

processInput('hello'); // 输出: Received a string: hello
processInput(123);     // 输出: Received a number: 123
processInput({ id: 1, name: 'John' }); // 输出: Received a user: John
```

## 类型守卫的局限性

`typeof` 类型守卫只能检查基本类型，对于对象类型或复杂类型（如接口、类等）需要使用其他类型守卫，如 `instanceof` 或用户自定义类型守卫。

```typescript
class Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

class Dog extends Animal {
    breed: string;
    constructor(name: string, breed: string) {
        super(name);
        this.breed = breed;
    }
}

function isDog(animal: Animal): animal is Dog {
    return (animal as Dog).breed !== undefined;
}

const myPet: Animal = new Dog('Buddy', 'Golden Retriever');

if (isDog(myPet)) {
    console.log(`Dog breed: ${myPet.breed}`);
} else {
    console.log(`Animal name: ${myPet.name}`);
}
```

希望这些内容对你理解 `typeof` 类型守卫有所帮助。如果你有其他问题或需要更多示例，请随时告诉我！
