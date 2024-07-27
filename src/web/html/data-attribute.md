# data-* 自定义属性

::: tip 参考于：
[data-* 自定义属性 - MDN](https://developer.mozilla.org/zh-CN/docs/Learn/HTML/Howto/Use_data_attributes)
:::

## HTML 定义自定义属性

所有在元素上以 `data-` 开头的属性为数据属性。比如说你有一篇文章，而你又想要存储一些不需要显示在浏览器上的额外信息，就可以使用 data 属性，如下：

```html
<article
  id="electriccars"
  data-columns="3"
  data-index-number="12314"
  data-parent="cars">
  ...
</article>
```

## JavaScript 访问自定义属性

<!-- tabs:start -->
<!-- tab:dataset -->
```js
var article = document.querySelector("#electriccars");

article.dataset.columns // "3"
article.dataset.indexNumber // "12314"
article.dataset.parent // "cars"
```

<!-- tab:getAttribute() -->
```js
var article = document.querySelector("#electriccars");

article.getAttribute('data-columns') // "3"
article.getAttribute('data-index-number') // "12314"
article.getAttribute('data-parent') // "cars"
```
<!-- tabs:end -->

## CSS 访问自定义属性

data 设定为 HTML 属性，它们同样能被 CSS 访问。访问方式如下：

```css
article::before {
  content: attr(data-parent);
}
```

同样也可以在 CSS 中使用属性选择器根据 data 来改变样式：

```css
article[data-columns='3'] {
  width: 300px;
}
```
