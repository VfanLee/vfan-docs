# 安装 Nginx

## apt-get

```sh
apt install -y nginx
```

Nginx 默认目录

```sh
/var/www/html               # 网站文件存放的地方, 默认只有 Nginx 欢迎页面.

/etc/nginx/                 # Nginx 配置文件目录
├── conf.d                  # 可以在这儿管理 server
├── nginx.conf              # Nginx 的主配置文件

/var/log/nginx/             # Nginx 日志文件
├── access.log              # 每一个访问请求都会默认记录在这个文件中
└── error.log               # 任何 Nginx 的错误信息都会记录到这个文件中
```

## Docker

1. 建立基本目录结构。

    ```sh
    /app/nginx              # 自建 Nginx 目录
    ├── certs
    ├── conf.d
    ├── html
    ├── nginx.conf
    ```

2. 部署容器

    [Nginx 镜像](https://hub.docker.com/_/nginx)

    ```sh
    docker network create nginx-network
    docker container run -d \
                        --name nginx-server \
                        --network nginx-network \
                        --publish 80:80 \
                        --publish 443:443 \
                        --volume /app/nginx/nginx.conf:/etc/nginx/nginx.conf \
                        --volume /app/nginx/conf.d:/etc/nginx/conf.d \
                        --volume /app/nginx/html:/usr/share/nginx/html \
                        --volume /app/nginx/certs:/etc/nginx/certs \
                        --restart=always \
                        nginx:latest
    ```
