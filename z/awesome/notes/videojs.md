# Video.js

> 参考文档：https://videojs.com  
> 版本：v8

## 基本使用

### CDN

在线预览：  
项目地址：

### vue

```bash
npm i video.js
```

```vue
<script setup>
import { onMounted } from 'vue'
import videojs from 'video.js'
import 'video.js/dist/video-js.css'

const videoPlayerRef = ref()

onMounted(() => {
  videojs(
    videoPlayerRef.value,
    {
      controls: true, // 交互控件
      autoplay: false, // 立即播放
      loop: true, // 循环播放
      muted: false, // 静音
      aspectRatio: '16:9', // 比例
      playbackRates: [0.5, 1, 1.5, 2, 3, 4], // 速率
      // poster: '', // 封面
    },
    function () {
      this.src('https://d2zihajmogu5jn.cloudfront.net/big-buck-bunny/master.m3u8')
    }
  )
})
</script>

<template>
  <video class="video-js" ref="videoPlayerRef"></video>
</template>
```

## 配置选项

> 配置参考：https://videojs.com/guides/options/

```js
{
  controls: true, // 交互控件
  autoplay: true, // 立即播放
  loop: true, // 循环播放
  muted: true, // 静音
  aspectRatio: '16:9', // 比例
  playbackRates: [0.5, 1, 1.5, 2, 3, 4], // 速率
  poster: 'http://example.com', // 封面
}
```
