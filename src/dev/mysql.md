# 安装 MySQL

## Docker

[docker 镜像](https://hub.docker.com/_/mysql)

```sh
docker container run -d \
                     --name mysql-server \
                     -p 3306:3306 \
                     -v /app/mysql:/var/lib/mysql \
                     -e MYSQL_ROOT_PASSWORD=vfanlee \
                     --restart=always \
                     mysql:latest
```
