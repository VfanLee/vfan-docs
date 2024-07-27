# Docker 数据卷（Volume）

Docker Volume 是一个可以在 Docker 容器和宿主机之间共享数据的持久化存储机制。

## 常用命令

```sh
# List volumes
docker volume ls [OPTIONS]

# Display detailed information on one or more volumes
docker volume inspect [OPTIONS] VOLUME [VOLUME...]

# Create a volume
docker volume create [OPTIONS] [VOLUME]

# Remove one or more volumes
docker volume rm VOLUME [VOLUME...]

# Remove all unused local volumes
docker volume prune [OPTIONS]
```
