const imageBtn = document.querySelector('.image-btn')
const videoBtn = document.querySelector('.video-btn')
const audioBtn = document.querySelector('.audio-btn')
const fileView = document.querySelector('.file-view')

const url = `https://interactive-examples.mdn.mozilla.net`

imageBtn.addEventListener('click', e => {
  fileView.innerHTML = ''
  const el = `
  <picture>
    <source srcset="${url}/media/cc0-images/surfer-240-200.jpg" media="(orientation: portrait)" />
    <img src="${url}/media/cc0-images/painted-hand-298-332.jpg" alt="" />
  </picture>`
  fileView.innerHTML = el
})

videoBtn.addEventListener('click', e => {
  fileView.innerHTML = ''
  const el = `
  <video controls>
    <source src="${url}/media/cc0-videos/flower.webm" type="video/webm" />
    <source src="${url}/media/cc0-videos/flower.mp4" type="video/mp4" />
  </video>`
  fileView.innerHTML = el
})

audioBtn.addEventListener('click', e => {
  fileView.innerHTML = ''
  const el = `
  <audio controls>
    <source src="${url}/media/cc0-audio/t-rex-roar.mp3" type="audio/mp3" />
  </audio>`
  fileView.innerHTML = el
})
