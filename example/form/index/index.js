let textValue = 'textValue'
let textareaValue = 'textareaValue'
let radioValue = '2'
let checkboxValue1 = true
let checkboxValue2 = ['2', '3']
let selectValue1 = '2'
let selectValue2 = ['2', '3']

// 单行文本
const textTip = document.querySelector('.text-tip')
const textEl = document.querySelector('.text-el')
textEl.addEventListener('input', e => {
  textValue = e.target.value
  textTip.textContent = textValue
})

// 多行文本
const textareaTip = document.querySelector('.textarea-tip')
const textareaEl = document.querySelector('.textarea-el')
textareaEl.addEventListener('input', e => {
  textareaValue = e.target.value
  textareaTip.textContent = textareaValue
})

// 单选框
const radioTip = document.querySelector('.radio-tip')
const radioEl = document.querySelectorAll('.radio-el')
radioEl.forEach(el => {
  el.addEventListener('change', e => {
    radioValue = e.target.value
    radioTip.textContent = radioValue
  })
})

// 复选框 - 单选
const checkboxTip1 = document.querySelector('.checkbox-tip1')
const checkboxEl1 = document.querySelector('.checkbox-el1')
checkboxEl1.addEventListener('change', e => {
  checkboxValue1 = e.target.checked
  checkboxTip1.textContent = checkboxValue1
})

// 复选框 - 多选
const checkboxTip2 = document.querySelector('.checkbox-tip2')
const checkboxEl2 = document.querySelectorAll('.checkbox-el2')
checkboxEl2.forEach(el => {
  el.addEventListener('change', e => {
    const tmp = []
    document.querySelectorAll('.checkbox-el2').forEach(item => {
      if (item.checked) {
        tmp.push(item.value)
      }
    })
    checkboxValue2 = tmp
    checkboxTip2.textContent = checkboxValue2
  })
})

// 下拉菜单 - 单选
const selectTip1 = document.querySelector('.select-tip1')
const selectEl1 = document.querySelector('.select-el1')
selectEl1.addEventListener('change', e => {
  selectValue1 = e.target.value
  selectTip1.textContent = selectValue1
})

// 下拉菜单 - 多选
const selectTip2 = document.querySelector('.select-tip2')
const selectEl2 = document.querySelector('.select-el2')
selectEl2.addEventListener('change', e => {
  const tmp = []
  selectEl2.querySelectorAll('option').forEach(el => {
    if (el.selected) {
      tmp.push(el.value)
    }
  })
  selectValue2 = tmp
  selectTip2.textContent = selectValue2
})

const init = () => {
  textTip.textContent = textValue
  textEl.value = textValue
  textareaTip.textContent = textareaValue
  textareaEl.value = textareaValue
  radioTip.textContent = radioValue
  radioEl.forEach(el => {
    el.checked = true
  })
  checkboxTip1.textContent = checkboxValue1
  checkboxEl1.checked = checkboxValue1
  checkboxTip2.textContent = checkboxValue2
  checkboxEl2.forEach(el => {
    if (checkboxValue2.includes(el.value)) {
      el.checked = true
    }
  })
  selectTip1.textContent = selectValue1
  selectEl1.value = selectValue1
  selectTip2.textContent = selectValue2
  selectEl2.querySelectorAll('option').forEach(el => {
    if (selectValue2.includes(el.value)) {
      el.selected = true
    }
  })
}
init()

const printData = () => {
  const data = {
    textValue,
    textareaValue,
    radioValue,
    checkboxValue1,
    checkboxValue2,
    selectValue1,
    selectValue2
  }

  console.table(data)
}
