;(function () {
  const getBtn = document.getElementById('xhr--get')
  const postBtn = document.getElementById('xhr--post')
  const GET_URL = 'https://reqres.in/api/users?page=2'
  const POST_URL = 'https://reqres.in/api/login'

  // GET
  getBtn.addEventListener('click', () => {
    const xhr = new XMLHttpRequest()
    xhr.responseType = 'json'
    xhr.open('GET', GET_URL)
    xhr.onload = e => {
      const response = e.target.response
      if (xhr.status >= 400) {
        throw new Error(response)
      } else {
        alert('请求成功')
        console.log(response)
      }
    }
    xhr.onerror = e => {
      console.log(e)
    }
    xhr.send()
  })

  // POST
  postBtn.addEventListener('click', () => {
    const data = {
      email: 'eve.holt@reqres.in',
      password: 'cityslicka'
    }
    const xhr = new XMLHttpRequest()
    xhr.open('POST', POST_URL)
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.responseType = 'json'
    xhr.onload = e => {
      const response = e.target.response
      if (xhr.status >= 400) {
        throw new Error(response)
      } else {
        alert('请求成功')
        console.log(response)
      }
    }
    xhr.onerror = e => {
      console.log(e)
    }
    xhr.send(JSON.stringify(data))
  })
})()
