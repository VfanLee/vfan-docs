# Puppeteer

> 当前版本：22.4.x

## 介绍

[Puppeteer](https://pptr.dev/) 是一个 Node.js 库，它提供了一个高级 API，可通过 DevTools 协议控制 Chrome/Chromium 浏览器。Puppeteer 默认情况下以无头模式运行，但也可以配置为以全功能（“带头”）的 Chrome/Chromium 运行。

- 生成网页的屏幕截图和 PDF 文件。
- 爬取单页面应用 (SPA) 并生成预渲染内容（即 “服务器端渲染 (SSR)”）。
- 自动化表单提交、UI 测试、键盘输入等操作。
- 使用最新的 JavaScript 和浏览器功能创建自动化测试环境。
- 捕获网站的性能分析时间轴，帮助诊断性能问题。
- 测试 Chrome 扩展程序。

## Configuration

> [Configuration](https://pptr.dev/api/puppeteer.configuration)

### Configuration files

> [Configuration files](https://pptr.dev/guides/configuration#configuration-files)

puppeteer 支持多种类类型的配置文件，如下：

- `.puppeteerrc.cjs`
- `.puppeteerrc.js`
- `.puppeteerrc (YAML/JSON)`
- `.puppeteerrc.json`
- `.puppeteerrc.yaml`
- `puppeteer.config.js`
- `puppeteer.config.cjs`
- `package.json` 指定 `puppeteer`

当配置不生效时，重新安装 puppeteer 即可生效。

## Browser

> [browser](https://pptr.dev/api/puppeteer.browser)

### 开启一个浏览器

> [PuppeteerNode.launch()](https://pptr.dev/api/puppeteer.puppeteernode.launch)

```js
const browser = await puppeteer.launch()
```

### Launch Options

> [PuppeteerLaunchOptions](https://pptr.dev/api/puppeteer.puppeteerlaunchoptions)

- **product**：指定启动的浏览器类型，默认为 chrome，显式指定会覆盖 `puppeteer.config.js` 中 `defaultProduct` 配置。
- **protocol**：指定 Puppeteer 与浏览器通信时使用的协议。
  - 用于访问浏览器中的各种功能，例如：
    - 导航到指定的 URL
    - 获取页面的标题和内容
    - 执行 JavaScript 代码
    - 模拟用户输入
    - 调试 JavaScript 代码
  - protocol 有两种类型：
    - **cdp**: Chrome DevTools 协议是一种用于控制 Chrome 和 Chromium 的协议。这是 Puppeteer 默认使用的协议。
    - **webDriverBiDi**: WebDriver BiDi 协议是一种用于控制 Firefox 的协议。
    - 在大多数情况下，使用 cdp 协议是最佳选择。但是，如果您需要使用 Puppeteer 控制 Firefox，则需要使用 webDriverBiDi 协议。

## Page

> [Page class](https://pptr.dev/api/puppeteer.page)

### 开启一个新页面

```js
const page = await browser.newPage()
```

## 调试

### 适用于所有情况的调试方法

#### 无头模式

无头模式指 Puppeteer 在没有 GUI 的情况下运行。

```js
const browser = await puppeteer.launch({
  headless: false, // 关闭无头模式
})
```

#### 减慢操作

```js
const browser = await puppeteer.launch({
  headless: false,
  slowMo: 250, // 减慢操作 250ms
});
```

### 客户端代码的调试方法

#### 捕获 `console.*` output

```js
page.on('console', msg => console.log('PAGE LOG:', msg.text()));

await page.evaluate(() => console.log(`url is ${location.href}`));
```

#### 在浏览器中使用 `debugger`

1. 启动 Puppeteer 时将 devtools 设置为 true。

    ```js
    const browser = await puppeteer.launch({devtools: true})
    ```

2. 在要调试的任何客户端代码中添加调试器，例如：

    ```js

    await page.evaluate(() => {
      debugger
    })
    ```
