# 信令服务器

## 一对一信令逻辑

客户端信令消息：

- join 加入房间
- leave 离开房间
- message 端对端消息
  - Offer 消息
  - Answer 消息
  - Candidate 消息

服务器端信令消息：

- joined 已加入房间
- otherjoin 其他用户加入房间
- full 房间人数已满
- leaved 已离开房间
- bye 对方离开房间
