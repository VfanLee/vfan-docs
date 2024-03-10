<script setup>
import { ref } from 'vue'
import { showSuccessToast, showFailToast, showDialog } from 'vant'

const imgUrl = ref('')

const getPic = type => {
  navigator.camera.getPicture(
    function (imageData) {
      showSuccessToast('拍照成功' + imageData)
      imgUrl.value = 'data:image/jpeg;base64,' + imageData
    },
    function (message) {
      showFailToast(message)
    },
    {
      quality: 50,
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: Camera.PictureSourceType[type]
    }
  )
}

const getDeviceInfo = () => {
  showDialog({
    title: 'cordova-plugin-device',
    message: `
cordova: ${device.cordova}
model: ${device.model}
platform: ${device.platform}
uuid: ${device.uuid}
version: ${device.version}
manufacturer: ${device.manufacturer}
isVirtual: ${device.isVirtual}
serial: ${device.serial}
sdkVersion: ${device.sdkVersion}`,
    confirmButtonText: '我知道了'
  }).then(() => {
    // on close
  })
}

const startVibration = time => {
  navigator.vibrate(time)
}
</script>

<template>
  <h2>chat page</h2>

  <van-row>
    <van-button type="primary" @click="getPic('PHOTOLIBRARY')">从照片库获取图片</van-button>
    <van-button type="primary" @click="getPic('CAMERA')">从相机拍照</van-button>
  </van-row>

  <van-row>
    <van-button type="warning" @click="getDeviceInfo">设备信息</van-button>
  </van-row>

  <van-row>
    <van-button type="danger" @click="startVibration(3000)">持续震动3s 🤔</van-button>
    <van-button type="danger" @click="startVibration([1000, 1000, 3000, 1000, 5000])">震动 1-1-3-1-5 🤔</van-button>
    <van-button type="default" @click="startVibration(0)">关闭震动 😁</van-button>
  </van-row>

  <van-row>
    <img class="preview-img" :src="imgUrl" alt="image" v-show="imgUrl" />
  </van-row>
</template>

<style lang="scss" scoped>
.van-button + .van-button {
  margin-left: 12px;
}

.van-row {
  margin-top: 12px;
}

.preview-img {
  width: 100vw;
}
</style>
