# Docker 网络（Network）

Docker Network 是用于 Docker 容器之间的通信的机制。

## 常用命令

```sh
# List networks
docker network ls [OPTIONS]

# Display detailed information on one or more networks
docker network inspect [OPTIONS] NETWORK [NETWORK...]

# Create a network
docker network create [OPTIONS] NETWORK

# Connect a container to a network
docker network connect [OPTIONS] NETWORK CONTAINER

# Disconnect a container from a network
docker network disconnect [OPTIONS] NETWORK CONTAINER

# Remove one or more networks
docker network rm NETWORK [NETWORK...]

# Remove all unused networks
docker network prune [OPTIONS]
```

## bride / host / none

- **bridge** 网络是默认网络，它在 Docker 安装时自动创建。当容器在该网络上运行时，它们会被分配一个 IP 地址，可以通过容器名称或 IP 地址进行访问。此外，容器之间也可以相互访问。

- **host** 网络允许容器与主机共享网络命名空间，这意味着容器使用主机上的 IP 地址，并且不会分配自己的 IP 地址。这使得容器可以直接与主机进行通信，而无需进行端口映射。但是，此网络无法让容器之间相互访问。

- **none** 网络表示容器没有连接到任何网络。在这种情况下，容器必须使用 --network 标志显式指定网络。这通常用于某些特定的应用场景，例如在不希望容器访问外部网络的情况下使用。
