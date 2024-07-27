# Docker 容器（Container）

Docker 容器是由 Docker 镜像创建的运行实例，具有独立的文件系统、网络和进程空间，可以看作是镜像的动态实体。容器是轻量级的，启动时间也很快，可以方便地进行扩展和迁移。

## Docker 容器 vs 虚拟机

Docker 容器和虚拟机都是用于实现应用程序的隔离性和环境独立性的技术。

| #          | Docker 容器                                                                                                     | 虚拟机                                                                                                             |
| ---------- | --------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| 磁盘大小   | 容器不需要运行完整的操作系统，一般为 MB 级别。                                                                  | 操作系统需要运行完整的操作系统，一般为 GB 级别。                                                                   |
| 资源利用率 | 容器不需要运行完整的操作系统，可以共享主机操作系统的内核，因此占用的资源较少且更加高效。                        | 虚拟机通常需要运行完整的操作系统，并在其中安装和运行所需的软件。这意味着虚拟机需要分配大量的 CPU、内存和存储资源。 |
| 启动时间   | 容器只需要启动应用程序本身，因此启动时间很短（秒级别）。                                                        | 虚拟机需要启动完整的操作系统，因此启动时间较长（分钟级别）。                                                       |
| 性能       | 接近原生。                                                                                                      | 弱于原生。                                                                                                         |
| 隔离性     | 容器将应用程序封装到一个单独的进程中，并使用 Linux 内核提供的各种隔离技术（如命名空间和控制组）来隔离应用程序。 | 虚拟机通过模拟硬件和网络设备来实现应用程序的隔离性。每个虚拟机都具有自己的文件系统、网络配置和用户空间进程。       |
| 安全性     | 容器之间共享操作系统内核，因此如果一个容器被攻击，可能会影响到其他容器。                                        | 虚拟机的安全性通常比容器更高，因为虚拟机之间具有更高的隔离性，攻击一个虚拟机不会影响其他虚拟机。                   |

## container

### 常用命令

```sh
# List containers
docker container ls [OPTIONS]
docker container ls -a # 列出所有容器
docker container ls -aq # 列出所有容器id

# Display detailed information on one or more containers
docker container inspect [OPTIONS] CONTAINER [CONTAINER...]

# Execute a command in a running container
docker container exec [OPTIONS] CONTAINER COMMAND [ARG...]
docker container exec -it CONTAINER sh # 以交互式 shell 方式进入正在运行的容器中

# Remove one or more containers
docker container rm [OPTIONS] CONTAINER [CONTAINER...]

# Remove all stopped containers
docker container prune [OPTIONS]

# Start one or more stopped containers
docker container start [OPTIONS] CONTAINER [CONTAINER...]

# Restart one or more containers
docker container restart [OPTIONS] CONTAINER [CONTAINER...]

# Stop one or more running containers
docker container stop [OPTIONS] CONTAINER [CONTAINER...]

# Fetch the logs of a container
docker container logs [OPTIONS] CONTAINER

# Attach local standard input, output, and error streams to a running container
docker container attach [OPTIONS] CONTAINER

# Display the running processes of a container
docker container top CONTAINER [ps OPTIONS]
docker container top my-container ps -ef

# Create a new image from a container's changes
docker container commit [OPTIONS] CONTAINER [REPOSITORY[:TAG]]
```

### docker container run

Create and run a new container from an image

```sh
docker container run [OPTIONS] IMAGE [COMMAND] [ARG...]
```

- OPTIONS：
  - `-d, --detach`: 以 detach 模式运行容器。
  - `-i, --interactive`：以交互模式（interactive）运行容器。
  - `-t, --tty`：为容器分配一个伪终端（pseudo-tty）。
  - `-p, --publish list`: 将主机上的端口映射到容器内部的端口上。
  - `--network network`: 为容器分配网络。
  - `-v, --volume list`: 将主机上的目录或文件挂载到容器内部。
  - `-e, --env list`: 设置环境变量。
  - `--name string`: 为容器指定名称。
  - `--restart`：容器退出时应用的重新启动策略。
    - always
    - no（默认）
    - on-failure
    - on-failure
    - unless-stopped
  - `--rm`：容器退出后立即删除。
