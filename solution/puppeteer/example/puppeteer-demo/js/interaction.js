const fs = require('fs')
const puppeteer = require('puppeteer')

;(async () => {
  const browser = await puppeteer.launch({ headless: false, devtools: true })
  const page = await browser.newPage()

  await page.goto('https://www.google.com')

  await page.waitForSelector('.gLFyf')
  await page.waitForSelector('.gNO89b')

  await page.evaluate(() => {
    document.querySelector('.gLFyf').value = 'puppeteer'
    document.querySelector('.gNO89b').click()
  })

  await page.waitForNavigation()

  const results = await page.$$eval('.N54PNb.BToiNc.cvP2Ce', es => {
    return es.map(el => ({
      title: el.querySelector('.LC20lb.MBeuO.DKV0Md').innerText,
      descript: el.querySelector('.VwiC3b.yXK7lf.lVm3ye.r025kc.hJNv6b.Hdw6tb').innerText,
      url: el.querySelector('a[jsname=UWckNb]').href
    }))
  })

  fs.writeFile('search.json', JSON.stringify(results), err => {
    if (err) {
      throw err
    }
  })

  await browser.close()
})()
