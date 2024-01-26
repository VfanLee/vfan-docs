// 3. 接收消息
onmessage = e => {
  const { data } = e
  console.log('Message received from main script')

  const workerResult = `Result: ${data[0] * data[1]}`
  // 4. 发送消息
  postMessage(workerResult)
  console.log('Posting message back to main script')
}
