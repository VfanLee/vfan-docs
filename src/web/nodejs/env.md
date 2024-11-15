# Env

`process.env.NODE_ENV` 默认只有两种：`development` 和 `production`。

运行脚本时，可以这样改变环境变量, 在package.json文件的scripts里面添加命令：

```sh
NODE_ENV=production node build.js
```

但是这个命令使用Windows的同学拉下代码后就报错了，因为Windows上面设置的方式不一样

```sh
set NODE_ENV=production node build.js
```

但是不同电脑上不同的设置肯定是不行的呀，这个时候 `cross-env` 赶来救场了。

`cross-env` 可以跨平台的设置和使用环境变量

```sh
cross-env NODE_ENV=production node build.js
```

## node 原生支持 .env

```sh
node --env-file=.env index.js
```

## dotenv

```sh
npm i dotenv
```
