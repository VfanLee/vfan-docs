;(function () {
  const getBtn = document.getElementById('fetch--get')
  const postBtn = document.getElementById('fetch--post')
  const GET_URL = 'https://reqres.in/api/users?page=2'
  const POST_URL = 'https://reqres.in/api/login'

  // GET
  getBtn.addEventListener('click', () => {
    fetch(GET_URL, {
      method: 'GET'
    })
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          return Promise.reject(new Error(response.status))
        }
      })
      .then(value => {
        alert('请求成功')
        console.log(value)
      })
      .catch(reason => {
        console.log(reason)
      })
  })

  // POST
  postBtn.addEventListener('click', () => {
    const data = {
      email: 'eve.holt@reqres.in',
      password: 'cityslicka'
    }
    fetch(POST_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          return Promise.reject(new Error(response.status))
        }
      })
      .then(value => {
        alert('请求成功')
        console.log(value)
      })
      .catch(reason => {
        console.log(reason)
      })
  })
})()
