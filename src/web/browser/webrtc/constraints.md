# Capabilities, constraints, Settings

::: tip
参考于：[Capabilities, constraints, and settings](https://developer.mozilla.org/en-US/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
:::

## 确定是否支持约束

如果您需要知道用户代理是否支持给定的约束，您可以通过调用 `navigator.mediaDevices.getSupportedConstraints()` 来获取浏览器知道的可约束属性的列表：

```js
const supported = navigator.mediaDevices.getSupportedConstraints()
```

## 如何定义约束

::: details

- **音频约束**
  - `autoGainControl`: 指定是否首选和/或需要自动增益控制。
  - `channelCount`: 指定接受和/或需要的通道数量或通道数量范围。
  - `echoCancellation`: 指定是否首选和/或需要回声消除。
  - `latency`: 指定接受和/或需要的延迟或延迟范围。
  - `noiseSuppression`: 指定是否首选和/或需要噪声抑制。
  - `sampleRate`: 指定接受和/或需要的采样率或采样率范围。
  - `sampleSize`: 指定接受和/或需要的样本大小或样本大小范围。
  - `volume（已弃用、非标准）`: 指定接受和/或需要的音量或音量范围。

- **视频约束**
  - `aspectRatio`: 指定接受和/或需要的视频宽高比或宽高比范围。
  - `facingMode`: 指定可接受和/或需要的摄像头朝向或朝向数组。
    - `user` 视频源朝向用户；例如，智能手机上的前置摄像头。
    - `environment` 视频源背对用户，从而可以查看他们的环境。这通常是智能手机上的后置摄像头。
    - `left` 视频源朝向用户但位于其左侧，例如摄像头瞄准用户但越过其左肩。
    - `right` 视频源朝向用户但位于其右侧，例如摄像头瞄准用户但越过其右肩。
  - `frameRate`: 指定接受和/或需要的帧率或帧率范围。
  - `height`: 指定接受和/或需要的视频高度或高度范围。
  - `width`: 指定接受和/或需要的视频宽度或宽度范围。
  - `resizeMode`: 指定 UA 可以用于推导视频轨道分辨率的模式或模式数组。
    - `none` 表示用户代理使用相机、驱动程序或操作系统提供的分辨率。
    - `crop-and-scale` 表示用户代理可以在相机输出上使用裁剪和缩小以满足影响分辨率的其他约束。

- **通用约束**
  - `deviceId`: 指定要使用的设备的 ID。
  - `groupId`: 如果有多个设备可用，可以通过此选项选择特定的设备组。

- **用户隐私相关约束**

    ```js
    // https://developer.chrome.com/docs/web-platform/screen-sharing-controls?hl=zh-cn
    {
      audio: false,
      systemAudio: 'exclude', // 确保 Chrome 仅向用户提供相关的音频捕获功能。
      video: {
        displaySurface: 'browser', // 指示 Web 应用倾向于提供特定的显示 surface 类型（标签页 browser、窗口 window 或屏幕 monitor）
      },
      monitorTypeSurfaces: 'include', // 用于防止用户共享整个屏幕。
      surfaceSwitching: 'include', // 用于指明 Chrome 是否应允许用户在共享标签页之间动态切换。
      selfBrowserSurface: 'include', // 用于禁止用户分享当前标签页。这可避开“镜厅”效果。
      preferCurrentTab: false, // 是否以当前标签页为捕获源。
    }
    ```

:::

### 请求设置的特定值

大多数情况下，每个约束可以是指示设置的期望值的特定值。例如：

```js
const constraints = {
  width: 1920,
  height: 1080,
  aspectRatio: 1.777777778,
}

myTrack.applyConstraints(constraints)
```

### 指定值范围

有时，属性值可以接受某个范围内的任何值。您可以指定具有最小值和最大值之一或两者的范围，甚至可以指定该范围内的理想值（如果您选择）。如果您提供理想值，浏览器将在指定的其他约束条件下尝试尽可能接近匹配该值。

```js
const supports = navigator.mediaDevices.getSupportedConstraints()

if (!supports['width'] || !supports['height'] || !supports['frameRate'] || !supports['facingMode']) {
  // We're missing needed properties, so handle that error.
} else {
  const constraints = {
    width: { min: 640, ideal: 1920, max: 1920 },
    height: { min: 400, ideal: 1080 },
    aspectRatio: 1.777777778,
    frameRate: { max: 30 },
    facingMode: { exact: 'user' },
  }

  myTrack
    .applyConstraints(constraints)
    .then(() => {
      /* do stuff if constraints applied successfully */
    })
    .catch(reason => {
      /* failed to apply constraints; reason is why */
    })
}
```

## 检查能力

您可以调用 `MediaStreamTrack.getCapability()` 来获取所有支持的功能的列表以及每个功能在当前平台和用户代理上接受的值或值范围。此函数返回一个对象，该对象列出了浏览器支持的每个可约束属性以及每个属性支持的值或值范围。

## 应用约束

使用约束的第一个也是最常见的方法是在调用 `getUserMedia()` 时指定它们：

```js
navigator.mediaDevices
  .getUserMedia({
    video: {
      width: { min: 640, ideal: 1920 },
      height: { min: 400, ideal: 1080 },
      aspectRatio: { ideal: 1.7777777778 },
    },
    audio: {
      sampleSize: 16,
      channelCount: 2,
    },
  })
  .then(stream => {
    videoElement.srcObject = stream
  })
  .catch(handleError)
```

您还可以通过调用轨道的 `applyConstraints()` 方法来动态更改现有 MediaStreamTrack 的约束，并向其中传递一个表示您希望应用于轨道的约束的对象：

```js
videoTrack.applyConstraints({
  width: 1920,
  height: 1080,
})
```

## 检索当前约束和设置

### 获取当前应用于媒体的约束集

如果任何时候您需要获取当前应用于媒体的约束集，您可以通过调用 `MediaStreamTrack.getConstraints()` 来获取该信息。

```js
function switchCameras(track, camera) {
  const constraints = track.getConstraints()
  constraints.facingMode = camera
  track.applyConstraints(constraints)
}
```

### 获取轨道的当前设置

除非您只使用精确的约束（这是相当严格的限制，所以请确保您是认真的！），否则无法保证应用约束后您实际会得到什么。结果媒体中实际存在的可约束属性的值称为设置。如果您需要知道媒体的真实格式和其他属性，您可以通过调用 `MediaStreamTrack.getSettings()` 来获取这些设置。这将返回一个基于字典 [`MediaTrackSettings`](https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSettings) 的对象。例如：

```js
MediaStreamTrack.getSettings()
```
