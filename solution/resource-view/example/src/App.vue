<script setup>
import { ref } from 'vue'

const fileList = [
  {
    name: 'mp3',
    type: 'audio',
    url: 'https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3'
  },
  {
    name: 'mp4',
    type: 'video',
    url: 'https://vjs.zencdn.net/v/oceans.mp4'
  },
  {
    name: 'png',
    type: 'picture',
    url: 'https://interactive-examples.mdn.mozilla.net/media/cc0-images/painted-hand-298-332.jpg'
  },
  {
    name: 'pdf',
    type: 'pdf',
    url: 'https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf'
  }
]

const fileViewInnerRef = ref(null)

const handleFileClick = ({ type, url }) => {
  switch (type) {
    case 'audio':
      viewAudio(url)
      break
    case 'video':
      viewVideo(url)
      break
    case 'picture':
      viewPicture(url)
      break
    case 'pdf':
      viewPdf(url)
      break
  }
}

function viewAudio(url) {
  const fileViewInner = fileViewInnerRef.value
  fileViewInner.innerHTML = `
    <audio controls>
      <source src="${url}" type="audio/mp3" />
    </audio>`
}

function viewVideo(url) {
  const fileViewInner = fileViewInnerRef.value
  fileViewInner.innerHTML = `
    <video controls>
      <source src="${url}" type="video/mp4" />
    </video>`
}

function viewPicture(url) {
  const fileViewInner = fileViewInnerRef.value
  fileViewInner.innerHTML = `
    <picture>
      <img src="${url}" alt="view image" />
    </picture>`
}

function viewPdf(url) {
  const fileViewInner = fileViewInnerRef.value
  url = '//' + location.host + '/vendors/pdfjs/web/viewer.html?file=' + url
  fileViewInner.innerHTML = `<iframe width="100%" height="100%" src="${url}" loading="lazy"></iframe>`
}
</script>

<template>
  <div class="f-container">
    <ul class="f-list">
      <li class="f-item" v-for="(f, i) of fileList" :key="i" :title="f.name" @click="handleFileClick(f)">
        {{ f.name }}
      </li>
    </ul>
    <div class="f-view">
      <div class="f-view__inner" ref="fileViewInnerRef"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.f-container {
  display: flex;
  height: 100vh;
}

.f-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 256px;
  margin: 0;
  padding: 0 8px;
  border-inline-end: 1px solid rgba(5, 5, 5, 0.06);
  background-color: #f2f2f2;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  list-style: none;
}

.f-item {
  display: flex;
  align-items: center;
  height: 40px;
  margin-block: 4px;
  margin-inline: 4px;
  padding: 0 16px;
  border-radius: 6px;
  line-height: 40px;
  cursor: pointer;
  transition: background-color 0.3;
  &:hover {
    background-color: rgba(0, 0, 0, 0.03);
  }
}

.f-view {
  flex: 1;
  width: 0;
  display: flex;
  justify-content: center;
  overflow: auto;
}

.f-view__inner {
  width: 100%;
  padding: 32px;
}
</style>
