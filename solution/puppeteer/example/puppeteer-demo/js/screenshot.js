const puppeteer = require('puppeteer')

;(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  await page.goto('https://www.google.com')

  // 截屏
  await page.screenshot({
    path: `example.png`,
    type: 'png',
    fullPage: true
  })

  // pdf
  await page.pdf({
    path: 'example.pdf',
    format: 'A4'
  })

  await browser.close()
})()
