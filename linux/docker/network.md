# Docker 网络（Network）

## 常用命令

```sh
docker network create [OPTIONS] NETWORK # 创建一个新的网络

docker network ls [OPTIONS] # 列出所有的网络

docker network inspect [OPTIONS] NETWORK [NETWORK...] # 查看指定网络的详细信息

docker network connect [OPTIONS] NETWORK CONTAINER # 将容器连接到指定网络

docker network disconnect [OPTIONS] NETWORK CONTAINER # 将容器从指定网络断开
```

在使用 `docker run` 命令启动容器时，可以通过 `-p` 参数或 `--network` 参数来指定容器的端口映射和网络配置等信息。
