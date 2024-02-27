function switchTheme(type) {
  document.documentElement.dataset['theme'] = type
}

// 初始化主题
switchTheme('dark')

const lightBtn = document.getElementById('theme__btn--light')
const darkBtn = document.getElementById('theme__btn--dark')

lightBtn.addEventListener('click', () => switchTheme('light'))
darkBtn.addEventListener('click', () => switchTheme('dark'))
