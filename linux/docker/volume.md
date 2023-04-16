# Docker 数据卷（Volume）

数据卷（Volume）是在容器内部存储数据的一种方式。

## 常用命令

```sh
docker volume create [OPTIONS] [VOLUME] # 创建一个新的 volume

docker volume ls [OPTIONS] # 列出所有的 volume

docker volume inspect [OPTIONS] VOLUME [VOLUME...] # 查看指定 volume 详细信息

docker volume rm VOLUME [VOLUME...] # 删除一个或多个 volume

docker volume prune [OPTIONS] # 删除未被使用的数据卷
```

在使用 `docker run` 命令启动容器时，可以通过 `-v` 参数或 `--mount` 参数来挂载数据卷。
