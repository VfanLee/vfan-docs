const arr = []

onconnect = e => {
  const port = e.ports[0]
  arr.push(port)

  port.onmessage = e => {
    const workerResult = `Result: ${e.data[0] * e.data[1]}`
    port.postMessage(workerResult)
  }
}
