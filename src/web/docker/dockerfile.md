# Dockerfile

> [Dockerfile 参考文档](https://docs.docker.com/engine/reference/builder/)

Dockerfile 是一种文本文件，用于描述 Docker 镜像的构建过程。使用 Dockerfile，你可以定义所需的操作系统、安装软件包、配置环境变量、添加文件等操作。通过在 Dockerfile 中指定命令和参数，Docker 可以自动地执行这些操作并生成一个新的镜像。

## Dockerfile 文件

```Dockerfile
# 用于指定所使用的基础镜像。
FROM

# 定义环境变量，用于在构建时传递参数。
ARG
# 定义环境变量，设置容器运行时的环境变量。
ENV

# 设置工作目录。类似于 `cd` 命令，但不同于 `cd` 的是若该目录不存在，则会创建该目录。
WORKDIR
# 用于复制本地文件或目录到容器内。
COPY
# 用于复制本地文件或目录到容器内，会自动解压缩 tar 文件和下载远程文件等。
ADD

# 用于在容器中运行命令。多个 RUN 可使用 `&& \` 连接。
RUN

# 向基础镜像添加一个或多个卷（Volume），并且在容器运行时可以将其绑定到主机的文件系统上。
VOLUME

# 声明容器提供的服务端口号。
EXPOSE

# 指定容器启动时运行的命令。如果指定了多个 CMD，则只有最后一个会被执行。如果 `docker container run` 在启动时指定了其他命令，则会忽略 `CMD` 命令。
CMD
# 指定容器启动时运行的命令。Dockerfile 中只能有一个 `ENTRYPOINT` 指令，且该命令一定会被执行。
ENTRYPOINT
```

### Shell 格式和 Exec 格式

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
