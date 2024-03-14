const puppeteer = require('puppeteer')

;(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    product: 'firefox',
    protocol: 'webDriverBiDi'
  })

  browser.close()
})()
