# mysql

## docker 部署

> 文档：https://hub.docker.com/_/mysql

```sh
docker container run --name <container_name> -p 3306:3306 -v <volume_name>:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=<your_pwd> -d mysql:latest
```
