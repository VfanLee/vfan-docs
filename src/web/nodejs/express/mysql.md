# MySQL

> mysql [参考文档](https://github.com/mysqljs/mysql#readme)

```sh
npm i mysql
```

```js
const mysql = require('mysql')

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'my_db'
})
```

## 查询

select 查询语句，执行结果是数组。

```js
const queryStr = 'select * from user'
db.query(queryStr, (err, result) => {
  if (err) {
    console.log('err:', err)
  } else {
    console.log('result:', result)
  }
})
```

## 插入

```js
const user = { username: '小明', password: 'xiaoming' }
const insertStr1 = 'insert into user (username, password) values (? ,?)'
const insertStr2 = 'insert into user set ?'

db.query(insertStr1, [user.username, user.password], (err, result) => {
  if (err) {
    console.log('err:', err)
  } else {
    console.log('result:', result)
  }
})

db.query(insertStr2, user, (err, result) => {
  if (err) {
    console.log('err:', err)
  } else {
    console.log('result:', result)
  }
})
```

## 更新

```js
const user = { id: 10, username: '小红', password: '小红' }
const updateStr1 = 'update user set username = ?, password = ? where id = ?'
const updateStr2 = 'update user set ? where id = ?'

db.query(updateStr1, [user.username, user.password, user.id], (err, result) => {
  if (err) {
    console.log('err:', err)
  } else {
    console.log('result:', result)
  }
})

db.query(updateStr2, [user, user.id], (err, result) => {
  if (err) {
    console.log('err:', err)
  } else {
    console.log('result:', result)
  }
})
```

## 删除

```js
const deleteStr = 'delete from user where id = ?'
db.query(deleteStr, 8, (err, result) => {
  if (err) {
    console.log('err:', err)
  } else {
    console.log('result:', result)
  }
})
```
