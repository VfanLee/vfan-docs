// 初始化主题
const head = document.head
const link = document.createElement('link')
link.setAttribute('id', 'theme')
link.setAttribute('rel', 'stylesheet')
link.setAttribute('href', './theme/light.css')
head.appendChild(link)

function switchTheme(type) {
  const theme = document.querySelector('link#theme')
  theme.setAttribute('href', `./theme/${type}.css`)
}

const lightBtn = document.getElementById('theme__btn--light')
const darkBtn = document.getElementById('theme__btn--dark')

lightBtn.addEventListener('click', () => switchTheme('light'))
darkBtn.addEventListener('click', () => switchTheme('dark'))
