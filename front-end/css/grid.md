# Grid 布局

> 参见：[MDN Grid 布局](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)

## 容器

网格定义与合并

- `grid-template-rows`：基于网格【行】的维度，去定义网格线的名称和网格轨道的尺寸大小。
- `grid-template-columns`：基于网格【列】的维度，去定义网格线的名称和网格轨道的尺寸大小。
- `grid-template-areas`：使用命名的方式定义网格区域，需配合项目的 `grid-area` 属性进行使用。
- `grid-template`：`grid-template-rows` `grid-template-columns` `grid-template-areas` 的简写形式。

```
grid-template-rows: 100px 200px 100px;
grid-template-rows: 1fr 2fr 1fr;

grid-template-rows: repeat(3, 100px);
grid-template-rows: repeat(3, 1fr);

grid-template-rows 100px minmax(100px, 3fr) 100px;

// 设置网格名称
grid-template-areas:
  'header header'
  'main aside'
  'footer footer';

// 换行
grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
```

网格间隙

> `grid-row-gap`、`grid-column-gap`、`grid-gap` 已被淘汰！下列属性不仅限于 grid 网格布局。

- `row-gap`：每一【行】之间的间距。
- `column-gap`：每一【列】之间的间距。
- `gap`：`row-gap` `column-gap` 的简写形式。

网格对齐方式

- `align-items`：【每个】单元格【垂直】方向对齐方式。
- `justify-items`：【每个】单元格【水平】方向对齐方式。
- `place-items`：`align-items` `justify-items` 的简写形式。
- `align-content`：【所有单元格】在当前容器内的【垂直】方向对齐方式。
- `justify-content`：【所有单元格】在当前容器内的【水平】方向对齐方式。
- `place-content`：[align-content justify-content] 的简写形式。

显式网格与隐式网格

- `grid-auto-flow`：控制着自动布局算法怎样运作，精确指定在网格中被自动布局的元素怎样排列。
- `grid-auto-rows`：指定隐式创建的行轨道大小。
- `grid-auto-columns`：指定隐式创建的列轨道大小。

## 子项

基于线的元素放置

- `grid-row-start`：表示grid子项【水平方向】所占据的区域的【起始】位置。
- `grid-row-end`：表示grid子项【水平方向】所占据的区域的【终止】位置。
- `grid-row`：`grid-row-start` / `grid-row-end` 的简写形式。
- `grid-column-start`：表示 grid 子项【垂直方向】所占据的区域的【起始】位置。
- `grid-column-end`：表示 grid 子项【垂直方向】所占据的区域的【终止】位置。
- `grid-column`：`grid-column-start` / `grid-column-end` 的简写形式。
- `grid-area`：`grid-row-start` / `grid-column-start` / `grid-row-end` / `grid-column-end` 的简写形式。以及额外支持 `grid-template-areas` 设置的网格名称。

```
grid-row: 1 / 3;
grid-row: span 2;

// 使用定义的网格名称来填充大小
.item1 {
  grid-area: header;
}

.item2 {
  grid-area: aside;
}

.item3 {
  grid-area: main;
}

.item4 {
  grid-area: footer;
}
```

子项对齐方式

> 用法类似于 `place-items`，只不过是操作指定子项

- `justify-self`
- `align-self`
- `place-self`
