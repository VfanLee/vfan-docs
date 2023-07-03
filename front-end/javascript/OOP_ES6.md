# JavaScript OOP【ES6】

## 创建对象

```js
// 每个对象实例会有独立的 say 方法，会消耗大量内存空间
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

// 优化方案：将方法挂载到原型上来节省内存空间
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

## 继承

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

## 静态方法

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

## Getter && Setter

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
