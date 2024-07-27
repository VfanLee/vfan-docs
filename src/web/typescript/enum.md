# enum 枚举

enum 类似于 “字面量类型 + 枚举类型”，表示定义一组命名常量。

```ts
enum DirectionEnum {
  Up,
  Down,
  Left,
  Right
}

let direction: DirectionEnum  = 'aa' // 报错：Type '"aa"' is not assignable to type 'DirectionEnum'
let direction2: DirectionEnum = DirectionEnum.Up
```

## 数字枚举

枚举值若为数字，则后续枚举值会依次递增，第一个枚举值默认为 0。

```ts
enum DirectionEnum {
  Up, // 0
  Down, // 1
  Left, // 2
  Right // 3
}

enum DirectionEnum {
  Up = 10, // 10
  Down, // 11
  Left, // 12
  Right // 13
}

enum DirectionEnum {
  Up = 10, // 0
  Down, // 1
  Left, // 2
  Right // 3
}

enum DirectionEnum {
  Up = 10, // 10
  Down, // 11
  Left = 20, // 20
  Right // 21
}
```

## 字符串枚举

若定义为字符串，其他枚举值必须赋予初始值。

```ts
enum DirectionEnum {
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Righ = 'RIGHT'
}
```

## 枚举原理

```ts
enum DirectionEnum {
  Up = 10, // 10
  Down, // 11
  Left = 20, // 20
  Right // 21
}

// => js
var DirectionEnum;
(function (DirectionEnum) {
  DirectionEnum[DirectionEnum["Up"] = 10] = "Up";
  DirectionEnum[DirectionEnum["Down"] = 11] = "Down";
  DirectionEnum[DirectionEnum["Left"] = 20] = "Left";
  DirectionEnum[DirectionEnum["Right"] = 21] = "Right";
})(DirectionEnum || (DirectionEnum = {}));
```

```ts
enum DirectionEnum {
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Righ = 'RIGHT'
}

// => js
var DirectionEnum;
(function (DirectionEnum) {
  DirectionEnum["Up"] = "UP";
  DirectionEnum["Down"] = "DOWN";
  DirectionEnum["Left"] = "LEFT";
  DirectionEnum["Righ"] = "RIGHT";
})(DirectionEnum || (DirectionEnum = {}))
```

枚举值若不为数字，

## 常量枚举

编译后非常复杂，通过常量枚举可以提升性能f

```ts
const enum DirectionEnum {
  Up = 10, // 10
  Down, // 11
  Left = 20, // 20
  Right // 21
}
```
