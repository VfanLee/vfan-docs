# Ubuntu

## 1. 修改 root 用户密码

```sh
sudo passwd root
```

## 2. 开启 SSH 连接

1. 安装 openssh-server

    ```sh
    apt install -y openssh-server
    ```

2. 允许 root 用户通过 SSH 登录

如果 Ubuntu 是新安装的，你会发现 root 用户无法通过 SSH 登录。这是因为 root 权限太高可以做任何事，安全起见 Ubuntu 下的 SSH 默认不让 root 登录。

1. 进入 `/etc/ssh/sshd_config` 修改 ssh 配置文件。
2. 找到 `PermitRootLogin prohibit-password`，更改为 `PermitRootLogin yes`
3. `systemctl restart ssh` 重启 ssh 服务。
