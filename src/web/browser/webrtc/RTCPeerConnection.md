# RTCPeerConnection

[RTCPeerConnection](https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection) 接口代表本地计算机和远程对等点之间的 WebRTC 连接。它提供了连接到远程对等点、维护和监视连接以及在不再需要时关闭连接的方法。

## 构造器

返回一个新的 `RTCPeerConnection`，表示本地设备和远程对等点之间的连接。

```js
new configuration([configuration])
```

### `configuration` 参数属性

[`configuration`](https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/RTCPeerConnection#configuration) 的选项如下：

- `bundlePolicy`

  控制是否以及如何在单个传输中捆绑多个媒体流。可能的值有：

  - `"balanced"`：平衡，音频与视频轨使用各自的传输通道。
  - `"max-compat"`：最大兼容性，每个轨使用自己的传输通道。
  - `"max-bundle"`：最大化使用绑定，都绑定到同一个传输通道。

- `certificates`

  一个包含 `RTCCertificate` 对象的数组。

  授权可以使用连接的一组证书。如果没有提供，浏览器会自动生成一个。

- `iceCandidatePoolSize`

  一个无符号 16 位整数值。默认值为 0（意味着不会发生候选预取）。

  用于指定预取的 ICE 候选者个数。

  如果该值发生变化，它会触发重新收集候选者。

- `iceServers`

  由 `RTCIceServer` 对象组成的数组。

  每个 `RTCIceServer` 都是一个 ICE 代理的服务。包括如下属性：

  | 属性               | 说明                                             |
  | ------------------ | ------------------------------------------------ |
  | credential         | 凭据，只有 TURN 服务使用                         |
  | urls               | 用于连接服务中的 url 数组                        |
  | username           | 用户名，只有 TURN 服务使用                       |
  | ~~credentialType~~ | ~~**已过时**，凭据类型可以是 password 或 oauth~~ |

  示例：

  ```js
  [
    {
      urls: 'stun:stun.example.com',
    },
    {
      urls: [
        'stun:stun.example.com',
        'stun:stun1.example.com',
      ],
    },
    {
      urls: 'turn:turn.example.com',
      username: 'user', // 用户名
      credential: 'pass', // 密码
      // credentialType 已过时！
    },
  ]
  ```

- `iceTransportPolicy`

  指定 ICE 代理用于传输 ICE 候选者的策略。可能的值有：

  - `"all"`：可以使用任意类型的候选者（默认）。
  - `"relay"`：仅使用中继候选者（通常是 TURN 服务器）。
  - ~~`"public"`：**已过时**~~

- `peerIdentity`

  如果设置，此对等连接将验证对等端的身份，并且只有在对等端的身份与提供的值匹配时才建立连接。

- `rtcpMuxPolicy`

  指定是否要求 RTP 和 RTCP 使用相同的传输。可能的值有：

  - `"negotiate"`：收集 RTCP 与 RTP 复用的 ICE 候选者，如果 RTCP 能复用就用 RTP 复用，如果不能复用，就将它们单独使用。
  - `"require"`：只能收集 RTCP 与 RTP 复用的 ICE 候选者，如果 RTCP 不能复用，则失败（默认）。

## 实例属性

### canTrickleIceCandidates <Badge type="info">只读</Badge>

指示是否可以 trickle ICE candidates。如果支持 trickle，则为 true，否则为 false。

### connectionState <Badge type="info">只读</Badge>

描述 `RTCPeerConnection` 的当前状态。可能的值包括 `"new"`、`"connecting"`、`"connected"`、`"disconnected"`、`"failed"` 和 `"closed"`。

### currentLocalDescription <Badge type="info">只读</Badge>

当前应用到本地连接的 `RTCSessionDescription`。

### currentRemoteDescription <Badge type="info">只读</Badge>

当前应用到远程连接的 `RTCSessionDescription`。

### iceConnectionState <Badge type="info">只读</Badge>

ICE（Interactive Connectivity Establishment）连接状态。可能的值包括 `"new"`、`"checking"`、`"connected"`、`"completed"`、`"failed"`、`"disconnected"` 和 `"closed"`。

### iceGatheringState <Badge type="info">只读</Badge>

ICE 候选者收集状态。可能的值包括 `"new"`、`"gathering"` 和 `"complete"`。

### localDescription <Badge type="info">只读</Badge>

本地连接描述。

### peerIdentity <Badge type="info">只读</Badge>

表示一个 `Promise` 对象，包含一个由对等连接的远端 `RTCIceCandidate` 提供的身份标识。

### pendingLocalDescription <Badge type="info">只读</Badge>

表示当前挂起的本地连接描述，类型为 `RTCSessionDescription`。如果没有挂起的描述，则为 `null`。

### pendingRemoteDescription <Badge type="info">只读</Badge>

表示当前挂起的远程连接描述，类型为 `RTCSessionDescription`。如果没有挂起的描述，则为 `null`。

### remoteDescription <Badge type="info">只读</Badge>

远程连接描述。

### sctp <Badge type="info">只读</Badge>

表示 SCTP（Stream Control Transmission Protocol）传输层的相关信息。如果连接没有建立 SCTP 数据通道，则为 `null`。

### signalingState <Badge type="info">只读</Badge>

描述信令状态。可能的值包括 `"stable"`、`"have-local-offer"`、`"have-remote-offer"`、`"have-local-pranswer"` 和 `"have-remote-pranswer"`。

## 静态方法

### generateCertificate()

创建 X.509 证书及其相应的私钥，返回一个 Promise，该 Promise 在生成后使用新的 RTCCertificate 进行解析。

## 实例方法

### addIceCandidate(candidate)

添加一个新的远程候选者到 `RTCPeerConnection` 的远程描述中，该描述描述了连接远端的状态。

`candidate` 包含如下属性：

- candidate：候选者描述信息。
- sdpMid：与候选者相关的媒体流的识别标签。
- sdpMLineIndex：在 SDP 中 m= 的索引值。
- usernameFragment：包括了远端的唯一标识。

### addTrack()

将一个新的 `MediaStreamTrack` 添加到将传输给另一个对等端的 track 集合中。

### addTransceiver()

创建一个新的 `RTCRtpTransceiver` 并将其添加到与连接关联的 transceiver 集合中。每个 transceiver 表示一个双向流，具有与其关联的 `RTCRtpSender` 和 `RTCRtpReceiver`。

### close()

关闭当前的对等连接。

### createAnswer()

启动创建一个 SDP 应答，以响应从远程对等端接收到的 offer。在 WebRTC 连接的 offer/answer 协商过程中，答案包含有关已经附加到会话的任何媒体、浏览器支持的编解码器和选项以及已收集的任何 ICE 候选者的信息。

### createDataChannel()

启动创建一个新的数据通道，与远程对等端关联，通过该通道可以传输任何类型的数据。这对于后台内容（如图像、文件传输、文本聊天、游戏更新数据包等）非常有用。

### createOffer()

启动创建一个 SDP offer，以便开始与远程对等端的新 WebRTC 连接。SDP offer 包括有关已经附加到 WebRTC 会话的任何 `MediaStreamTrack` 对象、浏览器支持的编解码器和选项以及 ICE 代理已经收集的任何候选者的信息，目的是通过信令通道发送给潜在的对等端以请求连接或更新现有连接的配置。

语法：

```js
createOffer([options])
createOffer(successCallback, failureCallback, [options]) // deprecated
```

options 包含如下：

- iceRestart：该选项会重启 ICE，重新进行 Candidate 收集，默认为 false。
- ~~offerToReceiveAudio：已过时~~
- ~~offerToReceiveVideo：已过时~~

### getConfiguration()

返回一个对象，指示连接的当前配置。

### getIdentityAssertion()

启动收集身份断言并返回一个 `Promise`，该 `Promise` 解析为一个编码为字符串的身份断言。只有在 signalingState 不是 closed 时才有效。

### getReceivers()

返回一个 `RTCRtpReceiver` 对象数组，每个对象代表一个 RTP 接收器。

### getSenders()

返回一个 `RTCRtpSender` 对象数组，每个对象代表一个 RTP 发送器，负责传输一个 track 的数据。

### getStats()

返回一个 `Promise`，该 `Promise` 解析为提供有关整个连接或指定 `MediaStreamTrack` 的统计信息的数据。

### getTransceivers()

返回一个包含所有正在连接上发送和接收数据的 `RTCRtpTransceiver` 对象的列表。

### removeTrack()

指示连接的本地端停止发送指定 track 的媒体，但实际上并不会从 `getSenders()` 报告的发送器列表中删除相应的 `RTCRtpSender`。如果 track 已经停止或不在连接的发送器列表中，则此方法无效。

### restartIce()

允许轻松请求在连接的两端重新进行 ICE 候选者收集。这简化了过程，使调用方或接收方都可以使用相同的方法来触发 ICE 重启。

### setConfiguration()

根据指定对象中包含的值设置连接的当前配置。这允许您更改连接使用的 ICE 服务器以及要使用的传输策略。

### setIdentityProvider()

将身份提供商（IdP）设置为参数中给定的三元组：其名称、用于与其通信的协议和用户名。协议和用户名是可选的。

### setLocalDescription()

更改与连接关联的本地描述。此描述指定连接本地端的属性，包括媒体格式。它返回一个 `Promise`，该 `Promise` 在描述更改后异步地完成。

### setRemoteDescription()

将指定的会话描述设置为远程对等端的当前 offer 或 answer。该描述指定连接远端的属性，包括媒体格式。它返回一个 `Promise`，该 `Promise` 在描述更改后异步地完成。

### ~~addStream() <Badge type="danger">过时</Badge>~~

### ~~createDTMFSender() <Badge type="danger">过时</Badge>~~

### ~~removeStream() <Badge type="danger">过时</Badge>~~

## 事件

### connectionstatechange

连接状态改变时触发的事件处理程序。

### icecandidate

当找到新的 ICE 候选者时触发的事件处理程序。

### iceconnectionstatechange

ICE 连接状态改变时触发的事件处理程序。

### icegatheringstatechange

ICE 候选者收集状态改变时触发的事件处理程序。

### signalingstatechange

信令状态改变时触发的事件处理程序。

### track

当新的 `MediaStreamTrack` 添加到连接时触发的事件处理程序。

## 第三方库

[peerjs](https://peerjs.com/)
