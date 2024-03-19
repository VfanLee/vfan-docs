const xhr = new XMLHttpRequest()
xhr.open('GET', '/long-polling')

xhr.timeout = 10000

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const data = JSON.parse(xhr.responseText)

    document.getElementById('message').innerHTML = data.message

    xhr.open('GET', '/long-polling')
    xhr.send()
  }
}

xhr.send()
