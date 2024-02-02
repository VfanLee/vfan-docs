const handleFileUpload1 = e => {
  const file = e.target.files[0]
  console.log(file)
  // 限制大小
  const limitSize = 1024 * 1024 * 10
  if (limitSize > file.size) {
    alert('上传成功')
  } else {
    alert('上传文件必须小于 10M')
    e.target.value = '' // 清除文件选择以便用户重新选择
  }
}

const handleFileUpload2 = e => {
  const file = e.target.files[0]
  console.log(file)
  // 限制格式
  const limitType = ['image/png', 'image/jpg', 'image/jpeg', 'image/gif']
  if (limitType.includes(file.type)) {
    alert('上传成功')
  } else {
    alert('只能上传 .png .jpg .jpeg .gif 类型的文件')
    e.target.value = '' // 清除文件选择以便用户重新选择
  }
}

const handleFileUpload3 = e => {
  const file = e.target.files[0]
  console.log(file)
  // 显示图片比例
  const limitRatio = 16 / 9
  let reader = new FileReader()
  reader.onload = () => {
    const img = new Image()
    img.src = reader.result
    img.onload = () => {
      if (img.naturalWidth / img.naturalHeight === limitRatio) {
        alert('上传成功')
      } else {
        alert('上传图片比例必须是 16:9')
        e.target.value = '' // 清除文件选择以便用户重新选择
      }
    }
  }
  reader.readAsDataURL(file)
}
