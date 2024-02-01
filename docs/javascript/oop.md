# JS OOP

## 创建对象

<!-- tabs:start -->
<!-- tab: new Object() -->

```js
const obj = new Object()
obj.name = 'fan'
obj.age = 20
obj.eating = function() {
  console.log(this.name + 'eating!')
}
```

<!-- tab: 字面量 -->

```js
const p1 = {
  name: 'foo',
  age: 18,
  gender: 'male',
  say: function () {
    console.log(`${this.name} - ${this.age} - ${this.gender}`)
  }
}
p1.say()

const p2 = {
  name: 'bar',
  age: 17,
  gender: 'female',
  say: function () {
    console.log(`${this.name} - ${this.age} - ${this.gender}`)
  }
}
p2.say()
```

<!-- tab: function -->

每个对象实例会有独立的 say 方法，会消耗大量内存空间。

```js
function Person(name, age, gender) {
  this.name = name
  this.age = age
  this.gender = gender

  this.say = function () {
    console.log(`${this.name} - ${this.age} - ${this.gender}`)
  }
}

const p1 = new Person('foo', 18, 'male')
p1.say()

const p2 = new Person('bar', 17, 'female')
p2.say()
```

优化方案：将方法挂载到原型上来节省内存空间。

```js
function Person(name, age, gender) {
  this.name = name
  this.age = age
  this.gender = gender
}

Person.prototype.say = function () {
  console.log(`${this.name} - ${this.age} - ${this.gender}`)
}

const p1 = new Person('foo', 18, 'male')
p1.say()

const p2 = new Person('bar', 17, 'female')
p2.say()
```

<!-- tab: class【ES6】 -->

每个对象实例会有独立的 say 方法，会消耗大量内存空间。

```js
class Person {
  constructor(name, age, gender) {
    this.name = name
    this.age = age
    this.gender = gender
    this.say = function () {
      console.log(`${this.name} - ${this.age} - ${this.gender}`)
    }
  }
}

const p1 = new Person('foo', 18, 'male')
p1.say()

const p2 = new Person('bar', 17, 'female')
p2.say()
```

优化方案：将方法挂载到原型上来节省内存空间。

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
}

const p1 = new Person('foo', 18, 'male')
p1.say()
console.log(p1);

const p2 = new Person('bar', 17, 'female')
p2.say()
```

<!-- tabs:end -->

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
