# Linux - Ubuntu

## 安装 Ubuntu

- Ubuntu 镜像下载地址：https://cn.ubuntu.com/download
- Rufus写盘工具：https://rufus.ie/zh/
- 在虚拟机（如：[VMware Workstation](https://www.vmware.com/products/workstation-pro/workstation-pro-evaluation.html)）中，需要开启桥接模式，不然局域网内无法通过 ssh 连接。
- ssh 工具推荐使用 [finalshell](http://www.hostbuf.com/)

流程比较简单，根据提示下一步即可。

### 桌面版

断网安装，不然默认下载文件花费时间很长。

### 服务器版

1. 默认不会分配所有磁盘空间，剩余部分可自行分配。
2. 由于在国内，切记更换镜像地址，如：`http://mirrors.163.com/ubuntu`（若有代理可忽略），不然在安装过程中非常慢。
3. 需要开启 ssh 服务，便于以后通过 ssh 客户端连接。

### 初次安装需要做的一些事

todo1: 配置国内 apt 源。

todo2: 初次 root 密码是随机的，需要重新定义。

```bash
# 1.修改 root 密码
sudo passwd root 
# 2.根据提示，输入当前用户的密码
# 3.根据提示，定义 root 密码
# 4.根据提示，确认 root 密码
# 5.切换到 root
su - root
```

todo3: 安装常用依赖

```bash
apt update -y
apt install -y vim
```

## linux 命令

linux 命令速查：https://wangchujiang.com/linux-command/

### 打包/压缩

`tar` 是 linux 中的打包命令。

```bash
# tar格式（该格式仅仅打包，不压缩）
tar -cvf [目标文件名].tar [原文件名/目录名] # 打包
tar -xvf [原文件名].tar                   # 解包

# tar.gz格式
tar -zcvf [目标文件名].tar.gz [原文件名/目录名] # 打包并压缩
tar -zxvf [原文件名].tar.gz                   # 解压并解包
```

## Ubuntu 命令

### apt

`apt` 是 **Ubuntu** 的包管理工具。

> **注意**：
>
> - 虽然 `apt` 是一个命令行工具，但只能用于交互方式使用，在脚本中，应使用 `apt-get`。

- **安装包**

```bash
apt install app1          # 安装一个包
```

- **删除包**

```bash
apt remove app1          # 删除一个包
apt purge app1          # 删除一个包及其配置文件
```

添加 `--purge` 选项时，`apt remove` 也会删除包配置文件。

- **更新包索引**

APT 包索引本质上是一个数据库，其中包含文件 `/etc/apt/sources.list` 和 `/etc/apt/sources.list.d` 目录中定义的存储库中的可用包。

```bash
apt update
```

- **升级包**

```bash
apt update
```

apt 的命令操作记录在 `var/log/dpkg.log` 日志文件中。

### ufw

`ufw` 是 **Ubuntu** 默认的防火墙组件。

```bash
ufw enable            # 启动防火墙
ufw disable           # 关闭防火墙
ufw status            # 查看状态
ufw allow 8388        # 开放端口
ufw deny 8388         # 拒绝端口
ufw delete allow 8388 # 删除规则
```
