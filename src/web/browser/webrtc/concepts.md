# WebRTC 概念篇

## 协议

### P2P (Peer-to-Peer)

P2P表示点对点，是一种网络通信模式，其中网络中的每个节点都可以直接与其他节点通信，而无需通过中央服务器。在WebRTC中，P2P通常用于直接在浏览器之间传输音频、视频和数据流，而无需通过中间服务器。

### NAT (Network Address Translator)

NAT是网络地址转换的缩写，是一种常见的网络设备，用于在私有网络和公共网络之间转换IP地址。由于大多数用户在私有网络中使用内部IP地址，NAT允许多个设备共享单个公共IP地址。但是，NAT可能会导致P2P连接的问题，因为它会修改传出的IP地址和端口，使得其他节点难以直接与设备通信。

### STUN (Simple Traversal of UDP Through NAT)

STUN是一种协议，旨在帮助解决NAT引起的连接问题。它允许设备发现其在NAT后面的公共IP地址和端口号。这对于建立P2P连接非常有用，因为设备可以通过STUN服务器获取其NAT映射信息，然后直接与其他设备通信。

### TURN (Traversal Using Relays around NAT)

TURN是另一种解决NAT问题的协议。当STUN无法解决连接问题时，TURN充当中继服务器。如果两个设备无法直接通信，它们可以通过TURN服务器进行通信，该服务器充当中间人转发数据流。虽然这种方法增加了延迟和带宽开销，但确保了连接的可靠性。

<https://github.com/coturn/coturn>

### ICE (Interactive Connectivity Establishment)

ICE是一种综合方法，结合了STUN和TURN，旨在在P2P连接时找到最佳的通信路径。它通过尝试多种候选路径（包括直接P2P连接、STUN服务器和TURN服务器），以找到最可靠和最高效的连接方式。ICE使WebRTC能够在各种网络环境下实现高质量的实时通信。

### SDP（Session Description Protocol）

SDP是一种用于描述多媒体会话信息的协议。在WebRTC中，SDP被用于描述会话的各种属性，如媒体类型、编解码器、传输协议和网络地址等。浏览器之间通过交换SDP信息来协商建立P2P连接的参数。

[RTCSessionDescription](https://developer.mozilla.org/en-US/docs/Web/API/RTCSessionDescription)

[RTCIceCandidate](https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidate)

## 通信流程

::: info
- [WebRTC_API](https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API)
- [peerjs](https://peerjs.com/)
:::

1. 找到彼此（ICE）
2. 交换信息，建立连接（编解码器）（SDP）

1 + 2 = signaling
