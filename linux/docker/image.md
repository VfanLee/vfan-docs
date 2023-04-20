# Docker 镜像（Image）

Docker 镜像是一个只读模板，用于创建 Docker 容器。它包含了若干个文件系统层和一个容器启动所需的配置参数等信息，可以看作是容器的静态实体。镜像可以从 Docker Hub 或者本地构建的 Dockerfile 中获取。

## 1. 常用命令

```sh
# List images
docker image ls [OPTIONS] [REPOSITORY[:TAG]]
docker image ls -q # 仅列出镜像 ids

# Display detailed information on one or more images
docker image inspect [OPTIONS] IMAGE [IMAGE...]

# Show the history of an image
docker image history [OPTIONS] IMAGE

# Download an image from a registry
docker image pull [OPTIONS] NAME[:TAG|@DIGEST]

# 通过 Dockerfile 构建镜像
docker buildx build [OPTIONS] PATH | URL | -
docker image build -f nginx-dockerfile -t my_nginx . # 在当前目录下加载名为 nginx-dockerfile 的文件来构建名为 my_nginx 的镜像。

# Remove one or more images
docker image rm [OPTIONS] IMAGE [IMAGE...]

# Remove unused images
docker image prune [OPTIONS]

# Create a tag TARGET_IMAGE that refers to SOURCE_IMAGE
docker image tag SOURCE_IMAGE[:TAG] TARGET_IMAGE[:TAG]

# Upload an image to a registry
docker image push [OPTIONS] NAME[:TAG]
```
