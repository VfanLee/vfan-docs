# Docker 安装 MySQL

[MySQL 镜像](https://hub.docker.com/_/mysql)

```sh
docker container run -d \
                     --name mysql-container \
                     -p 3306:3306 \
                     -v /app/mysql:/var/lib/mysql \
                     -e MYSQL_ROOT_PASSWORD=<your_pwd> \
                     mysql:latest
```
