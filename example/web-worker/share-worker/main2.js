const result = document.querySelector('.result')

if (window.SharedWorker) {
  const sharedWorker = new SharedWorker('./worker.js', 'main2')

  sharedWorker.port.onmessage = function (e) {
    console.log(e)
    const { data } = e
    result.textContent = data
    console.log('Message received from worker')
  }
}
