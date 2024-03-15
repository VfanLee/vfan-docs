const puppeteer = require('puppeteer')

const iPhone4 = puppeteer.KnownDevices['iPhone 4']
const iPhone5 = puppeteer.KnownDevices['iPhone 5']
const iPhone6 = puppeteer.KnownDevices['iPhone 6']
const iPhone6plus = puppeteer.KnownDevices['iPhone 6 Plus']

const devices = [iPhone4, iPhone5, iPhone6, iPhone6plus]

;(async () => {
  const browser = await puppeteer.launch({ headless: false, slowMo: 100 })

  const page = await browser.newPage()

  await page.goto('https://www.google.com')

  for (const d of devices) {
    await page.emulate(d)
    await page.screenshot({ path: `${d.name}.png`, type: 'png', fullPage: true })
  }

  await browser.close()
})()
