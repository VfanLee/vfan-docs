import './css/index.css'
import './css/index.scss'
import './css/iconfont.css'
import add from './js/add'
import sub from './js/sub'

console.log('加法', add(1, 2))
console.log('减法', sub(1, 2))

new Promise(resolve => {
  setTimeout(() => {
    resolve()
  }, 1000)
})

// 点击按钮，动态添加模块
document.querySelector('#btn').addEventListener('click', () => {
  // webpack 魔法命名
  import(/* webpackChunkName: 'tool' */ './js/tool').then(({ foo }) => {
    console.log(foo())
  })
})
