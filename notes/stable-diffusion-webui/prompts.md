# Prompts 提示词

提示词支持的输入语言为英语。

第一个框框是提示词 (Prompt) 告诉AI要生成哪些东西。

第二个框框是负向提示词 (Negative prompt) 告诉AI不要生成哪些东西。

## tag 语法

SD 支持用自然语言描述，不过还是推荐使用（tag 语法）用逗号分隔的一个个的关键词来写。

## 分隔

不同的关键词 tag 之间，需要使用英文逗号 `,` 分隔，逗号前后有空格或者换行是没关系的。

ex：`1girl,loli,long hair,low twintails`（1个女孩，loli，长发，低双马尾）

## 混合

WebUi 使用 | 分隔多个关键词，实现混合多个要素，注意混合是同等比例混合，同时混。

ex: `1girl,red|blue hair, long hair`（1个女孩，红色与蓝色头发混合，长发）

## 增强/减弱

### 写法1：`(提示词:权重数值)`

数值从 `0.1 ~ 100`，默认状态是 `1`，低于 `1` 就是减弱，大于 `1` 就是加强。

ex: `(loli:1.21),(one girl:1.21),(cat ears:1.1),(flower hairpin:0.9)`

### 写法二：`(((提示词)))`

每套一层 `()` 括号增强 `1.1` 倍，每套一层 `[]` 减弱 `1.1` 倍。也就是套两层是 `1.1*1.1=1.21` 倍，套三层是 `1.331` 倍，套4层是 `1.4641` 倍。

ex: `((loli)),((one girl)),(cat ears),[flower hairpin]`

## 渐变

比较简单的理解时，先按某种关键词生成，然后再此基础上向某个方向变化。
`[关键词1:关键词2:数字]`，数字大于 1 理解为第 X 步前为关键词 1，第 X 步后变成关键词 2，数字小于 1 理解为总步数的百分之 X 前为关键词 1，之后变成关键词 2。

ex: `girl with very long [white:yellow:16] hair` === 开始 `a girl with very long white hair`，16步之后 `a girl with very long yellow hair`

ex:`a girl with very long [white:yellow:0.5] hair` === 开始 `a girl with very long white hair`，50%步之后 `a girl with very long yellow hair`

## 交替

轮流使用关键词

ex：`[cow|horse] in a field` 比如这就是个牛马的混合物。
ex: `[cow|horse|cat|dog] in a field` 就是先朝着像牛努力，再朝着像马努力，再向着猫努力，再向着狗努力，再向着马努力。

## 示例

```txt
画质词>>
这个一般比较固定，无非是，杰作，最高画质，分辨率超级大之类的

风格词艺术风格词>>
比如是照片还是插画还是动画

图片的主题>>
比如这个画的主体是一个女孩，还是一只猫，是儿童还是萝莉还是少女，是猫娘还是犬娘还是福瑞，是白领还是学生

他们的外表>>
注意整体和细节都是从上到下描述，比如
发型（呆毛，耳后有头发，盖住眼睛的刘海，低双马尾，大波浪卷发），
发色（顶发金色，末端挑染彩色），
衣服（长裙，蕾丝边，低胸，半透明，内穿蓝色胸罩，蓝色内裤，半长袖，过膝袜，室内鞋），
头部（猫耳,红色眼睛），
颈部（项链），
手臂（露肩），
胸部（贫乳），
腹部（可看到肚脐），
屁股（骆驼耻），
腿部（长腿），
脚步（裸足）

他们的情绪>>
表述表情

他们的姿势>>
基础动作（站，坐，跑，走，蹲，趴，跪），
头动作（歪头，仰头，低头），
手动作（手在拢头发，放在胸前 ，举手），
腰动作（弯腰，跨坐，鸭子坐，鞠躬），
腿动作（交叉站，二郎腿，M形开腿，盘腿，跪坐），
复合动作（战斗姿态，JOJO立，背对背站，脱衣服）

图片的背景>>
室内，室外，树林，沙滩，星空下，太阳下，天气如何

杂项>>
比如NSFW，眼睛描绘详细
```

## 通用反向提示词

```txt
lowres,bad anatomy,bad hands,text,error,missing fingers,
extra digit,fewer digits,cropped,worst quality,
low quality,normal quality,jpeg artifacts,signature,
watermark,username,blurry,missing arms,long neck,
Humpbacked,missing limb,too many fingers,
mutated,poorly drawn,out of frame,bad hands,
unclear eyes,poorly drawn,cloned face,bad face
```
