# `<script>` 标签加载顺序

> - [Example Demo](https://github.com/VfanLee/vfan-docs/tree/main/examples/defer_async_module)

type=module 默认异步

如果同时使用 async 和 defer，async 会覆盖 defer，即脚本将异步加载并在下载完成后立即执行。
