# 文生图/txt2img 参数详解

![txt2img](./assets/txt2img.png)

## Prompts 提示词

填入正向与负向提示词的字段。

## Sampling Methods 采样器

不同采样器得出的结果不太一样。

若要兼顾品质与速度，请优先试试：UniPC、DPM++ 2M Karras、Euler a。

## ampling Steps 采样步数

采样步数建议值至少为20，在使用 Euler a 和 UniPC 采样方法的时候就有很好效果。

相对的 DDIM 需要 80 以上的采样步数才会有好结果。

## Restore faces 脸部修复

使用脸部修复模型改善脸部生成效果。缺省使用 CodeFormer，可在 Settings 切换为GFPGAN。

## Tiling 无缝贴图

生成类似地板花纹一样可连续的图片。

## Hires_fix 高分辨率修复

可以提升图片的画质，但是会耗费更多 VRAM。

### Upscaler 高清化算法

要使用的放大器。

### Hires steps 高分辨率采样步数

高分辨率采样步数

### Denoising strength 重绘强度

重绘强度（降噪强度）。

### Upscale by 放大倍率

放大倍率。

## Width/Height 图片宽高

生成图片的宽高，尺寸越大品质越好，但越会吃掉更多 VRAM。

缺省宽高为 512x512，新版的可以试试 768x768。

## Batch count 生成次数

设置按左上角的Generate后要生成多少次的图片。

## Batch size 每次数量

设置按左上角的Generate后，一次生成内要算多少图片。通常要一次算多张图，调整Batch count就够了，Batch size的值维持为1。

## CFG Scale 提示词引导系数

CFG Scale 即 Classifier-free guidance scale

AI 生图与你给的提示词的相关度，数值越高越会按照你说的内容下去生图。

## Seed 图像生成种子

生成图片的种子码。将种子码保存下来有助于保留生图的风格。

点击骰子图标，设置成 -1 即为重置种子码；回收符号则是叫出上一次生图所使用的种子码。

## Extra

更多的种子选项。

### Variation seed

变异种子，规则和 seed 一致。

### Variation strength

变异种子和原种子的差异强度，为0时为原种子，为1时是新种子

### Resize seed from width / Resize seed from height

调整种子大小

## Scripts

加载用户撰写的指令稿。内置的有：

- `Prompt Matrix`：会生出一个表格图片，用于比对不同提示词生图的效果
- `Prompts from files or textbox`：从写好提示词的文件生成图片。
- `X/Y/Z plot`：用于比对不同提示词、采样方法、CFG Scale、种子码的组合所生图的效果。

## Generate

Generate 生图按钮。

下方 5 个按钮由左至依序为：

1. 呼出上次生图使用的设置值。
2. 清空提示词。
3. 激活额外网络。
4. 套用选中的风格。
5. 保存目前的提示词。接着下方的 Styles 列表即为保存的提示词。点击保存的提示词(可多选)，再点击上面的剪贴板图标，即会将该提示词组合加到左边的提示词字段。

## Result

生图结果区。

下方 6 个按钮由左至依序为：

1. 打开生图文件夹。
2. 保存图片。
3. ZIP压缩保存图片。
4. Send to img2img：将生图结果发送到 img2img 页面做进一步处理。
5. Send to inpaint：将生图结果发送到 img2img 页面的 inpaint 选项卡中做进一步处理。
6. Send to extras：将生图结果发送到 extras 页面做进一步处理。
