const puppeteer = require('puppeteer')

;(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 250
  })
  const page = await browser.newPage()

  await page.goto('http://127.0.0.1:5500')

  page.on('console', msg => console.log('PAGE LOG:', msg.text()))

  await page.evaluate(() => console.log(`url is ${location.href}`))

  await browser.close()
})()
