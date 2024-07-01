# Docker Compose

Docker Compose 是一个容器编排工具，它可以帮助用户定义、运行和管理多个 Docker 容器。使用 Docker Compose，你可以通过 YAML 文件中定义多个服务，并指定它们之间的依赖关系、网络配置、环境变量等信息。Docker Compose 可以帮助你启动、停止、重启、删除多个容器，还可以对它们进行监控和管理。

## 安装

```sh
apt install -y docker-compose
```

## 常用命令

```sh
docker-compose [-f <arg>...] [--profile <name>...] [options] [--] [COMMAND] [ARGS...]
docker-compose -f <file_name> <command> # 指定 docker-compose 文件
```

```sh
 # 查看 docker-compose 版本
docker-compose version

# 列出所有在 docker-compose.yml 文件中定义的服务（容器）
docker-compose ps [options] [--] [SERVICE...]
docker-compose ps --services # Display services

# 创建并启动所有在 docker-compose.yml 文件中定义的服务（容器）
docker-compose up [options] [--scale SERVICE=NUM...] [--] [SERVICE...]
docker-compose up -d # Detached mode: Run containers in the background,
docker-compose up --build # Build images before starting containers.

# 构建 docker-compose.yml 文件中定义的所有服务（容器）的镜像
docker-compose build

# 拉取 docker-compose.yml 文件中定义的所有服务（容器）的镜像
docker-compose pull

# 停止并删除所有在 docker-compose.yml 文件中定义的服务（容器）
docker-compose down [options]

# 删除所有在 docker-compose.yml 文件中定义且停止的服务（容器）
docker-compose rm

# 启动所有在 docker-compose.yml 文件中定义的服务（容器）
docker-compose start

# 停止所有在 docker-compose.yml 文件中定义的服务（容器）
docker-compose stop

# 重启所有在 docker-compose.yml 文件中定义的服务（容器）
docker-compose restart

# 显示所有在 docker-compose.yml 文件中定义的服务（容器）的日志
docker-compose logs

# 在正在运行的服务（容器）中执行命令
execdocker-compose exec [options] [-e KEY=VAL...] [--] SERVICE COMMAND [ARGS...]
```

## docker-compose 文件

> docker-compose [参考文档](https://docs.docker.com/compose/compose-file/)  
> Compose file 版本与 Docker Engine [版本对应关系](https://docs.docker.com/compose/compose-file/compose-versioning/#compatibility-matrix)

```yml
version: "3"                # 指定 Compose file 版本

services:                   # 定义服务
  web:                      # 服务1名称，如：web
    depends_on:             # 指定依赖的服务
    image:                  # 指定要使用的 Docker 镜像名称
    build:                  # 通过本地 Dockerfile 构建镜像
      context:              # 上下文路径
      dockerfile:           # 指定构建镜像的 Dockerfile 文件名
    environment:            # 相当于 docker run -e
    volumes:                # 相当于 docker run -v
    ports:                  # 相当于 docker run -p
    networks:               # 相当于 docker run --network
    command:                # 相当于 docker run <command>
  db:                       # 服务2名称，如：db

volumes:                    # 相当于 docker volume create
networks:                   # 相当于 docker network create
```

## 前端后分离示例

Dockerfile.web（Vue.js）

```Dockerfile
ARG NODE_VERSION=18-alpine

FROM node:$NODE_VERSION

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . .

CMD ["npm", "run", "dev"]
```

Dockerfile.api（Node.js）

```Dockerfile
ARG NODE_VERSION=18-alpine

FROM node:$NODE_VERSION

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . .

CMD ["node", "server.js"]
```

docker-compose.yml

```yml
version: "3"

services:
  web: # 前端服务
    build:
      context: ./web
      dockerfile: Dockerfile.web
    ports:
      - "8080:8080"
    networks:
      - webnet
    restart: always
    depends_on:
      - api

  api: # 后端服务
    build:
      context: ./api
      dockerfile: Dockerfile.api
    ports:
      - "3000:3000"
    environment:
      - DB_HOST=db
      - DB_USER=root
      - DB_PASSWORD=root
      - DB_NAME=vue_node_mysql
      - REDIS_HOST=redis
    networks:
      - webnet
    depends_on:
      - db
      - redis

  db: # 数据库服务
    image: mysql:5.7
    environment:
      - MYSQL_ROOT_PASSWORD=root
      - MYSQL_DATABASE=vue_node_mysql
      - MYSQL_USER=root
      - MYSQL_PASSWORD=root
    volumes:
      - db-data:/var/lib/mysql
    networks:
      - webnet

  redis: # 缓存服务
    image: redis
    networks:
      - webnet

volumes:
  db-data:

networks:
  webnet:
```
