const puppeteer = require('puppeteer')

;(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  await page.setRequestInterception(true)

  page.on('request', interceptedRequest => {
    if (interceptedRequest.isInterceptResolutionHandled()) {
      return
    }

    if (interceptedRequest.url().endsWith('.avif') || interceptedRequest.url().endsWith('.webp')) {
      interceptedRequest.abort()
    } else {
      interceptedRequest.continue()
    }
  })

  await page.goto('https://www.bilibili.com')

  await page.screenshot({ path: 'bilibili.png', fullPage: true })

  await browser.close()
})()
