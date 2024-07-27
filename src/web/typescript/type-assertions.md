# 类型断言

```ts
// HTML: <a id="link" href="#"></a>

// 通过类型断言，使 alink 类型更具体，这样就可以访问 a 标签特定的属性和标签了
let aLink1 = document.getElementById('link') as HTMLAnchorElement
```
