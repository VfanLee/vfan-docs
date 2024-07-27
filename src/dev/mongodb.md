# 安装 MongoDB

## Docker

[docker 镜像](https://hub.docker.com/_/mongo)

```sh
docker container run -d \
                     --name mongo-server \
                     -p 27017:27017 \
                     --restart=always \
                     mongo:latest
```
