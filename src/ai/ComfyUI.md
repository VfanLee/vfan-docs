# ComfyUI

1. 下载 [ComfyUI](https://github.com/comfyanonymous/ComfyUI)
2. 安装 [语言包](https://github.com/AIGODLIKE/AIGODLIKE-ComfyUI-Translation) 至 `ComfyUI_windows_portable/ComfyUI/custom_nodes/` 目录下：
3. 下载 Flux 模型至 `ComfyUI_windows_portable/ComfyUI/models/unet/` 目录下，有四个可选：

    - [`FLUX.1 [dev]`](https://huggingface.co/black-forest-labs/FLUX.1-dev/tree/main)：官方版本满配版，最低显存要求24G；
    - [`FLUX.1 [dev] fp8`](https://huggingface.co/Kijai/flux-fp8/blob/main/flux1-dev-fp8.safetensors)：大佬优化 [dev] 后版本，建议选择此版本，最低 12G 显存可跑；
    - [`FLUX.1 [schnell]`](https://huggingface.co/black-forest-labs/FLUX.1-schnell/blob/main/flux1-schnell.safetensors)：4 步蒸馏模型，大多数显卡可跑。
    - [`FLUX.1 [schnell] fp8`](https://huggingface.co/Kijai/flux-fp8/blob/main/flux1-schnell-fp8.safetensors)：优化版本，适应更低的显卡配置。

4. 下载 [CLIP](https://huggingface.co/comfyanonymous/flux_text_encoders/tree/main) 模型至 `ComfyUI_windows_portable/ComfyUI/models/clip/` 目录下：

    - `clip_l.safetensors`
    - `t5xxl_fp16.safetensors` / `t5xxl_fp8_e4m3fn.safetensors`（如果你显存超过 32G 可选择 fp16 版本）

5. 下载 [AVE](https://huggingface.co/black-forest-labs/FLUX.1-schnell/blob/main/ae.safetensors) 模型至 `ComfyUI_windows_portable/ComfyUI/models/vae/` 目录下。
