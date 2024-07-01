const first = document.querySelector('.first')
const second = document.querySelector('.second')
const result = document.querySelector('.result')

if (window.SharedWorker) {
  const sharedWorker = new SharedWorker('./worker.js', 'main')

  first.addEventListener('input', e => {
    sharedWorker.port.postMessage([first.value, second.value])
  })

  second.addEventListener('input', e => {
    sharedWorker.port.postMessage([first.value, second.value])
  })

  sharedWorker.port.onmessage = function (e) {
    const { data } = e
    result.textContent = data
    console.log('Message received from worker')
  }
}
