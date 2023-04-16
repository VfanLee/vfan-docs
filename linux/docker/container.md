# Docker 容器（Container）

Docker 容器是由 Docker 镜像创建的运行实例，具有独立的文件系统、网络和进程空间，可以看作是容器的动态实体。容器是轻量级的，启动时间也很快，可以方便地进行扩展和迁移。

## 1. Docker 容器 vs 虚拟机

Docker 容器和虚拟机都是用于实现应用程序的隔离性和环境独立性的技术。

| #          | Docker 容器                                                                                                     | 虚拟机                                                                                                             |
| ---------- | --------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| 磁盘大小   | 容器不需要运行完整的操作系统，一般为 MB 级别。                                                                  | 操作系统需要运行完整的操作系统，一般为 GB 级别。                                                                   |
| 资源利用率 | 容器不需要运行完整的操作系统，可以共享主机操作系统的内核，因此占用的资源较少且更加高效。                        | 虚拟机通常需要运行完整的操作系统，并在其中安装和运行所需的软件。这意味着虚拟机需要分配大量的 CPU、内存和存储资源。 |
| 启动时间   | 容器只需要启动应用程序本身，因此启动时间很短（秒级别）。                                                          | 虚拟机需要启动完整的操作系统，因此启动时间较长（分钟级别）。                                                       |
| 性能       | 接近原生。                                                                                                      | 弱于原生。                                                                                                         |
| 隔离性     | 容器将应用程序封装到一个单独的进程中，并使用 Linux 内核提供的各种隔离技术（如命名空间和控制组）来隔离应用程序。 | 虚拟机通过模拟硬件和网络设备来实现应用程序的隔离性。每个虚拟机都具有自己的文件系统、网络配置和用户空间进程。       |
| 安全性     | 容器之间共享操作系统内核，因此如果一个容器被攻击，可能会影响到其他容器。                                        | 虚拟机的安全性通常比容器更高，因为虚拟机之间具有更高的隔离性，攻击一个虚拟机不会影响其他虚拟机。                   |

## 2. container

### 2.1. 基本命令

```sh
docker container ls # 列出运行时容器
docker container ls -a # 列出所有容器
docker container ls -aq # 列出所有容器id
docker container start <container> # 启动容器
docker container restart <container> # 重启容器
docker container stop <container> # 停止容器
docker container stop -f <container> # 强制停止容器
docker container rm <container> # 删除容器
docker container rm -f <container> # 强制删除容器
docker container prune <container> # 删除所有处于停止状态的容器
docker container prune -f <container> # 强制删除所有处于停止状态的容器
docker container logs <container> # 打印日志输出
docker container logs -f <container> # 实时跟踪（follow）日志输出
docker container attach <container> # 以 attach 模式进入正在运行的容器中
docker container exec -it <container> bash # 以交互式 shell 方式进入正在运行的容器中
docker container top <container> # 显示容器正在运行的进程
docker container commit <container> <image_name> # 将容器保存为新的镜像
```

### 2.2. container run

`docker container run` 在执行时，会首先查看本机是否有指定镜像，如果没有，则会去 Docker Hub 仓库中寻找。

以下是 `container run` 常用参数：

- `-d`, `--detach`: 以 detach 模式运行容器。
- `-i`：以交互模式（interactive）运行容器。
- `-t`：为容器分配一个伪终端（pseudo-tty）。
- `-p`, `--publis`: 将主机上的端口映射到容器内部的端口上。
- `-v`, `--volume`: 将主机上的目录或文件挂载到容器内部。
- `-e`: 设置环境变量。
- `--name`: 为容器指定名称。
- `--network`: 为容器分配网络连接。
- `--rm`：容器退出后立即删除。
- `--restart`：设置容器在退出时自动重启。

```sh
# 以 attach 模式创建并启动 nginx 容器
docker container run nginx

# 以 detach 模式创建并启动 nginx 容器
docker container run -d nginx

# 启动一个交互式的 Ubuntu 容器，并在其中运行 Bash shell
docker container run -it ubuntu bash

# 启动一个 Nginx 容器，并将容器内的 80 端口映射到主机的 8080 端口
docker container run -p 8080:80 nginx

# 启动一个 Nginx 容器，并将 /home/user/data 目录挂载到容器内部的 /data 目录
docker container run -v /home/user/data:/data nginx

# 启动一个 MySQL 容器，并设置一个名为 MYSQL_ROOT_PASSWORD 的环境变量
docker container run -e "MYSQL_ROOT_PASSWORD=password" mysql
```
