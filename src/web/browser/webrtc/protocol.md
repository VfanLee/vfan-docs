# WebRTC 中基本概念及相关协议介绍

## P2P (Peer-to-Peer)

P2P 表示点对点，是一种网络通信模式，其中网络中的每个节点都可以直接与其他节点通信，而无需通过中央服务器。在 WebRTC 中，P2P 通常用于直接在浏览器之间传输音频、视频和数据流，而无需通过中间服务器。

## SDP（Session Description Protocol）

SDP 是一种用于描述多媒体会话信息的协议。在 WebRTC 中，SDP 被用于描述会话的各种属性，如媒体类型、编解码器、传输协议和网络地址等。浏览器之间通过交换SDP信息来协商建立P2P连接的参数。

[RTCSessionDescription](https://developer.mozilla.org/en-US/docs/Web/API/RTCSessionDescription)

[RTCIceCandidate](https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidate)

## NAT (Network Address Translator)

NAT 是网络地址转换的缩写，是一种常见的网络设备，用于在私有网络和公共网络之间转换 IP 地址。由于大多数用户在私有网络中使用内部 IP 地址，NAT 允许多个设备共享单个公共 IP 地址。但是，NAT 可能会导致 P2P 连接的问题，因为它会修改传出的 IP 地址和端口，使得其他节点难以直接与设备通信。

### NAT 类型

## STUN (Simple Traversal of UDP Through NAT)

STUN 是一种协议，旨在帮助解决 NAT 引起的连接问题。它允许设备发现其在 NAT 后面的公共 IP 地址和端口号。这对于建立 P2P 连接非常有用，因为设备可以通过 STUN 服务器获取其NAT映射信息，然后直接与其他设备通信。

::: details 一些免费公共的 STUN 服务

```
stun:stun.l.google.com:19302
stun:stun1.l.google.com:19302

stun.minisipserver.com
stun.zoiper.com
stun.voipbuster.com
stun.sipgate.net
stun.schlund.de
stun.voipstunt.com
stun.1und1.de
stun.gmx.net
stun.callwithus.com
stun.internetcalls.com
stun.voip.aebc.com
stun.internetcalls.com
stun.callwithus.com
stun.gmx.net
stun.1und1.de
stun.voxgratia.org
```

:::

## TURN (Traversal Using Relays around NAT)

TURN 是另一种解决 NAT 问题的协议。当 STUN 无法解决连接问题时，TURN 充当中继服务器。如果两个设备无法直接通信，它们可以通过 TURN 服务器进行通信，该服务器充当中间人转发数据流。虽然这种方法增加了延迟和带宽开销，但确保了连接的可靠性。

<https://github.com/coturn/coturn>

## ICE (Interactive Connectivity Establishment)

ICE 是一种综合方法，结合了 STUN 和 TURN，旨在在 P2P 连接时找到最佳的通信路径。它通过尝试多种候选路径（包括直接 P2P 连接、STUN 服务器和 TURN 服务器），以找到最可靠和最高效的连接方式。ICE 使 WebRTC 能够在各种网络环境下实现高质量的实时通信。
