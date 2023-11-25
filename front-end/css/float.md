# float 浮动

> 参考：[MDN float](https://developer.mozilla.org/zh-CN/docs/Web/CSS/float)

## 浮动特性

1. 浮动会脱离文档流。
2. 只会影响后面的元素。
3. 文本不会被浮动元素覆盖。
4. 具备行盒特性：宽度由内容决定。
5. 具备块盒特性：支持所有样式，如：width、height。
6. 浮动元素过多，会自动换行。

## 清除浮动

> 为什么要清除浮动？
>
> - 如果子元素浮动了，此时子元素不能撑开标准流的块级父元素，即脱离标准流。
> - 若如果父盒子本身有高度，则不需要清除浮动。
> - 清除浮动之后，父级就会根据浮动的子盒子自动检测高度，此时父级有了高度，就不会影响下面的标准流了。

清除浮动方案：

1. 直接设置父元素高度。
2. 在父元素内容的最后添加一个块盒，给该块盒设置 `clear: both`。
3. 父级添加 `overflow: hidden`，巧用 BFC。
4. 父级添加单伪元素，如下：

    ```css
    .clearfix::after {
      content: '';
      display: block;
      clear: both;
      /* 兼容性 */
      height: 0;
      visibility: hidden;
    }
    ```

5. 父级添加双伪元素，如下：

    ```css
    /* ::before 作用是为了解决外边距塌陷问题 */
    .clearfix::before,
    .clearfix::after {
      content: '';
      display: table;
    }
    .clearfix::after {
      clear: both;
      /* 兼容性 */
      height: 0;
      visibility: hidden;
    }
    ```
