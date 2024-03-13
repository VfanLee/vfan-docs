const { existsSync, mkdirSync, writeFile } = require('fs')
const puppeteer = require('puppeteer')

;(async () => {
  // 启动浏览器并打开一个新的空白页
  const browser = await puppeteer.launch({
    headless: false,
    product: 'firefox',
    protocol: 'webDriverBiDi',
    devtools: true
  })
  const page = await browser.newPage()

  // 页面导航到指定 URL
  await page.goto('https://www.bilibili.com')

  if (!existsSync('output')) {
    mkdirSync('output')
  }

  // 设置屏幕尺寸
  await page.setViewport({ width: 1080, height: 1024 })

  // 等待页面上的特定元素加载完成
  // await page.waitForSelector('')

  // 页面 title
  const title = await page.title()
  // const title = await page.evaluate(() => document.title)
  console.log(title)

  // 屏幕截图
  await page.screenshot({ path: `output/example.png`, fullPage: true })

  // pdf
  await page.pdf({ path: `output/example.pdf`, format: 'A4' })

  // 页面 HTML 内容
  const html = await page.content()
  writeFile('output/page.html', html, err => {
    if (err) {
      throw err
    }
    console.log('page.html')
  })

  // 评估
  const courses = await page.$$eval('.feed-card', elements =>
    elements.map(e => ({
      title: e.querySelector('.bili-video-card__info--tit').textContent,
      img: e.querySelector('.bili-video-card__cover img').src,
      author: e.querySelector('.bili-video-card__info--author').textContent,
      date: e.querySelector('.bili-video-card__info--date').textContent
    }))
  )
  // const courses = await page.evaluate(() =>
  //   Array.from(document.querySelectorAll('.feed-card'), e => ({
  //     title: e.querySelector('.bili-video-card__info--tit').textContent,
  //     img: e.querySelector('.bili-video-card__cover img').src,
  //     author: e.querySelector('.bili-video-card__info--author').textContent,
  //     date: e.querySelector('.bili-video-card__info--date').textContent
  //   }))
  // )
  writeFile('output/courses.json', JSON.stringify(courses), err => {
    if (err) {
      throw err
    }
    console.log('courses.json')
  })

  // await browser.close()
})()
