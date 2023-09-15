# JavaScript OOP【ES5】

## 创建对象

### 字面量

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

### function

```js
// 每个对象实例会有独立的 say 方法，会消耗大量内存空间
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

// 优化方案：将方法挂载到原型上来节省内存空间
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

## 继承

```js
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

## 静态方法

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
