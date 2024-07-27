# SSH

## 开启 root SSH 连接权限

> - SSH 客户端（通常称为ssh）
> - SSH 服务器（通常称为sshd）

如果 Ubuntu 是新安装的，你会发现 root 用户无法通过 SSH 登录。

这是因为 root 权限太高可以做任何事，安全起见 Ubuntu 下的 SSH 默认不让 root 登录。

1. 修改 `sshd` 配置文件：

    ```sh
    vi /etc/ssh/sshd_config
    ```

2. 找到 `PermitRootLogin` 配置项，将 `prohibit-password` 替换为 `yes`。
3. 重启 sshd 服务：

    ```sh
    systemctl restart sshd
    ```
