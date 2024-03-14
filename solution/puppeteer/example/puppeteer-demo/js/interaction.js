const puppeteer = require('puppeteer')

async function main() {
  const browser = await puppeteer.launch({ headless: false })
  const page = await browser.newPage()

  await page.goto('https://www.ulearning.app')

  await page.waitForSelector('.login')
  await page.click('.login')
  await page.type('#userLoginName', 'olivertea')
  await page.type('#userPassword', 'wenhua123')
  await page.click('.btn-confirm')
  await page.waitForNavigation()

  await browser.close()
}

main()
