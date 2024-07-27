# RTCRtpReceiver

`RTCRtpReceiver` 对象表示一个媒体轨道接收器，它负责接收通过 RTP（实时传输协议）从远端传来的音频或视频数据。

## 实例属性

### jitterBufferTarget

- **描述**: 表示目标抖动缓冲区的大小，以秒为单位。这个属性可以调整接收器的抖动缓冲区以减少抖动和延迟。

### track <Badge type="info">只读</Badge>

- **描述**: 表示当前与接收器关联的 `MediaStreamTrack` 对象，代表正在接收的媒体轨道。

### transport <Badge type="info">只读</Badge>

- **描述**: 表示 `RTCDtlsTransport` 对象或 `RTCSrtpSdesTransport` 对象，用于传输加密和解密 RTP 和 RTCP 包。

### transform

- **描述**: 表示一个 `RTCRtpScriptTransform` 对象，可以用来对接收的媒体流进行变换。这个属性允许在接收媒体后对其进行处理。

## 静态方法

### getCapabilities()

- **描述**: 返回特定媒体类型（"audio" 或 "video"）的接收能力的对象。
- **参数**: `kind` (`string`) - 媒体类型，取值为 "audio" 或 "video"。
- **返回**: 包含接收器能力的对象。

## 实例方法

### getContributingSources()

- **描述**: 返回一个数组，包含所有贡献源（CSRCs）的信息，这些源参与了接收的 RTP 流。
- **返回**: `RTCRtpContributingSource[]` - 贡献源信息的数组。

### getParameters()

- **描述**: 返回当前的配置参数，包括解码参数、RTP/RTCP 配置等。
- **返回**: `RTCRtpReceiveParameters` 对象，包含接收器的当前参数。

### getStats()

- **描述**: 异步方法，返回一个 `RTCStatsReport` 对象，包含当前接收器的统计信息。
- **返回**: `Promise<RTCStatsReport>`，包含接收器的统计数据。

### getSynchronizationSources()

- **描述**: 返回一个数组，包含所有同步源（SSRCs）的信息，这些源参与了接收的 RTP 流。
- **返回**: `RTCRtpSynchronizationSource[]` - 同步源信息的数组。
