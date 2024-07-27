# RTCRtpSender

`RTCRtpSender` 对象表示一个媒体轨道发送器，它负责将音频或视频数据通过 RTP（实时传输协议）发送到远端。

## 实例属性

### dtmf <Badge type="info">只读</Badge>

表示 `RTCDTMFSender` 对象，如果发送的轨道是音频轨道，则可以用来发送 DTMF（Dual-Tone Multi-Frequency，双音多频）信号。

### track <Badge type="info">只读</Badge>

表示当前与发送器关联的 `MediaStreamTrack` 对象，代表正在发送的媒体轨道。如果没有关联的轨道，则为 null。

### transport <Badge type="info">只读</Badge>

表示 `RTCDtlsTransport` 对象或 `RTCSrtpSdesTransport` 对象，用于传输加密和解密 `RTP` 和 `RTCP` 包。

### transform

表示一个 `RTCRtpScriptTransform` 对象，可以用来对传输的媒体流进行变换。这个属性允许在传输媒体之前对其进行处理。

## 静态方法

### getCapabilities()

- **描述**: 返回特定媒体类型（"audio" 或 "video"）的编码和解码能力的对象。
- **参数**: `kind` (`string`) - 媒体类型，取值为 "audio" 或 "video"。
- **返回**: 包含编码器和解码器能力的对象。

## 实例方法

### getParameters()

- **描述**: 返回当前的配置参数，包括编码参数、RTP/RTCP 配置等。
- **返回**: `RTCRtpSendParameters` 对象，包含发送器的当前参数。

### getStats()

- **描述**: 异步方法，返回一个 `RTCStatsReport` 对象，包含当前发送器的统计信息。
- **返回**: `Promise<RTCStatsReport>`，包含发送器的统计数据。

### setParameters(parameters)

- **描述**: 设置 RTP 发送参数，例如改变编码参数。
- **参数**: `parameters` (`RTCRtpSendParameters`) - 包含新的发送参数的对象。
- **返回**: `Promise<void>`，设置成功后返回。

### setStreams(...streams)

- **描述**: 重新关联媒体流到发送器，允许变更发送的媒体流。
- **参数**: `streams` (`MediaStream[]`) - 一个或多个媒体流。
- **返回**: `void`

### replaceTrack(withTrack)

- **描述**: 用新的媒体轨道替换当前发送的轨道。
- **参数**: `withTrack` (`MediaStreamTrack`) - 新的媒体轨道，如果为 `null`，表示停止发送当前轨道。
- **返回**: `Promise<void>`，替换成功后返回。
