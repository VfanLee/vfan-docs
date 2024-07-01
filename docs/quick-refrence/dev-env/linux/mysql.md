# 安装 MySQL

## Docker

[MySQL 镜像](https://hub.docker.com/_/mysql)

```sh
docker container run -d \
                     --name mysql-server \
                     -p 3306:3306 \
                     -v /app/mysql:/var/lib/mysql \
                     -e MYSQL_ROOT_PASSWORD=vfanlee \
                     --restart=always \
                     mysql:latest
```

::: warning
注意：生产环境不建议在 docker 中运行 MySQL！
:::
