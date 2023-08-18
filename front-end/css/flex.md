# flex 布局

> 参见：[MDN Flex 布局](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)

## 开启 flex

容器设置`display: flex`/`display: inline-flex`即可。

## 主轴方向

> flex-direction 决定主轴的方向，默认 row。

- row：主轴为水平方向，从左到右。
- row-reverse：主轴为水平方向，从右到左。
- column：主轴为垂直方向，从上到下。
- column-reverse：主轴为垂直方向，从下到上。

## 多行容器

> flex-wrap 如果一条轴线排不下，如何换行，默认 nowrap。

- nowrap：不换行。
- wrap：换行，溢出后向下排列
- wrap-reverse：和 wrap 的行为一样，但是 cross-start 和 cross-end 互换

## flex-flow 缩写

[flex-direction](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-direction) 和 [flex-wrap](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-wrap)——的缩写 [flex-flow](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-flow)

```css
flex-direction: row;
flex-wrap: wrap;

/* 替换为 */
flex-flow: row wrap;
```

## 主轴对齐方式

> justify-content 改变主轴（main axis）的对齐方式，默认 normal。

- center：居中
- flex-start：左对齐
- flex-end：右对齐
- space-between：均匀排列每个元素，首个元素放置于起点，末尾元素放置于终点
- space-around：均匀排列每个元素，每个元素周围分配相同的空间
- space-evenly：均匀排列每个元素，每个元素之间的间隔相等

## 交叉轴对齐方式

> align-items 定义“每一行的主轴线”在交叉轴上的对齐方式，默认 normal。

- stretch：如果项目未设置高度或设为auto，将占满整个容器的高度。
- flex-start：交叉轴的起点对齐。
- flex-end：交叉轴的终点对齐。
- center：交叉轴的中点对齐。
- baseline: 项目的第一行文字的基线对齐。

## 交叉轴对齐方式【多行容器】

> align-content 定义“多行容器”中，**多行项目** 在交叉轴对对齐方式
> ，默认 normal。

- stretch：轴线占满整个交叉轴。
- flex-start：与交叉轴的起点对齐。
- flex-end：与交叉轴的终点对齐。
- center：与交叉轴的中点对齐。
- space-between：均匀分布项目，第一项与起始点齐平，最后一项与终止点齐平。
- space-around：均匀分布项目，项目在两端有一半大小的空间。
- space-evenly：均匀分布项目，项目周围有相等的空间。

## 子项间隔

> gap 子项之间的间隔

# 子项

## 某个项目的对齐方式
> align-self 属性允许『某一个项目』有与『其他项目』不一样的对齐方式，可覆盖 align-items 属性。

align-self: auto | flex-start | flex-end | center | baseline | stretch;

- auto（默认值）：表示继承父元素的align-items属性，如果没有父元素，则等同于stretch
- 除了auto，其他值与align-items属性完全一致。

## 排序

> order 定义项目的排列顺序。数值越小，排列越靠前.

- 0（默认值）

## 放大比例

> flex-grow 定义项目的放大比例，即分配剩余空间比例，默认 0。

- 0：如果存在剩余空间，也不放大。
- 1：占满剩余空间。当有多个子项时，等比分配剩余空间。

## 缩小比例

> flex-shrink 定义项目的收缩比例，默认 1。

- 1：如果空间不足，该项目将随着容器大小进行自动收缩。当有多个项目时，会根据自身大小进行等比收缩。
- 0：即使溢出，也不进行收缩。

## 项目基准

> flex-basis 定义了在分配多余空间之前，项目占据的〖主轴空间〗，且优先级大于width | height。
> - 如果主轴方向为横轴，那么就类似于width。
> - 如果主轴方向为纵轴，那么就类似于height。

- auto（默认值）：即项目的本来大小。

## flex 缩写

[flex-grow](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-grow)、[flex-shrink](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-shrink)、[flex-basis](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-basis)——的缩写[flex](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex)

```css
flex-grow: 0;
flex-shrink: 1;
flex-basis: 200px;

/* 替换为 */
flex: 0 1 200px;
```

> - 0 (0 1 0%)
> - 1 (1 1 0%)
> - auto (1 1 auto)
> - none (0 0 auto)

## `flex: 1` `width: 0`

flex:1;
width:0;
flex:1=flex-grow:1 flex-shrink:1 flex-basis:0%;
当flex设置为 1 时 相当于剩余空间大小 = 父元素的宽度
如果没有设置width,
当元素的内容大小超过平均分配的剩余空间时,元素的宽度等于内容大小，此时flex的元素宽度表现会出现非预期的比例效果;
如果设置了width并且这个width的大小小于平均分配的剩余空间大小时,则会平均分配的剩余空间;
因此平均的剩余空间大小等于 = 父元素的宽度 / 元素的个数
所以直接设置width为0可以保证元素宽度平分父元素宽度。
flex: 1; width: 0; 这种方式还能用来预防iframe 滚动条。
