# SSL 证书申请

## 1. Acme 脚本申请证书

中文文档：https://github.com/acmesh-official/acme.sh/wiki/%E8%AF%B4%E6%98%8E

### 1.1. 准备工作

1. 申请一个域名。
1. 将域名托管到 Cloudflare。

### 1.2. 安装 Acme 脚本

```bash
# 安装前置插件
apt update -y
apt install -y curl
apt install -y socat

# 安装 Acme 脚本
curl https://get.acme.sh | sh -s email=example@mail.com
```

### 1.3. 方式一：80 端口空闲的验证申请

确保服务器 80 端口未被使用！

```bash
~/.acme.sh/acme.sh --issue -d test.example.com --standalone
```

### 1.4. 安装证书到指定文件夹

默认生成的证书都放在安装目录下: `~/.acme.sh/`, **请不要直接使用此目录下的证书文件**！请使用 `--install-cert` 命令，证书文件会被copy到相应的位置。

> 没有相应文件夹时，自行创建。

```bash
~/.acme.sh/acme.sh --installcert -d test.example.com --key-file /root/ssl_example.com/test/private.key --fullchain-file /root/ssl_example.com/test/cert.crt
~/.acme.sh/acme.sh --install-cert -d test.example.com --key-file /root/ssl_example.com/test/private.key --fullchain-file /root/ssl_example.com/test/cert.crt
```

上面的 `/root/private.key` 以及 `/root/cert.crt` 是把密钥和证书安装到 `/root/test` 目录，并改名为 `private.key` 和 `cert.crt`。

### 1.5. 更新证书

目前证书在 60 天以后会自动更新, 你无需任何操作. 今后有可能会缩短这个时间, 不过都是自动的, 你不用关心。

### 1.6. 更新 Acme 脚本

```bash
# 升级 acme.sh 到最新版本
~/.acme.sh/acme.sh --upgrade

# 开启自动升级
~/.acme.sh/acme.sh  --upgrade  --auto-upgrade
```
