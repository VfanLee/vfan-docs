# RTCRtpTransceiver

`RTCRtpTransceiver` 对象表示一个 RTP 发送器和接收器的对，用于管理一对媒体轨道的传输和接收。

## 实例属性

### currentDirection <Badge type="info">只读</Badge>

- **描述**: 表示当前的传输方向，这个值反映了 `direction` 属性和协商结果的组合。可能的值有 `sendrecv`、`sendonly`、`recvonly`、`inactive` 或 `null`（表示尚未协商）。

### direction

- **描述**: 表示所期望的传输方向。可以设置为 `sendrecv`、`sendonly`、`recvonly` 或 `inactive`。这个值会在信令过程中使用。

### mid <Badge type="info">只读</Badge>

- **描述**: 表示媒体流标识符（MID），用于标识 SDP 中的媒体描述。这个值在设置了 MID 后才有效，否则为 `null`。

### receiver <Badge type="info">只读</Badge>

- **描述**: 表示关联的 `RTCRtpReceiver` 对象，负责接收媒体数据。

### sender <Badge type="info">只读</Badge>

- **描述**: 表示关联的 `RTCRtpSender` 对象，负责发送媒体数据。

### stopped <Badge type="danger">过时</Badge>

- **描述**: 表示这个传输器是否已经停止。此属性已过时，应使用其他方法来检查状态。

## 实例方法

### setCodecPreferences(codecs)

- **描述**: 设置编码器的优先级，接收一个 `RTCRtpCodecCapability` 对象的数组，用于指定编码器的顺序和选择。
- **参数**: `codecs` (`RTCRtpCodecCapability[]`) - 一个包含编码器能力的对象数组。
- **返回**: `void`

### stop()

- **描述**: 停止发送和接收媒体，并断开关联的发送器和接收器。
- **返回**: `void`
