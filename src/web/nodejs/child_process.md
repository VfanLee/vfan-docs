# child_process

`child_process` 模块可以在 Node.js 中执行外部命令（比如终端命令），适合在构建脚本中调用编译、复制文件等命令。这个模块的核心方法有三种：

- `exec`：用于执行简单的命令，返回完整的命令输出。
- `execSync`：和 exec 类似，但以同步方式运行，适合在脚本中逐步执行命令。
- `spawn`：用于处理流数据的场景，可以监听输出，非常适合执行持续输出的命令（如启动服务器）。

## 使用 exec 执行命令（异步）

```js
const { exec } = require('child_process')

// 执行 `pnpm build` 命令
exec('pnpm build', (error, stdout, stderr) => {
  if (error) {
    console.error(`执行出错: ${error}`)
    return
  }
  console.log(`标准输出: ${stdout}`)
  console.error(`标准错误输出: ${stderr}`)
})
```

说明：

- `exec` 执行命令后立即返回。执行结果通过回调函数接收，适合需要获取完整输出的场景。
- `stdout` 和 stderr 分别包含命令的标准输出和错误输出。

## 使用 execSync 执行命令（同步）

```js
const { execSync } = require('child_process')

try {
  // 同步执行 `pnpm build` 命令
  const output = execSync('pnpm build', { stdio: 'inherit' })
  console.log(`命令输出: ${output}`)
} catch (error) {
  console.error(`执行出错: ${error}`)
}
```

说明：

- `execSync` 同步执行命令，直到命令结束才继续执行后续代码，适合依赖前一命令结果的情况。
- `{ stdio: 'inherit' }` 会将子进程的输出和父进程同步。

## 使用 spawn 执行命令（异步、适合流式输出）

spawn 方法更灵活，可监听命令的实时输出和错误，适合处理大量输出或持续运行的命令（如启动服务器）。

```js
const { spawn } = require('child_process')

// 执行 `pnpm build` 命令
const child = spawn('pnpm', ['build'])

child.stdout.on('data', data => {
  console.log(`输出: ${data}`)
})

child.stderr.on('data', data => {
  console.error(`错误输出: ${data}`)
})

child.on('close', code => {
  console.log(`进程退出，退出码: ${code}`)
})
```

说明：

- `spawn` 的第一个参数是命令名，后面的参数是一个数组，包含命令的参数。
- 可以通过监听 `data` 事件获取实时输出。
