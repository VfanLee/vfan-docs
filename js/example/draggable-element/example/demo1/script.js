const dragModal = document.querySelector('#drag-modal')
const dragModalHeader = dragModal.querySelector('.modal-header')

let offsetX
let offsetY
let isDragging = false

function handleModalDragStart(e) {
  isDragging = true
  offsetX = e.clientX - dragModal.offsetLeft
  offsetY = e.clientY - dragModal.offsetTop
}

function handleModalDragging(e) {
  if (isDragging) {
    let newX = e.clientX - offsetX
    let newY = e.clientY - offsetY

    let screenWidth = window.innerWidth
    let screenHeight = window.innerHeight

    let modalWidth = dragModal.offsetWidth
    let modalHeight = dragModal.offsetHeight

    // 注意：以下 / 2 是因为 css 设置了 transform: translate(-50%, -50%)

    // 确保模态框不会超出左边界
    if (newX < modalWidth / 2) {
      newX = modalWidth / 2
    }
    // 确保模态框不会超出右边界
    else if (newX + modalWidth / 2 > screenWidth) {
      newX = screenWidth - modalWidth / 2
    }

    // 确保模态框不会超出上边界
    if (newY < modalHeight / 2) {
      newY = modalHeight / 2
    }
    // 确保模态框不会超出下边界
    else if (newY + modalHeight / 2 > screenHeight) {
      newY = screenHeight - modalHeight / 2
    }

    // 设置模态框的位置
    dragModal.style.left = newX + 'px'
    dragModal.style.top = newY + 'px'
  }
}

function handleModalDragEnd(e) {
  isDragging = false
}

dragModalHeader.addEventListener('mousedown', handleModalDragStart)
dragModalHeader.addEventListener('touchstart', function (e) {
  const touch = e.touches[0]
  handleModalDragStart(touch)
})

document.addEventListener('mousemove', handleModalDragging)
dragModalHeader.addEventListener('touchmove', function (e) {
  const touch = e.touches[0]
  handleModalDragging(touch)
})

document.addEventListener('mouseup', handleModalDragEnd)
document.addEventListener('touchend', handleModalDragEnd)
