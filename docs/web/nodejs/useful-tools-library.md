# 一些好用的工具库

## nodemon

nodemon 是一个工具，可在检测到目录中的文件更改时自动重新启动节点应用程序，从而帮助开发基于 Node.js 的应用程序。

```sh
npm install -g nodemon
```

### 启动一个服务

```sh
nodemon app.js
```

查看更多：<https://github.com/remy/nodemon>

## mkcert

无需 OpenSSL 创建自签名 tls 证书。

```sh
npm install -g mkcert
```

### 创建证书颁发机构

```sh
mkcert create-ca
```

### 创建证书

```sh
mkcert create-cert
```

查看更多：<https://github.com/Subash/mkcert>
