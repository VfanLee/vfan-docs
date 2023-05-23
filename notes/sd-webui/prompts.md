# Prompts 提示词

提示词支持的输入语言为英语。

正向提示词 (Prompt) 告诉AI要生成哪些东西。

负向提示词 (Negative prompt) 告诉AI不要生成哪些东西。

SD 支持用自然语言描述，不过还是推荐使用 tag 语法来书写。

## 书写顺序

### 正向提示词

```txt
图片质量 >>
(best quality: 1.21), (high quality), game cg, official wallpaper, 

画面主体 >>
1girl, pink | blue hair, long hair, white cat ears, happy, 

画面环境 >>
indoors, sunlight, 

杂项 >>
Lora 触发词
```

### 反向提示词

```txt
bad anatomy, bad hands, missing fingers, blurry, missing arms, Humpbacked, missing limb, too many fingers, mutated, poorly drawn, out of frame, bad hands, unclear eyes, cloned face, bad face, 
```

## Tag 语法

### 分隔

不同的关键词 tag 之间，需要使用英文逗号 `,` 分隔，逗号前后有空格或者换行是没关系的。

ex：`1girl, long hair`（1个女孩，长发）

### 混合

WebUi 使用 `|` 分隔多个关键词，实现混合多个要素，注意混合是同等比例混合，同时混。

ex: `1girl, red|blue hair, long hair`（1个女孩，红色与蓝色头发混合，长发）

### 权重

#### 写法1

`(提示词:权重数值)`：数值从 `0.1 ~ 100`，默认状态是 `1`，低于 `1` 就是减弱，大于 `1` 就是加强。

ex: `(best quality: 1.21)`

#### 写法二

- `(((提示词)))`：每套一层 `()` 括号增强 `1.1` 倍。
- `[[[提示词]]]`：每套一层 `[]` 减弱 `1.1` 倍。

ex: `(best quality), [official wallpaper],`

## 渐变

比较简单的理解时，先按某种关键词生成，然后再此基础上向某个方向变化。
`[关键词1:关键词2:数字]`，数字大于 1 理解为第 X 步前为关键词 1，第 X 步后变成关键词 2，数字小于 1 理解为总步数的百分之 X 前为关键词 1，之后变成关键词 2。

ex: `[ pink:blue:0.4] hair,`

## 交替

轮流使用关键词。

ex：`[pink|blue] hair,`。
