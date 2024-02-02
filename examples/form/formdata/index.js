const submitByGET = e => {
  e.preventDefault()

  const myForm = document.querySelector('.my-form')
  myForm.method = 'get'
  myForm.action = 'https://example.com'
  myForm.submit()
}

const submitByPOST = e => {
  e.preventDefault()

  const myForm = document.querySelector('.my-form')
  myForm.method = 'post'
  myForm.action = 'https://example.com'
  myForm.submit()
}

const printFormData = e => {
  const myForm = document.querySelector('.my-form')
  const fd = new FormData(myForm)
  console.log(`formData: `, fd)
}

const printJSON = e => {
  const myForm = document.querySelector('.my-form')
  const jd = {}
  const fd = new FormData(myForm)
  fd.forEach((value, key) => {
    jd[key] = value
  })
  console.log(`jsonData: `, jd)
}
