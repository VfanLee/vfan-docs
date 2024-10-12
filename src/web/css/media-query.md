# 媒体查询

## 语法

```css
@media mediatype and (media feature) {
  /* 应用于特定设备属性的样式 */
}
```

mediatype：

- all：适用于所有设备类型。
- print：适用于打印机和打印预览模式。
- screen：适用于电脑屏幕、平板电脑、智能手机等。
- speech：适用于屏幕阅读器。

media feature：

- width：设备的宽度。
- height：设备的高度。
- orientation：设备的方向（横向或纵向）。
- aspect-ratio：设备的宽高比。
- resolution：设备的分辨率。

## 示例

```css
/* 当屏幕宽度小于 600 像素时应用此样式 */
@media screen and (max-width: 600px) {
}

/* 当屏幕宽度大于等于 600 像素且小于 1200 像素时应用此样式 */
@media screen and (min-width: 600px) and (max-width: 1199px) {
}

/* 当屏幕宽度大于等于 1200 像素时应用此样式 */
@media screen and (min-width: 1200px) {
}
```

## 参考资料

- <https://www.bilibili.com/video/BV1aW4y17756/?vd_source=364ce5b503689664fbed54b2d26e0ba2>
