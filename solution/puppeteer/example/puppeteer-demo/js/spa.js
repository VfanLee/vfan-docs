const { error } = require('console')
const fs = require('fs')
const puppeteer = require('puppeteer')

async function main() {
  const browser = await puppeteer.launch({ headless: false })
  const page = await browser.newPage()

  // 访问 SPA 页面
  await page.goto('https://www.ulearning.app')

  // 等待页面加载完成
  await page.waitForSelector('.copyright')

  // 获取页面内容
  const html = await page.evaluate(() => {
    return document.documentElement.outerHTML
  })

  // 保存 HTML 代码
  fs.writeFile('index.html', html, err => {
    if (err) {
      throw err
    }
  })

  await browser.close()
}

main()
