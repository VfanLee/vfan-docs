# 环境变量

## 环境变量

- **定义环境变量**：使用 `export` 命令将变量设置为环境变量，例如：`export MY_ENV_VARIABLE="This is an environment variable"`。
- **读取环境变量**：与本地变量相同，使用 `$` 符号，例如：`echo $HOME`。
- **删除本地变量**：与本地变量相同，使用 `unset` 命令，例如：`unset HOME`。
- **全局范围**：环境变量在整个shell会话中都可用，包括子进程。

例如：设置临时代理

```sh
export http_proxy="http://your-proxy-server:port"
export https_proxy="http://your-proxy-server:port"
export ftp_proxy="http://your-proxy-server:port"
export no_proxy="localhost,127.0.0.1,localaddress,.localdomain.com"

unset http_proxy
unset https_proxy
unset ftp_proxy
unset no_proxy
```
