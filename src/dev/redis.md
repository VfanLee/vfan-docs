# Redis

## Docker

[docker 镜像](https://hub.docker.com/_/redis)

```sh
docker container run -d \
                     --name redis-server \
                     -p 6379:6379 \
                     --restart=always \
                     redis:latest
```
