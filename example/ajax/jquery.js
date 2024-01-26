;(function () {
  const getBtn = document.getElementById('jquery--get')
  const postBtn = document.getElementById('jquery--post')
  const GET_URL = 'https://reqres.in/api/users?page=2'
  const POST_URL = 'https://reqres.in/api/login'

  // GET
  getBtn.addEventListener('click', () => {
    $.ajax({
      method: 'GET',
      url: GET_URL,
      success(result, statusText, xhr) {
        alert('请求成功')
        console.log(result)
      },
      error(xhr, statusText, error) {
        console.log(error)
      }
    })
  })

  // POST
  postBtn.addEventListener('click', () => {
    const data = {
      email: 'eve.holt@reqres.in',
      password: 'cityslicka'
    }

    $.ajax({
      method: 'POST',
      url: POST_URL,
      headers: {
        'Content-Type': 'application/json'
      },
      data: JSON.stringify(data),
      success(result, statusText, xhr) {
        alert('请求成功')
        console.log(result)
      },
      error(xhr, statusText, error) {
        console.log(error)
      }
    })
  })
})()
