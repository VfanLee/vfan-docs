# Grid

> [Grid](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)

## 1. Grid

通过在元素上声明 `display：grid` 或 `display：inline-grid` 来创建一个网格容器。

## 2. `grid-template-rows` 和 `grid-template-columns`

- `grid-template-rows`：基于网格【行】的维度，去定义网格线的名称和网格轨道的尺寸大小。
- `grid-template-columns`：基于网格【列】的维度，去定义网格线的名称和网格轨道的尺寸大小。

## 3. 基于线的定位

### 3.1. 使用线编号定位元素

```css
.box1 {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 4;
}
.box2 {
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3;
}
.box3 {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
}
.box4 {
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 3;
  grid-row-end: 4;
}
```

### 3.2. `grid-column` 和 `grid-row`

`grid-column` 值的顺序如下：

- `grid-column-start`
- `grid-column-end`

`grid-row` 值的顺序如下：

- `grid-row-start`
- `grid-row-end`

```css
.box1 {
  grid-column: 1 / 2;
  grid-row: 1 / 4;
}
.box2 {
  grid-column: 3 / 4;
  grid-row: 1 / 3;
}
.box3 {
  grid-column: 2 / 3;
  grid-row: 1 / 2;
}
.box4 {
  grid-column: 2 / 4;
  grid-row: 3 / 4;
}
```

### 3.3. 默认跨度

实际上如果一个元素只延伸一个轨道的话，你可以省略 `grid-column-end` 或 `grid-row-end` 值。元素默认延伸一个轨道。

```css
.box1 {
  grid-column: 1;
  grid-row: 1 / 4;
}
.box2 {
  grid-column: 3;
  grid-row: 1 / 3;
}
.box3 {
  grid-column: 2;
  grid-row: 1;
}
.box4 {
  grid-column: 2 / 4;
  grid-row: 3;
}
```

### 3.4. `grid-area` 属性

`grid-area` 值的顺序如下：

- `grid-row-start`
- `grid-column-start`
- `grid-row-end`
- `grid-column-end`

```css
.box1 {
  grid-area: 1 / 1 / 4 / 2;
}
.box2 {
  grid-area: 1 / 3 / 3 / 4;
}
.box3 {
  grid-area: 1 / 2 / 2 / 3;
}
.box4 {
  grid-area: 3 / 2 / 4 / 4;
}
```

### 3.5. 反方向计数

可以从行和块结束线开始反方向计数，对于英语来说就是右端的列线和底端的行线。这些线会被记为 -1，然后你可以从这往前数，所以倒数第 2 条线会被记为 -2。

```css
.box1 {
  grid-column-start: -1;
  grid-column-end: -2;
  grid-row-start: -1;
  grid-row-end: -4;
}
.box2 {
  grid-column-start: -3;
  grid-column-end: -4;
  grid-row-start: -1;
  grid-row-end: -3;
}
.box3 {
  grid-column-start: -2;
  grid-column-end: -3;
  grid-row-start: -1;
  grid-row-end: -2;
}
.box4 {
  grid-column-start: -2;
  grid-column-end: -4;
  grid-row-start: -3;
  grid-row-end: -4;
}
```

#### 3.5.1. 使元素跨越整个网格

拥有从开始计数和从末尾计数这两种定位方法使得使一个元素跨越整个网格变得很方便：

```css
.item {
  grid-column: 1 / -1;
}
```

### 3.6. 使用 span 关键字

```css
.box1 {
  grid-column: 1;
  grid-row: 1 / span 3;
}
.box2 {
  grid-column: 3;
  grid-row: 1 / span 2;
}
.box3 {
  grid-column: 2;
  grid-row: 1;
}
.box4 {
  grid-column: 2 / span 2;
  grid-row: 3;
}
```

## 4. 自动定位

- `grid-auto-flow`：控制着自动布局算法怎样运作，精确指定在网格中被自动布局的元素怎样排列。默认值为 `row`。
- `grid-auto-rows`：指定隐式创建的行轨道大小。
- `grid-auto-columns`：隐式创建的网格纵向轨道（track）的宽度。

## 5. `minmax()`

`minmax()`：定义了一个长宽范围的闭区间。

## 6. `repeat()`

`repeat()`：表示轨道列表的重复片段，允许以更紧凑的形式写入大量显示重复模式的列或行。

- `repeat(number)`：创建具有指定定义的固定数量的轨道。
- `repeat(auto-fill)`：指示浏览器根据定义的轨道大小和可用空间尽可能多地填充网格容器中的轨道（列或行）。如果有额外的空间，它将按比例分配给轨道。如果内容没有完全填充容器，可能会创建空轨道。
- `repeat(auto-fit)`：指示浏览器根据定义的轨道大小尽可能多地创建轨道以适合网格容器。如果必要，轨道可以缩小以容纳所有内容。与 `auto-fill` 不同，它不会创建空轨道。

## 7. gap 间距

> [gap](https://developer.mozilla.org/zh-CN/docs/Web/CSS/gap)

<iframe width="100%" height="400" src="https://interactive-examples.mdn.mozilla.net/pages/css/gap.html" loading="lazy"></iframe>

## 8. 命名线布局

### 8.1. `grid-template-areas`

<iframe width="100%" height="400" src="https://interactive-examples.mdn.mozilla.net/pages/css/grid-template-areas.html" loading="lazy"></iframe>

### 8.2. `grid-area`

<iframe width="100%" height="400" src="https://interactive-examples.mdn.mozilla.net/pages/css/grid-area.html" loading="lazy"></iframe>

## 9. 盒模型对齐

### 9.1. 对齐元素到块轴

- `align-items`：定义容器中所有子元素的垂直对齐方式。
- `align-self`：定义单个子元素的垂直对齐方式。

### 9.2. 对齐元素到行轴

- `justify-items`：定义容器中所有子元素的水平对齐方式。
- `justify-self`：定义单个子元素的水平对齐方式。

### 9.3. `place-items` 和 `place-self`

- `place-items` 是 `align-items` 和 `justify-items` 的简写。
- `place-self` 是 `align-self` 和 `justify-self` 的简写。

### 9.4. 对齐网格轨道到块轴

`align-content`：定义网格容器中所有网格轨道的垂直对齐方式。

### 9.5. 对齐网格轨道到行轴

`justify-content`：定义网格容器中所有网格轨道的水平对齐方式。
