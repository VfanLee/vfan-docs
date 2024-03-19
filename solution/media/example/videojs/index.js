// video.js：https://videojs.com/getting-started

const player = videojs(
  document.querySelector('#video-player'),
  {
    controls: true, // 交互控件
    autoplay: false, // 立即播放
    loop: false, // 循环播放
    muted: false, // 静音
    aspectRatio: '16:9', // 比例
    playbackRates: [0.5, 1, 1.5, 2, 3] // 速率
    // poster: '', // 封面
  },
  function () {
    this.src('https://d2zihajmogu5jn.cloudfront.net/big-buck-bunny/master.m3u8')
  }
)
