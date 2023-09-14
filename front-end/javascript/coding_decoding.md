# 编解码

## encodeURI / decodeURI

```js
// 编码
encodeURI('https://mozilla.org/?x=шеллы')
// => 'https://mozilla.org/?x=%D1%88%D0%B5%D0%BB%D0%BB%D1%8B'

// 解码
decodeURI('https://mozilla.org/?x=%D1%88%D0%B5%D0%BB%D0%BB%D1%8B')
// => 'https://mozilla.org/?x=шеллы'
```

## encodeURIComponent / decodeURIComponent

```js
// 编码
encodeURIComponent('https://mozilla.org/?x=шеллы')
// => 'https%3A%2F%2Fmozilla.org%2F%3Fx%3D%D1%88%D0%B5%D0%BB%D0%BB%D1%8B'

// 解码
decodeURIComponent('https%3A%2F%2Fmozilla.org%2F%3Fx%3D%D1%88%D0%B5%D0%BB%D0%BB%D1%8B')
// => 'https://mozilla.org/?x=шеллы'
```

## escape / unescape【过时】

```js
escape('https://mozilla.org/?x=шеллы')
// => 'https%3A//mozilla.org/%3Fx%3D%u0448%u0435%u043B%u043B%u044B'

// 解码
unescape('https%3A//mozilla.org/%3Fx%3D%u0448%u0435%u043B%u043B%u044B')
// => 'https://mozilla.org/?x=шеллы'
```
