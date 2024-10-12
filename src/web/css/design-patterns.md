# CSS 设计模式

## OOCSS

采用面向对象的思想来编写 CSS 代码，使页面结构更加清晰。

1. 容器与内容分离
2. 结构（基础对象）与皮肤分离
3. 面向设计开发

## BEM

[BEM](https://en.bem.info/) 是 CSS 一种命名规范，编写起来可以理解为“进阶版OOCSS”，使页面结构更加清晰。

BEM：
- 块（Block）
- 元素（Element `__`）
- 修饰符（Modifier `--`）

## SMACSS

[SMACSS](https://github.com/jeffwcx/translate-smacss-zh) 提供一种分类的思想。分类思想使 CSS 代码更易于扩展与维护。
推荐 5 种分类，但不限制于5种，如下：

- Base：浏览器基础样式重置与元素定制化，如：reset.css、normalize.css …… a、input ……
- Layout（l-header）：整体布局样式
- Modules：整个网站可复用模块的样式
- State（.is-hidden）：管理模块不同状态的样式
- Theme（.theme-nav）：整个网站的多个皮肤样式

## ITCSS

[ITCSS](https://github.com/ahmadajmi/awesome-itcss) 提供一种分层的思想，下一层 永远继承 上一层，即层级越低，权重越高。分层思想使 CSS 代码更易于扩展与维护。
推荐 7 层，但不限制于 7 层，如下：

1. Settings：整个网站的样式变量
2. Tools：维护样式的类似于工具的样式，如：文字省略、清除浮动 ……
3. Generic：浏览器默认样式重置
4. Base：默认元素样式定制化，如：a、input ……
5. Object：组件样式开发
6. Components：组件样式开发
7. Trumps：最高权重的样式代码

## ACSS

> acss 最佳实践示例：<https://tailwindcss.com/docs/aspect-ratio>

一个样式属性一个类，使代码具有极强的维护性和复用性，但带来的代价就是破坏了 CSS 的命名语义化（违背 BEM）。

```html
<style>
  .fl { float: left; }
  .fr { float: right; }
  .m20 { margin: 20px; }
</style>

<!-- 破坏 class的语义化 -->
<div class="box fl m20">
  <img class="box__img fr"></img>
</div>
```

解决方案一：采用属性选择器

```html
<style>
  [fl] { float: left; }
  [fr] { float: right; }
  [m20] { margin: 20px; }
</style>

<div class="box" fl m20>
  <img class="box__img" fr></img>
</div>
```

## 小结

1. SMACSS 与 ITCSS 及其相似，核心思想都是将 CSS 文件进行分类 维护。所以在实际项目中，只要将其分类思想参透在项目中即可。
2. ACSS 与 ITCSS 中的“Settings”层非常类似！
  a. ACSS 更灵活，随时用于任意 HTML 标签。
  b. 而 ITCSS 中的“Settings”层，只适用于变量。
