# MediaRecorder

创建一个新的 [`MediaRecorder`](https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder) 对象，并给定要记录的 MediaStream。可以使用选项来执行诸如设置容器的 MIME 类型（例如 `“video/webm”` 或 `“video/mp4”`）以及音频和视频轨道的比特率或单个总体比特率之类的操作。

## 实例属性

### `audioBitrateMode` <Badge type="info">只读</Badge> <Badge type="warning">实验性</Badge>

返回用于编码音频轨道的比特率模式。

### `audioBitsPerSecond` <Badge type="info">只读</Badge>

返回正在使用的音频编码比特率。

这可能与构造函数中指定的比特率（如果提供了）不同。

### `mimeType` <Badge type="info">只读</Badge>

返回创建 `MediaRecorder` 对象时所选择的用于存储录制的媒体数据的 `MIME` 类型。

### `state` <Badge type="info">只读</Badge>

返回 `MediaRecorder` 对象的当前状态

常见值：`"inactive"` 非活动, `"recording"` 录制中, `"paused"` 暂停。

### `stream` <Badge type="info">只读</Badge>

返回在创建 `MediaRecorder` 时传入构造函数的流对象。

### `videoBitsPerSecond` <Badge type="info">只读</Badge>

返回正在使用的视频编码比特率。

这可能与构造函数中指定的比特率（如果提供了）不同。

## 静态方法

### `isTypeSupported(mimeType)`

指示当前用户代理是否支持给定的 `MIME` 媒体类型。

## 实例方法

### `pause()`

暂停媒体录制。

### `requestData()`

请求一个包含到目前为止保存的数据（或自上次调用 `requestData()` 以来保存的数据）的 `Blob` 对象。

调用此方法后，录制将继续，但会生成一个新的 `Blob` 对象。

### `resume()`

在暂停媒体录制后继续录制。

### `start([timeslice])`

开始媒体录制。

此方法可以可选地传入一个以毫秒为单位的 `timeslice` 参数。如果指定了该参数，媒体将被分成该时长的单独块进行捕获，而不是默认的一大块录制。

### `stop()`

停止录制，此时会触发一个包含最终已保存数据 `Blob` 对象的 `dataavailable` 事件。停止后不会再进行录制。

## 事件

### `dataavailable`

每隔录制一定时长的媒体数据（以毫秒为单位的 `timeslice` 指定），或者在录制完所有媒体（未指定 `timeslice`）时都会触发此事件。该事件类型为 `BlobEvent`，其 `data` 属性包含已录制的媒体数据（`Blob` 对象）。

### `error`

当发生导致录制停止的致命错误时触发。接收到的事件基于 `MediaRecorderErrorEvent` 接口，该接口的 `error` 属性包含一个描述实际发生错误的 `DOMException` 对象。

### `pause`

媒体录制暂停时触发。

### `resume`

媒体录制在暂停后恢复时触发。

### `start`

媒体录制开始时触发。

### `stop`

媒体录制结束时触发，这可能发生在 `MediaStream` 结束时，也可能发生在调用 `MediaRecorder.stop()` 方法之后。
