# Code Review

## 善用 Promise 链式调用

```js
// Bad
getUserInfo().then(userInfo => {
  getArticles(userInfo).then(articles => {
    Promise.all(articles.map(article => getArticleDetail(article))).then(articleDetails => {
      console.log(articleDetails)
    })
  })
})

// Good
getUserInfo()
  .then(getArticles)
  .then(articles => {
    Promise.all(articles.map(article => getArticleDetail(article)))
  })
  .then(articleDetails => {
    console.log(articleDetails)
  })
```

## 不要故意隐藏错误信息

```js
// Bad
const getuserInfo = async () => {
  try {
    const userinfo = await fetch('/api/getuserInfo')
  } catch (error) {
    // 为了避免控制台打印报错信息
  }
}

// Good
const getuserInfo = async () => {
  try {
    const userinfo = await fetch('/api/getuserInfo')
  } catch (error) {
    // 简单的打印出来也好，方便日后定位错误
    console.debug(error)
  }
}
```

## 函数多参数处理

```js
// Bad
const getUserInfo = (name, age, weight, gender, phone, email) => {
  // ...
}
getUserInfo('foo', 24, 120, 'male', '13111111111', 'foo@mail.com')

// Good
const getUserInfo = options => {
  const { name, age, weight, gender, phone, email } = options
  // ...
}
getUserInfo({
  name: 'foo',
  age: 24,
  weight: 120,
  gender: 'male',
  phone: '13111111111',
  email: 'foo@mail.com'
})
```

## 魔法值处理

```js
// Bad
if (state === 1 || state === 2) {
  // ...
} else if (state === 3) {
  // ...
}

// Good
const STATE = {
  NORMAL: 1,
  VIP: 2,
  SUPER_VIP: 3
}

if (state === STATE.NORMAL || state === STATE.VIP) {
  // ...
} else if (state === STATE.SUPER_VIP) {
  // ...
}
```

## 定义对象时，简约定义的名称

```js
// Bad
class User {
  constructor(userName, userAge, userPwd) {
    this.userName = userName
    this.userAge = userAge
    this.userPwd = userPwd
  }

  userLogin() {}
  getUserProfile() {}
}

// Good
class User {
  constructor(name, age, pwd) {
    this.name = name
    this.age = age
    this.pwd = pwd
  }

  login() {}
  getProfile() {}
}
```

## 优化代码分支

> [空值合并运算符（??）](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)

```js
// Bad
function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

// Good
function counter(state = 0, action) {
  const actionType = {
    INCREMENT: 1,
    DECREMENT: -1
  }

  return state + (actionType[action.type] ?? 0)
}
```

> 当分支过多时，可以将相同逻辑提取出来；将不同的逻辑可以用数组或者对象、map甚至是函数来进行提取。

## 当判断条件过多时，提取判断条件

```js
// Bad
function checkGamestatus() {
  if (
    remaining === 0 ||
    (remaining === 1 && remainingPlayers === 1) ||
    remainingPlayers === 0
  ) {
    quitGame()
  }
}

// Good
function isGameOver() {
  return (
    remaining === 0 ||
    (remaining === 1 && remainingPlayers === 1) ||
    remainingPlayers === 0
  )
}

function checkGamestatus() {
  if (isGameOver()) {
    quitGame()
  }
}
```

## 提取硬编码

```js
// Bad
function responseInterceptor(resp) {
  const token = resp.headers.get('authorization')
  if (token) {
    localStorage.setItem('token', token)
  }
}

function requestInterceptor(req) {
  const token = localStorage.getItem('token')
  if (token) {
    req.headers.set('authorization', `Bearer ${token}`)
  }
}

// Good
const AUTH_KEY = 'authorization'
const TOKEN_KEY = 'token'

function responseInterceptor(resp) {
  const token = resp.headers.get(AUTH_KEY)
  if (token) {
    localStorage.setItem(TOKEN_KEY, token)
  }
}

function requestInterceptor(req) {
  const token = localStorage.getItem(TOKEN_KEY)
  if (token) {
    req.headers.set(AUTH_KEY, `Bearer ${token}`)
  }
}
```
