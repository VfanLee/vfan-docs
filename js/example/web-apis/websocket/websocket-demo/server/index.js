const WebSocket = require('ws')

const wss = new WebSocket.Server({ port: 8082 })

wss.on('connection', ws => {
  console.log('新客户端已连接！')

  ws.on('message', data => {
    console.log('接收的客户端数据：', data.toString())

    ws.send('你好你好~')
  })

  ws.on('close', () => {
    console.log('客户端已断开连接！')
  })
})
