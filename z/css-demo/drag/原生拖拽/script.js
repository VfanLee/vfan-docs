const draggable_list = document.querySelector('#draggable-list')
const check = document.querySelector('#check')

const richestPeople = [
  'Emma',
  'Olivia',
  'Ava',
  'Isabella',
  'Sophia',
  'Mia',
  'Charlotte',
  'Amelia',
  'Evelyn',
  'Abigail'
]

const listItems = []

let dragStartIndex

createList()

function createList() {
  ;[...richestPeople]
    .map(a => ({ value: a, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(a => a.value)
    .forEach((person, index) => {
      const listItem = document.createElement('li')

      listItem.setAttribute('data-index', index)

      listItem.innerHTML = `
      <span class="number">${index + 1}</span>
      <div class="draggable" draggable="true">
        <p class="person-name">${person}</p>
        <i class="fas fa-bars"></i>
      </div>
    `

      listItems.push(listItem)
      draggable_list.appendChild(listItem)
    })

  addEventListeners()
}

function dragStart() {
  // console.log('Event: dragStart')
  dragStartIndex = this.closest('li').getAttribute('data-index')
}

function dragEnter() {
  // console.log('Event: dragEnter')
  this.classList.add('over')
}

function dragLeave() {
  // console.log('Event: dragLeave')
  this.classList.remove('over')
}

function dragOver(e) {
  // console.log('Event: dragOver')
  e.preventDefault()
}

function dragDrop() {
  // console.log('Event: dragDrop')
  const dragEndIndex = +this.getAttribute('data-index')
  console.log(dragEndIndex)
  swapItems(dragStartIndex, dragEndIndex)
  this.classList.remove('over')
}

function swapItems(fromIndex, toIndex) {
  const itemOne = listItems[fromIndex].querySelector('.draggable')
  const itemTwo = listItems[toIndex].querySelector('.draggable')

  listItems[fromIndex].appendChild(itemTwo)
  listItems[toIndex].appendChild(itemOne)
}

function checkOrder() {
  listItems.forEach((item, index) => {
    const personName = item.querySelector('.draggable').innerText

    if (personName !== richestPeople[index]) {
      item.classList.add('wrong')
    } else {
      item.classList.remove('wrong')
      item.classList.add('right')
    }
  })
}

function addEventListeners() {
  const draggables = document.querySelectorAll('.draggable')
  const dragListItems = document.querySelectorAll('.draggable-list li')

  draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', dragStart)
  })

  dragListItems.forEach(item => {
    item.addEventListener('dragenter', dragEnter)
    item.addEventListener('dragleave', dragLeave)
    item.addEventListener('dragover', dragOver)
    item.addEventListener('drop', dragDrop)
  })
}

check.addEventListener('click', checkOrder)
