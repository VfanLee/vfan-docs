const fs = require('fs')
const puppeteer = require('puppeteer')

async function main() {
  const browser = await puppeteer.launch({ headless: false })
  const page = await browser.newPage()

  await page.goto('https://www.google.com')

  const source = await page.content()

  fs.writeFile('example.html', source, err => {
    if (err) {
      throw err
    }
  })

  await browser.close()
}

main()
