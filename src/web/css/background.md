# background

## background 是一个简写属性

- `background-image`
- `background-repeat`
- `background-attachment`
- `background-position`
- `background-size`
- `background-origin`
- `background-clip`
- `background-color`

注意，因为 `background-color` 不能设置多组，且前面的背景会叠在之后的背景之上，所以背景色通常都定义在最后一组上，避免背景色将图像盖住。

```css
.demo {
  background: url(test1.jpg) no-repeat scroll 10px 20px/50px 60px padding-box,
              url(test2.jpg) no-repeat scroll 10px 20px/70px 90px padding-box,
              url(test3.jpg) no-repeat scroll 10px 20px/110px 130px padding-box #aaa;
}
```

## background-image

`background-image` 可以是 **图片路径** 也可以是 **渐变背景**。

```css
.box {
  background-image: 
    linear-gradient(
      to bottom,
      rgba(255, 255, 0, 0.5),
      rgba(0, 0, 255, 0.5)
    ),
    url("catfront.png");
}
```

## background-attachment

- `fixed`：背景图像相对于视口（viewport）固定。
- `scroll`：背景图像相对于元素固定，也就是说当元素内容滚动时背景图像不会跟着滚动，因为背景图像总是要跟着元素本身。但会随元素的祖先元素或窗体一起滚动。
- `local`：背景图像相对于元素内容固定，也就是说当元素随元素滚动时背景图像也会跟着滚动，因为背景图像总是要跟着内容。

## background-origin

- `border-box`：从 border 区域（含border）开始显示背景图像。
- `padding-box`：从 padding 区域（含padding）开始显示背景图像。
- `content-box`：从 content 区域开始显示背景图像。

## background-clip

`border-box`：从 border 区域（含border）开始向外裁剪背景。
`padding-box`：从 padding 区域（含padding）开始向外裁剪背景。
`content-box`：从 content 区域开始向外裁剪背景。
`text`：文字。

<iframe height="300" style="width: 100%;" scrolling="no" title="background-clip" src="https://codepen.io/vfanlee/embed/preview/NWExWYr?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/vfanlee/pen/NWExWYr">
  background-clip</a> by Vfan Lee (<a href="https://codepen.io/vfanlee">@vfanlee</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## 参阅

- [MDN background](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background)
