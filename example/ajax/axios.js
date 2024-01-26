;(function () {
  const getBtn = document.getElementById('axios--get')
  const postBtn = document.getElementById('axios--post')
  const GET_URL = 'https://reqres.in/api/users?page=2'
  const POST_URL = 'https://reqres.in/api/login'

  // GET
  getBtn.addEventListener('click', () => {
    axios({
      method: 'GET',
      url: GET_URL
    })
      .then(response => {
        // 2xx
        const data = response.data
        alert('请求成功')
        console.log(data)
      })
      .catch(error => {
        // > 2xx
        return Promise.reject(error)
      })
  })

  // POST
  postBtn.addEventListener('click', () => {
    const data = {
      email: 'eve.holt@reqres.in',
      password: 'cityslicka'
    }

    axios({
      method: 'POST',
      url: POST_URL,
      headers: {
        'Content-Type': 'application/json'
      },
      data
    })
      .then(response => {
        // 2xx
        const data = response.data
        alert('请求成功')
        console.log(data)
      })
      .catch(error => {
        // > 2xx
        return Promise.reject(error)
      })
  })
})()
