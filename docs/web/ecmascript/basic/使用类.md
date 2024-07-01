# 使用类

## 声明一个类

在类体内，有若干特性可用。

```js
class MyClass {
  // 构造函数
  constructor() {
    // 构造函数体
  }
  // 实例字段
  myField = "foo";
  // 实例方法
  myMethod() {
    // myMethod 体
  }
  // 静态字段
  static myStaticField = "bar";
  // 静态方法
  static myStaticMethod() {
    // myStaticMethod 体
  }
  // 静态块
  static {
    // 静态初始化代码
  }
  // 字段、方法、静态字段、静态方法、静态块都可以使用私有形式
  #myPrivateField = "bar";
}
```

在 ES6 的版本之前，更多的是使用函数作为构造函数。上面的模式大致可以转换为以下函数构造器：

```js
function MyClass() {
  this.myField = "foo";
  // 构造函数体
}
MyClass.myStaticField = "bar";
MyClass.myStaticMethod = function () {
  // myStaticMethod 体
};
MyClass.prototype.myMethod = function () {
  // myMethod 体
};

(function () {
  // 静态初始化代码
})();
```

### 构造一个类

在声明一个类之后，可以使用 `new` 运算符来创建它的实例。

```js
const myInstance = new MyClass();
console.log(myInstance.myField); // 'foo'
myInstance.myMethod();
```

典型函数构造器可以使用 `new` 来构造，也可以不使用 `new` 来调用。然而，对于类的调用则必须使用 `new`，否则会导致错误。

```js
const myInstance = MyClass(); // TypeError: Class constructor MyClass cannot be invoked without 'new'
```

### 类声明提升

与函数声明不同，类声明并不会被提升（或者，在某些解释器中，可以被提升，但是有暂时性死区的限制），这意味着你不能在声明之前使用类。

```js
new MyClass(); // ReferenceError: Cannot access 'MyClass' before initialization

class MyClass {}
```

该行为与使用 `let` 和 `const` 声明变量类似。

### 类表达式

类似于函数，类声明也有其表达式形式。

```js
const MyClass = class {
  // 类体...
};
```

类表达式也可以有名字。表达式的名字只在类体内可见。

```js
const MyClass = class MyClassLongerName {
  // 类体。这里 MyClass 和 MyClassLongerName 指向同一个类
};
new MyClassLongerName(); // ReferenceError: MyClassLongerName is not defined
```

## 继承

<!-- tabs:start -->
<!-- tab:原型继承 -->

```js
// 父类
function Person(name, age, gender) {
  this.name = name
  this.age = age
  this.gender = gender
}

Person.prototype.say = function () {
  console.log(`${this.name} - ${this.age} - ${this.gender}`)
}

// 子类
function Student(name, age, gender, school) {
  Person.call(this, name, age, gender) // 调用父类构造函数，继承属性
  this.school = school
}

// 设置子类的原型为父类的实例，实现继承
Student.prototype = Object.create(Person.prototype)
Student.prototype.constructor = Student

// 子类新增方法
Student.prototype.study = function () {
  console.log(`${this.name} - ${this.age} - ${this.gender} - ${this.school}`)
}

const p1 = new Person('foo', 18, 'male')
p1.say()

const s1 = new Student('tom', 18, 'male', '武汉大学')
s1.say()
s1.study()
```

<!-- tab:extends【ES6】 -->

```js
// 父类
class Person {
  constructor(name, age, gender) {
    this.name = name
    this.age = age
    this.gender = gender
  }

  say() {
    console.log(`${this.name} - ${this.age} - ${this.gender}`)
  }
}

// 子类
class Student extends Person {
  constructor(name, age, gender, school) {
    super(name, age, gender) // 调用父类构造函数
    this.school = school
  }

  study() {
    console.log(`${this.name} - ${this.age} - ${this.gender} - ${this.school}`)
  }
}

const p1 = new Person('foo', 18, 'male')
p1.say()

const s1 = new Student('tom', 18, 'male', '武汉大学')
s1.say()
s1.study()
```

<!-- tabs:end -->

## 静态方法

<!-- tabs:start -->
<!-- tab: ES5 模拟静态方法 -->

```js
function Person(name, age, gender) {
  this.name = name
  this.age = age
  this.gender = gender
}

Person.prototype.say = function () {
  console.log(`${this.name} - ${this.age} - ${this.gender}`)
}

// 模拟静态方法，这种定义方式不会被继承，它们只能通过类名直接访问，而无法通过子类的类名来访问。
Person.personStaticFun = function () {
  console.log('person static function')
}

function Student(name, age, gender, school) {
  Person.call(this, name, age, gender) // 调用父类构造函数，继承属性
  this.school = school
}

Student.prototype = Object.create(Person.prototype)
Student.prototype.constructor = Student

Student.prototype.study = function () {
  console.log(`${this.name} - ${this.age} - ${this.gender} - ${this.school}`)
}

// 模拟静态方法继承
Student.personStaticFun = Person.personStaticFun
// 模拟静态方法
Student.studentStaticFun = function () {
  console.log('student static function')
}

Person.personStaticFun()
Student.personStaticFun()
Student.studentStaticFun()
```

<!-- tab: 静态方法【ES6】 -->

```js
class Person {
  constructor(name, age, gender) {
    this.name = name
    this.age = age
    this.gender = gender
  }

  say() {
    console.log(`${this.name} - ${this.age} - ${this.gender}`)
  }

  // 定义静态方法，支持子类继承
  static personStaticFun() {
    console.log('person static function')
  }
}

class Student extends Person {
  constructor(name, age, gender, school) {
    super(name, age, gender) // 调用父类构造函数
    this.school = school
  }

  study() {
    console.log(`${this.name} - ${this.age} - ${this.gender} - ${this.school}`)
  }

  // 定义静态方法
  static studentStaticFun() {
    console.log('student static function')
  }
}

Person.personStaticFun()

Student.personStaticFun()
Student.studentStaticFun()
```

<!-- tabs:end -->

## Getter && Setter【ES6】

```js
class Person {
  constructor(name, age) {
    this.name = name
    this._age = age
  }

  get age() {
    return this._age + '岁'
  }

  set age(value) {
    if (value >= 0 && value <= 120) {
      this._age = value
    } else {
      console.log('无效值')
    }
  }
}

const p1 = new Person('foo', 25)
console.log(p1.age) // 25
p1.age = -1 // 无效值
p1.age = 150 // 无效值
console.log(p1.age) // 25
```
