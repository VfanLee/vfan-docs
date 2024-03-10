import fs from 'fs'
import puppeteer from 'puppeteer'
;(async () => {
  const browser = await puppeteer.launch({ headless: false })
  const page = await browser.newPage()
  await page.goto('https://www.bilibili.com')

  // 等待页面上的特定元素加载完成
  // await page.waitForSelector('')

  // 页面 title
  const title = await page.title()
  // const title = await page.evaluate(() => document.title)
  console.log(title)

  // 快照
  await page.screenshot({ path: `example.png`, fullPage: true })

  // pdf
  await page.pdf({ path: `example.pdf`, format: 'A4' })

  // 页面 HTML 内容
  const html = await page.content()
  fs.writeFile('page.html', html, err => {
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
  fs.writeFile('courses.json', JSON.stringify(courses), err => {
    if (err) {
      throw err
    }
    console.log('courses.json')
  })

  await browser.close()
})()
