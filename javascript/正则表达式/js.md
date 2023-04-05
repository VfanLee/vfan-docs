# 正则表达式的使用（JavaScript）

## 1. 创建正则表达式

### 1.1. 字面量创建正则表达式

```js
const reg = /foo/g
```

### 1.2. 对象创建正则表达式

```js
const reg = new RegExp('foo', 'g')
```

## 2. 测试正则是否匹配

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test

```js
/foo/.test('bar')
```

## 3. 获取匹配字符

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/match

```js
'bar'.match(/foo/g)
```
