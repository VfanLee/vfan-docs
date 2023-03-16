# Linux - Ubuntu

## 安装 Ubuntu

### 基本流程

流程比较简单，基本就是根据提示下一步即可。仅记录常见操作：

1. 默认不会分配所有磁盘空间，剩余部分可自行分配。
2. 由于在国内，切记更换镜像地址，如：`http://mirrors.163.com/ubuntu`（若有代理可忽略），不然在安装过程中非常慢。
3. 需要开启 ssh 服务，便于以后通过 ssh 客户端连接。

### 网络配置

1. 虚拟机软件例如：`VirtualBox`、`VMware` …… 需要开启桥接模式，不然局域网内无法通过 ssh 连接。
2. 由于 DHCP 会随机分配 ip，ip 会经常变化，为了稳定方便，需要指定一个固定 ip。

> **tips**:
>
> - `ip addr` 可查看当前网络。

## 基本命令

```bash
poweroff # 关机
reboot # 重启
```

## apt

`apt` 是 **Ubuntu** 的包管理工具。

> **注意**：
>
> - 虽然 `apt` 是一个命令行工具，但只能用于交互方式使用，在脚本中，应使用 `apt-get`。

- **安装包**

```bash
apt install app1          # 安装一个包
apt install app1 app2 ... # 安装多个包
```

- **删除包**

```bash
apt remove app1          # 删除一个包
apt remove app1 app2 ... # 删除多个包
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

## ufw

`ufw` 是 **Ubuntu** 默认的防火墙组件。

```bash
ufw enable            # 启动防火墙
ufw disable           # 关闭防火墙
ufw status            # 查看状态
ufw allow 8388        # 开放端口
ufw deny 8388         # 拒绝端口
ufw delete allow 8388 # 删除规则
```
