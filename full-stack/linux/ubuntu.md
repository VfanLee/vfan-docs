# Ubuntu 命令

## apt

`apt` 是 **Ubuntu** 的包管理工具。

**注意**：虽然 `apt` 是一个命令行工具，但只能用于交互方式使用，在脚本中，应使用 `apt-get`。

```sh
apt install app1        # 安装一个包
apt install app1 -y     # 安装一个包，并自动确认后续操作

apt remove app1         # 删除一个包（保留配置文件）
apt remove --purge app1 # 删除一个包（删除配置文件）

apt update -y           # 更新包索引，并自动确认后续操作
apt upgrade             # 更新已安装的包
```

apt 包索引本质上是一个数据库，其中包含文件 `/etc/apt/sources.list` 和 `/etc/apt/sources.list.d` 目录中定义的存储库中的可用包。

apt 的命令操作记录在 `var/log/dpkg.log` 日志文件中。

## ufw

`ufw` 是 **Ubuntu** 默认的防火墙组件。

```sh
# 启动防火墙
ufw enable

# 关闭防火墙
ufw disable

# 查看状态
ufw status

# 开放端口
ufw allow 8388

# 拒绝端口
ufw deny 8388

# 删除规则
ufw delete allow 8388
```
