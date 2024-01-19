# 安装 Node.js

## Windows

建议使用 [nvm-windows](https://github.com/coreybutler/nvm-windows) 来管理 node 版本。

> nvm-windows 配置文件路径：`INSTALL_PATH/settings.txt`

### nvm 镜像

```sh
nvm node_mirror https://npmmirror.com/mirrors/node/
nvm npm_mirror https://npmmirror.com/mirrors/npm/
```

### nvm 代理

```sh
nvm proxy [url]: Set a proxy to use for downloads. Leave [url] blank to see the current proxy. Set [url] to "none" to remove the proxy.
```

## Linux

建议使用 [nvm](https://github.com/nvm-sh/nvm) 来管理 node 版本。

## npm

> npm 配置文件路径：`~/.npmrc`

### npm 镜像

```sh
npm config set registry https://registry.npmmirror.com
```

### npm 清缓存

```sh
npm cache clear --force
```
