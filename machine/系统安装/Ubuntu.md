# Ubuntu 安装

- Ubuntu 镜像下载地址：https://cn.ubuntu.com/download
- Rufus写盘工具：https://rufus.ie/zh/
- 在虚拟机（如：[VMware Workstation](https://www.vmware.com/products/workstation-pro/workstation-pro-evaluation.html)）中，需要开启桥接模式，不然局域网内无法通过 ssh 连接。
- ssh 工具推荐使用 [finalshell](http://www.hostbuf.com/)

## 1. 服务器版

注意事项：

1. 默认不会分配所有磁盘空间，剩余部分可自行分配。
2. 更换镜像地址，如：`http://mirrors.163.com/ubuntu`（若有代理可忽略）。
3. 开启 ssh 服务，便于以后通过 ssh 客户端连接。

## 2. 桌面版

注意事项：

1. 断网安装（虚拟机中使用 host 模式），不然默认下载文件花费时间很长。
