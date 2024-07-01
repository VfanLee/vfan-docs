# `<DOCTYPE>` 文档类型声明

> [Doctype - MDN](https://developer.mozilla.org/zh-CN/docs/Glossary/Doctype)

在 HTML 中，DOCTYPE 是文档类型声明（Document Type Declaration）的缩写。它是一种指示浏览器使用哪个 HTML 或 XHTML 规范解析页面的标签，以确保文档能够正确显示的声明。

DOCTYPE 通常放置在HTML文档的顶部，位于`<html>`标签之前。它的基本语法如下：

```html
<!DOCTYPE html>
```

这个例子中的 DOCTYPE 声明告诉浏览器使用 HTML5 规范来解析文档。不同的 HTML 版本有不同的 DOCTYPE 声明，用于指定相应的文档规范。

DOCTYPE 的作用包括：

1. **确保正确解析：** DOCTYPE 声明有助于浏览器正确地解析和渲染文档，以避免可能的兼容性问题。

2. **触发标准模式：** DOCTYPE 声明有助于触发浏览器的标准模式，确保页面按照规范的方式进行渲染。在标准模式下，浏览器更严格地按照规范来解释和渲染页面，而不是在混杂模式下容忍一些旧版本的 HTML 代码。

3. **确保一致性：** 使用正确的 DOCTYPE 可以帮助确保不同浏览器对文档的解释一致，从而提高跨浏览器兼容性。
