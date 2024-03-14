const puppeteer = require('puppeteer')

;(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  await page.goto('https://www.google.com')

  // 截屏
  await page.screenshot({ path: `google.png`, fullPage: true })

  // pdf
  await page.pdf({ path: 'google.pdf', format: 'A4' })

  await browser.close()
})()
