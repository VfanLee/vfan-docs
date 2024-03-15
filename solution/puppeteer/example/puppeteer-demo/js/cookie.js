const puppeteer = require('puppeteer')

;(async () => {
  const browser = await puppeteer.launch()

  const page = await browser.newPage()

  await page.setCookie(
    {
      name: 'AUTHORIZATION',
      value: '25BFBD3D2962CA582CEFF988A6CFAB86',
      domain: '.ulearning.app'
    },
    {
      name: 'token',
      value: '25BFBD3D2962CA582CEFF988A6CFAB86',
      domain: '.ulearning.app'
    },
    {
      name: 'USER_INFO',
      value: '%7B%22authorization%22%3A%2225BFBD3D2962CA582CEFF988A6CFAB86%22%2C%22availableRoles%22%3A%5B%7B%22baseRoleId%22%3A8%2C%22isChosen%22%3Atrue%2C%22redirectUrl%22%3A%22https%3A%2F%2Fwww.ulearning.app%2Fulearning%2Findex.html%23%2Findex%2FcourseList%22%2C%22roleId%22%3A8%2C%22roleName%22%3A%22Course%20Teacher%22%7D%5D%2C%22firstLogin%22%3A0%2C%22headimage%22%3A%22https%3A%2F%2Fcourseweb.ulearning.app%2Fcommon%2Fimg%2FdefaultHeaderLg.png%22%2C%22institutionId%22%3A%22undefined%22%2C%22loginName%22%3A%22liyuanfantea1%22%2C%22name%22%3A%22liyuanfantea1%22%2C%22orgHome%22%3A%22demo.ulearning.app%22%2C%22orgId%22%3A9139%2C%22orgLogo%22%3A%22%22%2C%22orgName%22%3A%22Demo%22%2C%22roleId%22%3A8%2C%22secondDomain%22%3A%22demo%22%2C%22sex%22%3A%221%22%2C%22userId%22%3A6735395%2C%22uversion%22%3A2%7D',
      domain: '.ulearning.app'
    }
  )
  await page.goto('https://www.ulearning.app/ulearning/index.html#/index/courseList?secondDomain=demo')

  await page.waitForSelector('.self-course-list')

  await page.screenshot({
    path: 'courselist.png',
    type: 'png',
    fullPage: true
  })

  await browser.close()
})()
