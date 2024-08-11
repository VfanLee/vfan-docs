# Docker

## 安装 `docker`

```sh
curl -fsSL https://get.docker.com | sh
```

::: details 国内环境

```sh
export DOWNLOAD_URL="https://mirrors.tuna.tsinghua.edu.cn/docker-ce"
curl -fsSL https://get.docker.com | sh
```

:::

## 为 docker 配置镜像地址

1. 修改 docker 守护进程配置文件：

    ```sh
    vi /etc/docker/daemon.json
    ```

2. 添加以下内容：

    ```json
    {
      "registry-mirrors": [ "https://example.com" ]
    }
    ```

## 安装 `docker-compose`

```sh
apt update
apt install docker-compose
```
