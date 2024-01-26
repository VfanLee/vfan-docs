let file = null
function addFile(event) {
  file = event.target.files[0]
  console.log(file)
}

const fileToArrayBuffer = e => {
  if (!file) {
    return alert('请先添加文件！')
  }

  // 写法一
  const reader = new FileReader()
  reader.onload = ev => {
    const result = ev.target.result
    console.log(result)
  }
  reader.readAsArrayBuffer(file)

  // 写法二：不考虑兼容性
  // file.arrayBuffer().then(result => {
  //   console.log(result)
  // })
}

const fileToBinaryString = e => {
  if (!file) {
    return alert('请先添加文件！')
  }
  const reader = new FileReader()
  reader.onload = ev => {
    const result = ev.target.result
    console.log(result)
  }
  reader.readAsBinaryString(file)
}

const fileToDataURL = e => {
  if (!file) {
    return alert('请先添加文件！')
  }
  const reader = new FileReader()
  reader.onload = ev => {
    const result = ev.target.result
    console.log(result)

    if (file.type.includes('image')) {
      const el = document.createElement('img')
      el.src = result
      document.body.appendChild(el)
    }
  }
  reader.readAsDataURL(file)
}

const fileToText = e => {
  if (!file) {
    return alert('请先添加文件！')
  }
  const reader = new FileReader()
  reader.onload = ev => {
    const result = ev.target.result
    console.log(result)
  }
  reader.readAsText(file)
}

const fileToObjectURL = e => {
  if (!file) {
    return alert('请先添加文件！')
  }
  const url = URL.createObjectURL(file)
  console.log(url)

  if (file.type.includes('image')) {
    const el = document.createElement('img')
    el.src = url
    document.body.appendChild(el)
  } else if (file.type.includes('audio')) {
    const el = document.createElement('audio')
    el.setAttribute('controls', '')
    el.src = url
    document.body.appendChild(el)
  } else if (file.type.includes('video')) {
    const el = document.createElement('video')
    el.setAttribute('controls', '')
    el.src = url
    document.body.appendChild(el)
  }
}
