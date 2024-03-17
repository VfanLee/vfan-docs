const first = document.querySelector('.first')
const second = document.querySelector('.second')
const result = document.querySelector('.result')

if (window.Worker) {
  // 1. 生成 worker
  const worker = new Worker('worker.js')

  first.addEventListener('input', () => {
    // 2. 发送消息
    worker.postMessage([first.value, second.value])
    console.log('Message posted to worker')
  })
  second.addEventListener('input', () => {
    // 2. 发送消息
    worker.postMessage([first.value, second.value])
    console.log('Message posted to worker')
  })

  // 5. 接收消息
  worker.onmessage = e => {
    result.textContent = e.data
    console.log('Message received from worker')
  }

  setTimeout(() => {
    // 终止 work（可选）
    worker.terminate()
  }, 5000)
}
