# 资源预览

## 音频

> [`<audio>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/audio)

```html
<audio controls>
  <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3" type="audio/mp3" />
</audio>
```

## 视频

> - [`<video>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/video)

```html
<video controls>
  <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" type="video/mp4" />
</video>`
```

## 图像

> - [`<picture>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/picture)
> - [`<img>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/img)

```html
<picture>
  <source srcset="https://interactive-examples.mdn.mozilla.net/media/cc0-images/surfer-240-200.jpg" media="(orientation: portrait)" />
  <img src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/painted-hand-298-332.jpg" alt="" />
</picture>
```

## pdf.js

> [pdf.js v4.0.x](https://github.com/mozilla/pdf.js)

### 加载 pdf 文件

通过 `file` query 参数指定加载的 pdf 文件 url，如：`https://example.com/pdfjs/web/viewer.html?file=https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf`

### 开启跨域

在加载跨域 `.pdf` 时，你可能会看到 <span style="padding: 2px 4px; border-radius: 6px; background-color: #FCEBEB; color: #410E53">file origin does not match viewer's</span> 这个提示，若想开启跨域预览，仅需在 `viewer.mjs` 文件中注释掉跨域判断即可。如下：

```js
// if (fileOrigin !== viewerOrigin) {
//   throw new Error("file origin does not match viewer's");
// }
```

### 更改语言

默认情况下，`pdf.js` 会根据 `navigator.language` 来加载语言，若想手动更改语言，在 `viewer.js` 中更改即可，如下：

```js
defaultOptions.locale = {
  // value: navigator.language || "en-US",
  value: "zh-CN",
  kind: OptionKind.VIEWER
};
```
