# Dockerfile

> Dockerfile 参考文档：https://docs.docker.com/engine/reference/builder/

Dockerfile 是一种文本文件，用于描述 Docker 镜像的构建过程。使用 Dockerfile，你可以定义所需的操作系统、安装软件包、配置环境变量、添加文件等操作。通过在 Dockerfile 中指定命令和参数，Docker 可以自动地执行这些操作并生成一个新的镜像。

## 命令介绍

- `FROM` 用于指定所使用的基础镜像。
  - 尽量选择官方镜像。
  - 尽量固定 tag 版本，而不是 latest。
  - 选择体积尽量小的镜像。

- `LABEL` 设置镜像的元数据，例如版本、描述等信息。

- `ARG` 定义环境变量，用于在构建时传递参数。
  - `ARG` 可以在镜像 build 的时候通过 `--build-arg` 动态修改参数值。
- `ENV` 定义环境变量，设置容器运行时的环境变量。

- `WORKDIR` 设置工作目录。类似于 `cd` 命令，但不同于 `cd` 的是若该目录不存在，则会创建该目录。

- `COPY` 用于复制本地文件或目录到容器内。
- `ADD` 用于复制本地文件或目录到容器内，但支持比 `COPY` 更多的功能，例如自动解压缩 tar 文件和下载远程文件等。

- `RUN` 用于在容器中运行命令。
  - 多个 RUN 尽量写成一个 RUN，使用 `&& \` 连接。

- `VOLUME` 向基础镜像添加一个或多个卷（Volume），并且在容器运行时可以将其绑定到主机的文件系统上。

- `EXPOSE` 声明容器提供的服务端口号。

- `CMD` 指定容器启动时运行的命令。
  - 如果指定了多个 `CMD`，则只有最后一个会被执行。
  - 如果 `docker container run` 在启动时指定了其他命令，则会忽略 `CMD` 命令。
- `ENTRYPOINT` 指定容器启动时运行的命令。
  - Dockerfile 中只能有一个 `ENTRYPOINT` 指令，且该命令一定会被执行。
  - `ENTRYPOINT` 可以和 `CMD` 联合使用。

## Shell 格式和 Exec 格式

`CMD` 和 `ENTRYPOINT` 同时支持 `shell` 格式和 `Exec` 格式。

<!-- tabs:start -->
<!-- tab:shell 格式 -->
```dockerfile
CMD echo "hello docker"
ENTRYPOINT echo "hello docker"
```

<!-- tab:Exec 格式 -->
```dockerfile
CMD ["echo", "hello docker"]
ENTRYPOINT ["echo", "hello docker"]
```
<!-- tabs:end -->

## 模板

```Dockerfile
# 设置基础镜像
FROM ubuntu:18.04

# 设置元数据
LABEL maintainer="myname"
LABEL version="1.0"

# 定义参数和环境变量
ARG MYAPP_PORT=8080
ENV MYAPP_HOME /usr/local/myapp

# 安装软件包和依赖项
RUN apt-get update && \
    apt-get install -y software-properties-common && \
    add-apt-repository ppa:foo/bar && \
    apt-get update && \
    apt-get install -y myapp && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# 复制文件
COPY index.html $MYAPP_HOME/

# 定义数据卷和暴露端口
VOLUME ["/data"]
EXPOSE $MYAPP_PORT

# 设置启动命令
CMD ["myapp", "--port", "$MYAPP_PORT"]
```
