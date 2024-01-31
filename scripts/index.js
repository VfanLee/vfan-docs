const { exec } = require('child_process')

const args = process.argv

const params = {
  path: 'example'
}
for (let i = 2; i < args.length; i++) {
  const arg = args[i]
  params[arg.split('=')[0]] = arg.split('=')[1]
}

const npmScriptCommand = `docsify g ${params.path}`
exec(npmScriptCommand, (error, stdout, stderr) => {
  if (error) {
    console.error(error)
    return
  }
  console.log(stdout)
})
