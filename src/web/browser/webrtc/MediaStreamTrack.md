# MediaStreamTrack

[`MediaStreamTrack`](https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrack) 接口表示媒体流中的单个轨道，可以是音频或视频。它提供了多种属性和方法，用于操作和管理媒体轨道。

## 实例属性

### `contentHint`

一个字符串，用于表示轨道内容的类型提示，可以帮助浏览器进行优化。

常见值包括 `"motion"`, `"detail"` 和 `"text"`.

### `enabled`

一个布尔值，表示轨道是否应处于活动状态。如果为 `false`，轨道将被禁用。

### `id` <Badge type="info">只读</Badge>

返回一个字符串，表示轨道的唯一标识符。

### `kind` <Badge type="info">只读</Badge>

返回一个字符串，表示轨道的类型，可以是 `"audio"` 或 `"video"`。

### `label` <Badge type="info">只读</Badge>

返回一个字符串，表示轨道的名称或描述（通常是设备的名称）。

### `muted` <Badge type="info">只读</Badge>

一个布尔值，表示轨道是否被静音。

::: tip
注意：您可以通过将 `enabled` 设置为 `false` 来实现标准“静音”功能，并通过再次将其设置回 `true` 来取消媒体静音。
:::

### `readyState` <Badge type="info">只读</Badge>

返回轨道的当前状态。

可能的值包括 `"live"` 和 `"ended"`。

## 实例方法

### `applyConstraints([constraints])`

应用特定的约束条件到轨道上，返回一个 `Promise`。

```js
const constraints = {
  width: { min: 640, ideal: 1280, max: 1920 },
  height: { min: 480, ideal: 720, max: 1080 },
}

track
  .applyConstraints(constraints)
  .then(() => {
    console.log('Constraints applied successfully')
  })
  .catch(error => {
    console.error('Error applying constraints:', error)
  })
```

### `clone()`

返回 MediaStreamTrack 的副本。

### `getCapabilities()`

返回一个对象，表示轨道支持的所有能力（如分辨率、帧率等）。

```js
const capabilities = track.getCapabilities()
console.log(capabilities)
```

### `getConstraints()`

返回一个对象，表示当前应用到轨道上的约束条件。

```js
const constraints = track.getConstraints()
console.log(constraints)
```

### `getSettings()`

返回一个对象，表示当前轨道的配置（如分辨率、帧率等）。

```js
const settings = track.getSettings()
console.log(settings)
```

### `stop()`

停止轨道的捕获，轨道的 `readyState` 会变为 `"ended"`。

## 事件

### `ended`

当轨道结束时触发。

### `mute`

当轨道被静音时触发。

### `unmute`

当轨道从静音状态恢复时触发。
