# Docker Compose

Docker Compose 是一个容器编排工具，它可以帮助用户定义、运行和管理多个 Docker 容器。使用 Docker Compose，你可以通过 YAML 文件中定义多个服务，并指定它们之间的依赖关系、网络配置、环境变量等信息。Docker Compose 可以帮助你启动、停止、重启、删除多个容器，还可以对它们进行监控和管理。

## 1. 安装

```sh
apt install -y docker-compose
```

## 2. 常用命令

```sh
docker-compose [-f <arg>...] [--profile <name>...] [options] [--] [COMMAND] [ARGS...]
```

```sh
docker-compose -v # 查看 docker-compose 版本
docker-compose pull # 拉取 docker-compose.yml 文件中定义的所有服务（容器）的镜像。
docker-compose build # 构建 docker-compose.yml 文件中定义的所有服务（容器）的镜像。
docker-compose up # 创建并启动所有在 docker-compose.yml 文件中定义的服务（容器）。
docker-compose down # 停止并删除所有在 docker-compose.yml 文件中定义的服务（容器）。
docker-compose start # 启动所有在 docker-compose.yml 文件中定义的服务（容器）。
docker-compose stop # 停止所有在 docker-compose.yml 文件中定义的服务（容器）。
docker-compose restart # 重启所有在 docker-compose.yml 文件中定义的服务（容器）。
docker-compose ps # 列出所有在 docker-compose.yml 文件中定义的服务（容器）。
docker-compose rm # 删除所有在 docker-compose.yml 文件中定义且停止的服务（容器）。
docker-compose logs # 显示所有在 docker-compose.yml 文件中定义的服务（容器）的日志。
docker-compose exec # 在正在运行的服务（容器）中执行命令。
```

## 3. docker-compose 文件

> docker-compose 参考文档：https://docs.docker.com/compose/compose-file/

```yml
version: "3.8" # docker-compose 版本

services: # 定义运行的服务
  servicename: # 服务1名称
    build: # 通过本地 Dockerfile 构建镜像
    image: # 指定要使用的 Docker 镜像名称
    command: # 相当于 docker run <command>
    environment: # 相当于 docker run -e
    networks: # 相当于 docker run --network
    ports: # 相当于 docker run -p
    volumes: # 相当于 docker run -v
    command: # 指定容器启动时要运行的命令
  servicename2: # 服务2名称
  servicename3: # 服务3名称

volumes: # 相当于 docker volume create
networks: # 相当于 docker network create
```
