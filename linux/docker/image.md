# Docker 镜像（Image）

Docker 镜像是一个只读模板，用于创建 Docker 容器。它包含了若干个文件系统层和一个容器启动所需的配置参数等信息，可以看作是容器的静态实体。镜像可以从 Docker Hub 或者本地构建的 Dockerfile 中获取。

```sh
docker image ls # 列出本机 docker 镜像
docker image ls -q # 列出本机 docker 镜像id
docker image inspect <image> # 查看某个镜像详细信息
docker image rm <image> # 删除某个镜像
docker image pull <image> # 从 Docker Hub 或者其他镜像仓库拉取镜像。
docker image push <image_name> # 推送一个名为 <image_name> 的镜像到服务器。
docker image build -f <dockerfile> -t <image_name> <path> # 在 <path> 目录下加载名为 <dockerfile> 的文件来构建名为 <image_name> 的镜像。
docker image load -i <image_package> # 导入名为 <image_package> 的镜像包
docker image save <image> -o <image_package> # 将 <image> 镜像导出为 <image_package> 的镜像包
```
