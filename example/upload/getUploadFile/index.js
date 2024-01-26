// 通过 change 事件访问被选择的文件
const getByChange = e => {
  const files = e.target.files
  console.log('files: ', files)
}

// 使用 DOM 选择器访问一个被选择的文件
const getBySelector = () => {
  const fileEl = document.getElementById('file-input-element')
  const files = fileEl.files
  console.log('files: ', files)
}

// Drag & Drop
const dropZone = document.getElementById('drop-zone')
dropZone.addEventListener('dragenter', e => {
  e.target.classList.add('drag-over')
})
dropZone.addEventListener('dragover', e => {
  e.preventDefault()
})
dropZone.addEventListener('dragleave', e => {
  e.target.classList.remove('drag-over')
})
dropZone.addEventListener('drop', e => {
  e.target.classList.remove('drag-over')
  e.preventDefault()
  const files = e.dataTransfer.files
  console.log(files)
})

// 间接触发 click 事件
const handleClick = () => {
  const uploadEl = document.getElementById('upload-file-element1')
  uploadEl.click()
}
