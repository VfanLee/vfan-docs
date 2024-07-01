# 运行 JavaScript

如今的 JavaScript 不仅可以在浏览器中执行，也可以在服务端执行，甚至可以在任意搭载了 JavaScript 引擎 的设备中执行。

这里以浏览器为例，让我们看看如何将脚本添加到网页上。

::: tip
对于服务器端环境（如 `Node.js`），你只需要使用诸如 `node my.js` 的命令行来执行它。
:::

## `<script>` 标签

我们几乎可以使用 `<script>` 标签将 JavaScript 程序插入到 HTML 文档的任何位置。

比如：

```html{6-8}
<!DOCTYPE HTML>
<html>
<body>
  <p>script 标签之前...</p>

  <script>
    alert('Hello, world!');
  </script>

  <p>...script 标签之后</p>
</body>
</html>
```

`<script>` 标签中包裹了 JavaScript 代码，当浏览器遇到 `<script>` 标签，代码会自动运行。

## `<script>` 现代标记

### type 属性：`<script type=…>`

在老的 HTML4 标准中，要求 script 标签有 `type` 属性。通常是 `type="text/javascript"`。这样的属性声明现在已经不再需要。而且，现代 HTML 标准已经完全改变了此属性的含义。现在，它可以用于 JavaScript 模块。

### language 属性：`<script language=…>`

这个属性是为了显示脚本使用的语言。这个属性现在已经没有任何意义，因为语言默认就是 JavaScript。不再需要使用它了。

## 外部脚本

如果你有大量的 JavaScript 代码，我们可以将它放入一个单独的文件。脚本文件可以通过 `src` 属性（attribute）添加到 HTML 文件中。

```html
<script src="/path/to/script.js"></script>
```

这里，`/path/to/script.js` 是脚本文件从网站根目录开始的绝对路径。

当然也可以提供当前页面的相对路径。例如，`src="script.js"`、`src="./script.js"`，表示当前文件夹中的 `script.js` 文件。

```html
<script src="/path/to/script.js"></script>
<script src="./path/to/script.js"></script>
```

我们也可以提供一个完整的 URL 地址，例如：

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js"></script>
```

要附加多个脚本，请使用多个标签：

```html
<script src="/js/script1.js"></script>
<script src="/js/script2.js"></script>
...
```

::: tip
一般来说，只有最简单的脚本才嵌入到 HTML 中。更复杂的脚本存放在单独的文件中。

使用独立文件的好处是浏览器会下载它，然后将它保存到浏览器的 **缓存** 中。

之后，其他页面想要相同的脚本就会从缓存中获取，而不是下载它。所以文件实际上只会下载一次。这可以节省流量，并使得页面（加载）更快。
:::

::: warning 如果设置了 `src` 属性，script 标签内容将会被忽略。

一个单独的 `<script>` 标签不能同时有 src 属性和内部包裹的代码。

这将不会工作：

```html
<script src="file.js">
  alert(1); // 此内容会被忽略，因为设定了 src
</script>
```

我们必须进行选择，要么使用外部的 `<script src="…">`，要么使用正常包裹代码的 `<script>`。

为了让上面的例子工作，我们可以将它分成两个 `<script>` 标签。

```html
<script src="file.js"></script>
<script>
  alert(1);
</script>
```

:::
