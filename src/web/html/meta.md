# `<meta>` 元数据

> [meta - MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/meta)

## `charset`

该属性声明了文档的字符编码。如果存在该属性，则其值必须是字符串 "utf-8" 的不区分 ASCII 大小写的匹配，因为 UTF-8 是 HTML5 文档的唯一有效编码。声明字符编码的 `<meta>` 元素必须完全位于文档的前 1024 个字节内。

## `name`

> [metadata names](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/meta/name)

- author：文档作者的名字.
- description：一段简短而精确的、对页面内容的描述。
- generator：生成此页面的软件的标识符（identifier）。
- keywords：与页面内容相关的关键词，使用逗号分隔。
- referrer：控制由当前文档发出的请求的 HTTP Referer 请求头。
- viewport: 为视口的初始大小提供指示（hint）。目前仅用于移动设备。

### `name="viewport"`

元视口（meta viewport）是 HTML 文档中的一个元标签，用于控制网页在移动设备上的显示方式。它可以告诉浏览器如何调整网页的大小和缩放比例，以适应不同的屏幕尺寸。

`name="viewport"` 的语法如下：

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

> 该示例告诉浏览器将视口的宽度设置为设备的宽度，并将初始缩放比例设置为 1.0。这意味着网页将以与设备屏幕宽度相同的宽度显示，并且不会进行任何缩放。

其中：

- `name` 属性的值必须为 `viewport`。
- `content` 属性的值是一个空格分隔的字符串，可以包含以下参数：

  - `width`：参数用于指定视口的宽度。如果省略该参数，则视口的宽度将默认为设备的宽度。
  - `initial-scale`：参数用于指定初始缩放比例。如果省略该参数，则初始缩放比例将默认为 1.0。
  - `minimum-scale`：参数用于指定允许用户缩小的最小比例。如果省略该参数，则允许用户缩小到任意比例。
  - `maximum-scale`：参数用于指定允许用户放大的最大比例。如果省略该参数，则允许用户放大到任意比例。
  - `user-scalable`：参数用于指定是否允许用户缩放。如果该参数设置为 `yes`，则允许用户缩放网页；如果设置为 `no`，则禁止用户缩放网页。

#### 最佳实践

对于大多数网页，建议使用以下元视口设置：

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

该设置可以确保网页在所有设备上都能获得最佳的显示效果。

如果您需要对网页进行缩放，可以使用 `minimum-scale` 和 `maximum-scale` 参数来控制缩放范围。例如，以下设置将允许用户将网页缩小到 0.5 倍，放大到 2.0 倍：

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=0.5, maximum-scale=2.0">
```

如果您需要禁止用户缩放网页，可以使用 `user-scalable` 参数将其设置为 `no`：

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
```

[viewport meta tag](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Viewport_meta_tag)

## `http-equiv`

`http-equiv` 属性定义了一个编译指示指令。这个属性叫做 http-equiv(alent) 是因为所有允许的值都是特定 HTTP 标头的名称，如下：

- `content-security-policy`：允许页面作者定义当前页面的内容策略。内容策略常用来指定允许的服务器源和脚本端点，这有助于防止跨站点脚本攻击。
- `content-type`：声明 MIME 类型和文档的字符编码。如果使用 content-type 属性，与之在同一个 `<meta>` 元素中使用的 content 属性的值必须是 "text/html; charset=utf-8"。这相当于一个具有指定 charset 属性的 `<meta>` 元素，并对其在文档中的放置位置有相同的限制。注意：该属性只能用于 MIME 类型为 text/html 的文档，不能用于 MIME 类型为 XML 的文档。
- `default-style`：设置默认 CSS 样式表组的名称。
- `x-ua-compatible`：如果指定，则 content 属性必须具有值 "IE=edge"。用户代理必须忽略此指示。
- `refresh`：这个属性指定：
  - 页面重新加载的秒数——仅当 content 属性包含非负整数时。
  - 页面重定向到指定链接的秒数——仅当 content 属性包含非负整数后跟字符串“;url=”和有效的 URL 时。

### `http-equiv="refresh"`

`meta http-equiv="refresh"` 是 HTML 文档中的一个元标签，用于控制网页的刷新或跳转。

`meta http-equiv="refresh"` 语法如下：

```html
<meta http-equiv="refresh" content="seconds; url=URL">
```

其中：

- `http-equiv` 属性的值必须为 `refresh`。
- `content` 属性的值是一个空格分隔的字符串，可以包含以下参数：
  - `seconds`：刷新或跳转的等待时间，以秒为单位。
  - `url`：要跳转到的 URL。

#### 最佳实践

> - 尽量避免使用 `meta http-equiv="refresh"` 来刷新页面，因为它可能会导致用户体验不佳。
>   - `meta http-equiv="refresh"` 可能会被一些浏览器忽略。
>   - `meta http-equiv="refresh"` 可能会导致 SEO 问题。
> - 如果需要刷新页面，请使用 JavaScript 来实现，以便提供更好的用户体验。
> - 如果需要跳转到其他页面，请使用 `<a>` 标签或 JavaScript 来实现。

每 5 秒钟刷新一次当前页面：

```html
<meta http-equiv="refresh" content="5">
```

以下示例将在 2 秒钟后跳转到 `https://www.google.com/`：

```html
<meta http-equiv="refresh" content="2; url=https://www.google.com/">
```
