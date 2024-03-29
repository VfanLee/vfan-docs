# SEO 技巧

## 什么是 SEO？

SEO（搜索引擎优化）是一种通过改进网站结构、内容和链接，以及优化其他因素，来提高网站在搜索引擎中排名的技术和过程。其目标是使网站在搜索引擎结果页（SERP）中获得更高的可见性，吸引更多的有针对性的流量。通过优化网站，使其更符合搜索引擎算法的要求，可以提高网站在相关搜索中的排名，从而增加有意义的访问量。

## 标题优化

在每个页面的 `<head>` 标签中使用恰当的 `<title>` 标签，确保标题具有描述性和关键字。

```html
<head>
  <title>优化标题 - 示例网站</title>
  <!-- 其他标签... -->
</head>
```

## meta 描述优化

- 使用 meta description 来准确概括总结网页内容。我们应避免内容中出现关键词的堆砌、描述过长、描述过于笼统简单，如直接拷贝关键词或正文内容、或“这是一个网页”这种没有实际性意义的描述等现象。
- 使用 meta keywords 来提取网页重要关键字。

```html
<head>
  <meta name="description" content="这是一个示例网站，提供优化标题的前端SEO实操技巧。">
  <meta name="keywords" content="SEO,搜索引擎优化,网页排名优化">
  <!-- 其他标签... -->
</head>
```

## Header 结构优化

使用合适的 HTML 标题标签（h1、h2、h3等）来呈现内容结构，有助于搜索引擎理解页面主题。

```html
<h1>优化标题 - 示例网站</h1>
<h2>前端SEO实操技巧</h2>
<p>这是关于如何优化标题的前端SEO实操技巧的示例页面。</p>
```

## 网站 Logo

搜索引擎是识别文字，而不识别图片的。但是有很多地方，我们为了美观需求，又必须去用图片。以网站 logo 为例：

```html
<h1>
  <a class="logo_title" href="//www.example.com">品牌名</a>
</h1>
```

```css
.logo_title {
  background-image: url(//品牌Logo.png);
}
```

## 使用语义化元素

在合适的位置使用合适的元素表达合适的内容，让用户和爬虫能一目了然文档结构。例如使用 `<h1>` 可以让爬虫知道这是很重要的内容。然而，值得注意的是，例如在想要表达强调时，我们不应该滥用标题元素或者 `<b>` 、 `<i>` 这种没有实际意义的标签，换而可以使用 `<em>` 或 `<strong>` 来表示强调。此外， `<h1>` 的权重比 `<h2>` 的大，我们不应该为了增大权重而去滥用 `<h1>`，一般来说 `<h1>` 用于正文的标题。

## 图像优化

> `<img>` 标签的 `alt` 属性可以在图片未成功加载的时候，使用文本代替图片。

- 使用描述性文件名和 `alt` 属性。使爬虫可以获取到这个图片的信息，此外它还可以解决浏览器禁用图像或屏幕阅读器解析等问题。
- 压缩图像大小来提高页面加载速度。
- 如果不为 `<img>` 定义宽高，那么会引起页面重新渲染，同样也会影响加载速度。

```html
<img src="优化标题.jpg" alt="优化标题的示例图像">
```

## 友好的 URL 结构

使用简洁、描述性的 URL，包含关键字。

```html
<a href="/seo-tips/优化标题">优化标题 - 示例网站</a>
```

## 移动友好（响应式设计）

确保网站在各种设备上都有良好的用户体验，适应不同屏幕尺寸。

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

## 页面加载速度优化

一旦加载超时，爬虫就会放弃爬取。所以我们需要：

- 尽量让 HTML、CSS、JavaScript 三者分离。
- 压缩 CSS、JS 文件，提高加载速度。

## 结构化数据（Schema Markup）

使用结构化数据标记来标识页面元素，帮助搜索引擎更好地理解内容。

```html
<script type="application/ld+json">
  {
    "@context": "http://schema.org",
    "@type": "Article",
    "headline": "优化标题 - 示例网站",
    "description": "这是关于如何优化标题的前端SEO实操技巧的示例页面。",
    "image": "优化标题.jpg",
    "author": {
        "@type": "Person",
        "name": "Your Name"
    }
  }
</script>
```

## 设置 `rel='nofollow'` 忽略跟踪

如果某个 `<a>` 的链接不需要跟踪，那么添加 `rel='nofollow'` 即可通知爬虫忽略跟踪。因为爬虫分配到每个页面的权重是一定的，为了集中网页权重并将权重分给其他必要的链接，为不必跟踪的链接添加这个属性就显得很必要了。
